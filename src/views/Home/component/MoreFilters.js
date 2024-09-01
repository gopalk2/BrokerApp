import React from 'react';
import { ReactComponent as WrongIconSVG } from '../../../assets/iconSvg/close.svg';
import Button from '../../../components/Buttons/Button';
import InputRange from '../../../components/InputRange';
import { radioInput } from '../config/homeData';
import styles from './MoreFilters.module.css';

const MoreFilters = props => {
  const { onClose } = props;

  return (
    <div className={styles['more-filter']}>
      <div className={styles['header']}>
        <div className='w-90'>
          <p className='body-md mb-0'>More Filters</p>
        </div>
        <div className='w-10 text-end'>
          <Button
            icon={<WrongIconSVG className={styles['close-icon']} />}
            iconPosition='left'
            variant='transparent'
            onClick={onClose}
          />
        </div>
      </div>
      <div className={styles['filter-container']}>
        {radioInput.map(item => (
          <div className='w-45 mb-3' key={item.id}>
            <p className='body-sm mb-3'>{item.label}</p>
            <InputRange min={item.min} max={item.max} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreFilters;
