
const TRAINING_MAX_PERCENT = 0.9

class Calculator {
    constructor(Max) {
        this.TM = Max * TRAINING_MAX_PERCENT
    }
}

export default Calculator