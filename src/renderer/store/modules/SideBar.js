const state = {
    ref: {}
}

const actions = {
    toggleSideBar: ({
        commit
    }) => commit('TOGGLE_SIDE_BAR'),
    storeRef: ({
        commit
    }, ref) => commit('STORE_REF', ref)

}

const mutations = {
    TOGGLE_SIDE_BAR(state) {
        state.ref.sidebar = !state.ref.sidebar
    },
    STORE_REF(state, ref) {
        state.ref = ref
    }
}

const getters = {
    user: state => state.username
}

export default {
    state,
    actions,
    mutations,
    getters
}