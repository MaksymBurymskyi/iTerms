import './RegistrationPages.scss';
import React from 'react';

function RegistrationPages({ formPage }) {
  return (
    <div className='registration'>
      <div className='container'>
        <div className='registration__wrapper'>
          <div className='registration__form'>{formPage}</div>
          <div className='registration__canvas'></div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPages;
