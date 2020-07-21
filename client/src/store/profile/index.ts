import { Module } from 'vuex'
import { getters } from './Getters';
import { actions } from './Actions';
import { mutations } from './Mutations';
import { WriteLifeState } from './types';
import { RootState } from '../types';

export const loggedInStatusOptions: Array<String> = [
  'false',
  'true',
  'in_progress'
]

export const state: WriteLifeState = {
    loggedInStatus: 'false',
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