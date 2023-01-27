module.exports = (componentName) => `import { memo } from 'react'
import { classNames } from 'classNames'

import styles from './${componentName}.module.scss'

export const ${componentName} = memo((props) => {
  const { className } = props

  return (
    <div className={classNames(styles.${componentName}, {}, [className])}>
    </div>
  )
})
`
