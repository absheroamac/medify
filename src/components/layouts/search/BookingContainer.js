import { Box, Container, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {useTheme} from '@mui/material';

import Tick from '../../../assets/small tick.png'
import Banner from '../../../assets/banner.png'
import { HospitalCard } from './HospitalCard';
import axios from 'axios';

export const BookingContainer = ({hospitals,city,variant}) => {

 

    

    const [HospitalList, setHospitalList] = useState();


    useEffect(()=>{
        const fetchDate = async ()=>{

            try{
                const res = await axios.get()

            }
            catch(error){
                console.log(error)

            }
        }
    },[])

    

const theme = useTheme()
  return (
    <Box py={15} px={0} sx={{background:theme.customGradients.brandGradient}}>
        <Container>
            { !variant&&(

             hospitals.length===0?(
                <Box><Typography>Please Select State and City</Typography></Box>
            ):(
                <Stack gap={1} mb={3}>
                <Typography variant='h3' sx={{fontSize:'24px'}}>{hospitals.length} medical centers available in {city}</Typography>
                <Box display={'flex'} gap={1}>
                    <img src={Tick}/>
                    <Typography variant='h4' sx={{fontSize:'16px'}}>Book appointments with minimum wait-time & verified doctor details</Typography>
                </Box>
            </Stack>))

            

            
            
            }
            <Box display={'flex'} justifyContent={'space-between'} gap={3} p={0}>

                {
                    !variant?(<Stack width={'100%'} gap={3}>
                        {hospitals.length===0?"":(
                            hospitals.map(hospital=>(
                                <HospitalCard variant={variant} key={hospital['Provider ID']} id={hospital['Provider ID']} data={hospital}/>
    
                            ))
                        )}
                        
                    </Stack>):
                    (
                        <Stack width={'100%'} gap={3}>
                    {hospitals.length===0?"":(
                        hospitals.map(booking=>(
                            <HospitalCard variant={variant} key={booking.hospital['Provider ID']} id={booking.hospital['Provider ID']} data={booking.hospital} time={booking.time} date={booking.date}/>

                        ))
                    )}
                    
                </Stack>
                    )

                }
                
                <Box p={0}>
                    <img src={Banner} style={{width:'320px'}}></img>
                </Box>
            </Box>
        </Container>
    </Box>
  )
}
