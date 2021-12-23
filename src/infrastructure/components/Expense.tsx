import React from 'react'
import translate from '../../i18n'
import styles from './expense.module.css'

export const Expense = ({ outlay }: any) => {
  return (
    // <li key={outlay.id} className={styles.item}>
    // <ul className={styles.card}>
    //   <li>
    //     <b>{translate.LIST.PERSON}: </b> {outlay.namePerson}
    //   </li>
    //   <li>
    //     <b>{translate.LIST.REASON}: </b>
    //     {outlay.nameOutlay}
    //   </li>
    //   <li>
    //     <b>{translate.LIST.OUTLAY}: </b>
    //     {outlay.price}
    //   </li>
    //   <li>
    //     <b>{translate.LIST.DATE}: </b>
    //     {outlay.since}
    //   </li>
    // </ul>
    // </li>
    <ul className={styles.cards}>
      <li className={styles.item}>
        <div className={styles.card}>
          <div className={styles.content}>
            {/* <div className={styles.title}>Indice</div> */}
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
            <span className={styles.text}>
              {/* <b>{translate.LIST.DATE}: </b> */}
              {outlay.since}
            </span>
          </div>
        </div>
      </li>
    </ul>
    // <></>
  )
}
