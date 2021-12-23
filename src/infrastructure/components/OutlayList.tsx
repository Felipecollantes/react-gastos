// Components
import { List } from './List'
import { Form } from './Form'
// Style
import styles from './outlayList.module.css'
// Hooks
import { useEffect, useState } from 'react'
// Services
import { outlayService } from '../../domain/services/Outlay.service'
//Models
import { Outlay } from '../../domain/models/Outlay'
import translate from '../../i18n'

export const OutlayList = () => {
  const [outlays, setOutlays] = useState<Outlay[]>([])

  useEffect(() => {
    callback()
  }, [])

  const parseDate = (respo: any) => {
    const ahora = Date.now()
    const fechita = new Date(ahora)

    let seconds: number
    let minutes: number
    let hours: number
    let days: number
    const parseDate = new Date(respo.date)
    seconds = (fechita.getTime() - parseDate.getTime()) / 1000
    minutes = Math.trunc(seconds / 60)
    hours = Math.trunc(minutes / 60)
    days = Math.trunc(hours / 24)
    let result: string
    if (days > 0) {
      result = 'Hace ' + String(days) + ' dia(s)'
    } else if (days === 0 && hours > 0) {
      result = 'Hace ' + String(hours) + ' hora(s)'
    } else if (days === 0 && hours === 0 && minutes > 0) {
      result = 'Hace ' + String(minutes) + ' minuto(s)'
    } else {
      result = 'Hace unos segundos...'
    }
    respo.since = result
  }

  const calculo = (data: Outlay[]) => {
    console.log(data)
    let total = 0
    data.forEach((element: Outlay) => {
      total += +element.price
    })
    console.log('[Calculo]', 'TOTAL', total)

    const equitativo = total / data.length
    console.log('[Calculo]', 'equitativo', equitativo)

    let diferencia = 0
    let arrayDif: number[] = []

    data.forEach((element: Outlay) => {
      diferencia = equitativo - element.price
      diferencia = Math.round(diferencia * 100) / 100
      console.log('[Calculo]', 'diferencia', diferencia)

      element.diffPrice = diferencia
      arrayDif.push(diferencia)
    })
    console.log('ARRAY DIFERENCIA', arrayDif)
    console.log('DATA', data)
    // setOutlays(data)
  }

  const callback = () => {
    outlayService.getOutlays().then((data) => {
      calculo(data)
      data.forEach((respo) => {
        parseDate(respo)
        setOutlays([...data].reverse())
      })
    })
    // console.log(newOutlay)
    // calculo(newOutlay)
    // setOutlays([...outlays, newOutlay].reverse())
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
