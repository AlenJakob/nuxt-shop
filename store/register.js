import axios from 'axios'
const registerUrl = 'http://localhost:1337/auth/local/register'

const testUser = {
    username: 'Strapi user',
    email: 'user@strapi.io',
    password: 'strapiPassword',
}

export const state = () => ({
    isLoggetByJwt: {},
    status: false,
})

export const actions = {
    async registerUser({ commit, state, dispatch }, user) {
        console.log(user)
        try {
            const register = await axios.post(registerUrl, user)
            if (register.status === 200) {
                commit('IS_SUCCESS_REGISTERED', true)
                console.log(state.status)
            }
            console.log(register.data)
            console.log(register)
            return register
        } catch (err) {
            console.log(err, 'There is a error in register ')
        }
    },
}

export const mutations = {
    IS_SUCCESS_REGISTERED(state, status) {
        state.status = status
    },
}