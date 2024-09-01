import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as UserPlusIconSVG } from '../../assets/iconSvg/add_user.svg';
import { ReactComponent as HelpIconSVG } from '../../assets/iconSvg/contact_support.svg';
import { ReactComponent as LoginIconSVG } from '../../assets/iconSvg/login.svg';
import { ReactComponent as LogoutIconSVG } from '../../assets/iconSvg/logout.svg';
import { ReactComponent as MenuIconSVG } from '../../assets/iconSvg/menu.svg';
import { ReactComponent as UserCircleIconSVG } from '../../assets/iconSvg/profile_circle.svg';
import { loginSignupAction } from '../../store/login-signup-slice';
import Button from '../Buttons/Button';
import PopModal from '../PopModal';
import LoginModal from './ModalComponent/LoginModal';
import SignupModal from './ModalComponent/SignupModal';
import VerifyNumber from './ModalComponent/VerifyNumber';
import styles from './style.module.css';

const BrokerButtonFilter = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [view, setView] = useState('login');
  const [loggerType, setLoggerType] = useState('user');
  const [label, setLabel] = useState('');
  const isLoggedIn = useSelector(state => state.loginSignup.loggedIn);
  const dispatch = useDispatch();
  // const navigate = useNavigate()
  //Dev
  const [otpId, setOtpId] = useState('');


  const openModal = view => {
    setView(view);
    setLabel(view);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOptionHandler = () => {
    setIsOpen(false);
  };

  const handleView = label => {
    setLabel(label);
  };

  let modal;
  if (view === 'login') {
    modal = (
      <LoginModal
        onClose={closeModal}
        setView={setView}
        handleView={handleView}
        //Dev
        setOtpId={setOtpId}
        setLoggerType={setLoggerType}
        loggerType={loggerType}
      />
    );
  } else if (view === 'signup') {
    modal = (
      <SignupModal
        onClose={closeModal}
        setView={setView}
        handleView={handleView}
        //Dev
        setOtpId={setOtpId}
        setLoggerType={setLoggerType}
        loggerType={loggerType}
      />
    );
  } else if (view === 'verify') {
    modal = (
      <VerifyNumber onClose={closeModal} view={label} setView={setView} otpId={otpId} setOtpId={setOtpId} loggerType={loggerType} />
    );
  }

  const handleLogout = isFalse => {
    dispatch(loginSignupAction.idLoggedIn(isFalse));
    dispatch(loginSignupAction.uploadLogin({}));
    dispatch(loginSignupAction.LoginInfo([]));
    sessionStorage.clear();
    localStorage.clear();
    // navigate('/')
  };

  const getListItem = () => {
    return (
      <>
        {isLoggedIn ? (
          <>
            <li
              className={`${styles['dropdown-btn-option']} ${isLoggedIn && styles['login']
                }`}
              onClick={() => handleLogout(false)}
            >
              <LogoutIconSVG className={styles['login-dropdown-icon']} />
              Logout
            </li>
            <Link to='/profile' className={styles['link']}>
              <li
                className={`${styles['dropdown-btn-option-border']} ${isLoggedIn && styles['login']
                  }`}
                onClick={() => openModal('signup')}
              >
                <UserCircleIconSVG className={styles['login-dropdown-icon']} />
                Edit Profile
              </li>
            </Link>
          </>
        ) : (
          <>
            <li
              className={`${styles['dropdown-btn-option']} ${isLoggedIn && styles['login']
                }`}
              onClick={() => openModal('login')}
            >
              <LoginIconSVG className={styles['dropdown-icon']} /> Login
            </li>
            <li
              className={`${styles['dropdown-btn-option-border']} ${isLoggedIn && styles['login']
                }`}
              onClick={() => openModal('signup')}
            >
              <UserPlusIconSVG className={styles['dropdown-icon']} />
              Sign up
            </li>
          </>
        )}
        <li
          className={`${styles['dropdown-btn-option']} ${isLoggedIn && styles['login']}`}
          onClick={() => selectOptionHandler()}
        >
          <HelpIconSVG
            className={
              isLoggedIn
                ? styles['login-dropdown-icon']
                : styles['dropdown-icon']
            }
          />
          Help Center
        </li>
      </>
    );
  };

  return (
    <>
      <div className={`${styles['dropdown-with-btn']} `}>
        <div className={styles['dropdown-btn']}>
          <Button
            icon={
              <UserCircleIconSVG
                className={
                  isLoggedIn === true
                    ? styles['logged-in-icon']
                    : styles['icon-color']
                }
              />
            }
            iconPosition='left'
            variant='transparent'
            onClick={toggleDropdown}
          />
          <Button
            icon={
              <MenuIconSVG
                className={
                  isLoggedIn === true
                    ? styles['logged-in-icon']
                    : styles['icon-color']
                }
              />
            }
            iconPosition='left'
            variant='transparent'
            onClick={toggleDropdown}
          />
        </div>
        {isOpen && (
          <ul className={styles['dropdown-btn-options']}>{getListItem()}</ul>
        )}
        <PopModal
          onClose={closeModal}
          isOpen={modalOpen}
          size='s'
          className={styles['modal-background']}
        >
          {modal}
        </PopModal>
      </div>
      <ToastContainer />
    </>
  );
};

export default BrokerButtonFilter;
