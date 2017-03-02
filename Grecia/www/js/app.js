// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
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
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.dados', {
      url: '/dados',
      views: {
        'menuContent': {
          templateUrl: 'templates/dados.html',
          controller: 'dadosCtrl'
        }
      }
    })
  
  .state('app.scanner', {
      url: '/scanner',
      views: {
        'menuContent': {
          templateUrl: 'templates/scanner.html',
          controller: 'scannerCtrl'
        }
      }
    })
  
    .state('app.dioses', {
      url: '/dioses',
      views: {
        'menuContent': {
          templateUrl: 'templates/dioses.html',
          controller: 'diosesCtrl'
        }
      }
    })
  
  .state('app.bendiciones', {
    url: '/bendiciones/:bendicionesNombre',
    views: {
      'menuContent': {
        templateUrl: 'templates/bendiciones.html',
        controller: 'bendicionesCtrl'
      }
    }
  })
  
  .state('app.escuelas', {
      url: '/escuelas',
      views: {
        'menuContent': {
          templateUrl: 'templates/escuelas.html',
          controller: 'escuelasCtrl'
        }
      }
    })
  
  .state('app.tecnicas', {
    url: '/tecnicas/:tecnicasNombre',
    views: {
      'menuContent': {
        templateUrl: 'templates/tecnicas.html',
        controller: 'tecnicasCtrl'
      }
    }
  })
  
  .state('app.ventajas', {
      url: '/ventajas',
      views: {
        'menuContent': {
          templateUrl: 'templates/ventajas.html',
          controller: 'ventajasCtrl'
        }
      }
    })
  
  .state('app.oraculo', {
      url: '/oraculo',
      views: {
        'menuContent': {
          templateUrl: 'templates/oraculo.html',
          controller: 'oraculoCtrl'
        }
      }
    })
  
  .state('app.foto', {
      url: '/foto',
      views: {
        'menuContent': {
          templateUrl: 'templates/foto.html',
          controller: 'fotoCtrl'
        }
      }
    })

  
  
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dioses');
});
