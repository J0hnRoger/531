/**
 * API Classe must return current Worker informations
 */

 import Worker from '../Entities/Worker';

 class WorkerApi {
     public GetCurrentWorker (login: string, password: string) {
       return new Promise((resolve) => {
           resolve(new Worker('John Doe'))
       });
     }
 }

 export default new WorkerApi();