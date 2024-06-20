import React from 'react'
import { Routes, Route  } from 'react-router-dom'
import Signin from './auth/forms/Signin'
import Signup from './auth/forms/Signup'
import { Home } from './root/pages'
import AuthLayout from './auth/AuthLayout'
import RootLayout from './root/RootLayout'
import './global.css'

function App() {
  return (
    <main className=''>
        <Routes>
            {/* Public Routes  */}
            <Route element={<AuthLayout/>}>
                <Route path='/signin' element={<Signin/>}/>
                <Route path='/signup' element={<Signup/>}/>
            </Route>
            {/* Private Routes  */}
            <Route element={<RootLayout/>}>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
    </main>
  )
}

export default App