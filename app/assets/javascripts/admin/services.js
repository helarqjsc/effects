/* global angular */

var app = angular.module('effects.admin.services', []);

app.directive('editable', function($timeout){
  return {
    scope: { value: '=' },
    template: '<div class="editable" ng-show="!edit" ng-click="changeMode(true)">{{ value }}</div>'+
              '<input ng-show="edit" ng-blur="changeMode(false)" type="text" ng-model="value">',
    link: function(scope, element, attrs){
      // console.log('scope.value', scope.value);
      scope.changeMode = function(edit){
        if(scope.value === null || scope.value.trim() === ''){
          scope.edit = true;
          return;
        }
        scope.edit = edit;
      };
      scope.changeMode(false);
      scope.$watch('edit', function(edit){
        if(edit){
          $timeout(function(){
            var el = element.find('input').get(0);
            el.selectionStart = el.value.length;
            el.selectionEnd = el.value.length;
            element.find('input').focus();
          });
        }
      });
    }
  };
});

app.factory('data', function($preload){
  var pages = $preload.pages;
  var videos = $preload.videos;
  var contributedLinks = $preload.contributedLinks;

  return {
    pages: pages,
    videos: videos,
    contributedLinks: contributedLinks,
    findPageBySlug: function(slug){
      return pages.filter(function(val){
        return val.slug === slug;
      })[0];
    }
  };
});

app.filter('onlyPage', function(){
  return function(input, page){
    return input.filter(function(val){
      return (val.page_id === page.id || page.id === 'all');
    });
  };
});

