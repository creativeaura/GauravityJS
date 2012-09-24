/*global $, window, CanvasLoader, jQuery, alert, log, G*/
/*jslint browser:true, devel:true, evil: true, regexp: true */

(function (exports) {
  "use strict";
  G.define('G.View',{
    initilize: function(){
       console.log("-> G.View");
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
      
    },
    ready: function() {
      this.$el = $(this.el);
    },
    bindEvents: function() {
      var fn, s, ev;
      for(var e in this.events) {
        fn = this.events[e];
        s = e.split(/\s+/);
        ev = s[s.length -1];
        s.pop();
        s = s.join(' ');
        if(typeof this[fn] === 'function') {
          this.delegateEvent(s, e, ev, fn);
        }
      }
    },
    delegateEvent: function(s, e, ev, fn) {
      console.log(s, e, ev, fn);
      var self = this;
      this.$el.delegate(s, ev, function(evt_obj) {
        self[fn].apply(this,arguments);
      });
    }
  });


  G.define('G.Collection',{
    initilize: function(){
       console.log("-> G.Collection");
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
      this.length = this.data.length;
    },
    pop: function() {
      
    },
    reset: function() {
      this.data = [];
    },
    fetch: function() {
      
    },
    getCount: function() {
      return this.data.length;
    }
  });

  G.define('G.Model',{
    initilize: function(){
       console.log("-> G.Model");
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
