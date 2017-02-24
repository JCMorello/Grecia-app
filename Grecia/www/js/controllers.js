angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('diosesCtrl', function($scope) {
    
    $scope.dioses = [
        { nombre: 'Zeus', id: 1 },
        { nombre: 'Poseidon', id: 2 },
        { nombre: 'Atenea', id: 3 },
        { nombre: 'Ares', id: 4 },
        { nombre: 'Apolo', id: 5 },
        { nombre: 'Artemisa', id: 6 },
        { nombre: 'Hermes', id: 7 },
        { nombre: 'Hefesto', id: 8 },
        { nombre: 'Hera', id: 9 },
        { nombre: 'Dioniso', id: 10 },
        { nombre: 'Hades', id: 11 },
        { nombre: 'Artemisa', id: 12 },
        { nombre: 'Jueces', id: 13 },
    ];
    
    
})

.controller('bendicionesCtrl', function($scope, $stateParams, $state) {
    
    //console.log($state.current);
    $scope.dios = $stateParams.bendicionesNombre;
    $scope.bendiciones = [];
    
    
    $scope.bendiciones = [
        {diosB:"Zeus", nombreB: "Ira de Zeus", descB:"descripcion corta", difB:"8", duracionB:"3 turnos", efectoB:"efecto de la bendicion", desc2B:"lo de los puntos"},
        {diosB:"Zeus", nombreB: "Ira de poseidon", descB:"descripcion corta", difB:"8", duracionB:"3 turnos", efectoB:"efecto de la bendicion", desc2B:"lo de los puntos"},
        {diosB:["Poseidon","Zeus"], nombreB: "Ira de Poseidon y zeus", descB:"descripcion corta", difB:"8", duracionB:"3 turnos", efectoB:"efecto de la bendicion", desc2B:"lo de los puntos"},
        {diosB:"Poseidon", nombreB: "Ira de atenea", descB:"descripcion corta", difB:"8", duracionB:"3 turnos", efectoB:"efecto de la bendicion", desc2B:"lo de los puntos"},
        {diosB:"Poseidon", nombreB: "Ira de Zeus2", descB:"descripcion corta", difB:"8", duracionB:"3 turnos", efectoB:"efecto de la bendicion", desc2B:"lo de los puntos"},
        {diosB:"Poseidon", nombreB: "Ira de Zeus2", descB:"descripcion corta", difB:"8", duracionB:"3 turnos", efectoB:"efecto de la bendicion", desc2B:"lo de los puntos"},
        {diosB:"Poseidon", nombreB: "Ira de poseidon2", descB:"descripcion corta", difB:"8", duracionB:"3 turnos", efectoB:"efecto de la bendicion", desc2B:"lo de los puntos"},
        {diosB:"Poseidon", nombreB: "Ira de poseidon3", descB:"descripcion corta", difB:"8", duracionB:"3 turnos", efectoB:"efecto de la bendicion", desc2B:"lo de los puntos"},
        {diosB:"Hades", nombreB: "Ira de hades2", descB:"descripcion corta", difB:"8", duracionB:"3 turnos", efectoB:"efecto de la bendicion", desc2B:"lo de los puntos"},
        {diosB:"Ares", nombreB: "Ira de ares", descB:"descripcion corta", difB:"8", duracionB:"3 turnos", efectoB:"efecto de la bendicion", desc2B:"lo de los puntos"},
        {diosB:"Ares", nombreB: "Ira de ares2", descB:"descripcion corta", difB:"8", duracionB:"3 turnos", efectoB:"efecto de la bendicion", desc2B:"lo de los puntos"},
    ]
    
    $scope.toggleGroup = function(group) {
        if ($scope.isGroupShown(group)) {
            $scope.shownGroup = null;
        } else {
            $scope.shownGroup = group;
        }
        };
    
    $scope.isGroupShown = function(group) {
        return $scope.shownGroup === group;
    };
    
});
