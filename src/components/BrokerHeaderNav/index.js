// import React, { useEffect } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as EditIconSVG } from '../../assets/iconSvg/edit.svg';
import { ReactComponent as MagicStarIconSVG } from '../../assets/iconSvg/magic_star.svg';
import brokerLogo from '../../assets/images/sirf-broker-logo-1.png';
import BrokerButtonFilter from '../BrokerButtonFilter';
import Button from '../Buttons/Button';
import styles from './style.module.css';

const BrokerHeaderNav = (props) => {

  const { handleOpen } = props;
  const isLoggedIn = useSelector(state => state.loginSignup.loggedIn);

  let buttonText, icon;

  if (window.location.pathname == '/') {
    buttonText = 'Create Broker Profile';
    icon = <MagicStarIconSVG className={styles['magic-star-icon']} />;
  } else if (window.location.pathname === '/broker-profile' || isLoggedIn) {
    buttonText = 'Edit Broker Profile';
    icon = <EditIconSVG className={styles['edit-icon']} />;
  }

  return (
    <div className={`${styles['broker-header-nav']}`}>
      <div className={styles['nav-header-div']}>
        <div className={styles['nav-section-logo']}>
          <Link to='/'>
            <img
              src={brokerLogo}
              alt='only-broker'
              className={styles['logo']}
            />
          </Link>
        </div>
        <div className={styles['nav-section-menu']}>
          <div className='w-fc mr-5'>
            {
              (window.location.pathname !== '/profile' && isLoggedIn)
              && (
                <Button
                  label={buttonText}
                  icon={icon}
                  iconPosition='left'
                  className={styles['nav-button']}
                  onClick={handleOpen}
                />
              )
            }
          </div>
          <div className='w-fc ml-3'>
            <BrokerButtonFilter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrokerHeaderNav;
