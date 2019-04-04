"use strict";
// getter syntax
let TodoApp = angular.module("App", [])
TodoApp.controller('TodoController', function($scope){ // are arrow functions ok for angular?
    $scope.todoList = [
    {task:"Wake Up!", completed:true},
    {task:"Grab your brush and put a little makeup!", completed:true},
    {task:"Hide the scars to fade away the shakeup!", completed: false},
    {task:"Grab your keys off the table!", completed: false},
    {task:"Create another fable!", completed: true}
  ]
});

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