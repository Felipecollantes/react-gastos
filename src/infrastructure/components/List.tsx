import React from 'react'
import { Outlay } from '../../domain/models/Outlay'
import styles from './list.module.css'
import { Expense } from './Expense'
import { Props } from '../../domain/models/Props'
import translate from '../../i18n'

export const List = ({ outlays, setOutlays }: Props) => {
  return (
    <>
      <h4>{translate.LIST.TITLE}</h4>
      <hr />
      <ul className={styles.group}>
        {outlays.map((outlay: Outlay, indice: number) => (
          <Expense key={outlay.id} outlay={outlay} setOutlays={setOutlays} />
        ))}
      </ul>
      <hr />
      <br />
      <ul className={styles.group}>
        {outlays.map((outlay: Outlay, indice: number) => (
          <li key={outlay.id} className={styles.item}>
            <p className={styles.center}>
              <b>{outlay.namePerson}: </b> {outlay.diffPrice}
            </p>
          </li>
        ))}
      </ul>
    </>
  )
}
