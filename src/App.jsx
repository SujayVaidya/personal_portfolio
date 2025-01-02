import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ErrorElement from './Components/CommonComponents/ErrorElement'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
          errorElement={<ErrorElement />}
        />
        <Route
          path='about'
          element={<AboutPage />}
          errorElement={<ErrorElement />}
        />
        <Route path='*' element={<ErrorElement />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
