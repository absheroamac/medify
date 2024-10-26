import { Box, TextField,InputAdornment, Typography, Card ,Autocomplete, Link, Container} from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '../../common/Button';
import { AutoCompleteInput } from './AutoCompleteInput';
import axios from 'axios';
import { RadioCard } from './RadioCard';

import Doctors from '../../../assets/Doctor.png'
import Labs from '../../../assets/Drugstore.png'
import Hospitals from '../../../assets/Hospital.png'
import MedicalStore from '../../../assets/Drugstore.png'
import Ambulance from '../../../assets/Ambulance.png'
import zIndex from '@mui/material/styles/zIndex';

const CardData = [{title:"Doctors",icon:Doctors},{title:"Labs",icon:Labs},{title:"Hospitals",icon:Hospitals},{title:"Medical Store",icon:MedicalStore},{title:"Ambulance",icon:Ambulance}]

export const SearchSection = () => {

const [activeCard,setActiveCard] = useState("");
const [cityList,setCityList] = useState([]);
const [stateList,setStateList] = useState([]);
const [state,setState] = useState("");
const [city,setCity] = useState("");
const searchIcon = <SearchIcon style={{ color: 'white' }} />

const GET_STATE_URL = "https://meddata-backend.onrender.com/states"
const GET_CITY_URL = `https://meddata-backend.onrender.com/cities/${state}`

useEffect(()=>{

const apiRequest = async ()=>{
    axios.get(GET_STATE_URL)
  .then(function (response) {
    console.log(response.data);
    setStateList(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })

}

apiRequest()
},[])

useEffect(()=>{

    const apiRequest = async ()=>{
        axios.get(GET_CITY_URL)
      .then(function (response) {
        console.log(response.data);
        setCityList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
    
    }
    
    apiRequest()


},[state])


  return (
    <Container zIndex={5} >
    
    <Box zIndex={5} borderRadius={4} sx={{backgroundColor:'white.main', boxShadow: "6px 6px 35px 0px #1028511C"}} height={'429px'} p={6} display={'flex'} flexDirection={'column'} gap={8}>

        <Box display={'flex'} justifyContent={'center'} gap={3} zIndex={1}>
            <AutoCompleteInput data={stateList} placeholder={"State"} setInput={setState}/>
            <AutoCompleteInput data={cityList} placeholder={"City"} setInput={setCity}/>
            <Button variant={"lg"} content={"Search"} icon={searchIcon}/>
        </Box>

        <Box zIndex={1} display={'flex'} gap={4} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} width={'100%'}>
            <Typography variant='h3' sx={{fontSize:"1.5rem"}}>You may be looking for</Typography>
        
        
            <Box zIndex={1} display={'flex'} gap={3} width={'100%'}>
                {CardData.map(item=><div style={{width:'100%'}}onClick={()=>setActiveCard(item.title)}><RadioCard name={item.title} active={activeCard} icon={item.icon} /></div>)}
            
            </Box>

        </Box>

    </Box>
    </Container>
  )
}
