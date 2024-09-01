import React, { useState } from 'react';
import styles from './style.module.css';

const CheckboxParentChild = props => {
  const { parentLabel, childData, className } = props;

  const [parentChecked, setParentChecked] = useState(false);
  const [childChecked, setChildChecked] = useState('');

  const handleParentChange = event => {
    const { checked } = event.target;
    setParentChecked(checked);
    setChildChecked('');
  };

  const handleChildChange = event => {
    const { value } = event.target;
    setChildChecked(value);
    setParentChecked(true);
  };

  const getChilds = item => {
    return (
      <label key={item.id} className={styles['child-item']}>
        <input
          type='checkbox'
          checked={childChecked == item.id}
          onChange={handleChildChange}
          value={item.id}
          disabled={!parentChecked}
          className='w-auto mr-3'
        />
        {item.name}
      </label>
    );
  };
  return (
    <div className={`${styles['list']} ${className}`}>
      <label className={styles['parent-item']}>
        <input
          type='checkbox'
          checked={parentChecked}
          onChange={handleParentChange}
          className='w-auto mr-3'
        />
        {parentLabel}
      </label>
      {childData.map(item => getChilds(item))}
    </div>
  );
};

export default CheckboxParentChild;
