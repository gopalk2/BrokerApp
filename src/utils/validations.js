// export const validateNumber = number => {
//   return number.length > 0 && /^\d{1,2}$/.test(number);
// };

export const validateNumber = (number) => {
  return /^\d+$/.test(number) && number.length >= 1 && number.length <= 10;
};


export const validateEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // console.log(email ,'email');
  return emailRegex.test(email);
};

export const validatePassword = password => {
  return password.length >= 8;
};

export const validateText = text => {
  const specialCharRegex = /^[a-zA-Z\s]+$/;
  return text.length > 1 && specialCharRegex.test(text);
};

export const validateWebsite = url => {
  const urlRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
  return urlRegex.test(url);
};


export const validateContact = contact => {
  const regex = /^\d{10}$/; // Assumes a 10-digit contact number
  return regex.test(contact);
};

export const validatePan = pan => {
  const panNumberRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
  return pan.length > 0 && panNumberRegex.test(pan);
};

export const validateGst = gst => {
  const gstNumberRegex =
    /^([0][1-9]|[1-2][0-9]|[3][0-7])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$/;
  return gst.length > 0 && gstNumberRegex.test(gst);
};

export const validateDigit = number => {
  return number.length === 12 && /^\d{12}$/.test(number);
};
