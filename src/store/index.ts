import { createStore, Store, useStore as baseUseStore } from 'vuex'
import layout from '@src/store/module/layout'
import { IState } from '@src/type/store/index'

export const store = createStore<IState>({
    modules: {
        layout
    }
})

export function useStore(): Store<IState> {
    return baseUseStore()
}
