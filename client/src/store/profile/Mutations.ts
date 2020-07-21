import { MutationTree } from 'vuex'
import { WriteLifeState } from './types'
import { AccountStatusOptions } from '.'

export const mutations: MutationTree<WriteLifeState> = {
    setAccountStatus: (state: WriteLifeState, status: string) => {
        if (AccountStatusOptions.includes(status)) {
            state.accountStatus = status
        }
        
    },

    setUsername: (state: WriteLifeState, username: string) => {
        state.username = username
    }
}