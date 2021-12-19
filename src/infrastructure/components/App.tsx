import { FC, useState } from 'react'
import { List } from '../../domain/models/List'
import { Outlay } from '../../domain/models/Outlay'
import { listService } from '../../domain/services/List.service'
import { OutlayList } from './OutlayList'

type AppProps = {
  msg: string
}

const App: FC<AppProps> = ({ msg }) => {
  // const [list, setList] = useState<List | undefined>(undefined)

  // const handleAddToCart = (outlay: Outlay) => {
  //   setList(listService.addOutlayToList(outlay, list))
  // }

  return (
    <div className="App">
      <OutlayList />
    </div>
  )
}

export default App
