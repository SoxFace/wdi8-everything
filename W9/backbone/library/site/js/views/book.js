var app = app || {};

app.BookView = Backbone.View.extend({

  // Wired up the delete button
  events: {
    'click .delete': 'deleteBook'
  },

  deleteBook: function(){
    this.model.destroy();
    this.remove();
  },

  tagName: 'div',
  className: 'bookContainer',
  template: _.template( $('#bookTemplate' ).html() ),

  render: function(){
    this.$el.html( this.template (this.model.attributes));

    return this;
  }
});