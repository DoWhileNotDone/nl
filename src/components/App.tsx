import React from 'react';
import { hot } from "react-hot-loader";
import { Splide, SplideSlide } from '@splidejs/react-splide';
//import '@splidejs/react-splide/css';

const App = () => {
  return (
    <>
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <img src="image1.jpg" alt="Image 1"/>
        </SplideSlide>
        <SplideSlide>
          <img src="image2.jpg" alt="Image 2"/>
        </SplideSlide>
      </Splide>
    </>
  );
};

const hotApp = hot(module)(App);

export {
  hotApp
};
