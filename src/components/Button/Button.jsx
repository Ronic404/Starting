import { memo } from 'react'
import { classNames } from 'classNames'

import styles from './Button.module.scss'

export const Button = memo((props) => {
  const { className } = props

  return (
    <div className={classNames(styles.Button, {}, [className])}>
    </div>
  )
})
