/// <reference path="../typings/index.d.ts" />
import {autoinject} from "aurelia-framework";
import {Tasks} from "./Tasks";
import {TaskAddClient} from "./clients/task-add-client";
import {TaskDeleteClient} from "./clients/task-delete-client";

@autoinject(TaskAddClient)
@autoinject(TaskDeleteClient)
export class App {
    constructor(private taskAddClient: TaskAddClient, private taskDeleteClient: TaskDeleteClient) {
        this.tasks = [];
        this.hasFocus = true;
    }

    taskToAdd: string;
    tasks: Tasks.Task[];
    hasFocus: boolean;

    getTasks() {
        
    }

    addTask() {
        const task = new Tasks.Task(this.tasks.length + 1, this.taskToAdd, false);
        this.taskAddClient.addTask(task.id, task.description);

        this.tasks.push(task);
        this.taskToAdd = "";
    }

    deleteTask(id: number) {
        this.taskDeleteClient.deleteTask(id);
    }
}