// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('RadarAnimal', ['ionic', 'ngCordova', 'RadarAnimal.controllers', 'RadarAnimal.directives', 'RadarAnimal.services'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.denuncia', {
        url: '/denuncia',
        views: {
          'tab-denuncia': {
            templateUrl: 'templates/tab-denuncia.html',
            controller: 'DenunciaCtrl'
          }
        }
      })

      .state('tab.lista', {
        url: '/lista',
        params: { cache: null },
        views: {
          'tab-lista': {
            templateUrl: 'templates/tab-lista.html',
            controller: 'ListaCtrl',
            cache: false
          }
        }
      })
      .state('tab.animal', {
        url: '/animal/:id',
        views: {
          'tab-lista': {
            templateUrl: 'templates/tab-animal.html',
            controller: 'AnimalSelecionadoCtrl'
          }
        }
      })

      .state('tab.mapa', {
        url: '/mapa',
        views: {
          'tab-mapa': {
            templateUrl: 'templates/tab-mapa.html',
            controller: 'MapsCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/denuncia');

  });
