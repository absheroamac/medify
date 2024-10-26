import React from 'react'
import { Box,Typography } from '@mui/material'

import icon from '../../assets/icon.png'

export const FooterItem = ({content,link}) => {
  return (
    <Box display={'flex'} gap={1} justifyContent={'center'} alignItems={'center'}>
        <Box component={'img'} src={icon} sx={{width:'10px',height:'10px'}}/>
        <Typography sx={{color:'white.main',fontSize:'1rem'}}>{content}</Typography>
    </Box>
  )
}
