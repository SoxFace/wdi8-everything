// Model.extend stores one animal
var Animal = Backbone.Model.extend({

  // add JSON database
  urlRoot: '/animals', 

  // NEW Backbone Forms
  schema: {
    type: 'Text',
    ecosystem: 'Text',
    stripes: 'Number'
  },

  defaults: {
    type: 'animal',
    ecosystem: '',
    stripes: 0
  },

  initialize: function () {
    console.log('I am a new animal');

    this.on('change:type', function (model) {
      var type = model.get('type');
      console.log('I am now a ' + type);
    });
  }
});

// Collection.extend stores a collection of same type
var Zoo = Backbone.Collection.extend({
  url: '/animals',
  model: Animal
})

var animal1 = new Animal({type: 'frog', ecosystem: 'pond', stripes: 30});
var animal2 = new Animal({type: 'dog', ecosystem: 'house'});
var animal3 = new Animal({type: 'bat', ecosystem: 'cave'});

var gaZoo = new Zoo([animal1, animal2, animal3]);

// View.extend 
var ZooView = Backbone.View.extend({
  el: '#main',
  initialize: function () {
    console.log('ZooView init');
  },
  events: {
    'click p': 'animalClick'
  },
  render: function () {
    // $ selects jQuery version of el
    // console.log('Assoc. collection', this.collection)
    var view = this;
    var animalTemplate = $('#animal-template').html();
    var animalHTML = _.template(animalTemplate);
    this.collection.each(function (animal) {
      view.$el.append( animalHTML(animal.toJSON()) );
    })
  },
  animalClick: function(){
    console.log('You clicked on an animal');
  }
});

// ROUTES AKA MV(*)
var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'animals/:id': 'viewAnimal'
  },
  index: function(){
    console.log('you found the homepage')

    var zooView = new ZooView({collection: gaZoo});
    zooView.render();
  },
  viewAnimal: function(id){
    $('#main').empty();
    console.log('you are viewing an animal', id);
  }
});

// ENSURES VIEW LOADS WHEN PAGE IS READY
$(document).ready(function() {
  var router = new AppRouter();
  Backbone.history.start();

});
