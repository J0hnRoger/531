import {WORKOUTS} from './531.const'

import WorkWeek from './WorkWeek'

class Worker {
    constructor(login) {
        this.login = login
    }

    loadWorkWeek = () => {
        this.WorkWeek = new WorkWeek(1, WORKOUTS)
    }
}

export default Worker