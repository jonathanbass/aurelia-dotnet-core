import {Aurelia, Container} from "aurelia-framework";
import {HttpClient} from "aurelia-fetch-client";

export function configure(aurelia: Aurelia) {
    configureContainer(aurelia.container);

    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    aurelia.start().then(a => a.setRoot("todo-list", document.body));
}

function configureContainer(container: Container) {
    const http = new HttpClient();
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

    container.registerInstance(HttpClient, http);
}