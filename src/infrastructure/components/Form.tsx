import React, { FormEvent } from 'react'
import { Outlay } from '../../domain/models/Outlay'
import * as uuid from 'uuid'
import { outlayService } from '../../domain/services/Outlay.service'
import { useForm } from '../../hooks/useForm'
import styles from './form.module.css'

export const Form = () => {
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
    }

    outlayService.addOutlay(newTodo)
    resetForm()
    // outlayService.getOutlays().then(setOutlays)
  }

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />

      <form onSubmit={onSubmit}>
        <input
          className={styles.input}
          type="text"
          name="namePerson"
          placeholder="Nombre de la persona"
          autoComplete="off"
          value={namePerson}
          onChange={onChange}
        />

        <input
          className={styles.input}
          type="text"
          name="nameOutlay"
          placeholder="Motivo del gasto"
          autoComplete="off"
          value={nameOutlay}
          onChange={onChange}
        />

        <input
          className={styles.input}
          type="number"
          name="price"
          placeholder="Cantidad"
          autoComplete="off"
          value={price || ''}
          onChange={onChange}
        />

        <button type="submit" className="btn btn-outline-primary mt-1 w-100">
          Agregar
        </button>
      </form>
    </>
  )
}
