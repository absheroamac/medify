import { Box, Container,Typography } from '@mui/material'
import React from 'react'
import { NewsCard } from './NewsCard'

export const LatestNews = () => {
  return (
    <Container sx={{marginBottom:'5rem'}}>
        <Box py={7} gap={2} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
              <Typography variant='h2' sx={{fontSize:'1rem',color:'primary.main'}}>Blog & News</Typography>
              <Typography variant='h2' sx={{fontSize:'2.5rem',color:'secondary.main'}}>Read Our Latest News</Typography>
            </Box>
    <Box width={'100%'} display={'flex'} gap={3} justifyContent={'center'}>
        
        
        <NewsCard key={1}/>
        <NewsCard key={2}/>
        <NewsCard key={2}/>
   
        
    </Box>
    </Container>
  )
}
