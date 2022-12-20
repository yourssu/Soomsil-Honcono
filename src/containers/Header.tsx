import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <h1>Header</h1>
      <Link to="/setting">setting</Link>
    </header>
  )
}

export default Header
