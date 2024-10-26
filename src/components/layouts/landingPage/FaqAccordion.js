import React from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import { Box, Typography } from '@mui/material';

export const FaqAccordion = () => {

    const list = [
        {title:"Why choose our medical for your family?",
         details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {title:"Why we are different from others?",
        details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {title:"Trusted & experience senior care & love",
        details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {title:"How to get appointment for emergency Cases?",
        details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
           }]


  return (
    <Box  display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={5}>

        {list.map((item,index)=>(
            <Accordion sx={{backgroundColor:'white.main',border:'none',boxShadow:'none',borderBottom:'none', '&:before': { display: 'none' }}}>
        <AccordionSummary
        sx={{backgroundColor:'white.main',border:'none',boxShadow:'none',}}
          expandIcon={<AddIcon sx={{color:'primary.main',fontWeight:'bold'}}/>}
          aria-controls={index}
          id={index}
        >
          <Typography variant='h2' sx={{fontSize:'18px',color:'secondary.main'}}>{item.title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'white.main',border:'none',boxShadow:'none',}}>{item.details}</AccordionDetails>
      </Accordion>

        ))}
      
      
    </Box>
  )
}
