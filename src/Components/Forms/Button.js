import React from 'react'
import styles from './Button.module.css'

const Button = function ({ children, props }) {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  )
}

export default Button
