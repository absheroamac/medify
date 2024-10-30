import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, IconButton, Stack, Typography } from '@mui/material';

import ArrowRight from '../../../assets/arrowRight.png'
import ArrowLeft from '../../../assets/arrowLeft.png'
import { TimePanal } from './TimePanal';

const morning = ["11:30 AM"]
const afternoon = ["12:00 PM","12:30 PM","01:30 PM","02:00 PM","02:30 PM"]
const evening = ["06:00 PM","06:30 PM","07:00 PM","07:30 PM"]

export const BookingSection = ({hospitalID}) => {
    const [value, setValue] = React.useState(0);
    const [dateList, setDateList] = useState([]);

    // "Hospitalid,date,timeSlote"


    useEffect(()=>{
      const dates = []
      const date = new Date()
      const nextDay = new Date()
      nextDay.setDate(date.getDate()+1)
      const today = {
        id:1,
        name:'Today',
        date:date
      }

      dates.push(today)

      const tomorrow = {
        id:2,
        name:'Tomorrow',
        date:nextDay
      }

      dates.push(tomorrow)

      


      
      for (let i=2;i<7;i++){
        const currentDate = new Date()
        currentDate.setDate(date.getDate()+i)
        dates.push({
          id:i+1,
          name:`${currentDate.toLocaleString('default', { weekday: 'short' })}, ${currentDate.getDate()} ${currentDate.toLocaleString('default', { month: 'short' })}`,
          date:currentDate
        })
      }

      console.log(dates)

      setDateList(dates)

    },[])
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    const CustomScrollButton = (props)=>{
        const {direction,...other} = props;

        return(
            <IconButton {...other} sx={{padding:'1.5rem',width:'48px',height:'48px',border:'1px solid #E0E0E4'}}>
                {direction==='left'?<img src={ArrowLeft}/>:<img src={ArrowRight}/>}
            </IconButton>
        )
    }

  return (
    <div>
        <Box py={2} sx={{borderTop:'1px solid #F0F0F5'}} mt={2}>
            <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            ScrollButtonComponent={CustomScrollButton}
            >
              {
                dateList.map((date,index)=>{

                  const fontType = index===value?'h1':'h4'

                  const label = <Stack gap={0.5}>
                    <Typography variant={fontType} sx={{fontSize:'16px', color:'black.main',textTransform: 'none'}}>{date.name}</Typography>
                    <Typography variant='h4' sx={{fontSize:'14px',color:'#01A400',textTransform: 'none'}}>{} Slots available</Typography>
                    
                    </Stack>

                  return <Tab sx={{width:'33%'}} label={label} />

                })
                
              }
            </Tabs>
      </Box>
      <Box>
        
        <TimePanal time='Morning' timeList={morning} date={dateList[value]!=undefined&&dateList[value].date} hospitalID={hospitalID}/>
        <TimePanal time='Afternoon' timeList={afternoon} date={dateList[value]!=undefined&&dateList[value].date} hospitalID={hospitalID}/>
        <TimePanal time='Evening' timeList={evening} date={dateList[value]!=undefined&&dateList[value].date} hospitalID={hospitalID}/>

      </Box>
    </div>
  )
}
