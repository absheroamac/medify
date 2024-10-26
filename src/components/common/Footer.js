import { Box, Container, Typography ,Stack} from '@mui/material'
import React from 'react'

import LogoFooter from '../../assets/footerLogo.png'
import Facebook from '../../assets/social media icons/facebook.png';
import Twitter from '../../assets/social media icons/twitter.png';
import Youtube from '../../assets/social media icons/youtube.png';
import Pinterest from '../../assets/social media icons/pinterest.png';
import { FooterItem } from './FooterItem';



export const Footer = () => {
  return (
    <Box sx={{backgroundColor:'secondary.main'}} py={7}>
        <Container>
            <Box>
            <Box display={'flex'} justifyContent={'space-between'}>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                <Box component={'img'} src={LogoFooter}/>
                <Box display={'flex'} gap={2}>
                    <Box component={'img'} src={Facebook}/>
                    <Box component={'img'} src={Twitter}/>
                    <Box component={'img'} src={Youtube}/>
                    <Box component={'img'} src={Pinterest}/>
                </Box>
            </Box>

            <Box display={'flex'} justifyContent={'space-between'} gap={15}>
                <Stack gap={2} alignItems={'flex-start'}>
                    <FooterItem content={'About Us'}/>
                    <FooterItem content={'Our Pricing'}/>
                    <FooterItem content={'Our Gallery'}/>
                    <FooterItem content={'Appointment'}/>
                    <FooterItem content={'Privacy Policy'}/>
                </Stack>

                
                <Stack gap={2} alignItems={'flex-start'}>
                    <FooterItem content={'Orthology'}/>
                    <FooterItem content={'Neurology'}/>
                    <FooterItem content={'Dental Care'}/>
                    <FooterItem content={'Opthalmology'}/>
                    <FooterItem content={'Cardiology'}/>
                </Stack>

                <Stack gap={2} alignItems={'flex-start'}>
                    <FooterItem content={'About Us'}/>
                    <FooterItem content={'Our Pricing'}/>
                    <FooterItem content={'Our Gallery'}/>
                    <FooterItem content={'Appointment'}/>
                    <FooterItem content={'Privacy Policy'}/>
                </Stack>

                
            </Box>
            </Box>
            <Box>
                
                <Typography sx={{color:'white.main',borderTop:'1px solid #FFFFFF1A',paddingTop:'2rem',marginTop:'2rem'}} >Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</Typography>
            </Box>
            </Box>
        </Container>

    </Box>
  )
}
