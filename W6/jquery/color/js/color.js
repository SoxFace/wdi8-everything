var blue = 0;

$(window).on('mousemove', function(event) {
  console.log(event.pageX, event.pageY);

  var red = Math.round((event.pageX / window.innerWidth) * 255);
  var green = Math.round((event.pageY  / window.innerWidth) * 255);
  // blue = ++blue % 255;

  var pageZ = Math.sqrt(event.pageY * event.pageY + event.pageX * event.pageX)
  var innerZ = Math.sqrt(window.innerWidth * window.innerWidth + window.innerHeight * window.innerHeight)
  var blue = Math.round(pageZ/innerZ * 255);

  var rgb = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  console.log(rgb);

  $('body').css('background-color', rgb);
  $('#color').val(rgb);

});