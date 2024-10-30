import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { Footer } from '../components/common/Footer';
import { TopBar } from '../components/common/TopBar/TopBar';
import { Header } from '../components/common/header/Header';
import { SearchBox } from '../components/layouts/search/SearchBox';
import { BookingContainer } from '../components/layouts/search/BookingContainer';
import { useParams } from 'react-router-dom';

export const Search = () => {
  const [state,setState] = useState("");
  const [city,setCity] = useState("");
  const [hospitals,setHospitals] = useState([]);
  const [isItInitial,setIsItInitial] = useState(true)
  const [cityTitle,setCityTitle] = useState('')

  const { State, City } = useParams();
  console.log(State,City)


  const URL = `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
  const URL_FROM_QUERY = `https://meddata-backend.onrender.com/data?state=${State}&city=${City}`


  const handleSearch = async ()=>{
    try{
      console.log(state+" "+city)
      const res = await axios.get(URL);
      if(res.status===200){

        setCityTitle(city)
        
        setHospitals(res.data)
      }

  }
  catch(error){
      console.log(error)

  }
    
  }

  useEffect(() => {

    setCity(City)
    setState(State)
    setCityTitle(City)
    
    const handleSearch = async ()=>{
      try{
        const res = await axios.get(URL_FROM_QUERY);
        if(res.status===200){
          
          setHospitals(res.data)
        }
  
    }
    catch(error){
        console.log(error)
  
    }
      
    }

    handleSearch()
  }, []);                                                    


  
  return (
    <div style={{padding:0}}>
      
      
      <TopBar/>
      <Header active={'doctors'}/>
      <SearchBox setCity={setCity} setState={setState} city={city} state={state} handleSearch={handleSearch}/>
      <BookingContainer hospitals={hospitals} city={cityTitle}/>
      <Footer/>
    
    </div>
  )
}
