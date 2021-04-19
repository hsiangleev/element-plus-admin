import { createStore, Store, useStore as baseUseStore } from 'vuex'
import layout from '/@/store/module/layout'
import { loadStorePage } from '/@/utils/tools'
const page = import.meta.globEager('./page/**/**.ts')

export const store = createStore<IState>({
    modules: {
        layout,
        ...loadStorePage(page)
    }
})

export function useStore(): Store<IState> {
    return baseUseStore()
}
