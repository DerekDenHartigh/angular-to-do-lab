"use strict";

function TodoController() { 
  const controller = this;
  controller.TodoList = [
    {task:"Wake Up!", completed: true},
    {task:"Grab your brush and put a little makeup!", completed: true},
    {task:"Hide the scars to fade away the shakeup!", completed: false},
    {task:"Grab your keys off the table!", completed: false},
    {task:"Create another fable!", completed: true}
  ];
};

angular
  .module("TodoApp")
  .controller("TodoController", TodoController);


  // "use strict";
  // function FamCtrl() {
  //   const controller = this; 
  //   controller.family = [
  //     {name: "Barb", relation: "mom", age: 65},
  //     {name: "Paul", relation: "dad", age: 56},
  //     {name: "Michelle", relation: "step-mom", age: 50},
  //     {name: "Chris", relation: "half-brother", age: 41},
  //     {name: "Brandon", relation: "brother", age: 34},
  //     {name: "Adam", relation: "brother", age: 31},
  //     {name: "Tanner", relation: "step-brother", age: 24},
  //     {name: "Rhianna", relation: "step-sister", age: 21}
  //   ];
  // };
  
  // angular
  // .module("App")
  // .controller("FamCtrl", FamCtrl);


// TodoApp
// .controller('TodoController', function($scope){ // are arrow functions ok for angular?
//   $scope.TodoList = [
//   {task:"Wake Up!", completed:true},
//   {task:"Grab your brush and put a little makeup!", completed:true},
//   {task:"Hide the scars to fade away the shakeup!", completed: false},
//   {task:"Grab your keys off the table!", completed: false},
//   {task:"Create another fable!", completed: true}
// ]
// });



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