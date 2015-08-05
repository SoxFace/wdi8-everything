// console.log(_, Backbone, jQuery); // test scripts

var app = app || {};

// NEW: REPLACE THIS WITH AJAX
// seed data - later we'll retrieve this from server via AJAX
app.blogPosts = new app.Posts([
  new app.Post({id: 1, slug: 'groucho', title: 'Post 1', content: 'Content the first'}),
  new app.Post({id: 2, slug: 'harpo', title: 'Post 2', content: 'Content the second'}),
  new app.Post({id: 3, slug: 'post-about-hotdogs', title: 'Post 3', content: 'Content the third'}),
  new app.Post({id: 4, slug: 'chico', title: 'Post 4', content: 'Content the fourth'})
]);

$(document).ready(function() {
  // Made global - moved it out of Doc Ready for showPost
  // app is an instance, App is a class
  app.appRouter = new app.AppRouter();

  // This kicks off router and makes Back and Forward button work
  Backbone.history.start();
});