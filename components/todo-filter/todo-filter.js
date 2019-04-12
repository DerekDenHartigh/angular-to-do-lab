"use strict";
function TodoFilter(){
    const controller = this;
}

angular.module('TodoApp').component('todoFilter', {
    template:`
    <input class="input-field" id="filter" type="text" ng-model="$ctrl.search" placeholder="Filter Your To-Do List">
        `,
        controller: TodoList,
        bindings: {
            search: "="
        }
});

// bindings bind to the controller, use $ctlr.______