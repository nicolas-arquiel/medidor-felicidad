import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';
import { CustomDialog } from '../CustomDialog';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';
import { FavoriteTable } from './FavoriteTable';
export interface NavbarInterface { }

const Navbar: React.FC<NavbarInterface> = () => {
  const handleClick = ()=>{
    console.log('asdsadsadasda')
    dialogOpenSubject$.setSubject=true
  }
  return (
    <>
      <CustomDialog>
        <FavoriteTable/>
      </CustomDialog>
      <AppBar position="fixed" color='secondary'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Employee Happiness Tracking Tool
          </Typography>
          <Button color='info' variant='contained' onClick={handleClick} >Open favorite</Button>
        </Toolbar>
      </AppBar>
    </>
  )
};

export default Navbar;
