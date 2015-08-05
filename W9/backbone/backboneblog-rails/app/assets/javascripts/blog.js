// console.log(_, Backbone, jQuery); // test scripts

var app = app || {};

// NEW: REPLACED SEED DATA WITH AJAX REQUEST
// Global collection of all blog posts
app.blogPosts = new app.Posts();

$(document).ready(function () {

  if ($('#main').length === 0) {
    return;
  }


  // Replace ERB tags with {{ Handlebars style }}, prevents conflict
  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  // NEW: MAKES AJAX WORK
  app.blogPosts.fetch().done(function () {

    // NEW: Moved into fetch function to ensure DOM waits for data to load
    // app is an instance, App is a class
    app.appRouter = new app.AppRouter();

    // This kicks off router and makes Back and Forward button work
    Backbone.history.start({pushState: false}); //Modinizr.history
  });

});