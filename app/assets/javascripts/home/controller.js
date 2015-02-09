/* global angular */

var app = angular.module('effects.home.controllers', ['effects.home.services']);

app.controller('HomeCtrl', function($scope, $preload, Video, TaxonomyService) {
  $scope.taxonomies = $preload.taxonomies;
  // $scope.videos = $preload.videos;
  $scope.videos = Video.getAll();
  $scope.categories = TaxonomyService.categories;
  $scope.selectedCategory = TaxonomyService.selectedCategory;
  $scope.tags = TaxonomyService.tags;

  $scope.form = {
    display: false,
    url: ''
  };

  $scope.menuVisible = true;
});

app.controller('FormCtrl', function($scope, $http, showNotification) {
  $scope.sendForm = function() {
    // console.log($scope);
    // console.log($scope.URLForm);
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

app.controller('LoginCtrl', function($scope) {
  $scope.loginForm = {};
});


