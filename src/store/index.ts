import { createStore, Store, useStore as baseUseStore } from 'vuex'
import layout from '/@/store/module/layout'
import { IState } from '/@/global'

export const store = createStore<IState>({
    modules: {
        layout
    }
})

export function useStore(): Store<IState> {
    return baseUseStore()
}
