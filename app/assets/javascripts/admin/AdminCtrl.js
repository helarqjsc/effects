var app = angular.module('effects.admin', ['ui.router', 'angularFileUpload']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });

  $stateProvider
  .state('pages', {
    url: '/pages',
    views:{
      main:{ templateUrl: 'pages.html' }
    }
  })
  .state('videos', {
    url: '/videos',
    views:{
      main:{ templateUrl: 'videos/index.html' }
    }
  })
  .state('videos.list', {
    url: '/:slug',
    views:{
      'main@':{ templateUrl: 'videos/list.html' }
    }
  })
  .state('options', {
    url: '/options',
    views:{
      main:{ templateUrl: 'options.html' }
    }
  });

  $urlRouterProvider.otherwise('/pages');
});

app.directive('editable', function($timeout){
  return {
    scope: { value: '=' },
    template: '<div class="editable" ng-show="!edit" ng-click="changeMode(true)">{{ value }}</div>'+
              '<input ng-show="edit" ng-blur="changeMode(false)" type="text" ng-model="value">',
    link: function(scope, element, attrs){
      // console.log('scope.value', scope.value);
      scope.changeMode = function(edit){
        if(scope.value === null || scope.value.trim() === ''){
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

app.factory('data', function($preload){
  var pages = $preload.pages;
  var videos = $preload.videos;

  return {
    pages: pages,
    videos: videos,
    findPageBySlug: function(slug){
      return pages.filter(function(val){
        return val.slug === slug;
      })[0];
    }
  };
});

app.filter('onlyPage', function(){
  return function(input, page){
    return input.filter(function(val){
      return (val.page_id === page.id || page.id === 'all');
    });
  };
});

app.controller('AdminCtrl', function($scope, data) {
  $scope.pages = data.pages;
  $scope.videos = data.videos;
});

app.controller('PagesCtrl', function($scope, $http) {
  $scope.pagesToDelete = [];


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

app.controller('VideosSelectPageCtrl', function($scope, $state) {
  $scope.goToPage = function(page){
    $state.go('videos.list', {slug: page.slug});
  };
});

app.controller('VideosCtrl', function($scope, $stateParams, $http, $upload, data) {
  $scope.currentPage = data.findPageBySlug($stateParams.slug);
  // console.log($scope.pageSlug);
  $scope.fileSelected = function($files, event){
    for (var i = 0; i < $files.length; i++) {
      var file = $files[i];
      $upload.upload({
        url: 'admin/upload_video',
        method: 'POST',
        data: {id: 34434},
        file: file,
        fileFormDataName: 'video[file]'
      }).then(function(response){
        $scope.videos = response.data;
      });
    }

  };
  $scope.save = function(){
    var data = {
      update: $scope.videos
    };
    $http.post('/admin/save_videos', data).then(function(response){
      $scope.videos = response.data;
    });
  };
});