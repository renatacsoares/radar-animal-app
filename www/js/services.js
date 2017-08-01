angular.module('RadarAnimal.services', [])

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
