var app = angular.module('effects.home', []);

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

app.controller('MainCtrl', function($scope, $preload, $location) {
  $scope.pages = $preload.pages;
  $scope.page = {id: $scope.pages[0].id};

  $scope.videos = $preload.videos;
  
  //"routing"
  $scope.$watch(function(){
    return $location.path();
  }, 
  function(path){
    path = path.replace(/^\//,''); //removing prefix slash
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
    if($scope.page.id === page) return;
    $('.block').animate({opacity: 0}, 500, function(){
      $scope.page.id = page;
      $scope.$apply();
      // console.log($scope.page);
      $(this).animate({opacity: 1}, 500);
    });
  };

  $scope.changePage($scope.pages[0].id);
  $scope.loaded = true;
});



var app = angular.module('effects.admin', ['ui.router']);

app.config(function ($stateProvider) {
  $stateProvider
  .state('home', {
    url: '/home/',
    views:{
      'main':{
        templateUrl: 'home.html'
      }
    }
  })
  .state('pages', {
    url: '/pages/',
    views:{
      'main':{
        templateUrl: 'pages.html'
      }
    }
  })
  .state('videos', {
    url: '/videos/',
    views:{
      'main':{
        templateUrl: 'videos.html'
      }
    }
  })
  .state('options', {
    url: '/options/',
    views:{
      'main':{
        templateUrl: 'options.html'
      }
    }
  });
});

app.directive('editable', function($timeout){
  return {
    scope: { value: '=' },
    template: '<div ng-show="!edit" ng-click="changeMode(true)">{{ value }}</div>'+
              '<input ng-show="edit" ng-blur="changeMode(false)" type="text" ng-model="value">',
    link: function(scope, element, attrs){
      console.log('scope.value', scope.value);
      scope.changeMode = function(edit){
        if(scope.value.trim() === ''){
          scope.edit = true;
          return;
        }
        scope.edit = edit;
      };
      scope.changeMode(false);
      scope.$watch('edit', function(edit){
        if(edit){
          $timeout(function(){
            var el = element.find('input').get(0);
            el.selectionStart = el.value.length;
            el.selectionEnd = el.value.length;
            element.find('input').focus();
          });
        }
      });
    }
  };
});

app.controller('AdminCtrl', function($scope, $state) {
  // $state.go('pages');
});

app.controller('PagesCtrl', function($scope, $preload, $http) {
  $scope.pages = $preload.pages;
  $scope.pagesToDelete = [];

  $scope.videos = $preload.videos;

  $scope.add = function(){
    $scope.pages.push({title: '', slug: ''});
  };

  $scope.delete = function(index){
    $scope.pagesToDelete.push($scope.pages[index]);
    $scope.pages.splice(index, 1);
  };

  $scope.save = function(){
    var data = {
      update: $scope.pages,
      delete: $scope.pagesToDelete
    };
    $http.post('/admin/save_pages', data).then(function(response){
      $scope.pages = response.data;
      $scope.pagesToDelete = [];
    });
  };
});

app.controller('VideosCtrl', function($scope, $preload) {
  $scope.videos = $preload.videos;
});