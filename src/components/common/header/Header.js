import { Container, Menu} from '@mui/material'
import React from 'react'
import logo from '../../../assets/logo.png';
import Box from '@mui/material/Box'
import {Link} from '@mui/material';
import { MenuItem } from './MenuItem';
import { Button } from '../Button';

export const Header = ({active=null}) => {
  return (
    <Container >
        <Box py={4} pb={0} display={'flex'} justifyContent={'space-between'} alignItems={'flex-start'}>
            
            <img style={{height:'27px'}} src={logo} alt='medify Logo'/>

            <Box display={'flex'} gap={5} alignItems={'flex-start'}>
            
            <Box display={'flex'} gap={3} height={'100%'}>
              <MenuItem title="Find Doctors" value={"doctors"} current={active}/>
              <MenuItem title="Hospitals" value={"hospitals"} current={active}/>
              <MenuItem title="Medicines" value={"medicines"} current={active}/>
              <MenuItem title="Surgeries" value={"surgeries"} current={active}/>
              <MenuItem title="Software for Provider" value={"software"} current={active}/>
              <MenuItem title="Facilities" value={"facilities"} current={active}/>
            </Box>

              <Button content={"My Bookings"}/>
            </Box>
        </Box>
    </Container>
  )
}
