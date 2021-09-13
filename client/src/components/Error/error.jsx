import React from 'react';

import errorImage from '../../../assets/img/error_logo.png';

export const ErrorMessage = () => (
  <div className={'error'}>
    <img src={errorImage} alt="Error" />
    <p>Oops, something happend</p>
  </div>
);
