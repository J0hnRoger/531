// Une WorkWeek est composée d'un numéro (position dans le cycle), 
// ainsi que d'une liste de 4 Workout (chacun avec une exo, ainsi qu'un Record qui est null si la séance n'a pas été effectuée)
// on défini le nombre de reps à faire en fonction de la cyclepos et les poids en fonction de la cyclePos 
import WorkWeek from './WorkWeek'
import {WORKOUTS, CYCLE_POS} from './531.const'

describe('WorkWeek', () => {
    let week = new WorkWeek(CYCLE_POS, WORKOUTS)
    it ('to have a cycle position', () => {
        expect(week.cyclePos).toEqual(2)
    })

    it ('to have a list of workouts', () => {
        expect(week.workouts.length).toEqual(4)
    })

    it ('to deduct the correct percent in function of the week position in the cycle', () => {
        let first = new WorkWeek(1, []) 
        expect(first.getFirstPercent()).toEqual(0.65)
        let second = new WorkWeek(2, []) 
        expect(second.getFirstPercent()).toEqual(0.7)
        let third = new WorkWeek(3, []) 
        expect(third.getFirstPercent()).toEqual(0.75)
        let fourth = new WorkWeek(4, []) 
        expect(fourth.getFirstPercent()).toEqual(0.4)
    })

    it ('with correct weight set in function of the %', () => {
        week.setWorkoutsWeight()         
        let workout = week.workouts[0]
        expect(workout.weight).toEqual(week.getFirstPercent() * workout.currentMax )
    })
})