var app = app || {};

// STEP FOUR: RENDER POSTS TO THE PAGE
app.PostListView = Backbone.View.extend({
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
  showPost: function () {
    // console.log('showing posts', this.model.get('id'));
    app.appRouter.navigate('posts/' + this.model.get('id'), true);
  }
});