// Creates a namespace for our app
var app = app || {};

// STEP TWO: MODEL (like models in Rails)
app.Post = Backbone.Model.extend({
  // overriding the default 'id' using idAttribute
  idAttribute: 'slug',
  defaults: {
    title: 'New Post',
    content: 'New Post Content'
  }
});