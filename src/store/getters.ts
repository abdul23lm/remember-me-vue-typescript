import { GetterTree } from 'vuex'
import { State } from './state'

export type Getters = {
  completedCount(state: State): number
  totalCount(state: State): number
}

export const getters: GetterTree<State, State> & Getters = {

  totalCount(state) {
    return state.items.length
  }
}
