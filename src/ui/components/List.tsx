import React from 'react'
import { Outlay } from '../../domain/models/Outlay'
import styles from '../styles/list.module.css'
import { Expense } from './Expense'
import translate from '../../assets/i18n'

export const List = ({ outlays }: any) => {
  const getStyleGreen = () => {
    return styles.green
  }

  const getStyleRed = () => {
    return styles.red
  }
  console.log(outlays.length)

  return (
    <>
      <h4>{translate.LIST.TITLE}</h4>
      <hr />
      {outlays.length === 0 ? (
        <p>No hay gastos</p>
      ) : (
        outlays.map((outlay: Outlay) => <Expense key={outlay.id} outlay={outlay} />)
      )}
      <hr />
      <ul className={styles.group}>
        {outlays.map((outlay: Outlay) => (
          <li key={outlay.id} className={styles.item}>
            <p className={styles.center}>
              <b>{outlay.namePerson}: </b>{' '}
              <span className={outlay.diffPrice > 0 ? getStyleRed() : getStyleGreen()}>
                {outlay.diffPrice}€
              </span>
            </p>
          </li>
        ))}
      </ul>
    </>
  )
}
