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
      page: '=playOnPage'
    },
    replace: true,
    link: function(scope, el, atts){
      var video = el.get(0);
      scope.$watch('page', function(page){
        if(page == scope.page){
          video.play();
        }else if(video.playing){
          video.stop();
        }
      });
    }
  };
});

app.controller('MainCtrl', function($scope, data) {
  $scope.data = data;
  $scope.page = 0;
  $scope.changePage = function(i) {
    $scope.page = i;
    // $('.block:eq('+i+') video').each(function() {
    //   $(this).get(0).play();
    // });
  };
  $scope.changePage(1);
  $scope.loaded = true;
});


