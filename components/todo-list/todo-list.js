"use strict";
function TodoList(){
    const controller = this;
    // let newTask, search, removeItem, completeTask, editItem, addTask;
  controller.TodoList = [
    {task:"Wake Up!", completed: false},
    {task:"Grab your brush and put a little makeup!", completed: false},
    {task:"Hide the scars to fade away the shakeup!", completed: false},
    {task:"Grab your keys off the table!", completed: false},
    {task:"Create another fable!", completed: false}
  ];

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

angular.module('TodoApp').component('todoList', {
    template:`
    <main id="main-container">
    <div id="to-do-box" >
      <h1 id="h1">Honey-Do List:</h1>
      <h2 id="h1">would you kindly...</h2>
      <todo-filter search="$ctrl.search"></todo-filter>
      <todo-tasks addTask="$crtl.addTask" search="$ctrl.search" todo-list="$ctrl.TodoList"></todo-tasks>
      <todo-add newTask="$ctrl.newTask"></todo-add>
    </div>
    </main>
        `,
        controller: TodoList
        // no bindings in parent, only pass as attribute
});

// linked both search="$ctrl.search in the parent template