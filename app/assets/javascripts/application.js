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
  'templates',
  'effects.preload',
  'effects.home.controllers',
	'effects.home.services',
  'effects.admin.controllers',
	'effects.admin.services',
]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $preloadProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });

  $stateProvider
  .state('home', { 
    url: '',
    views: {
      main: {
        templateUrl: 'home.html'    
      }
    }
  })
  .state('home.category', { 
    url: '/:category',
    views: {
      home: {
        template: '', 
        controller: function($scope, $stateParams, Category){
          Category.findBySlug($stateParams.category).then(function(cat){
            $scope.$parent.currentCategory.clicked_id = cat.id;
            $('.block').stop(true).animate({opacity: 0}, 300, function(){
              $scope.$parent.currentCategory.id = cat.id;
              $scope.$parent.$apply();
              $(this).animate({opacity: 1}, 300);
            });
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