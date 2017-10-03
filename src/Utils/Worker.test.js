import Worker from './Worker'

describe("Worker ", () => {
    it("has a login", () => {
        let login = "John"
        let worker = new Worker(login)
        expect(worker.login).toEqual(login)
    })

    it("contains his/her WorkWeek", () => {
        let login = "John"
        let worker = new Worker(login)
        expect(worker.WorkWeek).toBeUndefined()
        worker.loadWorkWeek()
        expect(worker.WorkWeek).not.toBeUndefined()
    })
})