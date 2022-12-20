import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Home from 'Pages/Home'
import Search from 'Pages/Search'
import Setting from 'Pages/Setting'
import Header from './Header'
import Navigation from './Navigation'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
      <Navigation />
    </BrowserRouter> 
  )
}

export default App
