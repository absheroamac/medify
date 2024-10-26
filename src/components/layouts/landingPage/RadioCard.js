import { Box, colors, Typography } from '@mui/material'
import React, { act } from 'react'
import { useTheme } from '@mui/material/styles';

export const RadioCard = ({icon,name="",active}) => {

    const theme = useTheme()

    const selected = active===name;
    
    const style = {
        border: selected?"solid 1px #2AA7FF":"null",
        backgroundColor:selected?"#2AA7FF14":"#FAFBFE",
    }

    const textStyle = {
        color:selected?theme.palette.primary.main:theme.palette.low.main,
        variant:selected?theme.typography.h2:theme.typography.h4
    }

    return (
        <Box borderRadius={2} width={'100%'} border={1} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} py="2rem" sx={{border:style.border,backgroundColor:style.backgroundColor}}>
            <img src={icon} width={"60px"} height={"60px"} alt={`Icon of ${name}`}/>
            <Typography sx={{fontSize:'18px',color:textStyle.color}}variant={textStyle.variant}>{name}</Typography>
        </Box>
    )
}
