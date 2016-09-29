import {inject, singleton} from "aurelia-framework";
import {HttpClient, json} from "aurelia-fetch-client";
import {Tasks} from "../Tasks";

@inject(HttpClient)
@singleton()
export class TaskAddClient {
    constructor(http: HttpClient) {
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl("http://localhost:5400/")
                .withDefaults({
                    headers: {
                        'Accept': 'application/json',
                    }
                });
        });

        this.http = http;
        this.tasks = [];
    }

    http: HttpClient;
    tasks: Tasks.Task[];

    addTask(taskToAdd: string, id: number) {
        let body = {
            "id": id,
            "description": taskToAdd,
            "completed": false
        };

        this.http.fetch("tasks/", {
            method: "post",
            body: JSON.stringify(body),
            headers: {        
                'content-type': 'application/json'
            }      
        })
        .then(response => {})
        .then(data => {
            //this.message = data[0].description;
        });
    }
}