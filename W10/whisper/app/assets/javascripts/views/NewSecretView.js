var whisper = whisper || {};

whisper.NewSecretView = Backbone.View.extend({
  el: '#new-secret',
  events: {
    'click .go': 'createNewSecret',
    'click .stop': 'stopPolling'
  },
  render: function () {
    var html = $('#newSecretTemplate').html();
    this.$el.html(html);

  },

  createNewSecret: function (event) {
    event.preventDefault();
    var userContent = this.$('textarea').val();
    var secret = new whisper.Secret({content: userContent});
    // Main feature of Backbone. You don't need AJAX request, just save
    
    // DELETED
    secret.save();

    // REPLACED DELETED WITH THESE TWO LINES TO TRIGGER SYNC EVENT
    // whisper.secrets.add(secret);
    // whisper.secrets.sync();
    
    // DELETED
    whisper.secrets.add(secret);

    this.$('textarea').val('');
    
    // DELETED
    // var secretsView = new whisper.SecretsView({collection: whisper.secrets});
    // secretsView.render();
  },

  stopPolling: function (event) {
    event.preventDefault();
    whisper.secrets.stop();
  }
});