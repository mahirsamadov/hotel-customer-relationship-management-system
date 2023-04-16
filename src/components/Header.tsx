import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import { Brand } from './Brand'

export const Header = () => {
  return (
    <AppBar position="static">
  <Toolbar className='bg-black z-10' variant="dense">
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      <MenuIcon />
    </IconButton>
    <Brand/>
  </Toolbar>
</AppBar>
  )
}
