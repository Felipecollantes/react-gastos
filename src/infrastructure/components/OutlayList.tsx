import { List } from './List'
import { Form } from './Form'
import styles from './outlayList.module.css'

export const OutlayList = () => {
  return (
    <div>
      <h1>TODOApp</h1>
      <hr />
      <div className={styles.group}>
        <div className={styles.list}>
          <List />
        </div>
        <div className={styles.form}>
          <Form />
        </div>
      </div>
    </div>
  )
}
