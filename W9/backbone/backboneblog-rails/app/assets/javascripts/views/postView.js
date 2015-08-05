var app = app || {};

 // STEP SIX: POST VIEW
  app.PostView = Backbone.View.extend({
    el: '#main',
    events: {
      'click button': 'submitComment'
    },

    render: function () {
      var postViewTemplate = $('#postView-template').html();
      var postViewHTML = _.template(postViewTemplate);
    
      this.$el.html(postViewHTML(this.model.toJSON()));

      // NEW: showing comments
      this.comments = new app.Comments({post_id: this.model.get('id')});
      this.comments.fetch();
    },

    submitComment: function( event ){
      event.preventDefault();
      var author = $('#author').val();
      var content = $('#content').val();

      // Clear form using jQuery
      $('#author', '#content').val('');

      var comment = new app.Comment({
        author: author,
        content: content,
        post_id: this.model.get('id')
      });

      // return the copy of the comment on the server so it has ruby syntac created_at
      var view = this;
      comment.save().done(function (newComment){
        // view.comments.add(newComment); // just add my new comment to the collection
        view.comments.fetch(); // renders all comments in the collection
      });
    }
  });