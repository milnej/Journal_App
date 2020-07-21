import { GetterTree } from 'vuex'
import { WriteLifeState } from './types'
import { RootState } from '../types'

export const getters: GetterTree<WriteLifeState, RootState> = {
    getAccountStatus: (state: WriteLifeState) => {
        return state.accountStatus
    },

    getUsername: (state: WriteLifeState) => {
        return state.username
    }
}