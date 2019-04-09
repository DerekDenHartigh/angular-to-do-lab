"use strict";
function TodoList(){
    const controller = this;
}

angular.module('TodoApp').component('todoList', {
    template:`
    <main id="main-container" ng-controller="TodoController as $ctrl">
    <div id="to-do-box" >
      <h1 id="h1">Honey-Do List:</h1>
      <h2 id="h1">would you kindly...</h2>
      <todo-filter></todo-filter>
      <todo-task></todo-task>
      <todo-add></todo-add>
    </div>
    </main>
        `,
        controller: TodoList
});

// function TodoController() { 
//   const controller = this;
//   controller.TodoList = [
//     {task:"Wake Up!", completed: false},
//     {task:"Grab your brush and put a little makeup!", completed: false},
//     {task:"Hide the scars to fade away the shakeup!", completed: false},
//     {task:"Grab your keys off the table!", completed: false},
//     {task:"Create another fable!", completed: false}
//   ];

// angular
//   .module("TodoApp")
//   .controller("TodoController", TodoController);