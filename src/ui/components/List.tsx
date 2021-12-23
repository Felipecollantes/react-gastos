import React from 'react'
import { Outlay } from '../../domain/models/Outlay'
import styles from '../styles/list.module.css'
import { Expense } from './Expense'
import translate from '../../assets/i18n'
import { Balance } from './Balance'

type OutlayProp = {
  outlays: Outlay[]
}
export const List = ({ outlays }: OutlayProp) => {
  return (
    <>
      <h4>{translate.LIST.TITLE_OUTLAYS}</h4>
      <hr />
      {outlays.length === 0 ? (
        <p className={styles['not-outlays']}>{translate.LIST.NOT_OUTLAYS}</p>
      ) : (
        outlays.map((outlay: Outlay) => <Expense key={outlay.id} outlay={outlay} />)
      )}
      <h4>{translate.LIST.TITLE_BALANCE}</h4>
      <hr />
      <ul className={styles.group}>
        {outlays.map((outlay: Outlay) => (
          <Balance key={outlay.id} outlay={outlay} />
        ))}
      </ul>
    </>
  )
}
