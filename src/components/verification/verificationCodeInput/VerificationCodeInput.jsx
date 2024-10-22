import React, { useState, useRef } from 'react';
import { Grid, TextField } from '@mui/material';

const VerificationCodeInput = () => {
  const [code, setCode] = useState(new Array(6).fill(''));
  const inputRefs = useRef([]);

  // Handle the change for each input
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newCode = [...code];
    newCode[index] = element.value;
    setCode(newCode);

    // Focus next input if available
    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle backspace to move focus back to the previous field
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && code[index] === '') {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <Grid container justifyContent="center" spacing={2} style={{ marginTop: '20px' }}>
      {code.map((value, index) => (
        <Grid item key={index}>
          <TextField
            inputProps={{
              maxLength: 1,
              style: {
                textAlign: 'center',
                fontSize: '24px',
                width: '40px',
                height: '40px',
                borderRadius: '5px',
                border: '1px solid #121C17'
              }
            }}
            value={value}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            inputRef={(el) => (inputRefs.current[index] = el)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default VerificationCodeInput;
