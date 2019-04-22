"use strict";
function TodoList(){
    const controller = this;
    // let newTask, search, removeItem, completeTask, editItem, addTask;
  controller.todoList = [
    {task:"Wake Up!", completed: false},
    {task:"Grab your brush and put a little makeup!", completed: false},
    {task:"Hide the scars to fade away the shakeup!", completed: false},
    {task:"Grab your keys off the table!", completed: false},
    {task:"Create another fable!", completed: false}
  ];

  controller.addTask = function(newTask){
    console.log(newTask);
    if(newTask==="" || newTask===undefined){  // added this so you can't add empty/undefined tasks
    return;
    }
    else{
    controller.todoList.push({task: newTask, completed: false});
    console.log(newTask);
    };
  };


  controller.removeItem = function(item){
    console.log(item);  // item is returning undefined
    let target = controller.todoList.indexOf(item);
    controller.todoList.splice(target, 1);
  };


  controller.completeTask = function(item){ 
    item.completed = true;
    };

  controller.editItem = function(item, taskEdit){
    let target = controller.todoList.indexOf(item);
    item = controller.todoList[target];
    item.task = taskEdit;
    item.toggle = !item.toggle;
  };

}

angular.module('TodoApp').component('todoList', {
    template:`
    <main id="main-container">
    <div id="to-do-box">
      <h1 id="h1">Honey-Do List:</h1>
      <h2 id="h1">would you kindly...</h2>
      <todo-filter search="$ctrl.search"></todo-filter>
      <todo-tasks remove-item="$ctrl.removeItem(item)" complete-task="$ctrl.completeTask(item)" edit-item="$ctrl.editItem(item, taskEdit)" add-task="$ctrl.addTask(newTask)" search="$ctrl.search" todo-list="$ctrl.todoList"></todo-tasks>
      <todo-add add-task="$ctrl.addTask"></todo-add>
    </div>
    </main>
        `,
        controller: TodoList
        // no bindings in parent, only pass as attribute
});

// linked both search="$ctrl.search" in the parent template