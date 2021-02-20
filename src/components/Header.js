import React from 'react';
import styled from 'styled-components';

const TopHeader = styled.div.attrs({
  className: 'fixed top-0 left-0 right-0 px-24 pt-12 z-50',
})``;

const TopHeaderLinks = styled.div.attrs({
  className: 'flex justify-between align-middle mb-6',
})``;

const Header = () => {
  return (
    <TopHeader>
      <TopHeaderLinks>
        <h6 className='text-xl'>wnzl.dev</h6>
        <h6 className='text-xl'>contact</h6>
      </TopHeaderLinks>
      <hr className='border-gray-200' />
    </TopHeader>
  );
};

export default Header;
