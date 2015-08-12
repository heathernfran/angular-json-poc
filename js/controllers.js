var jsonDataControllers = angular.module('jsonDataControllers', []);

jsonDataControllers.controller('jsonDataCtrl', ['$scope', '$http', function($scope, $http) {
  // SF open data, public art
  $scope.jsonData = $http.get('https://data.sfgov.org/resource/zfw6-95su.json')
                  .success(function(data) {
                    $scope.jsonData = data;
                  })
                  .error(function(err) {
                    console.error(err);
                  });
}]);
