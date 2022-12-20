import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Navigation.scss'

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/search">search</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
