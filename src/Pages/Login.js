import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from "../Components/Login/LoginForm"
import LoginCreate from "../Components/Login/LoginCreate"
import LoginPasswordLost from "../Components/Login/LoginPasswordLost"
import LoginPasswordReset from "../Components/Login/LoginPasswordReset"

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/criar" element={<LoginCreate />}></Route>
        <Route path="/esqueceu" element={<LoginPasswordLost />}></Route>
        <Route path="/recuperar" element={<LoginPasswordReset/>}></Route>
      </Routes>
    </div>
  )
}

export default Login
