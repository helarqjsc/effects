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
]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });

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
  .state('home', {
    url: '',
    views: {
      main: {
        templateUrl: 'home.html',
        controller: 'HomeCtrl',
      }
    }
  })
  .state('home.category', {
    url: '/:category',
    views: {
      home: {
        template: '',
        resolve: {
          taxonomies: function(Taxonomy){
            return Taxonomy.resolve();
          },
          videos: function(Video){
            return Video.resolve();
          }
        },
        controller: function($scope, $location, $stateParams, Category){
          if($stateParams.category === ''){
            $location.path('/all');
            return;
          }
          var scope = $scope.$parent;
          var cat = Category.findBySlug($stateParams.category);
          console.log(cat);

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
  .state('admin', {
  	abstract: true,
  	url: '/admin'
  })
  .state('admin.pages', {
    url: '/pages',
    templateUrl: 'pages.html'
  })
  .state('admin.videos', {
    url: '/videos',
    templateUrl: 'videos/index.html'
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
  });

  $urlRouterProvider.otherwise('/');
});

app.controller('MainCtrl', function($scope){
  $scope.loaded = true;
});