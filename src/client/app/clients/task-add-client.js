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
    var TaskAddClient;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_fetch_client_1_1) {
                aurelia_fetch_client_1 = aurelia_fetch_client_1_1;
            }],
        execute: function() {
            TaskAddClient = class TaskAddClient {
                constructor(http) {
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
                addTask(taskToAdd, id) {
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
                        .then(response => { })
                        .then(data => {
                        //this.message = data[0].description;
                    });
                }
            };
            TaskAddClient = __decorate([
                aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient),
                aurelia_framework_1.singleton(), 
                __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient])
            ], TaskAddClient);
            exports_1("TaskAddClient", TaskAddClient);
        }
    }
});
