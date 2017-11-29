/**
 * Worker represents the user with his program
 */

 class Worker {
    Id: number;
    Login: string;
    program: null;
    planning: null;

    constructor(json: any) {
        this.Login = json.Login;
        this.Id = json.Id;
    }
 }

 export default Worker;