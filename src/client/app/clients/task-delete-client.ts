import { autoinject } from "aurelia-framework";
import { BaseHttpClient } from "./base-http-client";

@autoinject(BaseHttpClient)
export class TaskDeleteClient {
    constructor(private baseHttpClient: BaseHttpClient) {}

    deleteTask(id: number) {
        this.baseHttpClient.http.fetch("tasks/${id}",
            {
                method: "delete"
            });
    }
}