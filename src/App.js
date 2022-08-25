import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Crew from './Componant/Crew/Crew'
import Deistination from './Componant/destintion/Deistination'
import Home from './Componant/HOmePadg/Home'
import Navbarr from './Componant/Navbar/Navbarr'
import Technology from './Componant/Technology/Technology'

const App = () => {
  return (
    <div>
    
      <BrowserRouter>
        <Navbarr/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Space-Project/' element={<Home/>}/>
          <Route path='/Deistination' element={<Deistination/>}/>
          <Route path='/Crew' element={<Crew/>}/>
          <Route path='/technology' element={<Technology/>}/>
        </Routes>
        </BrowserRouter>
      
      
    </div>
  )
}

export default App