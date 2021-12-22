import React from 'react'
import translate from '../../i18n'
import styles from './list.module.css'

export const Expense = ({ outlay }: any) => {
  return (
    <li key={outlay.id} className={styles.item}>
      <ul className={styles.center}>
        <li>
          <b>{translate.LIST.PERSON}: </b> {outlay.namePerson}
        </li>
        <li>
          <b>{translate.LIST.REASON}: </b>
          {outlay.nameOutlay}
        </li>
        <li>
          <b>{translate.LIST.OUTLAY}: </b>
          {outlay.price}
        </li>
        <li>
          <b>{translate.LIST.DATE}: </b>
          {outlay.since}
        </li>
      </ul>
    </li>
  )
}
