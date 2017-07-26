/**
 * WebApi -> Me donne en fonction du Worker, le TM et la workweek
 * Une WorkWeek est composée d'un numéro (position dans le cycle), ainsi que d'une liste de 4 Workout (chacun avec une exo, ainsi qu'un Record qui est null si la séance n'a pas été effectuée) 
 * 
 * 5/3/1 Calculator Tests
 * Input : 4 max, numero de semaine 
 * - Calcul le training max (TM) // Done
 * - En fonction du TM, calcul un Cycle de 4 semaines de W // Delegate to 531Planner
 * - Pour chaque semaine de travail, on a 4 workout (1 par Exercice) // 
 * - Une fois qu'un workout est effectué (un Record est enregistré, on le raye de la semaine de travail)
 * - Un workout est composé de 3 Série d'un Exercice donné, avec un poid qui est un pourcentage du 1TM
 * -  
 * - Ce pourcentage change en fonction de la semaine de travail :
 *      - 1/4 semaine : 5x (65% / 75% / 5+ x 85%)    
 *      - 2/4 semaine : 3 x (70% / 80%) / 3+ 90%    
 *      - 3/4 semaine : 5 x 75% / 3 x 85% / 1+ x 95%
 *      - 4/4 semaine : 5x (40% / 50% / 60%) //Deload
 */

import Calculator from './531Calculator'
import {WORKOUTS, CYCLE_POS} from './531.const'

import Workout from './Workout'
import WorkWeek from './WorkWeek'

describe('531Calculator', () => {
    test('must give me my TM for 1RM, (90% of my 1RM)', () => {
        // Render a checkbox with label in the document
        let Max = 100
        let calculator = new Calculator(Max)
        expect(calculator.TM).toEqual(Max*0.9);
    })

    test('must give me a WorkWeek for the current week', () => {
        let max = 100

        let workouts = WORKOUTS.map(workout => new Workout(workout.name, workout.currentMax))
        let workWeek = new WorkWeek(CYCLE_POS, workouts) // second week of the current cycle
        let calculator = new Calculator(max)
    }) 
})