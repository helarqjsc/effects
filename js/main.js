var app = angular.module('effects', ['effects.data']);

app.directive('videoWebm', function(){
  return {
    template:
    '<video class="video-container" width="100%" height="100%" loop muted preload="none">' +
    '<source src="{{\'video/\' + video}}" type=\'video/webm; codecs="vp8, vorbis"\' />' +
    '</video>',
    restrict: "E",
    scope: { 
      video: '=',
      playOnPage: '=',
      currentPage: '='
    },
    replace: true,
    link: function(scope, el, atts){
      var video = el.get(0);
      scope.$watch('currentPage', function(currentPage){
        if(currentPage === scope.playOnPage){
          if(video.pause){
            video.play();
          }
          console.log('start', el.find('source').attr('src'));
        }else{ 
          video.pause();
          video.currentTime = 0;
          console.log('stop', el.find('source').attr('src'));
        }
      });
    }
  };
});

app.controller('MainCtrl', function($scope, data) {
  $scope.data = data;
  
  $scope.changePage = function(page) {
    $scope.page = page;
  };
  
  $scope.isPageSelected = function(page){
    // console.log(page, $scope.page);
    return (page === $scope.page || page === 'all');
  }

  $scope.changePage('hovers');
  $scope.loaded = true;
});


