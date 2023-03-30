import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment, TextField } from '@mui/material'
import React from 'react'


interface SearchProps{
    //defined a state function that will have value of strinng and null
    searchBarKey :React.Dispatch<React.SetStateAction<string | null>>
}

const SearchBar= ({searchBarKey}: SearchProps) => {
  return (
    <TextField
      size='small'
      fullWidth
      type='text'
      placeholder='Search any candidate'
      sx={{
        borderRadius : "50p"
      }}  
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
          <SearchIcon sx={{fontSize:"30px"}} />          
          </InputAdornment >
         
        ),
      }}
      onChange={(e) => searchBarKey(e.target.value)}
    
    />
  );
};

export default SearchBar;
