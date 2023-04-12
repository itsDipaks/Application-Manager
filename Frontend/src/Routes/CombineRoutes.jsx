import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Page/Home'
import Login from '../Page/Login'
import AddApplication from '../Page/AddApplication'

const CombineRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/add' element={<AddApplication/>}/>
        </Routes>
    </div>
  )
}

export default CombineRoutes
