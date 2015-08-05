/*
Create an array of every link on the page using document.querySelectorAll(cssSelector)
Iterate through the array. In each iteration of the loop:
Find the current href using element.getAttribute(name), and store into a variable
Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
Create an IMG element using document.createElement(tagName)
Set the "src" of the IMG element using element.setAttribute(name, value)
Append the IMG to the link using element.appendChild(element)
*/

/*
var links = document.querySelectorAll('a');

for (var i = 0; i < links.length; i++) {
  var currentLink = links[i];

  // var linkUrl = link.href;
  var linkUrl = currentLink.getAttribute('href');
  var thumbnailUrl = youtube.generateThumbnailUrl(linkUrl);
  
  var img = document.createElement('img');
  img.setAttribute('src', thumbnailUrl);
  
  currentLink.appendChild(img);
};
*/

// Convert to JS above to jQuery

var $links = $('a');

$links.each(function(i, elem){
  var currentLink = $links[i];
  var linkUrl = currentLink.href;
  var thumb = youtube.generateThumbnailUrl(linkUrl);
  $('<img>', {src:thumb}).appendTo(elem);
})

/*
// Joel's solution
var $links = $('a');

$links.each(function (i, elem) {
  var thumb = youtube.generateThumbnailUrl(elem.href);
  $('<img src="' + thumb + '">').appendTo(elem);
});
*/
