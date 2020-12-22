class Test{
    private _name: string
    private _age: number

    public get name() {
        return this._name
    }
    public get age() {
        return this._age
    }

    constructor() {
        this._name = 'aa'
        this._age = 1
    }

    public add(state) {
        this._age++
    }
}
export const test: Test = new Test()