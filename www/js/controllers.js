angular.module('RadarAnimal.controllers', [])

  .controller('DenunciaCtrl', ['$scope', '$stateParams', '$state', 'AnimalService',
    function($scope, $stateParams, $state, AnimalService) {

      $scope.animal = {};

      // metodo executado quando se clica no botao Cadastrar na pagina de cadastro de animais
      $scope.salvaDenuncia = function() {
        // funcao que sera chamada quando o save do Service terminar
         var callback = function() {
          // apos salvar um animal, volta para tela de lista de animais onde o animal cadastrado deve aparecer
          $state.go('tab.lista');
        };
        AnimalService.save($scope.animal, callback);

      }

  /*    $scope.pegaFoto = function() {
        alert('teste1');
        var options = {
          quality: 75,
          targetWidth: 200,
          targetHeight: 200,
          sourceType: 0
        };

        Camera.getPicture();
      } */

      }

  ])



  .controller('ListaCtrl', function($scope, $state,$stateParams, AnimalService) {

    // codigo que eh executado quando a pagina eh carregada (buscar todos os animais)
    AnimalService.buscarTodos(function(data) {
      $scope.animais = data;
    });

    $scope.animalSelecionado = function(id) {
      $state.go('tab.animal', {
        id: id
      });
    }

    // metodo executado quando se clica no botao Excluir na pagina com a lista de animais
      $scope.apagarAnimal = function(id) {
        AnimalService.apagarAnimal(id, function() {
          // apos apagar um animal, recarrega a lista de animais novamente
          AnimalService.buscarTodos(function(data) {
            $scope.animais = data;
          });
        });
      }

  })

  .controller('AnimalSelecionadoCtrl', function($scope, $state, $stateParams, AnimalService) {

    var id = $stateParams.id;

    // busca as informacoes da fazenda com o ID desejado
    AnimalService.buscaAnimal(id, function(animal) {
      // fazenda retornado pela busca vem como parametro do callback (animalBD) e vai
      // para $scope.fazenda para que a pagina possa ver as informacoes via ng-model
      $scope.animal = animal
      console.log("id achado");
    });

    $scope.voltaAnimal = function() {

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
