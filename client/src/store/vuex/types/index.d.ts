import { Action, Mutation, Getter, ModuleTree } from 'vuex'

export interface ActionTree<S,R> {
    [key: string]: Action<S,R>
}

export interface GetterTree<S,R> {
    [key: string]: Getter<S,R>
}

export interface MutationTree<S> {
    [key: string]: Mutation<S>
}

export interface Module<S,R> {
    namespaced?: boolean
    state?: S | (() => S)
    gatters?: GetterTree<S,R>
    actions?: ActionTree<S,R>
    mutations?: MutationTree<S>
    modules?: ModuleTree<R>
}