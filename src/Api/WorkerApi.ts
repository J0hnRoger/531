/**
 * API Classe must return current Worker informations
 */
import axios from 'axios'

class WorkerApi {
    public GetCurrentWorker (login: string, password: string) {
        return axios.post('http://localhost:3000/workers/login', {
            login,
            password
        })
        .then(function (response) {
            debugger
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}

 export default new WorkerApi();