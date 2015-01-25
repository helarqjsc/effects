/* global angular */

var app = angular.module('effects.admin.controllers', ['effects.admin.services']);

app.controller('AdminCtrl', function($scope, data) {
  $scope.pages = data.pages;
  $scope.videos = data.videos;
  $scope.contributedLinks = data.contributedLinks;
});

app.controller('PagesCtrl', function($scope, $http) {
  $scope.pagesToDelete = [];


  $scope.add = function(){
    $scope.pages.push({title: '', slug: ''});
  };

  $scope.delete = function(index){
    $scope.pagesToDelete.push($scope.pages[index]);
    $scope.pages.splice(index, 1);
  };

  $scope.save = function(){
    var data = {
      update: $scope.pages,
      delete: $scope.pagesToDelete
    };
    $http.post('/admin/save_pages', data).then(function(response){
      $scope.pages = response.data;
      $scope.pagesToDelete = [];
    });
  };
});

app.controller('VideosSelectPageCtrl', function($scope, $state) {
  $scope.goToPage = function(page){
    $state.go('videos.list', {slug: page.slug});
  };
});

app.controller('ContributedUrlsCtrl', function($scope, data) {

});

app.controller('VideosCtrl', function($scope, $stateParams, $http, $upload, data) {
  $scope.currentPage = data.findPageBySlug($stateParams.slug);
  // console.log($scope.pageSlug);
  $scope.fileSelected = function($files, event){
    for (var i = 0; i < $files.length; i++) {
      var file = $files[i];
      $upload.upload({
        url: 'admin/upload_video',
        method: 'POST',
        data: {id: 34434},
        file: file,
        fileFormDataName: 'video[file]'
      }).then(function(response){
        $scope.videos = response.data;
      });
    }

  };
  $scope.save = function(){
    var data = {
      update: $scope.videos
    };
    $http.post('/admin/save_videos', data).then(function(response){
      $scope.videos = response.data;
    });
  };
});