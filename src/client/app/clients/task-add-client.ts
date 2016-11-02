import {autoinject} from "aurelia-framework";
import {HttpClient} from "aurelia-fetch-client";

@autoinject(HttpClient)
export class TaskAddClient {
    constructor(private http: HttpClient) {}

    addTask(id: number, taskToAdd: string) {
        const body = {
            "id": id,
            "description": taskToAdd,
            "completed": false
        };

        return this.http.fetch("tasks/",
        {
            method: "post",
            body: JSON.stringify(body),
            headers: {
                "content-type": "application/json"
            }
        });
    }
}