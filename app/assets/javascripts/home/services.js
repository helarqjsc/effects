/* global angular */

var app = angular.module('effects.home.services', ['ngResource']);

app.directive('videoWebm', function(){
  return {
    template:
    '<video class="video-container" width="100%" height="100%" loop muted preload="none">' +
    '<source src="{{url}}" type=\'video/webm; codecs="vp8, vorbis"\' />' +
    '</video>',
    restrict: "E",
    scope: { 
      url: '='
    },
    replace: true,
    link: function(scope, el, atts){
      var video = el.get(0);
      if(video.paused){
        video.play();
      }
    }
  };
});

app.factory('Video', function($resource){
  return $resource('/api/video/:id');
});

app.factory('Taxonomy', function($resource){
  var Taxonomy = $resource('/api/taxonomy/:id', {id: '@id'});
  var taxonomies = Taxonomy.query();

  Taxonomy = angular.extend(Taxonomy.prototype, {
    resolve: function(){
      return taxonomies.$promise;
    },
    findAllByType: function(taxonomy_type){
      return taxonomies.filter(function(tax){
        return (tax.taxonomy_type === taxonomy_type);
      });      
    },
    // delete: function(id){
    //   var taxonomies = [];
    //   return taxonomies.then(function(taxs){
    //     taxonomies = taxs;
    //     return Taxonomy.findById_(id);
    //   }).then(function(tax){
    //     console.log(taxonomies);
    //     taxonomies.splice(taxonomies.indexOf(tax), 1);
    //     console.log(taxonomies);
    //   });
    // },
    //protected methods 
    _findById: function(id){
      return taxonomies.filter(function(tax){
        return tax.id === id;
      })[0];
    }
  });

  return Taxonomy;
});

app.factory('Category', function(Taxonomy){  
  var categories = Taxonomy.findAllByType('category');
  var Category = angular.extend({}, Taxonomy, {
    findBySlug: function(slug){
      return categories.filter(function(cat){
        return (cat.slug === slug);
      })[0];    
    },
    getAll: function(){
      return categories;
    }
  });
  return Category;
});


app.factory('Tag', function(Taxonomy){  
  var tags = Taxonomy.findAllByType('tag');
  var Tag = angular.extend({}, Taxonomy, {
    findBySlug: function(slug){
      return tags.filter(function(tag){
        return (tag.slug === slug);
      })[0];    
    },
    getAll: function(){
      return tags;
    }
  });
  return Tag;
});


app.factory('showNotification', function() {
  return function(text, type) {          
      var n = noty({
          layout: 'topLeft',
          theme: 'relax',
          text: text,
          type: type,
          timeout     : 3000,
          closeWith   : ['click'],
          animation: {
                open: 'animated flipInX', // Animate.css class names
                close: 'animated flipOutX', // Animate.css class names
                easing: 'swing', // unavailable - no need
                speed: 500 // unavailable - no need
             }          
      });  
    }  
});


app.filter('onlyCategory', function(){
  return function(input, currentCategory){
    return input.filter(function(x){
      // console.log(currentCategory);
      // console.log(x.categories);

      return (x.categories.length > 0 && (x.categories[0].id === currentCategory.id || currentCategory.id === 'all'));
    });
  };
});

app.filter('filterTags', function(){
  return function(input, tags){    
    return input.filter(function(video){
      return tags.filter(function(tag){
        return (tag.check && video.tags.indexOf(tag.id));
      }).length;
    });
  };
});


