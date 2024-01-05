import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import{About,Error,Home,SingleCocktail } from './pages/index'
import SharedLayout from './Layout/SharedLayout'

function App() {
  return (
    <>
      <Routes>
           <Route path='/' element={<SharedLayout/>}>
              <Route index element={<Home/>}/>
              <Route path='about' element={<About/>}/>
              <Route path='singlecocktail/:id' element={<SingleCocktail/>} />
              <Route path='*' element={<Error/>} />
           </Route>
        
        </Routes>     
    </>
  )
}

export default App
