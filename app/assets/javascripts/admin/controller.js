/* global angular */

var app = angular.module('effects.admin.controllers', ['effects.admin.services']);

app.controller('AdminCtrl', function($scope, Video, Category, Tag) {
  $scope.categories = Category.getAll();
  $scope.tags = Tag.getAll();
  $scope.videos = Video.getAll();
  $scope.taxonomies = $scope.categories.concat($scope.tags);
  console.log($scope.taxonomies);
  // $scope.contributedLinks = data.contributedLinks;
});

app.controller('TaxonomiesCtrl', function($scope, $http) {

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