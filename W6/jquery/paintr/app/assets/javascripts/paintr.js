$(document).ready(function () {

  var addPixel = function () {
    var $pixel = $('<div/>').addClass('pixel');
    $pixel.appendTo('#canvas');
  };

  var PIXEL_COUNT = 1638;
  for (var i = 0; i < PIXEL_COUNT; i++) {
    addPixel();
  };

  $('#canvas').on('mouseover', '.pixel', function (event){
    var currentColor = $('.selected').css('background-color');

    if(event.ctrlKey === true) {
    $(this).css('background-color', currentColor);
    }
  });

  var addColor = function () {
    var color = $('#color').val();

    var $box = $('<div/>').addClass('box'); // chaining
    $box.css('background-color', color);

    // $('colors').prepend($box); same as below
    $box.prependTo('#colors');
    
    // give focus to color once selected
    $('color').focus();
  };

   $('#add_color').on('click', addColor);

   var resetPalette = function (){
    $('#colors').empty();
    $('.selected').css('background-color', 'white');
   };

   $('#clear_palette').on('click', resetPalette);

    var setColor = function (){
      var color = $(this).css('background-color');
      $('.selected').css('background-color', color);
    };

    // Event delegation
    $('#colors').on('click', '.box', setColor);

    // Create background image

  var addBackground = function () {
    var bg = $('#bg').val();
    $('#canvas').css('background-image', 'url(' + bg + ')');
  }

  $('#add_bg').on('click', addBackground);

  var hideBackground = function () {
    $('#canvas').css('background-image', "url()");
  }

  $('#hide_bg').on('click', hideBackground);
});

