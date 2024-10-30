import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Footer } from '../components/common/Footer';
import { TopBar } from '../components/common/TopBar/TopBar';
import { Header } from '../components/common/header/Header';
import { SearchBox } from '../components/layouts/search/SearchBox';
import { BookingContainer } from '../components/layouts/search/BookingContainer';
import { useParams } from 'react-router-dom';
import { SearchBoxHospital } from '../components/layouts/booking/SearchBoxHospital';

export const Bookings = () => {
    const [bookings,setBookings] = useState([]);
    const [updatedBookings,setUpdatedBookings] = useState([]);
    const [searchString,setSearchString] = useState("");

    const handleSearch = ()=>{

        const updatedList = bookings.filter( booking => {
            const converted = booking.hospital['Hospital Name'].toLowerCase();
            const convertedInput = searchString.toLowerCase();

            return converted.includes(convertedInput);
        })

        setUpdatedBookings(updatedList)

    }

    const convertTime = ( time )=>{
        const date = Date.parse(time)
        const currentDate = new Date(date);
        console.log(currentDate)
        return `${currentDate.toLocaleString('default', { weekday: 'short' })}, ${currentDate.getDate()} ${currentDate.toLocaleString('default', { month: 'short' })}`
    }

    useEffect(()=>{
        const bookinsFromStorage = JSON.parse(localStorage.getItem('bookings'));
        console.log(bookinsFromStorage)
        const convertedTime = bookinsFromStorage.map(booking=>{
            
            return {
                hospital:booking.hospital,
                time:booking.slot,
                date:convertTime(booking.date)
            }
        })

        setBookings(convertedTime)
        setUpdatedBookings(convertedTime)
    },[])


  return (
    <div>
        <TopBar/>
        <Header />
        <SearchBoxHospital handleSearch={handleSearch} setState={setSearchString}/>
        <BookingContainer hospitals={updatedBookings} variant={'booking'}/>
        <Footer/>
    </div>
  )
}
