var app = angular.module('effects');

app.config(function ($stateProvider, $locationProvider) {
  $stateProvider
  .state('home', {
    views:{
      'main':{
        templateUrl: 'home.html'
      }
    }
  })
  .state('pages', {
    views:{
      'main':{
        templateUrl: 'pages.html'
      }
    }
  })
  .state('videos', {
    views:{
      'main':{
        templateUrl: 'videos.html'
      }
    }
  })
  .state('options', {
    views:{
      'main':{
        templateUrl: 'options.html'
      }
    }
  });

    // $locationProvider.html5Mode(true);
});

app.controller('AdminCtrl', function($scope, $state) {
  
  $scope.changePage = function(page) {
    $scope.page = page;
  };
  
  $scope.isPageSelected = function(page){
    return (page === $scope.page || $scope.page === 'all');
  };

  $scope.changePage('hovers');
  $scope.loaded = true;
  // $state.go('home');
});


