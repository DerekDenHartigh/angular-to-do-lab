{/* <main id="main-container" ng-controller="TodoController as $ctrl">
    <div id="to-do-box" >
      <h1 id="h1">Honey-Do List:</h1>
      <h2 id="h1">would you kindly...</h2>
      <input class="input-field" id="filter" type="text" ng-model="search" placeholder="Filter Your To-Do List">
      <ul id="to-do-list">
        <li class="list-item" ng-repeat="item in $ctrl.TodoList | filter:search"> <!-- if I add  'track by item.task' to the items in $ctrl.TodoList, it prevents duplicate list items, but also breaks JS and prevents further functionality since the tasks wouldn't be unique.-->
          <!-- <div class="complete-button" ng-click="item.completed=!item.completed" ng-if="!item.completed">Finished!</div>  this works but isn't in the specs -->
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
      </ul>
      <!-- <button id="add-button" type="submit" ng-click="$ctrl.addTask(newTask)">Add 2 To Do</button> again, this works, but doesn't use a form... -->

    <form id="add-form" novalidate>
      <input id="add-to-to-do" class="input-field" type="text" placeholder="Could you also..." ng-model="newTask">
      <button id="add-button" type="submit" ng-click="$ctrl.addTask(newTask)">Add 2 To Do</button>
    </form>

    </div>
  </main> */}