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

      let target = controller.TodoList.indexOf(item);
      controller.TodoList.splice(target, 1);
    };


    controller.completeTask = function(item){ 
      item.completed = true;
      console.log(item);
      };

    controller.editItem = function(item, taskEdit){
      let target = controller.TodoList.indexOf(item);
      item = controller.TodoList[target];
      item.task = taskEdit;
      item.toggle = !item.toggle;
    };

};

angular
  .module("TodoApp")
  .controller("TodoController", TodoController);