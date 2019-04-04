"use strict";
// getter syntax
let TodoApp = angular.module("todoApp", [])

   /* notes from: https://docs.angularjs.org/guide/scope

  angular.module('scopeExample', [])
.controller('GreetController', ['$scope', '$rootScope', function($scope, $rootScope) {
  $scope.name = 'World';
  $rootScope.department = 'AngularJS';
}])
.controller('ListController', ['$scope', function($scope) {
  $scope.names = ['Igor', 'Misko', 'Vojta'];
}]);

  */