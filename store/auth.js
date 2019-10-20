export const state = () => ({
    token: null
})

export const mutations = {
    setToken(state, token) {
        state.token = token
    }
}

export const actions = {
    async login({ commit, dispatch }, formData) {
        const token = await new Promise(resolve => {
            () => resolve('mock-token')
        })
        dispatch('setToken', token)
        console.log(token)
    },
    setToken({ commit }, token) {
        commit('setToken', token)
    }

}

export const getters = {
    isAuthenticated: state => Boolean(state.token)
}