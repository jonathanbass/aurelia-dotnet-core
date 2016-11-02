import * as app from "./app";

@app.autoinject(app.TaskGetClient)
@app.autoinject(app.TaskAddClient)
@app.autoinject(app.TaskDeleteClient)
export class TodoList {
    constructor(private taskGetClient: app.TaskGetClient, private taskAddClient: app.TaskAddClient, private taskDeleteClient: app.TaskDeleteClient) {
        this.tasks = [];
        this.hasFocus = true;
        this.getTasks();
    }

    taskToAdd: string;
    tasks: app.Tasks.Task[];
    hasFocus: boolean;

    getTasks() {
        const getClient = this.taskGetClient.getTasks();
        getClient
            .then(response => response.json())
            .then(data => {
                this.tasks = data;
            })
            .catch((e) => alert(e.message));
    }

    addTask() {
        this.hasFocus = true;

        if(!this.taskToAdd) return;

        const task = new app.Tasks.Task(null, this.taskToAdd, false);
        const addClient = this.taskAddClient.addTask(task.id, task.description);

        addClient.then(() => {
            this.getTasks();
            this.tasks.push(task);
            this.taskToAdd = "";
        });
    }

    deleteTask(description: string) {
        const deleteClient = this.taskDeleteClient.deleteTask(description);
        deleteClient.then(() => this.getTasks());
    }
}