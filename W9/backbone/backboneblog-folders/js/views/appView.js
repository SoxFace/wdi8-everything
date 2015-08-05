var app = app || {};

// STEP 1B: ROUTES - Show page rendering on index
// Like Rails views but with event handling stored here too.
// Shows data on page and allows interaction
app.AppView = Backbone.View.extend({
  el: '#main', // define selector this view is associated with
  render: function (){
    // rendering AppView with collection
    var appViewHTML = $('#appView-template').html();
    this.$el.html(appViewHTML);

    this.collection.each(function(post){
      var postListView = new app.PostListView({model: post});
      postListView.render();
    });
  }
});