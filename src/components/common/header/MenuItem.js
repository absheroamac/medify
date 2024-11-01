import React, { act } from 'react'
import {Box, Link, Typography} from '@mui/material';


export const MenuItem = ({title,value,current,type}) => {
  const active = current===value
  const color = active ? "primary.main":"black.main";
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} gap={!type?4:2}>
      <Link sx={{color,fontSize:!type?'14px':'16px'}} underline='none'>{title}</Link>
      {!type && <Box width={'100%'} height={'6px'} sx={{backgroundColor:active ?'primary.main':'white.primary'}}></Box>}
    </Box>
  )
}
