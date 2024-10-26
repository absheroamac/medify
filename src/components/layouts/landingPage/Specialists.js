import React from 'react'
import { Box, Typography } from '@mui/material'

//Importing Assets
import image1 from '../../../assets/Doctors/Ahmad Khan.png';
import image2 from '../../../assets/Doctors/Ankur Sharma.png'
import image3 from '../../../assets/Doctors/Dr Heena Sachdeva.png'
import { Carousal } from '../../common/carousal/Carousal';
import { SpecialistCard } from './SpecialistCard';

export const Specialists = () => {
 const list = [{image:image1,name:"Dr. Ahmad Khan",title:"Neurologist"},
    {image:image3,name:"Dr. Heena Sachdeva",title:"Orthopadics"},
    {image:image2,name:"Dr. Ankur Sharma",title:"Medicine"},
    {image:image1,name:"Dr. Ahmad Khan",title:"Neurologist"},
    {image:image3,name:"Dr. Heena Sachdeva",title:"Orthopadics"}
 ]
    const items = list.map(item=><SpecialistCard image={item.image} name={item.name} title={item.title} />)
  return (
    <Box display={'flex'} flexDirection={'column'} gap={4} py={8}>
    <Box width={'100%'} display={'flex'} flexDirection={'column'} justifyItems={'center'} alignItems={'center'}>
    <Typography variant='h2' sx={{fontSize:'2.5rem',color:'secondary.main'}}>Our Medical Specialist</Typography>
    </Box>
    <Carousal items={items} spaceBetween={1} mdNoItems={3.75}/>
    </Box>
  )
}
