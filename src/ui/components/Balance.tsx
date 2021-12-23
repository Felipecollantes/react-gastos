import React from 'react'
import translate from '../../assets/i18n'
import styles from '../styles/balance.module.css'

export const Balance = ({ outlay }: any) => {
  const getStyleGreen = () => {
    return styles.green
  }

  const getStyleRed = () => {
    return styles.red
  }

  return (
    <div>
      <li key={outlay.id} className={styles.item}>
        <p className={styles.center}>
          <b>{outlay.namePerson}: </b>{' '}
          <span className={outlay.diffPrice > 0 ? getStyleRed() : getStyleGreen()}>
            {outlay.diffPrice}
            {translate.GLOBAL.EUR}
          </span>
        </p>
      </li>
    </div>
  )
}
