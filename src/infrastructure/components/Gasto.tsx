import React from 'react'
import styles from './list.module.css'

export const Gasto = ({ outlay, setOutlays }: any) => {
  return (
    <li key={outlay.id} className={styles.item}>
      <ul className={styles.center}>
        <li>
          <b>Persona: </b> {outlay.namePerson}
        </li>
        <li>
          <b>Motivo: </b>
          {outlay.nameOutlay}
        </li>
        <li>
          <b>Gasto: </b>
          {outlay.price}
        </li>
        <li>
          <b>Fecha: </b>
          {outlay.since}
        </li>
      </ul>
    </li>
  )
}
