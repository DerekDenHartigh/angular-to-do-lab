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

  controller.removeItem = function(){
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

    };

    controller.completeTask = function(item){  // doesn't work, i don't know why..
      // item = this;  
      item.completed = !item.completed;
      console.log(item);
      };

};

angular
  .module("TodoApp")
  .controller("TodoController", TodoController);