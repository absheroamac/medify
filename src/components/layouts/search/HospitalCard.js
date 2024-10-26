import { Box, Typography } from '@mui/material'
import React from 'react'
import { Button } from '../../common/Button'

import Icon from '../../../assets/CardIcon.png'
import Like from '../../../assets/like.png'

export const HospitalCard = () => {
  return (
    <div>
        <Box display={'flex'} p={4} gap={2} sx={{backgroundColor:'white.main'}} justifyContent={'space-between'}>
            <Box>
                <img src={Icon}/>
            </Box>
            <Box>
                <Typography variant='h2' sx={{fontSize:'20px',color:'primary.main'}}>Fortis Hospital Richmond Road</Typography>
                <Box>
                    <Typography variant='h1' sx={{fontSize:'14px'}}>Banglore, Karnataka</Typography>
                    <Typography sx={{fontSize:'14px'}}>Smilessence Center for Advanced Dentistry + 1 <br/>more</Typography>
                </Box>
                <Box display={'flex'}>
                    <Typography sx={{color:'#02A401',fontSize:'14px'}}>FREE</Typography>
                    <Typography sx={{fontSize:'14px'}}><span>₹500</span> Consultation fee at clinic</Typography>
                </Box>
                <Box  display={'flex'} sx={{borderTop:'dashed black 1px', paddingTop:'1rem',marginTop:'1rem', color:'white.main'}}>
                    <Box p={0.5} sx={{backgroundColor:'#02A401'}} borderRadius={2}>
                    <Box component={'img'} src={Like}/> 5
                    </Box>
                </Box>
            </Box>

            <Box  display={'flex'} flexDirection={'column'} justifyContent={'flex-end'} alignItems={'center'}>
                <Typography variant='h3' sx={{fontSize:'14px'}}>Available Today</Typography>
                <Button content={'Book FREE Center Visit'} variant={'lg'} textSize={'14px'}/>
            </Box>
        </Box>
    </div>
  )
}
