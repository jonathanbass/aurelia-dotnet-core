"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_fetch_client_1 = require("aurelia-fetch-client");
var App = (function () {
    function App(http) {
        this.message = "";
        http.configure(function (config) {
            config
                .withBaseUrl("http://localhost:5400/");
        });
        this.http = http;
    }
    App.prototype.activate = function () {
        this.message = "Hello, World!";
    };
    App.prototype.getSystem = function () {
        var _this = this;
        this.message = this.http.fetch("home")
            .then(function (response) { return response.json(); }).then(function (data) {
            _this.message = (data).system;
        });
    };
    App = __decorate([
        aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient)
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map