var app = angular.module('effects.home', ['ngFx']);

app.directive('videoWebm', function(){
  return {
    template:
    '<video class="video-container" width="100%" height="100%" loop muted preload="none">' +
    '<source src="{{videoURL}}" type=\'video/webm; codecs="vp8, vorbis"\' />' +
    '</video>',
    restrict: "E",
    scope: { 
      filename: '=',
      playOnPage: '=',
      currentPage: '='
    },
    replace: true,
    link: function(scope, el, atts){
      scope.videoURL = 'assets/video/' + scope.filename;

      var video = el.get(0);
      scope.$watch('currentPage.id', function(currentPage){
        console.log('currentPage:', currentPage);
        console.log('scope.playOnPage:', scope.playOnPage);
        if(currentPage === scope.playOnPage.id || currentPage === 'all'){
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



app.filter('onlyPage', function(){
  return function(input, currentPage){
    console.log('filter onlypage', 'currentPage', currentPage);
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
    $scope.page.id = page;
  };

  // $scope.changePage($scope.pages[0].id);
  $scope.page = {id: $scope.pages[0].id};
  $scope.loaded = true;
});


