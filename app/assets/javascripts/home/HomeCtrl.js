var app = angular.module('effects.home', ['effects.data']);

app.directive('videoWebm', function(){
  return {
    template:
    '<video class="video-container" width="100%" height="100%" loop muted preload="none">' +
    '<source src="{{video}}" type=\'video/webm; codecs="vp8, vorbis"\' />' +
    '</video>',
    restrict: "E",
    scope: { 
      video: '=',
      playOnPage: '=',
      currentPage: '='
    },
    replace: true,
    link: function(scope, el, atts){
      scope.video = 'assets/video/' + scope.video;

      var video = el.get(0);
      scope.$watch('currentPage', function(currentPage){
        if(currentPage === scope.playOnPage || currentPage === 'all'){
          if(video.paused){
            video.play();
          }
          // console.log('start', el.find('source').attr('src'));
        }else{ 
          // video.currentTime = 0;
          video.pause();
          // console.log('stop', el.find('source').attr('src'));
        }
      });
    }
  };
});

app.controller('MainCtrl', function($scope, data) {
  // $scope.data = data;
  
  $scope.changePage = function(page) {
    $scope.page = page;
  };
  
  $scope.isPageSelected = function(page){
    return (page === $scope.page || $scope.page === 'all');
  };

  $scope.changePage('hovers');
  $scope.loaded = true;
});


