/* global angular, $ */

var app = angular.module('effects', [
	'ui.router', 
	'angularFileUpload',
	'effects.home.controllers',
	'effects.admin.controllers',
]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $preloadProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });

  $stateProvider
  .state('home', { 
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

  $urlRouterProvider.otherwise('/all');
});