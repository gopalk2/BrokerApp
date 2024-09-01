import SyncIcon from '@mui/icons-material/Sync';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import React, { useState } from 'react';

import './style.css';

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} placement='right' />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    maxWidth: 'none'
  }
}));

const ClickableModal = props => {
  const { modalContent } = props;
  // const placement = tooltipPosition || "bottom";
  // const placement = "right";
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleButtonClick = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div>
        <LightTooltip
          PopperProps={{
            disablePortal: true
          }}
          title={modalContent}
          // placement={placement}
          className='tooltip-mui'
          disableFocusListener
          disableHoverListener
          disableTouchListener
          onClose={handleTooltipClose}
          open={open}
        >
          <IconButton
            aria-label='delete'
            size='small'
            className='infon-button-mui'
            onClick={handleButtonClick}
            disableRipple
          >
            <SyncIcon className={'darkestblue'} fontSize='small' />
            <span className='h5-text'>Re- assign Lead</span>
          </IconButton>
        </LightTooltip>
      </div>
    </ClickAwayListener>
  );
};

export default ClickableModal;
