System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Tasks;
    return {
        setters:[],
        execute: function() {
            (function (Tasks) {
                class Task {
                    constructor(id, description, completed) {
                        this.id = id;
                        this.description = description;
                        this.completed = completed;
                    }
                }
                Tasks.Task = Task;
            })(Tasks = Tasks || (Tasks = {}));
            exports_1("Tasks", Tasks);
        }
    }
});
