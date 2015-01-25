var app = angular.module('effects.home', ['ngFx', 'ui.router']);

app.config(function ($preloadProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });

  $stateProvider.state('category', { 
    url: '/:category',
    template: '', 
    controller: function($scope, $stateParams){
      var page = $preloadProvider.$get().pages.filter(function(page){
        return page.slug === $stateParams.category;
      })[0];
      $scope.$parent.currentPage.clicked_id = page.id;
      $('.block').stop(true).animate({opacity: 0}, 300, function(){
        $scope.$parent.currentPage.id = page.id;
        $scope.$parent.$apply();
        $(this).animate({opacity: 1}, 300);
      });
    }
  });
  $urlRouterProvider.otherwise('/all');
});

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

app.controller('FormCtrl', function($scope, $http, showNotification) {
  $scope.sendForm = function() {
    console.log($scope);
    console.log($scope.URLForm);
    if($scope.validateForm()) {
      var data = {
        url: $scope.form.url
      };
      $http.post('/submit_url', data).then(function(){
        $scope.form.url = "";
        $scope.form.display = false;
        showNotification("Спасибо. Ваша ссылка была отправлена.", "success");
      });
    } 
  };
});


app.controller('MainCtrl', function($scope, $preload, $location, $window) {
  $scope.pages = $preload.pages;
  $scope.videos = $preload.videos;

  $scope.form = {
    display: false,
    url: ''
  };
  $scope.currentPage = {
    id: 0,
    clicked_id: 0
  };
  $scope.loaded = true;
  $scope.menuVisible = true;
  
  $scope.tags = [
    {
      id: "angular",
      check: true
    },
    {
      id: "css",
      check: true
    }
  ];

});


