import { GetterTree } from 'vuex'
import { WriteLifeState } from './types'
import { RootState } from '../types'

export const getters: GetterTree<WriteLifeState, RootState> = {
    getLoggedInStatus: (state: WriteLifeState) => {
        return state.loggedInStatus
    },

    getUsername: (state: WriteLifeState) => {
        return state.username
    }
}