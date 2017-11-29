/**
 * API Classe must return current Worker informations
 */
import config from '../config'
import axios from 'axios'

class WorkerApi {
    public GetCurrentWorker (login: string, password: string) {
        return axios.post(`${config.webApiUrl}/workers/login`, {
            login,
            password
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
}

 export default new WorkerApi();