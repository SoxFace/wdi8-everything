$(document).ready(function() {
  // Kick start the router
  // debugger;
  whisper.router = new whisper.Router();
  Backbone.history.start();

  whisper.secrets = new whisper.Secrets();
  // whisper.secrets.fetch();
});