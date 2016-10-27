import {autoinject} from "aurelia-framework";
import {BaseHttpClient} from "./base-http-client";

@autoinject(BaseHttpClient)
export class TaskAddClient {
    constructor(private baseHttpClient: BaseHttpClient) {}

    addTask(id: number, taskToAdd: string) {
        const body = {
            "id": id,
            "description": taskToAdd,
            "completed": false
        };

        this.baseHttpClient.http.fetch("tasks/",
        {
            method: "post",
            body: JSON.stringify(body),
            headers: {
                "content-type": "application/json"
            }
        });
    }
}