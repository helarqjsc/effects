/* global angular, noty */

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


//It is used on home page to set default values and keep the state when switching pages
app.factory('TaxonomyService', function(Taxonomy, Category, Tag, $location){
  $location.path('/all');
  var service = {};
  service.categories = Category.getAll();
  service.categories.unshift({id:'all', name: 'All', slug: 'all'});
  service.selectedCategory = {
    id: 0,
    clicked_id: 0
  };

  service.tags = Tag.getAll();
  angular.forEach(service.tags, function(tag){
    tag.checked = true;
  });
  return service;
});

app.factory('showNotification', function() {
  return function(text, type) {          
      noty({
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
    };  
});

//videos in taxonomies
app.filter('taxonomies', function($filter){
  return function(videos, category, tags){
    videos = $filter('category')(videos, category);
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


