import React from 'react'
import { Chip } from '@mui/material'

interface ButtonProps{
    text: "CLEAR" | "CONSIDER" | "ENGAGE" | "ADVERSE ACTION" | "-";
    onClickHandler: () => void;
}

//chip comonent supports outlined and filled styling
const ButtonChip = ({ text, onClickHandler} : ButtonProps) => {
  return (
      <Chip
          label={text}
          onClick={onClickHandler}
          variant="outlined"
          sx={{
              border: 0,
              fontWeight: 'bold',
              borderRadius: '3px',
              color:
                  text === "CONSIDER" || text === "ADVERSE ACTION"
                      ? "#A08817" : "#17A076",
              backgroundColor:
                  text === "CONSIDER" || text === "ADVERSE ACTION"
                      ? "#f6f3e8" : "#e8f6f1"
          }}
    />
  )
}

export default ButtonChip
