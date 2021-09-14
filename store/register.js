import axios from 'axios'
const registerUrl = 'http://localhost:1337/auth/local/register'
const baseUrl = 'http://localhost:1337/auth/local'
const testUser = {
    username: 'Strapi user',
    email: 'grafuxa@gmail.com',
    password: 'strapiPassword',
}

export const state = () => ({
    isLoggedByJwt: '',
    status: false,
})

export const actions = {
    async registerUser({ commit }, user) {
        try {
            const register = await axios.post(`${baseUrl}/register , ${user}`)
            if (register.status === 200) {
                commit('IS_SUCCESS_REGISTERED', true)
                commit('SET_JWT', register.data.jwt)
            }
            return register
        } catch (err) {
            console.log(err, 'There is a error in register ')
        }
    },
    async loginUser({ commit }) {
        try {
            const login = await axios.post(baseUrl, {
                identifier: 'email@strapis.io',
                password: 'Alen023',
            })
            if (!login.data.status === 200) return
            commit('SET_JWT', login.data.jwt)
            console.log(login.data.jwt)

            return login
        } catch (err) {
            console.log(err, 'from Login')
        }
    },
}

export const mutations = {
    IS_SUCCESS_REGISTERED(state, status) {
        state.status = status
    },
    SET_JWT(state, jwt) {
        state.isLoggedByJwt = jwt
    },
}