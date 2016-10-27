import { autoinject } from "aurelia-framework";
import { BaseHttpClient } from "./base-http-client";

@autoinject(BaseHttpClient)
export class TaskGetClient {
    constructor(private baseHttpClient: BaseHttpClient) { }

    getTasks() {
        this.baseHttpClient.http.fetch("tasks",
            {
                method: "get",
                headers: {
                    "content-type": "application/json"
                }
            });
    }
}