import React from 'react';
import Badge from '../Badge';
import Button from '../Buttons/Button';
import styles from './style.module.css';

const Navs = props => {
  const {
    items,
    page,
    togglePage,
    variant,
    hideBadge,
    className,
    buttonClass
  } = props;

  return (
    <div
      className={`${styles['switch']} link-md ${styles[variant]} ${className}`}
    >
      {items.map((elem, idx) => {
        let buttonStyles =
          elem.item === page ? 'basic-blue-button' : 'blue-color-button';

        if (variant === 'outlined') {
          buttonStyles =
            elem.item === page ? 'underlined-active-button' : 'inactive-button';
        }

        let badgeStyles = elem.item === page ? 'active-pill' : 'inactive-pill';
        if (variant === 'outlined') {
          badgeStyles =
            elem.item === page ? 'active-nav-pill' : 'inactive-pill';
        }

        return (
          <div className={`div-center d-flex-col`} key={idx}>
            <p
              className={`mb-0 ${elem.disabled && styles['disabled']}`}
              onClick={
                elem.disabled ? null : () => togglePage.bind(this, elem.item)
              }
            >
              {elem.icon}
            </p>
            <Button
              key={idx}
              className={`w-auto pl-4 pr-4 fw-500 h-80 ${buttonClass}`}
              variant={buttonStyles}
              onClick={togglePage.bind(this, elem.item)}
              disabled={elem.disabled}
              label={
                <div className='div-center'>
                  <span>{elem.item}</span>
                  {!hideBadge && (
                    <Badge
                      label={elem.num}
                      className={`ml-2 mr-0`}
                      variant={badgeStyles}
                    />
                  )}
                </div>
              }
            />
            {elem.label && (
              <Badge
                label={elem.label}
                variant='user-badge inactive-pill'
                className='m-0'
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Navs;
