import Workout from './Workout'
import {WORKOUTS} from './531.const'

describe('Workout', () => {
    let workout = new Workout(WORKOUTS[1].name, WORKOUTS[1].currentMax)
    it('should have an exercice name', () => {
        expect(workout.name).toEqual(WORKOUTS[1].name)
    })

    it('should have a Record inside itself wich can be null', () => {
        expect(workout.record).toBeNull()
        workout.setRecord(150)
        expect(workout.record).toEqual(150)
    })


})