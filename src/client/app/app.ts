import {inject} from "aurelia-framework";
import {HttpClient, json} from "aurelia-fetch-client";
import {Task} from ".\Task";

@inject(HttpClient)
export class App {
    constructor(http: HttpClient) {
        this.message = "";
        http.configure(config => {
            config
                //.useStandardConfiguration()
                .withBaseUrl("http://localhost:5400/")
                // .withDefaults({
                //     headers: {
                //     'Access-Control-Allow-Origin':'*',
                //     'content-type': 'application/json',
                //     'Accept': 'application/json',
                //     'X-Requested-With': 'Fetch'
                //     }
                // })
            });

        this.http = http;
        this.tasks = [];
    }

    message: string;
    http: HttpClient;
    tasks: Task[];
    taskToAdd: string;

    getTasks() {
        this.http.fetch("tasks/")
            .then(response => response.json())
            .then(data => {
                this.message = data[0].description;
            });
    }
}