import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Buttons({title,link}) {

  const navigate = useNavigate()

  const redirect = () =>{
         navigate(link)
  }
  return (
    <div className='button'>
      <Button onClick={redirect} variant="outlined">{title}</Button>
    </div>
  )
}

export default Buttons
