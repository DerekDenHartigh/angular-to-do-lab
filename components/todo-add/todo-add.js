"use strict";
function TodoAdd(){
    const controller = this;

}

angular.module('TodoApp').component('todoAdd', {
    template:`
    <form id="add-form" novalidate>
    <input id="add-to-to-do" class="input-field" type="text" placeholder="Could you also..." ng-model="$ctrl.newTask">
    <button id="add-button" type="submit" ng-click="$ctrl.addTask({newTask: $ctrl.newTask})">Add 2 To Do</button>
    </form>
   `,
        controller: TodoAdd,
        bindings: {
          // newTask: "<", don't need, gets passed into bound function.
          addTask: "&" // & for function binding
        }
});