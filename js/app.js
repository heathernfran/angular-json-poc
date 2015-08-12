var jsonApp = angular.module('jsonApp', ['ngRoute', 'jsonDataControllers']);

jsonApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/sf-public-art', {
      templateUrl: 'partials/sf-public-art.html',
      controller: 'jsonDataCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
