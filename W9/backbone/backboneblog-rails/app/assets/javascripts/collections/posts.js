var app = app || {};

// STEP THREE: COLLECTION 
// Fancy way for storing collection of models
// Uses underscore.js for ActiveRecordish methods (.get)
app.Posts = Backbone.Collection.extend({
  url: '/posts', // so it knows where to make the AJAX request
  model: app.Post
});