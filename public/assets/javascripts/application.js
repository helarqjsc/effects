

var app = angular.module('effects.home', ['ngFx']);

app.directive('videoWebm', function(){
  return {
    template:
    '<video class="video-container" width="100%" height="100%" loop muted preload="none">' +
    '<source src="{{videoURL}}" type=\'video/webm; codecs="vp8, vorbis"\' />' +
    '</video>',
    restrict: "E",
    scope: { 
      filename: '=',
      playOnPage: '=',
      currentPage: '='
    },
    replace: true,
    link: function(scope, el, atts){
      scope.videoURL = 'assets/video/' + scope.filename;

      var video = el.get(0);
      scope.$watch('currentPage.id', function(currentPage){
        console.log('currentPage:', currentPage);
        console.log('scope.playOnPage:', scope.playOnPage);
        if(currentPage === scope.playOnPage.id || currentPage === 'all'){
          if(video.paused){
            video.play();
          }
          // console.log('start', el.find('source').attr('src'));
        }else{ 
          // video.currentTime = 0;
          video.pause();
          // console.log('stop', el.find('source').attr('src'));
        }
      });
    }
  };
});

app.filter('onlyPage', function(){
  return function(input, currentPage){
    console.log('filter onlypage', 'currentPage', currentPage);
    return input.filter(function(val){
      return (val.page_id === currentPage.id || currentPage.id === 'all');
    });
  };
});

app.controller('MainCtrl', function($scope, $preload) {
  // $scope.data = data;
  $scope.pages = $preload.pages;
  $scope.videos = $preload.videos;

  $scope.changePage = function(page) {
    $('.block').animate({opacity: 0}, 500, function(){
      $scope.page.id = page;
      $scope.$apply();
      $(this).animate({opacity: 1}, 500);
    });
  };

  // $scope.changePage($scope.pages[0].id);
  $scope.page = {id: $scope.pages[0].id};
  $scope.loaded = true;
});



angular
    .module('effects.data', [])
    .factory('data', function() {
            return [
                {name: "Наведение", page: "hovers", items: [
                    {link: "http://tympanus.net/Tutorials/CircleHoverEffects/index.html", title: "Circle Hover Effects", video: "circle.webm"},
                    {link: "http://tympanus.net/Development/HoverEffectIdeas/index2.html", title: "Hover Effect Ideas. По ссылке больше примеров", video: "hover2.webm"},
                    {link: "http://tympanus.net/Tutorials/ShapeHoverEffectSVG/index.html", title: "Shape Hover Effect with SVG", video: "hover3.webm"}
                ]},
                {name: "Кнопки", page: "buttons", items: [
                    {link: "http://codepen.io/itsnoureddine/pen/QwEjpK", title: "Buttons menu", video: "button.webm"}
                ]},
                {name: "Попапы", page: "popups", items: [
                    {link: "http://tristanedwards.me/sweetalert", title: "Sweet Alert", video: "alert.webm"},
                    {link: "http://tympanus.net/Development/DialogEffects/index.html", title: "Dialog Effects. По ссылке больше примеров", video: "popups.webm"},
                ]},
                {name: "Переходы", page: "transitions", items: [
                    {link: "http://tympanus.net/Development/ArticleIntroEffects/", title: "Переход из картинки в контент", video: "perehod.webm"},
                    {link: "http://tympanus.net/Development/PageLoadingEffects/index3.html", title: "Красивая смена страницы. По ссылке больше примеров", video: "perehod2.webm"},
                    {link: "http://codepen.io/pixelass/pen/gixzc", title: "Apple Mac", video: "mac.webm"}
                ]},
                {name: "Лоадеры", page: "loaders", items: [
                    {link: "http://pasqualevitiello.github.io/Tumblr-Style-Cog-Spinners/", title: "Tumblr-Style Cog Loader", video: "loaders.webm"}
                ]},
                {name: "Иконки", page: "icons", items: [
                    {link: "http://fian.my.id/marka/", title: "Marka", video: "icons.webm"}
                ]},
                {name: "Прогресс бары", page: "progress-bars", items: [
                ]},

                {name: "Табы", page: "tabs", items: [
                ]}
            ]
        });

var app = angular.module('effects.admin', ['ui.router']);

app.config(function ($stateProvider) {
  $stateProvider
  .state('home', {
    url: '/home/',
    views:{
      'main':{
        templateUrl: 'home.html'
      }
    }
  })
  .state('pages', {
    url: '/pages/',
    views:{
      'main':{
        templateUrl: 'pages.html'
      }
    }
  })
  .state('videos', {
    url: '/videos/',
    views:{
      'main':{
        templateUrl: 'videos.html'
      }
    }
  })
  .state('options', {
    url: '/options/',
    views:{
      'main':{
        templateUrl: 'options.html'
      }
    }
  });
});

app.directive('editable', function($timeout){
  return {
    scope: { value: '=' },
    template: '<div ng-show="!edit" ng-click="edit = true">{{ value }}</div>'+
              '<input ng-show="edit" ng-blur="edit = false" type="text" ng-model="value">',
    link: function(scope, element, attrs){
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

// app.factory('')
app.controller('AdminCtrl', function($scope, $preload, $state, $http) {
  $scope.pages = $preload.pages;

  // $state.go('home');
  $scope.save = function(obj){
    $http.post('/admin/save/' + obj, $scope[obj]);
  };
});


