import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
function ProjectList() {
 
    
    return (
<Splide aria-label="My Favorite Images" autoWidth={true} type="loop"
   options={ {
    type     : 'loop',
    height    : '450px',
    autoWidth: true,
  } }>
  <SplideSlide>
    <div class="img-hover-zoom">
        <img className="test" src="./assets/project-thumbnail/p1.jpg"   alt=""/>
    </div>
  </SplideSlide>
  <SplideSlide>
    <div class="img-hover-zoom">
        <img className="test" src="./assets/project-thumbnail/p2.jpg"   alt=""/>
    </div>
  </SplideSlide>
  <SplideSlide>
    <div class="img-hover-zoom">
        <img className="test" src="./assets/project-thumbnail/p3.jpg"   alt=""/>
    </div>
  </SplideSlide>
  <SplideSlide>
    <div class="img-hover-zoom">
        <img className="test" src="./assets/project-thumbnail/p4.jpg"   alt=""/>
    </div>
  </SplideSlide>
  <SplideSlide>
    <div class="img-hover-zoom">
        <img className="test" src="./assets/project-thumbnail/p5.jpg"   alt=""/>
    </div>
  </SplideSlide>
  <SplideSlide>
    <div class="img-hover-zoom">
        <img className="test" src="./assets/project-thumbnail/p6.jpg"   alt=""/>
    </div>
  </SplideSlide>
</Splide>
    
    );
}

export default ProjectList;