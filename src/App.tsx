import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Teen from './pages/Teen'
import Company from './pages/Company'
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route  element={<Layout />} >
      <Route path='/' element={<Teen/>}/>
      <Route path='/company' element={<Company/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App
