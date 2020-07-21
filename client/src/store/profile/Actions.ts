import { ActionTree } from 'vuex'
import axios from 'axios'
import { WriteLifeState } from './types'
import { RootState } from '../types'

export const actions: ActionTree<WriteLifeState, RootState> = {
    updateLoggedInStatus: ({commit}, status: string) => {
        commit('setLoggedInStatus', status)
    },

    updateUsername: ({commit}, username: string) => {
        commit('setUsername', username)
    }
}