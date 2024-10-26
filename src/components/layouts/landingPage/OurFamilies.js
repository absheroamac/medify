import React from 'react'
import { Box, Container, Stack, Typography, useTheme } from '@mui/material'

//importing Assets

import OurFamiliesCards from '../../../assets/ourFamiliesCards.png'


export const OurFamilies = () => {
    const theme = useTheme();

  return (
    <Box py={7} sx={{background:theme.customGradients.brandGradient}}>
        <Container>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={7}>
                
                <Stack gap={3}>
                    <Stack gap={2}>
                        <Typography variant='h2' sx={{fontSize:'1rem',color:'primary.main'}}>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</Typography>
                        <Typography variant='h2'sx={{fontSize:'2.5rem',color:'secondary.main'}} >Our Families</Typography>
                    </Stack>
                    
                        <Typography variant='h3' sx={{fontSize:'1rem',color:'#77829D'}} lineHeight={2}>
                        We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.
                        </Typography>
                    
                </Stack>
                <Box component={'img'} src={OurFamiliesCards}/>
            </Box>
        </Container>
    </Box>
  )
}
