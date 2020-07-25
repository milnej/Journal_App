import { ActionTree } from 'vuex'
import axios from 'axios'
import { WriteLifeState } from './types'
import { RootState } from '../types'

export const actions: ActionTree<WriteLifeState, RootState> = {
    updateAccountStatus: ({commit}, status: string) => {
        commit('setAccountStatus', status)
    },

    updateUsername: ({commit}, username: string) => {
        commit('setUsername', username)
    },

    verifyAccount: ({commit}, payload: any) => {
        const username: string = payload.username
        const password: string = payload.password

        // use axios to hit server to verify account

        // Success
        commit('setUsername', username)
        commit('setAccountStatus', 'true')
    },

    createAccount: ({commit}, payload: any) => {
        const username: string = payload.username
        const password: string = payload.password

        // use axios to hit server to create new account

        // Successful creation
        commit('setUsername', username)
        commit('setAccountStatus', 'true')
    }
}