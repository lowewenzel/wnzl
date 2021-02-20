import React from 'react';
import '@fontsource/playfair-display/800.css';
import '@fontsource/yrsa/300.css';

export default ({ children }) => {
  return (
    <div>
      {children}
      <div className='w-screen h-screen grid grid-cols-3 fixed top-0 bottom-0 right-0 left-0 -z-1'>
        <div className='border' />
        <div className='border' />
        <div className='border' />
      </div>
    </div>
  );
};
