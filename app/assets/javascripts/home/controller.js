/* global angular */

var app = angular.module('effects.home.controllers', ['effects.home.services']);

app.controller('HomeCtrl', function($scope, $preload) {
  $scope.pages = $preload.pages;
  $scope.videos = $preload.videos;

  $scope.form = {
    display: false,
    url: ''
  };
  $scope.currentPage = {
    id: 0,
    clicked_id: 0
  };
  $scope.loaded = true;
  $scope.menuVisible = true;
  
  $scope.tags = [
    {
      id: "angular",
      check: true
    },
    {
      id: "css",
      check: true
    }
  ];

});

app.controller('FormCtrl', function($scope, $http, showNotification) {
  $scope.sendForm = function() {
    console.log($scope);
    console.log($scope.URLForm);
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


