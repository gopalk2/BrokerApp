import React from 'react';
import { ReactComponent as RightIconSVG } from '../../assets/iconSvg/dropdown.svg';
import { ReactComponent as FacebookIconSVG } from '../../assets/iconSvg/facebook.svg';
import { ReactComponent as InstagramIconSVG } from '../../assets/iconSvg/instagram.svg';
import { ReactComponent as LinkedinIconSVG } from '../../assets/iconSvg/linkedin.svg';
import { ReactComponent as TwitterIconSVG } from '../../assets/iconSvg/twitter.svg';
import logo from '../../assets/images/sirf-broker-logo-1.png';
import styles from './style.module.css';

const BrokerFooter = props => {

  const { footerBlogList, footerCompanyList } = props;

  return (
    <div className={styles['footer-div']}>
      <div className='w-30 p-relative'>
        <img src={logo} alt='apna-office' className={styles['logo']} />

        <div className={styles['text-div']}>
          <p className={styles['text']}>
            All trademarks are the property of their respective owners.
          </p>
          <p className={styles['text']}>
            ©2024 Leasing Monk Technologies Pvt. Ltd.
          </p>
        </div>
      </div>

      <div className='w-30'>
        <p className={styles['footer-tittle-text']}> Company</p>
        {footerCompanyList.map((list, index) => (
          <p className='mb-2' key={index}>
            <a className={styles['blog-list-text']} href='#'>
              {list}
            </a>
          </p>
        ))}
      </div>

      <div className='w-20'>
        <p className={styles['footer-tittle-text']}>Blog</p>
        {footerBlogList.map((list, index) => (
          <p className='mb-2' key={index}>
            <a className={styles['blog-list-text']} href='#'>
              {list}
              {list === 'Explore All' && (
                <RightIconSVG className={styles['right-icon']} />
              )}
            </a>
          </p>
        ))}
      </div>

      <div className='w-20 p-relative'>
        <p className={styles['footer-tittle-text']}>Contact US</p>
        <p className={styles['footer-no-text']}>Toll Free - 1800 180 1800</p>
        <p className={styles['footer-no-text']}>Email - sales@sirfbroker.com</p>

        <div className={styles['text-div']}>
          <p className={styles['follow-us-text']}>Follow us on</p>
          <p className={styles['follow-us-text']}>
            <FacebookIconSVG className={styles['footer-icon']} />
            <TwitterIconSVG className={styles['footer-icon-two']} />
            <InstagramIconSVG className={styles['footer-icon-two']} />
            <LinkedinIconSVG className={styles['footer-icon-two']} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrokerFooter;
