import React from 'react'
import { useTheme } from '@mui/material/styles';

export const Button = ({content,link,variant,icon,textSize, handle}) => {

    const theme = useTheme();
    let fontSize = variant==='lg'?"16px":"14px";
    const padding = variant==='lg'?"1rem 2rem":"0.5rem 1rem"
    const maxHeight = variant==='lg'?"3rem":"2.5rem"

    fontSize = textSize? textSize:fontSize

    const buttonStyles = {
        backgroundColor: theme.palette.primary.main,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:fontSize,
        maxHeight:maxHeight,
        color: theme.palette.white.main,
        padding: padding,
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
        },
      };
  
    return (
    <button style={buttonStyles} onClick={handle}>{icon} {content}</button>
  )
}
