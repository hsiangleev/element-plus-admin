import { IProject } from '/@/type/store/page'
const state:IProject = {
    projcode: ''
}

const mutations = {
    setProjcode(state: IProject, projcode: string):void {
        state.projcode = projcode
    }
}

const actions = {
    
}

const layoutState = {
    namespaced: true,
    state,
    mutations,
    actions
}

export default layoutState