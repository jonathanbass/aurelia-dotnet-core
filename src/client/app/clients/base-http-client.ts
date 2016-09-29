// import {inject} from "aurelia-framework";
// import {HttpClient, json} from "aurelia-fetch-client";
// import {Task} from "./Task";

// @inject(HttpClient)
// export class BaseHttpClient {
//     constructor(http: HttpClient) {
//         http.configure(config => {
//             config
//                 .useStandardConfiguration()
//                 .withBaseUrl("http://localhost:5400/")
//                 .withDefaults({
//                     headers: {
//                         'Accept': 'application/json',
//                     }
//                 });
//         });

//         this.http = http;
//     }

//     http: HttpClient;
// }