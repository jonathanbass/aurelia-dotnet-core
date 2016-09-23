export namespace Tasks {
    export class Task {
        constructor(id: number, description: string, completed: boolean) {
            this.id = id;
            this.description = description;
            this.completed = completed;
        }

        id: number;
        description: string;
        completed: boolean;
    }
}