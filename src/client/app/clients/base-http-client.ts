 import {autoinject} from "aurelia-framework";
 import {HttpClient} from "aurelia-fetch-client";

 @autoinject(HttpClient)
 export class BaseHttpClient {
     constructor(http: HttpClient) {
         http.configure(config => {
             config
                 .useStandardConfiguration()
                 .withBaseUrl("http://localhost:5400/")
                 .withDefaults({
                     headers: {
                         "Accept": "application/json"
                     }
                 });
         });

         this.http = http;
     }

     http: HttpClient;
 }