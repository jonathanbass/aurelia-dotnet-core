System.register(["aurelia-framework", "aurelia-fetch-client"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1, aurelia_fetch_client_1;
    var App;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_fetch_client_1_1) {
                aurelia_fetch_client_1 = aurelia_fetch_client_1_1;
            }],
        execute: function() {
            App = class App {
                constructor(http) {
                    this.message = "";
                    http.configure(config => {
                        config
                            .withBaseUrl("http://localhost:5400/");
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
                getTasks() {
                    this.http.fetch("tasks/")
                        .then(response => response.json())
                        .then(data => {
                        this.message = data[0].description;
                    });
                }
            };
            App = __decorate([
                aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient), 
                __metadata('design:paramtypes', [(typeof (_a = typeof aurelia_fetch_client_1.HttpClient !== 'undefined' && aurelia_fetch_client_1.HttpClient) === 'function' && _a) || Object])
            ], App);
            exports_1("App", App);
        }
    }
    var _a;
});
