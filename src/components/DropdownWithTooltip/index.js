import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';
import InfoModal from '../MaterialComponents/InfoModal';

const DropdownWithTooltip = props => {
  const {
    label,
    options,
    disabled,
    selectedDropdown,
    onDropdownChange,
    tooltip,
    tooltipContent,
    tooltipPosition
  } = props;

  const handleDropdownChange = event => {
    onDropdownChange(event.target.value);
  };

  const propsToPass = disabled ? { disabled } : {};

  return (
    <div>
      <label className='div-space-between mb-1'>
        <p className='body-sm m-0'>{label}</p>
        {tooltip && (
          <InfoModal
            modalContent={tooltipContent}
            tooltipPosition={tooltipPosition}
          />
        )}
      </label>
      <FormControl sx={{ width: '100%' }} {...propsToPass}>
        <Select
          value={disabled ? 'No Access' : selectedDropdown}
          onChange={handleDropdownChange}
          displayEmpty
          sx={{ height: '2rem', color: '#696978', fontSize: '12px' }}
        >
          {disabled && (
            <MenuItem
              value='No Access'
              sx={{ color: '#696978', fontSize: '12px' }}
            >
              No Access
            </MenuItem>
          )}
          {options.map(item => (
            <MenuItem
              key={item}
              value={item}
              sx={{
                color: '#696978',
                fontSize: '12px',
                margin: '0'
              }}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropdownWithTooltip;
