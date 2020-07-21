import { MutationTree } from 'vuex'
import { WriteLifeState } from './types'
import { loggedInStatusOptions } from '.'

export const mutations: MutationTree<WriteLifeState> = {
    setLoggedInStatus: (state: WriteLifeState, status: string) => {
        if (loggedInStatusOptions.includes(status)) {
            state.loggedInStatus = status
        }
        
    },

    setUsername: (state: WriteLifeState, username: string) => {
        state.username = username
    }
}