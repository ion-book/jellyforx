angular.module('App', ['ionic','ionic.contrib.ui.cards'])
.config(function($stateProvider, $urlRouterProvider) {
$stateProvider
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'views/dashboard/dashboard.html'
    })
    .state('settings', {
      url: '/settings',
      templateUrl: 'views/settings/settings.html'
    })
    .state('ask', {
      url: '/ask',
      templateUrl: 'views/ask/ask.html'
    })
    ;
$urlRouterProvider.otherwise("/dashboard");
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.directive('noScroll', function($document) {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  }
});
