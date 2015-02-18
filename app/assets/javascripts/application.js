//= require bower_components/jquery/jquery
//= require bower_components/angular/angular
//= require bower_require
//= require_tree .
//= require angular-rails-templates
//= require_tree ../templates

/* global angular, $ */

var app = angular.module('effects', [
	'ui.router',
  'angularFileUpload',
	'ng-token-auth',
  'templates',
  'effects.preload',
  'effects.home.controllers',
	'effects.home.services',
  'effects.admin.controllers',
  'effects.admin.services',
	'effects.shared.services',
]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });

  var resolve = {
    taxonomies: function(Taxonomy){
      return Taxonomy.resolve();
    },
    videos: function(Video){
      return Video.resolve();
    }
  };

  $stateProvider
  .state('login', {
    url: '/login',
    views: {
      main: {
        controller: 'LoginCtrl',
        templateUrl: 'login.html'
      }
    }
  })
  .state('admin', {
    url: '/admin',
    views: {
      main: {
        controller: 'AdminCtrl',
        templateUrl: 'admin/index.html',
        resolve: resolve
      }
    }
  })
  .state('admin.taxonomies', {
    url: '/taxonomies',
    views: {
      main: {
        controller: 'TaxonomiesCtrl',
        templateUrl: 'admin/partials/taxonomies.html'
      }
    }
  })
  .state('admin.videos', {
    url: '/videos',
    views: {
      main: {
        templateUrl: 'videos/index.html'
      }
    }
  })
  .state('admin.videos.list', {
    url: '/:slug',
    templateUrl: 'videos/list.html'
  })
  .state('admin.options', {
    url: '/options',
    templateUrl: 'options.html'
  })
  .state('admin.contributedLinks', {
    url: '/contributed-links',
    templateUrl: 'contributed.html'
  })
  .state('home', {
    url: '',
    views: {
      main: {
        templateUrl: 'home.html',
        controller: 'HomeCtrl',
        resolve: resolve,
      }
    }
  })
  .state('home.category', {
    url: '/:category',
    views: {
      home: {
        template: '',
        controller: function($scope, $location, $stateParams, Category){
          if($stateParams.category == '') return;
          var cat = Category.findBySlug($stateParams.category);
          var scope = $scope.$parent;
          scope.selectedCategory.clicked_id = cat.id;
          $('.block').stop(true).animate({opacity: 0}, 300, function(){
            scope.selectedCategory.id = cat.id;
            scope.$apply();
            $(this).animate({opacity: 1}, 300);
          });
        }
      }
    }
  })

  $urlRouterProvider.otherwise('/');
});

app.run(function($rootScope, $location){
  $rootScope.$on('auth:login-success', function() {
    $location.path('/admin');
  });

  $rootScope.$on('auth:login-error', function() {
    console.log('app error');
  });

});

app.controller('MainCtrl', function($scope){
  $scope.loaded = true;
});