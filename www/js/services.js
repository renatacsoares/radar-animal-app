angular.module('RadarAnimal.services', [])
  .service('AnimalService', function($http) {
    // callback eh uma funcao passada como parametro que sera chamada quando o $http.post terminar
    this.save = function(animal, callback) {
      $http.post('http://localhost:8080/api/animais', animal).
      then(function(res) {
        callback();
        console.log("Animal Salvo com sucesso!");
      }, function(res) {
        console.log("Aniaml NAO salvo com sucesso! Chamada com erro");
      });
    }
    this.buscarTodos = function(callback) {
      $http.get('http://localhost:8080/api/animais').
      then(function(res) {
        // lista de animais (res.data) eh passada ao controller (que chama essa funcao) como parametro do callback
        console.log("Lista de animais obtida com sucesso!");
        callback(res.data);
      }, function(res) {
        console.log("Lista de animais NAO obtida com sucesso. Chamada com erro");
      });
    };

    this.buscaAnimal = function(id, callback) {
      // para buscar um animal especifico pelo seu id, o id no get tem que ser informado na URL
      $http.get('http://localhost:8080/api/animais/' + id).
      then(function(res) {
        console.log("Animal com id " + id + " retornado com sucesso");
        // resultado da busca vinda da API ($http.get) eh passado ao controller como parametro do callback
        callback(res.data);
      }, function(res) {
        console.log("Animal NAO retornado com sucesso. Chamada com erro");
      });
    };
    this.apagarAnimal = function(id, callback) {
      // metodo delete tambem exige que o ID seja informado na URL`
      $http.delete('http://localhost:8080/api/animais/' + id).
      then(function(res) {
        console.log("Animal de id " + id + " excluido com sucesso");
        callback();
      }, function(res) {
        console.log("Animal NAO excluido com sucesso. Chamada com erro");
      });
    }

  });


/*
.factory('Camera', ['$q', function($q) {

  return {
    getPicture: function(options) {
      var q = $q.defer();

      navigator.camera.getPicture(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);

      return q.promise;
    }
  }
}])
*/

/*  .factory('Camera', function($cordovaCamera) {

    return {
      getPicture: function() {
        var options = {
          quality: 75,
          targetWidth: 200,
          targetHeight: 200,
          sourceType: 1
        };

        $cordovaCamera.getPicture(options).then(function(imageData) {
          alert("data:image/jpeg;base64," + imageData);
        }, function(err) {
          // error
        });

      }
    }
  })

  .factory('Animais', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var animais = [{
      id: 0,
      tipo: 'Gato',
      situacao: 'Abandonado',
      endereco: 'Rua x'
    }, {
      id: 1,
      tipo: 'Cachorro',
      situacao: 'Com fome',
      endereco: 'Rua Y'
    }];

    return {
      all: function() {
        return animais;
      },
      remove: function(animal) {
        animais.splice(animais.indexOf(animal), 1);
      },
      get: function(animalId) {
        for (var i = 0; i < animais.length; i++) {
          if (animais[i].id === parseInt(animalId)) {
            return animais[i];
          }
        }
        return null;
      }
    };
  });
*/
