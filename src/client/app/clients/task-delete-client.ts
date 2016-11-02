import {autoinject} from "aurelia-framework";
import {HttpClient} from "aurelia-fetch-client";

@autoinject(HttpClient)
export class TaskDeleteClient {
    constructor(private http: HttpClient) {}

    deleteTask(desc: string) {
        return this.http.fetch(`tasks/${desc}`,
            {
                method: "delete"
            });
    }
}