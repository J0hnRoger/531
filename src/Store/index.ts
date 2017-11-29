import {UserState} from './userState'; 
import {ApplicationState} from './appState'; 

export {UserState} from './userState'; 
export {ApplicationState} from './appState'; 

export default interface RootState {
    app: ApplicationState;
    users: UserState;
}