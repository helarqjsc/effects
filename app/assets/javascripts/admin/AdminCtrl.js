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
    template: '<div ng-show="!edit" ng-click="edit = true">{{ value }}</div>'+
              '<input ng-show="edit" ng-blur="edit = false" type="text" ng-model="value">',
    link: function(scope, element, attrs){
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

// app.factory('')
app.controller('AdminCtrl', function($scope, $preload, $state, $http) {
  $scope.pages = $preload.pages;

  // $state.go('home');
  $scope.save = function(obj){
    $http.post('/admin/save/' + obj, $scope[obj]);
  };
});


