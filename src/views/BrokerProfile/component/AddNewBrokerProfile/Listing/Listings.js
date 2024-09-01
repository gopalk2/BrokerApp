import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as UserPlusIconSVG } from '../../../../../assets/iconSvg/add_user.svg';
import { ReactComponent as DeleteIconSVG } from '../../../../../assets/iconSvg/delete.svg';
import { ReactComponent as UpIconSVG } from '../../../../../assets/iconSvg/dropdown.svg';
import { ReactComponent as DownIconSVG } from '../../../../../assets/iconSvg/dropdown.svg';
import Button from '../../../../../components/Buttons/Button';
import { brokerProfileAction } from '../../../../../store/broker-profile-slice';
import styles from './Listing.module.css';
import SpaceForm from './SpaceForm';

const Listings = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.brokerProfile.isOpen);
  const propertyData = useSelector(state => state.brokerProfile.reraTypes.properties || []);

  const handleDelete = id => {
    dispatch(brokerProfileAction.deleteProperty(id));
  };

  const handleOpen = index => {
    dispatch(brokerProfileAction.toggleSpaceForm(index));
  };

  const handleAddProperty = () => {
    dispatch(brokerProfileAction.addProperty());
  };

  return (
    <div className='w-100 p-relative h-100'>
      <div className='w-100 h-90 overflow'>
        {propertyData?.length > 0 ? (
          propertyData?.map((item, index) => (
            <div className={styles['form-accordion-div']} key={item.id}>
              <div className='w-90'>
                <p className='body-lg mb-1'>{item.propertyName}</p>
              </div>
              <div className='w-10 text-end'>
                <Button
                  icon={<DeleteIconSVG className={styles['delete-icon']} />}
                  iconPosition='left'
                  className='pr-4'
                  variant='transparent'
                  onClick={() => handleDelete(item.id)}
                />
                <Button
                  icon={
                    isOpen[index] ? (
                      <UpIconSVG className={styles['up-icon']} />
                    ) : (
                      <DownIconSVG className={styles['down-icon']} />
                    )
                  }
                  iconPosition='left'
                  className='p-0'
                  variant='transparent'
                  onClick={() => handleOpen(index)}
                />
              </div>
              <div className={styles['form-border-div']}>
                {isOpen[index] && <SpaceForm property={item} />}
              </div>
            </div>
          ))
        ) : (
          <p>No spaces available</p> // Optional: Display a message or placeholder when there are no spaces
        )}
      </div>

      <div className='w-100 h-10'>
        <div className={styles['form-footer-div']}>
          <Button
            label='Add Space'
            icon={<UserPlusIconSVG className={styles['user-icon']} />}
            iconPosition='left'
            className='p-0'
            variant='transparent'
            onClick={handleAddProperty}
          />
        </div>
      </div>
    </div>
  );
};

export default Listings;
