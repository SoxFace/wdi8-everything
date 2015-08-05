// console.log(_, Backbone, jQuery); // test scripts

// STEP ONE: ROUTES (like Rails router embedded actions)
// Make single page app navigatable with meaningful URLs
var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'viewPost'
  },
  index: function(){
    var appView = new AppView({collection: blogPosts}); // add collection to routes, which links to AppView
    appView.render();
  },

  viewPost: function (slug) {
    // .get is similiar to Ruby.find
    var post = blogPosts.get(slug);
    // console.log(post.toJSON());
    var postView = new PostView({model: post});
    postView.render();
  }
});

// STEP TWO: MODEL (like models in Rails)
// 
var Post = Backbone.Model.extend({
  // overriding the default 'id' using idAttribute
  idAttribute: 'slug',
  defaults: {
    title: 'New Post',
    content: 'New Post Content'
  }
});

// STEP THREE: COLLECTION 
// Fancy way for storing collection of models
// Uses underscore.js for ActiveRecordish methods (.get)
var Posts = Backbone.Collection.extend({
  model: Post
});

// seed data - later we'll retrieve this from server via AJAX
var blogPosts = new Posts([
  new Post({id: 1, slug: 'groucho', title: 'Post 1', content: 'Content the first'}),
  new Post({id: 2, slug: 'harpo', title: 'Post 2', content: 'Content the second'}),
  new Post({id: 3, slug: 'post-about-hotdogs', title: 'Post 3', content: 'Content the third'}),
  new Post({id: 4, slug: 'chico', title: 'Post 4', content: 'Content the fourth'})
]);

// STEP 1B: ROUTES - Show page rendering on index
// Like Rails views but with event handling stored here too.
// Shows data on page and allows interaction
var AppView = Backbone.View.extend({
  el: '#main', // define selector this view is associated with
  render: function (){
    // rendering AppView with collection
    var appViewHTML = $('#appView-template').html();
    this.$el.html(appViewHTML);

    this.collection.each(function(post){
      var postListView = new PostListView({model: post});
      postListView.render();
    });
  }
});

// STEP FOUR: RENDER POSTS TO THE PAGE
var PostListView = Backbone.View.extend({
  tagName: 'li', // new PostListView will use to create new <li>
  // Add events all in one place
  events: {
    'click': 'showPost'
  },
  render: function (){
    // console.log('rendering PostListView', this.model);
    // Fetch and compile the template
    var postListViewTemplate = $('#postListView-template').html();
    var postListViewHTML = _.template(postListViewTemplate);

    // Set the content of this view's element to be the template for this model
    this.$el.html(postListViewHTML(this.model.toJSON()));

    // Append this views element to the #posts ul on the page
    $('#posts').append(this.$el);
  },
  showPost: function (){
    // console.log('showing posts', this.model.get('id'));
    appRouter.navigate('posts/' + this.model.get('slug'), true);
  }
});

  // Made global - moved it out of Doc Ready for showPost
  // app is an instance, App is a class
  var appRouter = new AppRouter();

  // STEP SIX: POST VIEW
  var PostView = Backbone.View.extend({
    el: '#main',
    render: function () {
      var postViewTemplate = $('#postView-template').html();
      var postViewHTML = _.template(postViewTemplate);
    
      this.$el.html(postViewHTML(this.model.toJSON()));
    }
  });

$(document).ready(function() {
  // This kicks off router and makes Back and Forward button work
  Backbone.history.start();
});