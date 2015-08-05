var currentPage = 1;
var endOfImages = false;


var searchFlickr = function () {
  if (endOfImages === true) {
    return; // Abort!
  }

  var query = $('#query').val();

  // FLICKR API
  var flickrUrl = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrUrl, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: query,
    format: 'json',
    per_page: 80,
    page: currentPage++
  }).done(processImages); // Our processImages callback displays the images on the page.
};

// RUN THROTTLE SEARCH
var throttledSearchFlickr = _.throttle(searchFlickr, 5000);

var processImages = function(result) {

  var photos = result.photos.photo; // Extract just the part of the data we care about.

  // STOP REQUESTING IMAGES IF []
  if (currentPage > result.photos.pages) {
    endOfImages = true;
  }

  _(photos).each(function (photo) {
    // CREATE FLICKR URL
    var url = [
      'https://farm',
      photo.farm,
      '.staticflickr.com/',
      photo.server,
      '/',
      photo.id,
      '_',
      photo.secret,
      '_q.jpg'
    ].join('');

    // APPEND IMAGE TO IMG DIV
    var $img = $('<img>').attr('src', url);
    $img.appendTo('#images');
  });
};

// USER LOCATION IN PAGE
var bottomOfPage = function () {
  return $(document).height() - ($(window).scrollTop() + $(window).height()) < 400;
};

$(document).ready(function () {
  // SEARCH
  $('#search').on('click', searchFlickr);
  $('#query').on('keypress', function (event) {
    // Ignore any keypresses that are not Enter.
    if (event.which !== 13) {
      return;
    }
    searchFlickr();
  });

  // NEW SEARCH, SAME PAGE, RESET PAGE, EMPTY IMAGE
  $('#query').on('change', function () {
    endOfImages = false;
    currentPage = 1;
    $('#images').empty();
  });
  // THROTTLE SEARCH FUNCTION
  $(window).on('scroll', function () {
    if (bottomOfPage()) {
      throttledSearchFlickr();
    }
  });
});
