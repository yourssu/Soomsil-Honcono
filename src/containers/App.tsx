import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Search from './Search'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1> Home </h1>} />
        <Route path="/search" element={<Search />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
      <nav> navigtaion bar </nav>
    </BrowserRouter> 
  )
}

export default App
