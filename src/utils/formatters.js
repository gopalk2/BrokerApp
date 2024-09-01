import { ReactComponent as MoneyIconSVG } from '../assets/iconSvg/rupees.svg';

export const dateFormatter = date => {
  const formattedDate = date.split('-');
  return formattedDate[0].trim();
};

export const amountFormatter = amount => {
  //converting numbers to amount format with rupees icon
  return (
    <span>
      <MoneyIconSVG style={{ width: '10px', marginBottom: '0.25rem' }} />
      {new Intl.NumberFormat('en-IN').format(amount)}
    </span>
  );
};

export const numberFormatter = amount => {
  //converting numbers to amount format
  return <span>{new Intl.NumberFormat('en-IN').format(amount)}</span>;
};

export const formatDate = inputDate => {
  // converting 2023-09-27 to Sep 27, 2023
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = new Date(inputDate).toLocaleDateString(
    undefined,
    options
  );
  return formattedDate;
};

export const dateFormatterToUserFormat = date => {
  //mapping date to today, yesterday o/w
  //converting 2023-09-27 to Sep 27, 2023

  const moment = require('moment');
  const parsedDate = moment(date);

  if (parsedDate.isSame(moment(), 'day')) {
    return 'Today';
  } else if (parsedDate.isSame(moment().subtract(1, 'days'), 'day')) {
    return 'Yesterday';
  } else {
    return parsedDate.format('MMM D, YYYY');
  }
};

export const formatDateAndTime = (dateString, shouldUse12Hour = true) => {
  const moment = require('moment');

  if (!dateString) {
    return { formattedDate: '', formattedTime: '' };
  }

  const date = moment(dateString);

  const formattedDate = date.format('MMM D, YYYY');
  const formattedTime = shouldUse12Hour
    ? date.format('hh:mm A')
    : date.format('HH:mm');

  return { formattedDate, formattedTime };
};
