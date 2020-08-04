import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Header.module.css"
import { ReactComponent as Logo } from "../../Assets/dogs.svg"

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Doggo | Home">
          <Logo/>
        </Link>
        <Link className={styles.login} to="/login">Entrar / Registrar</Link>
      </nav>
    </div>
  )
}

export default Header
