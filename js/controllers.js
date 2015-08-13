var jsonDataControllers = angular.module('jsonDataCtrl', ['jsonAppServices']);

jsonDataControllers.controller('artJsonDataCtrl', ['$scope', 'loadJson', function($scope, loadJson) {
  // SF open data, public art
  $scope.jsonData.art = loadJson('https://data.sfgov.org/resource/zfw6-95su.json');
}]);


// TODO write routing with new router
jsonDataControllers.controller('routeCtrl', function($router) {
  $router.config([
    {
      path: '/sf-public-art',
      component: 'sfpublicart'
    }
  ]);
});
