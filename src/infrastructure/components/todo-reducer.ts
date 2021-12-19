import * as uuid from 'uuid'
import { Outlay } from '../../domain/models/Outlay'

export const initialState = [
  {
    id: uuid.v4(),
    namePerson: '',
    nameOutlay: '',
    price: 0,
  },
]

export type ActionType = {
  type: 'add'
  payload: Outlay
}

export const todoReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload]

    default:
      return state
  }
}
