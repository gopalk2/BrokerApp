import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import * as React from 'react';

const IOSSwitch = styled(props => (
  <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 22,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(21px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#05447A',
        opacity: 1,
        border: 0
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      }
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#05447A',
      border: '6px solid #fff'
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[500]
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.5
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 15,
    height: 15,
    marginTop: 1
  },
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    backgroundColor: '#BBBBC2',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500
    })
  }
}));

const CustomSwitch = props => {
  const { checked, handleChange } = props;
  return (
    <FormControlLabel
      control={
        <IOSSwitch
          sx={{}}
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      }
    />
  );
};

export default CustomSwitch;
