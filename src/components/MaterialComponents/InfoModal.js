import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import React from 'react';

import './style.css';

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    maxWidth: 'none'
  }
}));

const InfoModal = props => {
  const { modalContent, tooltipPosition } = props;
  const placement = tooltipPosition || 'bottom';

  return (
    <LightTooltip
      title={modalContent}
      placement={placement}
      className='tooltip-mui'
    >
      <IconButton aria-label='delete' size='small' className='infon-button-mui'>
        <InfoIcon className={'info-icon'} fontSize='15px' />
      </IconButton>
    </LightTooltip>
  );
};

export default InfoModal;
