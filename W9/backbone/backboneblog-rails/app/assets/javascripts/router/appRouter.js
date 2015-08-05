var app = app || {};

// STEP ONE: ROUTES (like Rails router embedded actions)
// Make single page app navigatable with meaningful URLs
app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'viewPost'
  },
  index: function(){
    var appView = new app.AppView({collection: app.blogPosts}); // add collection to routes, which links to AppView
    appView.render();
  },

  // NEW: Get the comments and the posts
  viewPost: function (id) {
    // .get is similiar to Ruby.find
    var post = app.blogPosts.get(id);
    // console.log(post.toJSON());
    var postView = new app.PostView({model: post});
    postView.render();
  }
});