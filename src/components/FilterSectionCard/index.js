import React from 'react';
import { ReactComponent as FilterIconSVG } from '../../assets/iconSvg/filter.svg';
import Button from '../Buttons/Button';
import styles from './style.module.css';

const FilterSectionCard = props => {
  const { handleApply, handleClear } = props;

  return (
    <div className={styles['filter-section']}>
      <div className={styles['filter-header-div']}>
        <span className='f-lg'>
          <FilterIconSVG className={styles['filter-icon']} />
          Filters
        </span>
      </div>
      <div className={styles['filter-section-body']}>{props.children}</div>
      <div className={styles['filter-footer-div']}>
        <Button
          variant='white-color-button'
          label='Clear All'
          onClick={handleClear}
        />
        <Button
          variant='white-border-blue-button'
          className=''
          label='Apply'
          onClick={handleApply}
        />
      </div>
    </div>
  );
};

export default FilterSectionCard;
