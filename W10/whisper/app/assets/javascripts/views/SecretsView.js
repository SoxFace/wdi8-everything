var whisper = whisper || {};

whisper.SecretsView = Backbone.View.extend({
  el: '#secrets',
  render: function () {
    var view = this;
    this.$el.empty();
    this.collection.each(function (secret) {
      // console.log('secret', secret);
      // .get('content') is similir to .to_s in Ruby
      var $li = $('<li/>').text(secret.get('content'));
      view.$el.prepend($li);
    });
  }
});