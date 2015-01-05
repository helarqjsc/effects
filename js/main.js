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
          video.play();
          // console.log(currentPage, scope.playOnPage);
          console.log('start', el.find('source').attr('src'));

        }else{ 
          console.log(video.playing);
          if(video.playing){
            video.stop();
            console.log('stop', el.find('source').attr('src'));
          }
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


