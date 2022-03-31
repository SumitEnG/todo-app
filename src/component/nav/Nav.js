import React from 'react'
import Buttons from './Buttons'
import './Nav.css'
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

function Nav() {

const {logout} =useAuth0()

  return (
    <div className='nav'>
        <Buttons title='ADD USER' link='/'/>
        <Buttons title='USER LIST'link='/user-list' />
        <Buttons title='PRODUCT' link='product'/>
        <Buttons title='PRODUCT LIST' link='product-list'/>
        <Button variant="contained" style={{backgroundColor:"gray"}} endIcon={<LogoutIcon />} onClick={()=>logout()}>
           Log out
        </Button>
    </div>
  )
}

export default Nav
