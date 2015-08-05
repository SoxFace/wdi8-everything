var bros = [
{
  name: 'Groucho',
  instrument: 'guitar',
  funFact: 'Loves to dance'
},

{
  name: 'Harpo',
  instrument: 'harp',
  funFact: 'Loves to drink'
},

{
  name: 'Chico',
  instrument: 'piano',
  funFact: 'Loves to swim'
}
];

// var broHTML = function(brother) {
//   var $p = $('<p/>');
//   var $name = $('<b>').text(brother.name);
//   $p.html(' plays ' + brother.instrument);
//   $p.prepend($name);
//   return $p;
// }

  $(document).ready(function() {
    
    var brosHTML = Handlebars.compile( $('#brosTemplate').html() );

    for (var i = 0; i < bros.length; i++) {
      var brother = bros[i];
      var $p = brosHTML(brother);
      $('#details').append($p);
    };
  });