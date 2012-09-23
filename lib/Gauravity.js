/*global $, window, CanvasLoader, jQuery, alert, log */
/*jslint browser:true, devel:true, evil: true, regexp: true */

(function (exports) {
  "use strict";
  var G = {},
    root = window,
    Private = {};
  G.string = {};

  G.version = '1.0.1';
  /**
   * Method to parse the namespace string and reterive Class name
   *
   * @private
   * @params {String} namespace
   * @return {String} Classassname
   */
  Private.parseNameSpace = function(namespace) {
    var parts = namespace.split('.'),
      ln = parts.length -1;
    return parts[ln];
  };

  /**
   * Function to add getter and setters for a property.
   *
   * @private
   * @params {String} key
   * @params {Object} context
   */
  Private.createGettersAndSetters = function(key, context) {
    var cls,
      set_method,
      get_method;

    if(key.indexOf('_') === -1 && typeof context[key] !== 'function') {
      cls = G.string.camelize(key);
      set_method = 'set'+ cls;
      if(!context[set_method]) {
        context[set_method] = function(value) {
          context[key] = value;
        };
      }
      get_method = 'get'+ cls;
      if(!context[get_method]) {
        context[get_method] = function() {
          return context[key];
        };
      }
    }
  };

  /**
   * Function to camelize string value.
   *
   * @params {String} word
   * @return {String}
   */

  G.string.camelize = function(word) {
    return word.replace (/(?:^|[\-_])(\w)/g, function (_, c) {
      return c ? c.toUpperCase () : '';
    });
  };

  /**
   * Defines a class or override. A basic class is defined like this:
   *
   *    @example
   *      Gauravity.define('CA.ui.Button',{
   *        config: {
   *          text: "Label"
   *        },
   *        setText: function(label) {
   *          this.text = label;
   *        }
   *      });
   *
   */
  G.define = function(ns,config) {
    console.log('-> [FUNCTION] define(%s)', ns);
    var Klass = function() { this.init.apply(this, arguments); },
      parentObject = G.namespaces(ns, {level: "TOP"}),
      ClassName = Private.parseNameSpace(ns),
      reservedKeywords = ['initilize','extend'],
      configure = config || {}, iKlass, c, prop, p, extendingObject, Subclass;

    Klass.prototype.init = function() {
      console.log('-> [Initilize Class] %s', ClassName);
      if (typeof(configure.initilize) === 'function') {
        configure.initilize();
      }
    };

    Klass.fn = Klass.prototype;
    Klass.fn.parent = Klass;
    //Klass.supr = Klass.__proto__;

    iKlass = new Klass();

    // Add Methods to Object
    for (c in configure) {
      if(typeof(configure[c]) === "function"){
        if (!reservedKeywords.find(c)) {
          iKlass[c] = configure[c];
        }
      }
    }

    // Extending other object properties
    if (configure.extend) {
      extendingObject = ( new Function( 'return ' + configure.extend ) )();
      Subclass = function() { };
      Subclass.prototype = extendingObject.prototype;
      Klass.prototype = new Subclass();

      for (prop in extendingObject) {
        if (extendingObject.hasOwnProperty(prop)) {
          Klass.fn[prop] = extendingObject[prop];
        }
      }
    }

    // Add Propertise to the Object
    for (p in configure.properties) {
      if(typeof(configure.properties[p]) !== 'function'){
        iKlass[p] = configure.properties[p];
      }
    }

    parentObject[ClassName] = iKlass;
    return iKlass;
  };

  /**
   * Creates namespaces to be used for scoping variables and classes so that they are not global.
   * Specifying the last node of a namespace implicitly creates all other nodes. Usage
   *    @exmpale
   *      Gauravity.namespace('CA.ui.Button.CustomButton');
   *      Gauravity.ns('CA.ui.Button.CustomButton');
   *
   * @params {String} namespace
   * @params {Object} options.level = "TOP"

   * To create just the top level namespace. And ignore the main class object
   * @return {Object} class object
   */
  G.namespaces = G.ns = function(namespace,options) {
    console.log('-> [Creating Namespace] ', namespace);
    if (typeof namespace !== 'string') {
      throw new Error("[Gauravity.namespace] Invalid namespace, must be a string");
    }
    var parts = namespace.split('.'),
      parent = exports,
      ln = (options && options.level === "TOP") ? parts.length -1 : parts.length,
      i, klass, leaf = parts[ln];

    for (i = 0; i < ln; i += 1) {
      if (typeof parent[parts[i]] === 'undefined') {
        parent[parts[i]] = {};
      }
      parent = parent[parts[i]];
    }
    if (options && options.level === "TOP") {
      return parent;
    }
    return exports[parts[0]];
  };

  /**
   * This function creates a new instance for the Object and retuns it.
   * @params {Object}
   * @return {Object}
   */
  G.create = function (o) {
    if (o) {
      return Object.create(o);
    }
  };
  exports.Gauravity = exports.G =  G;

}(this));

// Sugar

Array.prototype.find = function(searchStr) {
  'use strict';
  var returnArray = false, i;
  for (i=0; i<this.length; i += 1) {
    if (typeof(searchStr) === 'function') {
      if (searchStr.test(this[i])) {
        if (!returnArray) { returnArray = []; }
        returnArray.push(i);
      }
    } else {
      if (this[i]===searchStr) {
        if (!returnArray) { returnArray = []; }
        returnArray.push(i);
      }
    }
  }
  return returnArray;
};