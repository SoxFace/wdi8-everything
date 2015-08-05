var initializeMap = function() {
  var $container = $('#map-canvas')[0];

  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644)
  }

  var map = new google.maps.Map($container, mapOptions);
};

$(document).ready(function() {
  initializeMap();
});