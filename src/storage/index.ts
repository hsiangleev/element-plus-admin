import { reactive, readonly } from 'vue'
// import { test, ITest, mutations } from '/@/storage/module/test'

interface IState{
    age: number
    name: string
}


class Store{
    protected state: IState
    data: IState
    constructor() {
        this.state = reactive({
            age: 0,
            name: 'aaa'
        })
        this.data = readonly(this.state)
    }
    getState() {
        return readonly(this.state)
    }
    add() {
        this.state.age++
    }
}

export const store:Store = new Store()