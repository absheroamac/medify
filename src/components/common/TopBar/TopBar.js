import React from 'react'
import Box from '@mui/material/Box';
import { colors, Typography } from '@mui/material';


export const TopBar = ({content}) => {
  return (
    <Box m={0} width={'100%'} py={1} display={'flex'} justifyContent={'center'} sx={{backgroundColor:'primary.main',m:'0px'}}>
        <Typography sx={{color:'white.main',fontSize:'14px'}}> {content?content:"The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness."}</Typography>
    </Box>
  )
}
