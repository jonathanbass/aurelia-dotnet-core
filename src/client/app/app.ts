import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-fetch-client";

@inject(HttpClient)
export class App {
    constructor(http: HttpClient) {
        this.message = "";
        http.configure(config => {
            config
                .withBaseUrl("http://localhost:5400/");
        });

        this.http = http;
    }

    message: string;
    http: HttpClient;

    activate() {
        this.message = "Hello, World!";
    }

    getSystem() {
        this.message = this.http.fetch("home")
            .then(response => response.json()).then(data => {
                this.message = ( data).system;
            })
    }
}