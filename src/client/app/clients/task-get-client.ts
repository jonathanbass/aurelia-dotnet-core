import {autoinject} from "aurelia-framework";
import {HttpClient} from "aurelia-fetch-client";
import {Tasks} from "../Tasks";

@autoinject(HttpClient)
export class TaskGetClient {
    constructor(private http: HttpClient) { }

    getTasks(): Promise<any> {
        return this.http.fetch("tasks",
            {
                method: "get",
                headers: {
                    "content-type": "application/json"
                }
            });
    }
}