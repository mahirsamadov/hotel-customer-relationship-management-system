import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DataService from '../Service/DataService'
import { fetchDataRequest, fetchSingleDataRequest } from '../store/actionCreators'
import Selector from '../store/Selector'

export const RoomDetails = () => {

  const { id } = useParams<{id: string}>()
  const dispatch = useDispatch()
  const room = useSelector(state => state)

  useEffect(() => {
    dispatch(fetchSingleDataRequest(id))
  },[])

  console.log('The room:', room)

  return (
    <div>roomDetails</div>
  )
}
