var app = app || {};

app.Comments = Backbone.Collection.extend({
    url: function (){
    return '/posts/' + this.postID + '/comments';
  },
  model: app.Comment,
  // HARDCODED. AWAITING DYNAMIC SOLUTION
  initialize: function(options){
    this.postID = options.post_id;
    // Adding comments to the page
    this.on('add', function ( comment ){
      // console.log('new comment added', comment);
      var commentView = new app.CommentView({model: comment});
      commentView.render();
    });
  }
});