import * as uuid from 'uuid'
import { List } from "../models/List"
import { Outlay } from "../models/Outlay"

const createList = (outlay: Outlay) => ({
    id: uuid.v4(),
    items: [outlay]
  })
  
  const increaseList = (list: List, outlay: Outlay) => ({
    ...list,
    items: [...list.items, outlay]
  })
  
  const addOutlayToList = (outlay: Outlay, list?: List): List =>
    list
      ? increaseList(list, outlay)
      : createList(outlay)
  
  export const listService = {
    addOutlayToList
  }
  