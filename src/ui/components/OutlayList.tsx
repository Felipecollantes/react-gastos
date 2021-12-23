// Components
import { List } from './List'
import { Form } from './Form'
// Style
import styles from '../styles/outlayList.module.css'
// Hooks
import { useEffect, useState } from 'react'
// Services
import { outlayService } from '../../domain/services/Outlay.service'
//Models
import { Outlay } from '../../domain/models/Outlay'
import translate from '../../assets/i18n'
import { listService } from '../../domain/services/List.service'

export const OutlayList = () => {
  const [outlays, setOutlays] = useState<Outlay[]>([])

  useEffect(() => {
    callback()
  }, [])

  const callback = () => {
    outlayService.getOutlays().then((data) => {
      listService.calculo(data)
      data.forEach((respo) => {
        listService.parseDate(respo)
        setOutlays([...data].reverse())
      })
    })
  }

  return (
    <div>
      <h1>{translate.LIST.OUTLAYS}</h1>
      <hr />
      <div className={styles.group}>
        <div className={styles.form}>
          <Form outlays={outlays} parentCallBack={callback} />
        </div>
        <div className={styles.list}>
          <List outlays={outlays} />
        </div>
      </div>
    </div>
  )
}
