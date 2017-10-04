/**
 * API Classe must return current Worker informations
 */

 import Worker from '../Entities/Worker';

 class WorkerApi {
     static GetCurrentWorker (login: string, password: string) {
       setTimeout(() => {
        return new Worker('John Doe');
       }, 1000)
     }
 }

 export default new WorkerApi();