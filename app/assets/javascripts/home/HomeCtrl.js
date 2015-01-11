var app = angular.module('effects.home', ['ngFx']);

app.directive('videoWebm', function(){
  return {
    template:
    '<video class="video-container" width="100%" height="100%" loop muted preload="none">' +
    '<source src="{{videoURL}}" type=\'video/webm; codecs="vp8, vorbis"\' />' +
    '</video>',
    restrict: "E",
    scope: { 
      filename: '='
    },
    replace: true,
    link: function(scope, el, atts){
      scope.videoURL = 'assets/video/' + scope.filename;

      var video = el.get(0);
      if(video.paused){
        video.play();
      }
    }
  };
});

app.filter('onlyPage', function(){
  return function(input, currentPage){
    // console.log('filter onlypage', 'currentPage', currentPage);
    return input.filter(function(val){
      return (val.page_id === currentPage.id || currentPage.id === 'all');
    });
  };
});

app.controller('MainCtrl', function($scope, $preload) {
  // $scope.data = data;
  $scope.pages = $preload.pages;
  $scope.videos = $preload.videos;

  $scope.changePage = function(page) {
    if($scope.page.id === page) return;
    $('.block').animate({opacity: 0}, 500, function(){
      $scope.page.id = page;
      $scope.$apply();
      $(this).animate({opacity: 1}, 500);
    });
  };

  // $scope.changePage($scope.pages[0].id);
  $scope.page = {id: $scope.pages[0].id};
  $scope.loaded = true;
});


