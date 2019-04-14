"use strict";
function TodoAdd(){
    const controller = this;
    controller.addTask = function(newTask){
      if(newTask==="" || newTask===undefined){  // added this so you can't add empty/undefined tasks
      return;
      }
      else{
      controller.TodoList.push({task: newTask, completed: false});
      console.log(newTask);
      };
    };
}

angular.module('TodoApp').component('todoAdd', {
    template:`
    <form id="add-form" novalidate>
    <input id="add-to-to-do" class="input-field" type="text" placeholder="Could you also..." ng-model="$ctrl.newTask">
    <button id="add-button" type="submit" ng-click="$ctrl.addTask(newTask)">Add 2 To Do</button>
    </form>
   `,
        controller: TodoAdd,
        bindings: {
          newTask: "="
        }
});