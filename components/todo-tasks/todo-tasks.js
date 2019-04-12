"use strict";
function TodoTasks(){
    const controller = this;

    controller.removeItem = function(item){
      let target = controller.TodoList.indexOf(item);
      controller.TodoList.splice(target, 1);
    };


    controller.completeTask = function(item){ 
      item.completed = true;
      };

    controller.editItem = function(item, taskEdit){
      let target = controller.TodoList.indexOf(item);
      item = controller.TodoList[target];
      item.task = taskEdit;
      item.toggle = !item.toggle;
    };
}

angular.module('TodoApp').component('todoTasks', {
    template:`
    <ul id="to-do-list">
    <li class="list-item" ng-repeat="item in $ctrl.todoList | filter:$ctrl.search">
      <div class="complete-button" ng-click="$ctrl.completeTask(item)" ng-if="!item.completed">Finished!</div>
      <span class="task" ng-model="listItem" ng-class="{'completed':item.completed===true}">{{item.task}}</span>
      <i class="material-icons edit" ng-click="item.toggle=true">edit</i>
      <i class="material-icons x" ng-click="$ctrl.removeItem(item)">close</i>
      
      <div id="pop-up-edit" ng-if="item.toggle">
        What you meant was: <input ng-model="taskEdit" class="input-field" id="edit-field">
        <button type="submit" id="change-it-button" ng-click="$ctrl.editItem(item, taskEdit)">Change it!</button>
        <i class="material-icons x" id="pop-up-exit" ng-click="item.toggle=!item.toggle">close</i>
      </div>

      <div id="plexi-glass" ng-if="item.toggle"></div>
    </li>
  </ul>        `,
        controller: TodoList,
        bindings: {
          todoList: "<", // sends the todoList to the children, 1 way
          search: "<",  // works, 1 way binding bc the list shouldn't affect the search field.
          newTask: "<"
      }
});