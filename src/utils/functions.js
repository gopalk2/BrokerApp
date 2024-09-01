import { ReactComponent as FillStarIconSVG } from '../assets/iconSvg/star_filled.svg';
import { ReactComponent as EmptyStarIconSVG } from '../assets/iconSvg/star_outlined.svg';

export const getStars = priority => {

  let fillStars = 1;
  if (priority === 'Medium') {
    fillStars = 2;
  } else if (priority === 'High') {
    fillStars = 3;
  }

  const stars = [];

  for (let i = 0; i < 3; i++) {
    if (fillStars > 0) {
      stars.push(
        <span>
          <FillStarIconSVG
            style={{
              width: '17px',
              height: '17px',
              marginRight: '0.5vw',
              marginBottom: '0.3vh',
              color: '#fac700'
            }}
          />
        </span>
      );
      fillStars--;
    } else {
      stars.push(
        <span>
          <EmptyStarIconSVG
            style={{
              width: '17px',
              height: '17px',
              marginRight: '0.5vw',
              marginBottom: '0.3vh',
              color: '#fac700'
            }}
          />
        </span>
      );
    }
  }
  return <span>{stars}</span>;
};

export const getColor = status => {
  switch (status) {
    case 'Visit yet to be scheduled for this space':
      return '#E078001A';
    case 'Term Sheet Requested on:':
      return '#473ABF1A';
    case 'Visit completed on:':
      return '#0A52351A';
    case 'Visit Booked for:':
      return '#495A661A';
    case 'Term sheet shared on:':
      return '#3A85BF1A';
    default:
      return 'black'; // Default color for unknown statuses
  }
};

export const getTextColor = status => {
  switch (status) {
    case 'Visit yet to be scheduled for this space':
      return '#E07800';
    case 'Term Sheet Requested on:':
      return '#473ABF';
    case 'Visit completed on:':
      return '#0A5235';
    case 'Visit Booked for:':
      return '#495A66';
    case 'Term sheet shared on:':
      return '#3A85BF';
    default:
      return 'black'; // Default color for unknown statuses
  }
};

export const getBgColor = inventory => {
  switch (inventory) {
    case 'My Inventory':
      return '#07B871B2';
    case 'LM Inventory':
      return '#223A60B2';
  }
};

export const getModalPosition = (event, width, height) => {
  const rect = event.target.getBoundingClientRect();
  const modalWidth = window.innerWidth * width; // Calculate the modal width
  const modalHeight = window.innerHeight * height; // Calculate the modal height
  let clickedPosition;

  if (window.innerWidth - rect.right < modalWidth) {
    clickedPosition = {
      right: window.innerWidth - rect.left
    };
  } else {
    clickedPosition = {
      left: rect.right + window.scrollX
    };
  }

  if (window.innerHeight - rect.bottom < modalHeight) {
    clickedPosition.bottom = rect.top - modalHeight;
  } else {
    clickedPosition.top = rect.bottom;
  }
  return clickedPosition;
};
