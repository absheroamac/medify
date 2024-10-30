import { Container, Menu} from '@mui/material'
import React from 'react'
import logo from '../../../assets/logo.png';
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom';

import { MenuItem } from './MenuItem';
import { Button } from '../Button';
import { NavLink } from 'react-router-dom';

export const Header = ({active=null}) => {
  return (
    <Container >
        <Box py={4} pb={0} display={'flex'} justifyContent={'space-between'} alignItems={'flex-start'}>
            
            <Link to={'/'}>
            <img style={{height:'27px'}} src={logo} alt='medify Logo'/>
            </Link>

            <Box display={'flex'} gap={5} alignItems={'flex-start'}>
            
            <Box display={'flex'} gap={3} height={'100%'}>
            <Link to={'/search'} style={{ textDecoration: 'none' }}>
              <MenuItem title="Find Doctors" value={"doctors"} current={active}/>
              </Link>
              <MenuItem title="Hospitals" value={"hospitals"} current={active}/>
              <MenuItem title="Medicines" value={"medicines"} current={active}/>
              <MenuItem title="Surgeries" value={"surgeries"} current={active}/>
              <MenuItem title="Software for Provider" value={"software"} current={active}/>
              <MenuItem title="Facilities" value={"facilities"} current={active}/>
            </Box>

            <Link to={'/bookings'} style={{ textDecoration: 'none' }}>

              <Button content={"My Bookings"} />
              </Link>
            </Box>
        </Box>
    </Container>
  )
}
