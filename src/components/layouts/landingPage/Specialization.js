import { Box, Container, Grid2, Typography } from '@mui/material'
import React from 'react'
import {useTheme} from '@mui/material';
import styles from './Specialization.module.css'


import XRay from '../../../assets/specialization/X-Ray.png'
import Stethoscope from '../../../assets/specialization/Stethoscope.png'
import Immune from '../../../assets/specialization/Immune.png'
import HeartRate from '../../../assets/specialization/Heart Rate.png'
import HeartRateMonitor from '../../../assets/specialization/Heart Rate Monitor.png'
import Drugstore from '../../../assets/specialization/Drugstore.png'
import BloodSample from '../../../assets/specialization/Blood Sample.png'

export const Specialization = () => {
    const list = [{icon:XRay,title:"X-Ray"},
        {icon:Stethoscope,title:"Primary Care"},
        {icon:Immune,title:"Piscologist"},
        {icon:HeartRate,title:"Cardiology"},
        {icon:HeartRateMonitor,title:"MRI Resonance"},
        {icon:Drugstore,title:"Laboratory"},
        {icon:BloodSample,title:"Blood Test"}]

        const theme = useTheme();
  return (
    <Box py={8} gap={4} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} sx={{background:theme.customGradients.brandGradient}}>
        <Container>
        <Box display={'flex'} justifyItems={'center'} alignItems={'center'} flexDirection={'column'} gap={6}>
        <Typography variant='h2' sx={{fontSize:'2.5rem',color:'secondary.main'}}>Find by specialisation</Typography>
        <div className={styles.grid}>
            {list.map((item,key)=>(
                <Box
                display={'flex'}
                flexDirection={'column'}
                width={'100%'}
                sx={{backgroundColor:'white.main'}}
                py={4}
                justifyItems={'center'}
                alignItems={'center'}
                borderRadius={3}>
                    
                    <Box
                    component={'img'}
                    src={item.icon}
                    width={'80px'}
                    height={'80px'}/>
                    <Typography
                    sx={{
                        fontSize:'18px'
                    }}
                    variant='h3'>{item.title}</Typography>
                </Box>))}
                
        </div>
        </Box>
        </Container>
        

    </Box>
  )
}
