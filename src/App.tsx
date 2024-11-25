import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Teen from './pages/Teen'
import Company from './pages/Company'

function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<Teen/>}/>
      <Route path='/company' element={<Company/>}/>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App
