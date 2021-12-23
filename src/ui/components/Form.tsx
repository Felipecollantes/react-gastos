import React, { FormEvent } from 'react'
import { Outlay } from '../../domain/models/Outlay'
import * as uuid from 'uuid'
import { outlayService } from '../../domain/services/Outlay.service'
import { useForm } from '../../domain/hooks/useForm'
import styles from '../styles/form.module.css'
import translate from '../../assets/i18n'

export const Form = ({ parentCallBack }: any) => {
  const { formData, onChange, resetForm, namePerson, nameOutlay, price } = useForm({
    namePerson: '',
    nameOutlay: '',
    price: 0,
    date: 0,
  })

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData)

    const newOutlay: Outlay = {
      id: uuid.v4(),
      namePerson: namePerson,
      nameOutlay: nameOutlay,
      price: price,
      date: Date.now(),
      since: 'Hace unos segundos...',
      diffPrice: 0,
    }

    outlayService.addOutlay(newOutlay)

    parentCallBack()
    resetForm()
  }
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
