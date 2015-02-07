/* global angular */

var app = angular.module('effects.home.controllers', ['effects.home.services']);

app.controller('HomeCtrl', function($scope, $preload, Taxonomy, Video, Category, Tag) {
  $scope.taxonomies = $preload.taxonomies;
  // $scope.videos = $preload.videos;
  $scope.videos = Video.getAll();
  $scope.categories = Category.getAll();
  $scope.tags = Tag.getAll();

  angular.forEach($scope.tags, function(tag){
    tag.checked = true;
  });

  $scope.selectedCategory = {
    id: 0,
    clicked_id: 0
  };

  $scope.form = {
    display: false,
    url: ''
  };

  $scope.loaded = true;
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



