import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import {useTheme} from '@mui/material';

import Banner from '../../../assets/banner.png'
import { HospitalCard } from './HospitalCard';

export const BookingContainer = () => {

const theme = useTheme()
  return (
    <Box py={20} px={0} sx={{background:theme.customGradients.brandGradient}}>
        <Container>
            <Box display={'flex'} justifyContent={'space-between'} gap={3} p={0}>
                <Stack width={'100%'} gap={3}>
                    <HospitalCard/>
                    <HospitalCard/>

                </Stack>
                <Box p={0}>
                    <img src={Banner} style={{width:'320px'}}></img>
                </Box>
            </Box>
        </Container>
    </Box>
  )
}
