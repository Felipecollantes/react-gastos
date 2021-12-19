import { Prueba } from '../../domain/models/Prueba'
import * as uuid from 'uuid'

export const initialState = [
  {
    id: uuid.v4(),
    desc: 'Aprender React',
    done: false,
  },
]

export type ActionType = {
  type: 'add'
  payload: Prueba
}

export const todoReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload]

    default:
      return state
  }
}
