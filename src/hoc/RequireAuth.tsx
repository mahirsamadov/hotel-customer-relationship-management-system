import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Layout } from './Layout'

export const RequireAuth = () => {
    const navigate = useNavigate()
    const auth = true
    if(!auth) navigate('/login') 

  return (
   <>
    <Outlet/>
   </>
  )
}
