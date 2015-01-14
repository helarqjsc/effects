var app = angular.module('effects.admin', ['ui.router']);

app.config(function ($stateProvider) {
  $stateProvider
  .state('home', {
    url: '/home/',
    views:{
      main:{ templateUrl: 'home.html' }
    }
  })
  .state('pages', {
    url: '/pages/',
    views:{
      main:{ templateUrl: 'pages.html' }
    }
  })
  .state('videos', {
    url: '/videos/',
    views:{
      main:{ templateUrl: 'videos.html' }
    }
  })
  .state('options', {
    url: '/options/',
    views:{
      main:{ templateUrl: 'options.html' }
    }
  });
});

app.directive('editable', function($timeout){
  return {
    scope: { value: '=' },
    template: '<div class="editable" ng-show="!edit" ng-click="changeMode(true)">{{ value }}</div>'+
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

app.controller('VideosCtrl', function($scope, $preload, $http) {
  $scope.videos = $preload.videos;
  $scope.pages = $preload.pages;

  $scope.save = function(){
    var data = {
      update: $scope.videos
    };
    $http.post('/admin/save_videos', data).then(function(response){
      $scope.videos = response.data;
    });
  };
});