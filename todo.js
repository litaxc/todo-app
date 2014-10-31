(function() {
    var app = angular.module("todo", []);

    app.directive("listTodos", function() {
	return {
	    restrict: 'E',
	    templateUrl: "list-todos.html",
	    controller: function($scope) {
		$scope.todos = todos;
		$scope.setDone = function(todo) {
		    todo.done = true;
		};
	    }
	};
    });
    
    var todos = [{
        "name": "todo1",
        "due": '1414673932900',
        "importance": "1",
        "remindOn": "",
        "push": "",
        "done": false,
        "form": {
            "change": false
        }
    }, {
        "name": "todo2",
        "due": '',
        "importance": "2",
        "remindOn": "",
        "push": "",
        "done": false
    }];
})();
