import React, { useState } from 'react';
import { ReactComponent as WrongIconSVG } from '../../assets/iconSvg/close.svg';
import Button from '../Buttons/Button';
import styles from './style.module.css';

const MultipleTextInput = props => {
  const { texts = [], setTexts, label, placeholder } = props; // Ensure texts is defaulted to an empty array
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);
  const defaultPlaceholder =
    placeholder && texts.length === 0 ? placeholder : '';

  const handleInputChange = e => {
    setError(false);
    setInputValue(e.target.value);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTextAdd();
    }
  };

  const handleTextAdd = () => {
    if (inputValue.trim() !== '') {
      const newText = inputValue.trim();
      if (!texts.includes(newText)) {
        const newTexts = [...texts, newText];
        setTexts(newTexts);
      }
      setInputValue('');
    } else {
      setError(true);
    }
  };

  const handleTextRemove = text => {
    const filteredTexts = texts.filter(e => e !== text);
    setTexts(filteredTexts);
  };

  return (
    <div className={styles['outer-div']}>
      <label className={styles['label']}>{label}</label>
      <div className={styles['outer-div-texts']}>
        {Array.isArray(texts) && texts.map((text, index) => (
          <span key={index} className={styles['text-pill']}>
            {text}
            <Button
              variant='blue-color-button'
              label=''
              icon={<WrongIconSVG className={styles['close-icon']} />}
              iconPosition='left'
              onClick={() => handleTextRemove(text)}
              className='remove-button'
            />
          </span>
        ))}
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={defaultPlaceholder}
          className={styles['input']}
        />
      </div>
      {error && <p className={'error-text m-0 mt-1'}>Enter a valid text</p>}
      <p className='helper-text m-0 mt-1'>
        Press ENTER or SPACE to separate between clients
      </p>
    </div>
  );
};

export default MultipleTextInput;
