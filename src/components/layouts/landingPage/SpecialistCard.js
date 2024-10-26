import { Box, Typography } from '@mui/material'
import React from 'react'

export const SpecialistCard = ({image,name,title}) => {
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={3} >
        <div style={{background: "linear-gradient(144.2deg, #E1F3FF 0%, #2AA7FF 100%)", borderRadius:'250px 250px 4px 4px', width:'350px',display:'flex',justifyContent:'center'}}>
            <Box component={'img'} src={image}/>
        </div>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={1}>
            <Typography variant='h4' sx={{fontSize:'1.5rem',color:'secondary.main'}}>
                {name}
            </Typography>
            <Typography variant='h3' sx={{fontSize:'1rem',color:'primary.main'}}>
                {title}
            </Typography>
        </Box>
    </Box>
  )
}
