import React from 'react'
import translate from '../../assets/i18n'
import styles from '../styles/expense.module.css'

export const Expense = ({ outlay }: any) => {
  return (
    <ul className={styles.cards}>
      <li className={styles.item}>
        <div className={styles.card}>
          <div className={styles.content}>
            <span className={styles.text}>
              <b>{translate.LIST.PERSON}: </b>
              {outlay.namePerson}
            </span>
            <span className={styles.text}>
              <b>{translate.LIST.REASON}: </b>
              {outlay.nameOutlay}
            </span>
          </div>
          <div className={styles.contentt}>
            <span className={styles.text}>
              <b>{translate.LIST.OUTLAY}: </b>
              {outlay.price}€
            </span>
            <span className={styles.text}>{outlay.since}</span>
          </div>
        </div>
      </li>
    </ul>
    // <></>
  )
}
