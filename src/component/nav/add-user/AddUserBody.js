import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import './AddUserBody.css';
import { useDispatch } from 'react-redux';
import { addUsers } from '../../../features/userSlice';
import { useNavigate } from 'react-router-dom';

function AddUserBody() {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const navigate=useNavigate()

  const dispatch = useDispatch()

  const addTodo = () => {
    dispatch(addUsers({
      name:name,
      email:email
    }))
     navigate('/user-list')
  } 
  return (
    <div className='input'>
      <h1 className='header'>Add User</h1>
      <div className="inputs">
      <TextField id="filled-basic" label="Name" variant="filled"  onChange={(e)=>setName(e.target.value)} style={{marginRight:"8px",width:"275px"}}/>
      <TextField id="filled-basic" label="Email" variant="filled" onChange={(e)=>setEmail(e.target.value)} style={{MarginLeft:"8px",width:"275px"}}/>
      </div>
      <Button variant="contained" endIcon={<AddIcon />} style={{marginLeft:"240px",width:"100px"}} onClick={addTodo}>
        ADD
      </Button>
    </div>
  )
}

export default AddUserBody
