import React from 'react'
import PuffLoader from 'react-spinners/PuffLoader'

export const Spinner = () => {
  return (
    <div className='flex items-center justify-center'><PuffLoader size={150} color="black" /></div>
  )
}
