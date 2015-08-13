var jsonAppServices = angular.module('jsonAppServices', []);

jsonAppServices.factory('loadJson', ['$http', function($http) {
  return function(jsonUrl) {
    $http.get(jsonUrl)
          .success(function(data) {
            return data;
          })
          .error(function(err) {
            console.error(err);
          });
  };
}]);
