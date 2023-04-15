import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className='bg-white h-[100vh]  w-[100vw] flex flex-col'>
    
<Outlet></Outlet>

    </div>
  )
}
