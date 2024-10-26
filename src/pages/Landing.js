import React from 'react'
import { TopBar } from '../components/common/TopBar/TopBar';
import { Header } from '../components/common/header/Header'
import { HeroSection } from '../components/layouts/landingPage/HeroSection';
import { Container} from '@mui/material';
import {SearchSection} from '../components/layouts/landingPage/SearchSection';
import {useTheme} from '@mui/material';
import { AdCarousal } from '../components/layouts/landingPage/AdCarousal';
import { Specialization } from '../components/layouts/landingPage/Specialization';
import { Specialists } from '../components/layouts/landingPage/Specialists';
import { Faq } from '../components/layouts/landingPage/Faq';
import { PatientCaring } from '../components/layouts/landingPage/PatientCaring';
import {OurFamilies} from '../components/layouts/landingPage/OurFamilies'
import { NewsCard } from '../components/layouts/landingPage/NewsCard';
import { LatestNews } from '../components/layouts/landingPage/LatestNews';
import { CallToAction } from '../components/layouts/landingPage/CallToAction';
import { Footer } from '../components/common/Footer';

export const Landing = () => {
  const theme = useTheme();
  return (
    <div>
    <TopBar/>
    <div style={{background:theme.customGradients.brandGradient}}>
    <Header/>
    <HeroSection/>
    </div>
    <div style={{marginTop:'-10rem', zIndex:99, position:'relative'}}>
    <SearchSection/>
    </div>
    <AdCarousal/>
    <Specialization/>
    <Specialists/>
    <PatientCaring/>
    <LatestNews/>
    <OurFamilies/>
    <Faq/>
    <CallToAction/>
    <Footer/>
    
    

    
    </div>
    

  )
}
