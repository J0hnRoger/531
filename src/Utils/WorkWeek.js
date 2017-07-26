import Workout from './Workout'

/**
 * WorkWeek - Set a list of Workout with a position in one 5/3/1 cycle
 */
class WorkWeek {
    constructor(cyclePos, workouts) {
        this.cyclePos = cyclePos
        this.workouts = workouts.map(workout => new Workout(workout.name, workout.currentMax))
    }

    setWorkoutsWeight = () => {
        let percent = this.getFirstPercent()
        this.workouts.map(workout => workout.weight = workout.currentMax * percent )
    }

    getFirstPercent = () => {
        let percent
        switch(this.cyclePos) {
            case 1:
                percent = 0.65
                break
            case 2:
                percent = 0.7
                break
            case 3:
                percent = 0.75
                break
            default:
                percent = 0.4
                break
        }
        return percent
    }
}

export default WorkWeek