import React from 'react'
import { Footer } from '../components/common/Footer';
import { TopBar } from '../components/common/TopBar/TopBar';
import { Header } from '../components/common/header/Header';
import { SearchBox } from '../components/layouts/search/SearchBox';
import { BookingContainer } from '../components/layouts/search/BookingContainer';

export const Search = () => {
  return (
    <div style={{padding:0}}>
      
      
      <TopBar/>
      <Header active={'doctors'}/>
      <SearchBox/>
      <BookingContainer/>
      <Footer/>
    
    </div>
  )
}
