/* global angular */

var app = angular.module('effects.home.controllers', ['effects.home.services']);

app.controller('HomeCtrl', function($scope, $preload, Taxonomy, Video, Category) {
  $scope.taxonomies = $preload.taxonomies;
  $scope.videos = $preload.videos;
  Category.getAll().then(function(categories){
    $scope.categories = categories;
  });
  
  // var test = new Taxonomy();
  // test.name = 'lel';
  // test.taxonomy_type = 'category';
  // test.$save();

  Taxonomy.findById_(4).then(function(tax){
    console.log(tax);
    tax.$remove();
  });

  $scope.tags = $scope.taxonomies.filter(function(tax){
    return tax.taxonomy_type === 'tag';
  });

  // $scope.videos = Video.query(function(){
  //   console.log($scope.videos);  
  // });
  

  $scope.form = {
    display: false,
    url: ''
  };
  $scope.currentCategory = {
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



