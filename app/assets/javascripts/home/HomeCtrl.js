var app = angular.module('effects.home', []);

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
    // console.log('filter onlypage', 'currentPage', currentPage);
    return input.filter(function(val){
      return (val.page_id === currentPage.id || currentPage.id === 'all');
    });
  };
});

app.controller('MainCtrl', function($scope, $preload, $location) {
  $scope.pages = $preload.pages;
  $scope.page = {id: $scope.pages[0].id};
  $scope.clickedPage = $scope.page;
  $scope.videos = $preload.videos;
  
  //"routing"
  $scope.$watch(function(){
    return $location.path();
  }, 
  function(path){
    path = path.replace(/^\//,''); //removing prefix slash
    if(path === ''){
      $location.path('/'+$scope.pages[0].slug);
      return;
    }
    if(path === 'all'){
      $scope.changePage('all');
      return;
    }
    var page = $scope.pages.filter(function(i){
      return (i.slug === path);
    })[0];  
    $scope.changePage(page.id);
  });


  $scope.changePage = function(page) {
    if($scope.clickedPage.id === page) return;    
    $scope.clickedPage.id = page;
    $('.block').stop().animate({opacity: 0}, 500, function(){
      $scope.page.id = page;
      $scope.$apply();
      // console.log($scope.page);
      $(this).animate({opacity: 1}, 500);
    });
  };

  $scope.changePage($scope.pages[0].id);
  $scope.loaded = true;
});


