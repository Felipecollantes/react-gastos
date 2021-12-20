import React, { useEffect, useState } from 'react'
import { Outlay } from '../../domain/models/Outlay'
import { outlayService } from '../../domain/services/Outlay.service'
import styles from './list.module.css'

export const List = () => {
  const [outlays, setOutlays] = useState<Outlay[]>([])
  const [arrayDife, setarrayDife] = useState(['Pera'])

  useEffect(() => {
    outlayService.getOutlays().then((data) => {
      //   console.log(data)
      //   data.forEach((resp) => {
      //     console.log(new Date(resp.date))
      //   })
      setOutlays(data.reverse())
    })
  }, [])

  //   async function getDatos() {
  //     const datosFetched = await outlayService.getOutlays()
  //     return console.log(datosFetched)
  //   }

  //   getDatos()

  //   const data = async () => {
  //     const datosFetched = await outlayService.getOutlays()
  //     return datosFetched
  //   }

  function calcularDiasAusencia(fechaIni: any, fechaFin: any) {
    // setOutlays({ ...outlays })
    console.log(outlays)
    let total = 0
    outlays.forEach((element) => {
      console.log(element.price)
      total = element.price + total
    })
    console.log(total)

    const equitativo = total / outlays.length
    console.log('CUANTO CADA UNO', equitativo)

    let diferencia = 0
    let arrayDif: number[] = []

    outlays.forEach((element) => {
      diferencia = equitativo - element.price
      console.log(diferencia)
      arrayDif.push(diferencia)
    })
    console.log('ARRAY DIFERENCIA', arrayDif)
    // setarrayDife([...arrayDife, 'Manzana'])

    // var fecha1 = new Date(
    //   fechaIni.substring(0, 4),
    //   fechaIni.substring(5, 7) - 1,
    //   fechaIni.substring(8, 10)
    // )
    // var fecha2 = new Date(
    //   fechaFin.substring(0, 4),
    //   fechaFin.substring(5, 7) - 1,
    //   fechaFin.substring(8, 10)
    // )
    // console.log('DATAarray AAA', getDatos())

    // var diasDif = fecha2.getTime() - fecha1.getTime()
    // var diasDif = fecha1.getTime() - fecha2.getTime()

    // console.log('Dias dif', diasDif)
    // var dias = Math.round(diasDif / (1000 * 60 * 60 * 24))

    // console.log('Dias', dias)

    const ahora = Date.now()
    console.log('Ahora', ahora)
    const fechita = new Date(ahora)
    console.log('FECHA', fechita)

    var startDate = new Date('2016-12-03 20:12:31')
    // Do your operations
    var endDate = new Date('2016-12-04 01:14:35')
    var seconds = (endDate.getTime() - startDate.getTime()) / 1000

    // console.log('fecha1', startDate)
    // console.log('fecha2', endDate)
    // console.log(seconds)

    // const segundos = diasDif / 1000
    // console.log('segundos', diasDif)

    const minutos = Math.trunc(seconds / 60)
    console.log('minutos', minutos)

    const horas = Math.trunc(minutos / 60)
    console.log('horas', horas)

    const dias = Math.trunc(horas / 24)
    console.log('Dias', dias)
    console.log('RESULTADOS====================')
    if (dias > 0) {
      return console.log('HACE', dias, 'dias(s)')
    } else if (dias === 0 && horas > 0) {
      return console.log('HACE', horas, 'hora(s)')
    } else if (dias === 0 && horas === 0 && minutos > 0) {
      return console.log('HACE', minutos, 'minuto(s)')
    } else {
      console.log('Hace unos segundos...')
    }
  }

  //calcularDiasAusencia("2016-10-30 20:14:30", "2016-11-03 20:14:35");  // (4 dias)30 de noviembre a 3 de diciembre
  calcularDiasAusencia('2016-12-03 20:12:31', '2016-12-03 20:14:35')

  return (
    <>
      <ul className={styles.group}>
        {outlays.map((outlay, indice) => (
          <li key={outlay.id} className={styles.item}>
            <p className={styles.center}>
              {indice + 1}. {outlay.namePerson} {outlay.nameOutlay} {outlay.price} {outlay.date}
            </p>
          </li>
        ))}
      </ul>
      <hr />
      <br />
    </>
  )
}
