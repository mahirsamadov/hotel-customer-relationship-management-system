import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ActionAreaCard from '../components/Card'
import { fetchDataRequest } from '../store/actionCreators'
import Selector from '../store/Selector'

export const Rooms = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDataRequest())
  },[])

  const rooms = useSelector(Selector.getRooms)


  return (
   <Grid container spacing={4} overflow='scroll' gap={10} padding='5rem' alignItems="center" justifyContent="center" style={{ height: '100vh' }}>{
     Boolean(rooms.length) && rooms.map((room) => (
      <div key={room.id}>
        <ActionAreaCard image={room.gallery[0]} description={room.description.slice(0, 180) + '...'} type={room.type}/>
      </div>
    ))}
   </Grid>
  )
}
