import { MutationTree } from 'vuex'
import { State, TodoItem } from './state'

export enum MutationType {
  CreateItem = 'CREATE_ITEM',
  SetItems = 'SET_ITEMS',
  CompleteItem = 'COMPLETE_ITEM',
  SetLoading = 'SET_LOADING'
}

export type Mutations = {
  [MutationType.CreateItem](state: State, item: TodoItem): void
  [MutationType.SetItems](state: State, items: TodoItem[]): void
  [MutationType.CompleteItem](
    state: State,
    item: Partial<TodoItem> & { id: number }
  ): void
  [MutationType.SetLoading](state: State, value: boolean): void
}


}
