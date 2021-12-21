import { List } from './List'
import { Form } from './Form'
import styles from './outlayList.module.css'
import { useEffect, useState } from 'react'
import { Outlay } from '../../domain/models/Outlay'
import { outlayService } from '../../domain/services/Outlay.service'

export const OutlayList = () => {
  const [outlays, setOutlays] = useState<Outlay[]>([])
  useEffect(() => {
    outlayService.getOutlays().then((data) => {
      calculo(data)
      data.forEach((respo) => {
        parseDate(respo)
        setOutlays([...data].reverse())
      })
    })
  }, [])
  // console.log(outlays)

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
      // console.log('PRECIO', element.price)
      total = element.price + total
    })
    console.log('TOTAL', total)

    const equitativo = total / data.length
    // console.log('CUANTO CADA UNO', equitativo)

    let diferencia = 0
    let arrayDif: number[] = []

    data.forEach((element: Outlay) => {
      diferencia = equitativo - element.price
      // console.log(diferencia)
      // setDiferencias([...diferencias, diferencia])
      element.diffPrice = diferencia
      arrayDif.push(diferencia)
    })

    // console.log('ARRAY DIFERENCIA', arrayDif)
    // setDiferencias(arrayDif)
    // console.log(diferencias)
    // console.log(diferencias)
  }

  return (
    <div>
      <h1>Gastos</h1>
      <hr />
      <div className={styles.group}>
        <div className={styles.form}>
          <Form outlays={outlays} setOutlays={setOutlays} />
        </div>
        <div className={styles.list}>
          <List outlays={outlays} setOutlays={setOutlays} />
        </div>
      </div>
    </div>
  )
}
