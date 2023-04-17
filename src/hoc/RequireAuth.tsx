import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import Selector from '../store/Selector'
import { Layout } from './Layout'

export const RequireAuth = () => {
    const navigate = useNavigate()
    const auth = useSelector(Selector.getAuthState)

  return (
   <>
   {auth? <Outlet/> : <Navigate to='/login'/> }
   </>
  )
}
