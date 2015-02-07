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
  var Video = $resource('/api/video/:id', {id: '@id'});
  var videos = Video.query();

  Video = angular.extend(Video.prototype, {
    resolve: function(){
      return videos.$promise;
    },
    getAll: function(){
      return videos;
    }
  });

  return Video;
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

//videos in taxonomies
app.filter('taxonomies', function($filter){
  return function(videos, category, tags){
    var videos = $filter('category')(videos, category);
    videos = $filter('tags')(videos, tags);
    return videos;
  };
});

//videos in category
app.filter('category', function(){
  return function(videos, category){
    return videos.filter(function(vid){
      return (vid.categories.length > 0 && 
              (vid.categories[0].id === category.id || category.id === 'all'));
    });
  };
});

//videos with tags
app.filter('tags', function(){
  return function(videos, tags){    
    return videos.filter(function(video){
      var selected_tags_ids = tags.filter(function(tag){
        return tag.checked;
      }).map(function(tag){
        return tag.id;
      });
      return video.tags.filter(function(tag){
        return (selected_tags_ids.indexOf(tag.id) >= 0);
      }).length;
    });
  };
});


