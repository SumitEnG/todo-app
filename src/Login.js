import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@mui/material'
import React from 'react'

function Login() {
    const {loginWithRedirect}=useAuth0()
  return (
    <div>
      <h1 style={{marginTop:"270PX"}}>Welcome to our TODO-LIST </h1>
      <Button variant="contained"onClick={()=>loginWithRedirect()}
      style={{marginTop:"20px",marginLeft:"90PX"}}>Login or Signup</Button>
    </div>
  )
}

export default Login
