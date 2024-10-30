import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Box, Container} from '@mui/material'
import { Button } from '../../common/Button';
import { AutoCompleteInput } from '../landingPage/AutoCompleteInput';
import axios from 'axios';


export const SearchBox = ({setCity,setState,state,handleSearch}) => {
  

    
    const [cityList,setCityList] = useState([]);
    const [stateList,setStateList] = useState([]);
    const searchIcon = <SearchIcon style={{ color: 'white' }} />

    const GET_STATE_URL = "https://meddata-backend.onrender.com/states"
    const GET_CITY_URL = `https://meddata-backend.onrender.com/cities/${state}`



    useEffect(()=>{

        const apiRequest = async ()=>{
            axios.get(GET_STATE_URL)
          .then(function (response) {
            
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
                
                setCityList(response.data);
              })
              .catch(function (error) {
                console.log(error);
              })
            
            }
            
            apiRequest()
        
        
        },[state])



  return (
    <Box sx={{backgroundColor:'primary.main',width:'100%',height:'110px'}}>
        <Container sx={{position:'relative'}}>
        <Box p={3} borderRadius={4} display={'flex'} justifyContent={'center'} gap={3} zIndex={1} sx={{backgroundColor:'white.main',position:'absolute', width:'100%',top:'4rem'}}>
            <AutoCompleteInput data={stateList} placeholder={"State"} setInput={setState}/>
            <AutoCompleteInput data={cityList} placeholder={"City"} setInput={setCity}/>
            <Button variant={"lg"} content={"Search"} icon={searchIcon} handle={handleSearch}/>
        </Box>
        </Container>
    </Box>
  )
}
