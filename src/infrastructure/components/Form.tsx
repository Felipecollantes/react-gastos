import React, { FormEvent } from 'react'
import { Outlay } from '../../domain/models/Outlay'
import * as uuid from 'uuid'
import { outlayService } from '../../domain/services/Outlay.service'
import { useForm } from '../../hooks/useForm'
import styles from './form.module.css'
import { Props } from '../../domain/models/Props'
import translate from '../../i18n'

export const Form = ({ outlays, setOutlays }: Props) => {
  const { formData, onChange, resetForm, namePerson, nameOutlay, price } = useForm({
    namePerson: '',
    nameOutlay: '',
    price: 0,
    date: 0,
  })

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData)

    const newTodo: Outlay = {
      id: uuid.v4(),
      namePerson: namePerson,
      nameOutlay: nameOutlay,
      price: price,
      date: Date.now(),
      since: 'Hace unos segundos...',
      diffPrice: 0,
    }

    outlayService.addOutlay(newTodo)
    resetForm()

    setOutlays([...outlays, newTodo].reverse())
    // calculo(outlays)
  }

  // const calculo = (outlays: any) => {
  //   console.log('[Calculo]', outlays)
  //   let total = 0
  //   outlays.forEach((element: any) => {
  //     // console.log('PRECIO', element.price)
  //     total = element.price + total
  //   })
  //   console.log('[Calculo]', 'TOTAL', total)

  //   const equitativo = total / outlays.length
  //   // console.log('CUANTO CADA UNO', equitativo)

  //   let diferencia = 0
  //   let arrayDif: number[] = []

  //   outlays.forEach((element: any) => {
  //     diferencia = equitativo - element.price
  //     console.log('[Calculo]', diferencia)
  //     // setDiferencias([...diferencias, diferencia])
  //     element.diffPrice = diferencia
  //     arrayDif.push(diferencia)
  //   })

  //   // console.log('ARRAY DIFERENCIA', arrayDif)
  //   // setDiferencias(arrayDif)
  //   // console.log(diferencias)
  //   // console.log(diferencias)
  // }

  return (
    <>
      <h4>{translate.FORM.TITLE}</h4>
      <hr />

      <form onSubmit={onSubmit}>
        <input
          data-testid="namePerson"
          className={styles.input}
          type="text"
          name="namePerson"
          placeholder={translate.FORM.INPUT_PERSON}
          autoComplete="off"
          value={namePerson}
          onChange={onChange}
          required
        />

        <input
          className={styles.input}
          type="text"
          name="nameOutlay"
          placeholder={translate.FORM.INPUT_OUTLAY}
          autoComplete="off"
          value={nameOutlay}
          onChange={onChange}
          required
        />

        <input
          className={styles.input}
          type="number"
          name="price"
          placeholder={translate.FORM.INPUT_AMOUNT}
          autoComplete="off"
          value={price || ''}
          onChange={onChange}
          required
        />

        <button type="submit" className={styles.button}>
          {translate.FORM.BUTTON}
        </button>
      </form>
    </>
  )
}
