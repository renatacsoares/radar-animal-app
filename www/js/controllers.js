angular.module('RadarAnimal.controllers', [])

  .controller('DenunciaCtrl', ['$scope', '$stateParams', '$state',
    function($scope, $stateParams, $state, AnimalService) {
      $scope.animal = {};

      // metodo executado quando se clica no botao Cadastrar na pagina de cadastro de animais
      $scope.salvaDenuncia = function() {
        // funcao que sera chamada quando o save do Service terminar
        /* var callback = function() {
          // apos salvar um animal, volta para tela de lista de animais onde o animal cadastrado deve aparecer
          $state.go('listaDeAnimais');
        };
        AnimalService.save($scope.animal, callback);
        */

        alert($scope.animal.tipo + "|" + $scope.animal.situacao);
      }

      $scope.pegaFoto = function() {
        alert('teste1');
      }

    }
  ])

  .controller('ListaCtrl', function($scope, $state, Animais) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.animais = Animais.all();
    $scope.remove = function(animal) {
      Animais.remove(animal);
    };

    $scope.animalSelecionado = function(id) {
      $state.go('tab.animal', {
        id: id
      });
    }

    $scope.apagarAnimal = function(id) {
      var animal = Animais.get(id);
      Animais.remove(animal);
      $scope.animais = Animais.all();
      $state.go('tab.lista')
    }



  })

  .controller('AnimalSelecionadoCtrl', function($scope, $state, $stateParams, Animais) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.animal = Animais.get($stateParams.id);

    $scope.voltaAnimail = function() {

      $state.go('tab.lista');
    }
  })

  .controller('MapsCtrl', function($scope, $ionicLoading) {
    $scope.mapCreated = function(map) {
      $scope.map = map;
    };

    $scope.centerOnMe = function() {
      console.log("Centering");
      if (!$scope.map) {
        return;
      }

      // $scope.loading = $ionicLoading.show({
      //   content: 'Getting current location...',
      //   showBackdrop: false
      // });

      navigator.geolocation.getCurrentPosition(function(pos) {
        console.log('Got pos', pos);
        //      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        $scope.map.setCenter(new google.maps.LatLng(43.07493, -69.381388));

        // $scope.loading.hide();
      }, function(error) {
        alert('Unable to get location: ' + error.message);
      });
    };
  });

//  $scope.animalSelecionado = Animais.get($stateParams.animalId);
