const state = {
    username: 'Guest',
    isAuthenticated: false
}

const mutations = {
    AUTHENTICATE(state, value) {
        isAuthenticated = true
        username = value.username
    },
    LOGOFF(state) {
        isAuthenticated = false
        username = 'Guest'
    }
}

const actions = {
    auth({
        commit
    }, value) {
        commit('AUTHENTICATE', user)
    }
}

const getters = {
    username: (state) => state.username
}

export default {
    state,
    mutations,
    actions,
    getters
}