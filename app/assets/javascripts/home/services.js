/* global angular */

var app = angular.module('effects.home.services', []);

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

app.filter('onlyPage', function(){
  return function(input, currentPage){
    return input.filter(function(val){
      return (val.page_id === currentPage.id || currentPage.id === 'all');
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

