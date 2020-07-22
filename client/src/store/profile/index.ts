import { Module } from 'vuex'
import { getters } from './Getters';
import { actions } from './Actions';
import { mutations } from './Mutations';
import { WriteLifeState } from './types';
import { RootState } from '../types';

export const AccountStatusOptions: Array<string> = [
  'false',
  'true',
  'pending', // while passing credentials
  'creating', // while creating new account
  'failed', // if there is an issue logging in
]

export const state: WriteLifeState = {
    accountStatus: 'false',
    username: '',
}

const namespaced = true

export const profile: Module<WriteLifeState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}