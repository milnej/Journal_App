import { ActionTree } from 'vuex'
import axios from 'axios'
import { WriteLifeState } from './types'
import { RootState } from '../types'

const urlPrefix = '/api/v1'

export const actions: ActionTree<WriteLifeState, RootState> = {
    updateAccountStatus({commit}, status: string) {
        commit('setAccountStatus', status)
    },

    updateUsername({commit}, username: string) {
        commit('setUsername', username)
    },

    async verifyAccount({commit}, payload: any) {
        const username: string = payload.username
        const password: string = payload.password
        // use axios to hit server to verify account
        try {
            const res = await axios.post(`${urlPrefix}/accounts/login`, {
                username: username,
                password: password
            })
            const status: string = res.data
            if (status == "success") {
                commit('setUsername', username)
                commit('setAccountStatus', 'true')
            } else {
                console.log(status)
                commit('setAccountStatus', 'failed')
            }
        } catch (err) {
            console.log(err)
        }
    },

    async createAccount({commit}, payload: any) {
        const username: string = payload.username
        const password: string = payload.password

        // use axios to hit server to create new account
        try {
            const res = await axios.put(`${urlPrefix}/accounts/create`, {
                username: username,
                password: password
            })
            const status: string = res.data
            if (status == "success") {
                commit('setUsername', username)
                commit('setAccountStatus', 'true')
            } else {
                console.log(status)
                commit('setAccountStatus', 'failed')
            }
        } catch (err) {
            console.log(err)
        }
    }
}