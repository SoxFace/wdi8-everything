var app = app || {};

// STEP THREE: COLLECTION 
// Fancy way for storing collection of models
// Uses underscore.js for ActiveRecordish methods (.get)
app.Posts = Backbone.Collection.extend({
  model: app.Post
});