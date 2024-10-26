import { Box, colors, Container, Typography } from '@mui/material'
import React from 'react'
import heroImage from '../../../assets/heroImage.png'
import { useTheme } from '@mui/material/styles';
import { Button } from '../../common/Button';


export const HeroSection = () => {

    const theme = useTheme();

    const spanStyle = {
        color:theme.palette.primary.main
    }

  return (
    
    <Container>
    <Box display={'flex'} flexDirection={'row'} height={'100%'} py={6} container>
        <Box display={'flex'} gap={4} alignItems={'flex-start'}  flexDirection={'column'} height={'100%'} width={'50%'} py={3} >
            <Box display={'flex'} gap={1} alignItems={'flex-start'}  flexDirection={'column'}>
            <Typography sx={{fontSize:'2.5rem'}} variant='h3'>Skip the travel! Find Online</Typography>
            <Typography sx={{fontSize:'3.5rem'}} variant='h1'>Medical <span style={spanStyle}>Centers</span></Typography>
            </Box>
            <Typography variant='h4' sx={{fontSize:'1.3rem', lineHeight:'1.5',color:'territory.main'}}>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</Typography>

            <Button variant={"lg"} content={"Find Centers"}/>

        </Box>
        <img style={{width:'50%',zIndex:0}} src={heroImage} alt='An Image of Doctors'/>
        </Box>
        </Container>
  )
}
