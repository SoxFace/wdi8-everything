var app = app || {};

var TodoList = Backbone.Collection.extend({
  
  model: app.Todo,

  // Save all of the todo items under the `"todos-backbone"` namespace.
  localStorage: new Backbone.LocalStorage('todos-backbone'),

  // Filter down the list of all todo items that are finished.
  completed: function(){
    return this.filter(function( todo ){
      return todo.get('completed');
    });
  },

  // Filter down the list to only todo items that are unfinished.
  remaining: function(){
    // without is an Underscore method
    return this.without.apply( this, this.completed() );
  },

  nextOrder: function(){
    if ( !this.length ) {
      return 1;
    }
    return this.last().get('order') + 1;
  },

  // Sorts Todos
  comparator: function( todo ) {
    return todo.get('order');
  }
});

app.Todos = new TodoList();


