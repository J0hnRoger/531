class Workout {
    constructor(name) {
        this.name = name
        this.record = null
    }

    setRecord = (record) => {
        this.record = record
    }
}

export default Workout