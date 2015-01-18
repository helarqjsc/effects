var app = angular.module('effects.home', ['ngFx']);

app.value('maxMobileWidth', 768);

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

app.controller('videoFormCtrl', function($scope) {
  $scope.isShowForm = false;  
  $scope.send = { link: "" };    

  $scope.validateForm = function() {  
      return $scope.send.link.length;
  };

  $scope.sendForm = function() {
    if ($scope.validateForm()) {      
      $scope.send.link = "";      
      $scope.isShowForm = false;
    }
  };

  angular.element('body').bind("click", function() {
    $scope.isShowForm = false;
    $scope.$apply();
  });

});

app.controller('MainCtrl', function($scope, $preload, $location, $window, maxMobileWidth) {
  $scope.pages = $preload.pages;
  $scope.currentPage = {id: $scope.pages[0].id};
  $scope.clickedPage = {id: $scope.pages[0].id};  

  $scope.videos = $preload.videos;
  $scope.loaded = true;
  $scope.menuVisible = true;
  
  
  $($window).on('resize', function(){
    $scope.$evalAsync(function(){
      $scope.isDesktop = ($window.innerWidth > maxMobileWidth);
    });
  });
  $($window).resize();

  $scope.changePage = function(page) {
    if($scope.currentPage.id === page) return;   
    $scope.menuVisible = false;
    $scope.clickedPage.id = page;
    $('.block').stop(true).animate({opacity: 0}, 300, function(){
      $scope.currentPage.id = page;
      $scope.$apply();
      $(this).animate({opacity: 1}, 300);
    });
  };

  $scope.changePage($scope.pages[0].id);


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

});


