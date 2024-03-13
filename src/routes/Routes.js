import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/homepage/Dashboard'

function Router() {
  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Dashboard/>} />



    </Routes>
    
    
    </BrowserRouter>
    
    </>
  )
}

export default Router