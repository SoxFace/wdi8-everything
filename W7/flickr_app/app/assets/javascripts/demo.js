$(document).ready(function(){
  $('#nuke').on('click', function(){
    $('.bros').fadeOut(2000, function(){
      $('bros').remove();
    });
  });
});