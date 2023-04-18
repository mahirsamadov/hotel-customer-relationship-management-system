import { Box, Grid } from '@mui/material'
import { Button, Pagination, Table, Checkbox } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PuffLoader } from 'react-spinners'
import ActionAreaCard from '../components/Card'
import { IRoom } from '../models'
import { fetchDataRequest } from '../store/actionCreators'
import Selector from '../store/Selector'
import { Spinner } from '../UI/Spinner'

export const Rooms = () => {
  const [filter, setFilter] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(fetchDataRequest())
  },[])

  const rooms = useSelector(Selector.getRooms)
  const roomsState = useSelector(Selector.getRoomsState)
  console.log(rooms)
  if(roomsState.loading) return <Spinner/>

  const filteredRooms = filter ? rooms.filter((room: IRoom) => room.guest === '') : rooms

  const columns = [
   
    {
      title: 'Number',
      dataIndex: 'number',
      key: 'number',
    },

      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: 'Guest',
        dataIndex: 'guest',
        key: 'guest',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        
      },
      {
        title: 'Occupancy',
        dataIndex: 'occupancy',
        key: 'occupancy',
      },
      {
        title: 'CheckInDate',
        dataIndex: 'checkInDate',
        key: 'checkInDate',
      },

      {
        title: '',
        dataIndex: 'id',
        key: 'id',
        render: (key:any) => <Button className='bg-blue-500 hover:bg-white text-white' onClick={()=>{navigate(key)}}>More Information</Button>
      },

]


  return (
   
   <Box className='overflow-y-scroll flex justify-center items-center flex-col'>
   <Box className="controller w-[80vw] mb-3">
   <Button className='bg-blue-500 text-white hover:bg-white' onClick={()=>setFilter(false)}>Clear filters</Button>
    <Checkbox onChange={()=>setFilter(!filter)} className='m-2'/>
    <span>Free rooms only</span>
   </Box>
   <Table className='w-[80vw] h-[75vh] text-center' size="large" dataSource={filteredRooms} columns={columns} rowKey="id"/>
   </Box>
  )   
}
