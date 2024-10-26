import React from 'react'
import { Box, Container, Stack, Typography, useTheme,TextField } from '@mui/material'

//importing Assets

import OurFamiliesCards from '../../../assets/smartphone.png'
import { Button } from '../../common/Button';

import PlayStore from '../../../assets/playstore.png'
import AppleStore from '../../../assets/appleStore.png'


export const CallToAction = () => {
    const theme = useTheme();

  return (
    <Box pt={7} sx={{background:theme.customGradients.brandGradient}}>
        <Container>
            <Box display={'flex'} >
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={7}>
                <Box component={'img'} src={OurFamiliesCards}/>
                
                <Stack gap={8}>
                <Stack gap={2}>
                    <Stack gap={4}>
                        
                        <Typography variant='h2'sx={{fontSize:'2.5rem',color:'secondary.main'}} >Download the<br/><span style={{color:theme.palette.primary.main}}>Meidfy</span> App</Typography>
                        <Typography variant='h2' sx={{fontSize:'1rem',color:'secondary.main'}}>Get the link to download the app</Typography>
                    </Stack>
                    
                    <Box display={'flex'} gap={2} mt={0}>
                    <Box>
                    <TextField
                        required
                        id="outlined-required"
                        defaultValue="+91"
                        sx={{
                            color:'black',
                            width:'60px',
                        
  '& .MuiOutlinedInput-input': {
      color: 'black.main', // Set the text color here
      backgroundColor:'white.main',
      borderRadius: ' 10px 0px 0px 10px '
    },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E0E3E7',
        borderRadius: '  10px 0px  0px 10px ',
      },
      '&:hover fieldset': {
        borderColor: '#B2BAC2',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#6F7E8C',
      },
    },
                        }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        placeholder='Enter phone number'

                        sx={{
                            '& .MuiOutlinedInput-input': {
      color: 'black.main', // Set the text color here
      backgroundColor:'white.main',
      borderRadius: ' 0px 10px 10px 0px '
    },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E0E3E7',
        borderRadius: ' 0px 10px 10px 0px ',
      },
      '&:hover fieldset': {
        borderColor: '#B2BAC2',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#6F7E8C',
      },
    },
       
                        }}
                    />
                    </Box>

                    <Button content={'Send SMS'} variant={'lg'}/>

                    </Box>

                    </Stack>

                    <Box display={'flex'} gap={3}>
                        <Box component={'img'} width={'220px'} src={PlayStore}/>
                        <Box component={'img'} width={'220px'} src={AppleStore}/>

                    </Box>
                    
                </Stack>
                
            </Box>
            </Box>
        </Container>
    </Box>
  )
}