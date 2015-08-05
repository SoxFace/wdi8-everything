var whisper = whisper || {};

whisper.AppView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var html = $('#appView').html();
    this.$el.html(html);

    var newSecretView = new whisper.NewSecretView();
    newSecretView.render();
  }
});