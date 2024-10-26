import React from 'react'
import { Autocomplete, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const AutoCompleteInput = ({data,setInput, placeholder}) => {

    console.log(placeholder+" "+data)

    
  
    return (
    <Autocomplete
      options={data}
      getOptionLabel={(data) => data} 
      onInputChange={(event, newInputValue) => {
        setInput(newInputValue);
      }}

      fullWidth
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          placeholder={placeholder}
          
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: '#a0a4b0' }} />
              </InputAdornment>
            ),
            style: {
              backgroundColor: '#f9fbff',  
              borderRadius: '8px',         
              padding: '6px 12px', 
              maxHeight:'3rem', 
              width:'100%'       
            },
          }}
        />
      )}
    />
  )
}
