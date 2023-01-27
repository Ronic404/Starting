import { memo } from 'react'
import { classNames } from 'classNames'

import styles from './MainPage.module.scss'

export const MainPage = memo((props) => {
  const { className } = props

  return (
    <div className={classNames(styles.MainPage, {}, [className])}>
    </div>
  )
})
