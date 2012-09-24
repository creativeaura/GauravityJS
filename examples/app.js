/*global $, window, App, Gauravity,_ */
/*jslint browser:true, devel:true */


(function () {
  "use strict";

  Gauravity.define('App.TodoModel', {
    extend: 'Gauravity.Model',
    properties: {
      id: '',
      title: '',
      completed: false
    },
    isCompleted: function() {
      return this.completed;
    }
  });

  Gauravity.define('App.TodoCollection', {
    extend: 'Gauravity.Collection',
    properties: {
      model: App.TodoModel
    }
  });

  App.Todos = Gauravity.create(App.TodoCollection);

  /**
   * Adding Interface related Javascript later will be add to Gauravity.View
   */
  // $('#new-todo').on('keypress', function(event) {
  //   if (event.keyCode === 13) {
  //     var m = Gauravity.create(App.TodoModel),
  //       _this = $(this);
  //     m.set('title', _this.val());
  //     m.set('completed', true);
  //     App.Todos.push(m);

  //     var item_template = _.template($('#item-template').html());

  //     $('#todo-list').append("<li>" + item_template(m) +"</li>");

  //     _this.val('').focus();
  //   }
  // });

  Gauravity.define('App.NewTodoView', {
    extend: 'Gauravity.View',
    events: {
      '#new-todo keypress': 'onKeyPress'
    },
    properties: {
      el: 'header',
      className: null,
      tagName: 'header'
    },
    render: function() {
      this.bindEvents();
    },
    onKeyPress: function(event) {
      var todo;
      if (event.keyCode === 13) {
        todo = Gauravity.create(App.TodoModel);
        todo.set('title', $(event.currentTarget).val());
        App.Todos.push(todo);
        $(event.currentTarget).val('');
      }
    }
  });

  Gauravity.define('App.TodoList', {
    extend: 'Gauravity.View',
    events: {
      '#toggle-all click': 'toggleSelect'
    },
    properties: {
      el: 'section#main',
      className: null,
      tagName: 'section'
    },
    render: function() {
      this.bindEvents();
    },
    toggleSelect: function(event) {
      console.log('toggleSelect');
    }
  });

  App.NewTodoView.render();
  App.TodoList.render();
}(window));