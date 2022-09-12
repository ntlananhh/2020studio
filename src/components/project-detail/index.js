import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useParams, useLocation } from "react-router-dom";

const ProjectDetail = () => {
  let name = useParams().name;

  return (
    <div>
        <Splide aria-label="My Favorite Images" autoWidth={true} type="loop"
          options={{
            type: 'loop',
            height: '450px',
            autoWidth: true,
        }}>
      {/* {(()=>{
         
        for( let i=1; i<=countDetail; i++){
          return
          <SplideSlide key={i}>
            <img className="test" src={`./assets/project-detail/${name} ${i}.jpg`} alt="" />
          </SplideSlide>
        }
      })
      } */}
    </Splide>
    </div>
  )
}

export default ProjectDetail