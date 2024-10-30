import React, { act } from 'react'
import {Box, Link, Typography} from '@mui/material';


export const MenuItem = ({title,value,current}) => {
  const active = current===value
  const color = active ? "primary.main":"black.main";
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} height={'100%'} gap={4}>
      <Link sx={{color,fontSize:'14px'}} underline='none'>{title}</Link>
      {<Box width={'100%'} height={'6px'} sx={{backgroundColor:active ?'primary.main':'white.primary'}}></Box>}
      
    </Box>
  )
}
