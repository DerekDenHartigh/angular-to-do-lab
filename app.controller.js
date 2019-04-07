"use strict";

function TodoController() { 
  const controller = this;
  controller.TodoList = [
    {task:"Wake Up!", completed: false},
    {task:"Grab your brush and put a little makeup!", completed: false},
    {task:"Hide the scars to fade away the shakeup!", completed: false},
    {task:"Grab your keys off the table!", completed: false},
    {task:"Create another fable!", completed: false}
  ];

  controller.addTask = function(newTask){  // works
    if(newTask==="" || newTask===undefined){  // added this so you can't add empty/undefined tasks
    return;
    }
    else{
    controller.TodoList.push({task: newTask, completed: false});
    };
  };

  controller.removeItem = function(item){
    // 1st attempt - this only removes the first item in the array
      // controller.TodoList.splice(this.item, 1); 

    // 2nd attempt - also only removes 1st array item..
      // let elementPos = controller.TodoList.map(function(item) {return item.task; }).indexOf(task);
      // let objectFound = controller.TodoList[elementPos];
      // controller.TodoList.splice(objectFound, 1);

    // 3rd attempt - only removes the last array item...
        // let taskFinder = function () {
        //   return task === controller.TodoList.task;
        // };
        // let arrLocation = controller.TodoList.findIndex(taskFinder);
        // controller.TodoList.splice(arrLocation,1);
    //4th time's a charm?
      // console.log(item);
      // let currentTask = item.task;
      // console.log(currentTask)
      // let target = controller.TodoList.indexOf(currentTask);
      // console.log(target);
      let target = controller.TodoList.indexOf(item);
      controller.TodoList.splice(target, 1);
      // return controller.TodoList;
    };

    /*
      Alex said that using an ng-if on the list item is a way to remove it as well, but does that affect the array? or just comment out the html?
    */

    controller.completeTask = function(item){ 
      item.completed = true;
      console.log(item);
      };

    controller.editItem = function(item){
      item.task = prompt('What did you mean to write here?')
    };

};

angular
  .module("TodoApp")
  .controller("TodoController", TodoController);