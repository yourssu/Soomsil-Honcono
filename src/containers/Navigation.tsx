import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
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
