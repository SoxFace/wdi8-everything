var app = app || {};

app.CommentView = Backbone.View.extend({
  // tagName: 'div' // this is the default in view
  render: function(){
    var commentViewTemplate = $('#commentView-template').html();
    var commentViewHTML = _.template(commentViewTemplate);

    this.$el.html(commentViewHTML(this.model.toJSON()));
    this.$el.appendTo('#comments');
  }
});