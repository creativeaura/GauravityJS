/*global $, window, CanvasLoader, jQuery, alert, log, Gauravity*/
/*jslint browser:true, devel:true, evil: true, regexp: true */

/*
 * Gauravity JavaScript Library v 1.0.2
 * http://lab.jassal.me/
 *
 * Copyright 2012, Gaurav Jassal
 *
 * Includes *
 */

(function (exports) {
  "use strict";
  Gauravity.define('Gauravity.View',{
    initilize: function(){
       console.log("-> Gauravity.View");
    },
    properties: {
      el: '',
      $el: '',
      className: '',
      tagName: ''
    },
    events: {

    },
    render: function() {
      
    },
    destroy: function() {
      
    }
  });


  Gauravity.define('Gauravity.Collection',{
    initilize: function(){
       console.log("-> Gauravity.Collection");
    },
    properties: {
      model : {},
      length: 0,
      url: '',
      data: []
    },
    get: function() {

    },
    getByCid: function() {
      
    },
    at: function(i) {
      return this.data[i];
    },
    push: function(o) {
      this.data.push(o);
    },
    pop: function() {
      
    },
    reset: function() {
      this.data = [];
    },
    fetch: function() {
      
    }
  });

  Gauravity.define('Gauravity.Model',{
    initilize: function(){
       console.log("-> Gauravity.Model");
    },
    properties: {
      
    },
    set: function(k,v) {
      this[k] = v;
    },
    get: function() {
      
    },
    has: function() {
      
    },
    fetch: function() {
      
    },
    save: function() {
      
    },
    destroy: function() {
      
    },
    isValid: function() {
      
    },
    hasChanged: function() {
      
    }
  });

}(this));
