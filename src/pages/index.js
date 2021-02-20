import * as React from 'react';
import Layout from '../components/Layout';
import styled, { keyframes } from 'styled-components';

import Header from '../components/Header';

import bg from '../images/bg.jpg';
import floatingWenzel from '../images/self.png';

const BGImage = styled.div`
  background-image: url(${bg});
`;

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const FloatingWenzel = styled.img`
  width: 75%;
  min-width: 37rem;
  animation: ${float} 6s ease-in-out infinite;
`;

const HighlightedH3 = styled.h3`
  position: relative;
  display: inline-block;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: -1.5rem;
    right: 0;
    top: 60%;
    background: ${(p) => p.colorOne};
    opacity: 0.2;
    z-index: -1;
    transition: 0.15s;
  }
  &:hover:before {
    background: ${(p) => p.colorTwo};
    opacity: 1;
    right: -3rem;
  }
`;

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <div className='z-10'>
          <Header />
          <div className=' w-full h-screen flex flex-col justify-center items-center'>
            <BGImage className='w-2/6 absolute top-0 right-0 bottom-16 bg-right bg-no-repeat bg-cover z-0'></BGImage>

            <div className='grid grid-cols-2 w-full  h-full flex-1'>
              {/* <div className='container flex flex-col justify-center items-center text-left'> */}
              <div className='container flex items-center'>
                <div className='xl:pl-48 lg:pl-36'>
                  <h1 className='md:text-5xl lg:text-6xl xl:text-7.5xl whitespace-nowrap font-display font-bold'>
                    hi i'm wenzel lowe
                  </h1>
                  <HighlightedH3
                    className='xl:text-5xl lg:text-4xl ml-6 mb-6'
                    colorOne='#395c6b'
                    colorTwo='#39a0ed'
                  >
                    software engineer
                  </HighlightedH3>
                  <br />
                  <HighlightedH3
                    className='xl:text-5xl lg:text-4xl ml-6 mb-6'
                    colorOne='#9C88FF'
                    colorTwo='#9C88FF'
                  >
                    videographer
                  </HighlightedH3>
                  <br />
                  <HighlightedH3
                    className='xl:text-5xl lg:text-4xl ml-6 mb-6'
                    colorOne='#13C4A3'
                    colorTwo='#13C4A3'
                  >
                    designer
                  </HighlightedH3>
                </div>
              </div>
              <div className='z-10 p-12 mt-24 pl-48 flex justify-center align-center'>
                <FloatingWenzel src={floatingWenzel} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default IndexPage;
