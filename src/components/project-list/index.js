import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';

function ProjectList() {
  const projectList=[
    {
      "id": 1,
      "name": "Project 1",
      "countDetail": 10,
      "category": 'housing'
    },
    {
      "id": 2,
      "name": "Project 1",
      "countDetail": 10,
      "category": 'housing'
    },
    {
      "id": 3,
      "name": "Project 1",
      "countDetail": 10,
      "category": 'housing'
    },
    {
      "id": 4,
      "name": "Project 1",
      "countDetail": 10,
      "category": 'housing'
    },
    {
      "id": 5,
      "name": "Project 1",
      "countDetail": 10,
      "category": 'housing'
    }
  ]
  return (
    <Splide aria-label="My Favorite Images" autoWidth={true} type="loop"
      options={{
        type: 'loop',
        height: '450px',
        autoWidth: true,
      }}>
      {projectList.map((item, index) =>
        <SplideSlide key={index}>
          <Link to={{ 
                    pathname: `/project/${item.name.replace(/\s/g, '-') }`, 
                    query: {
                      test: `${item.countDetail}` ,
                    } 
          }}>
            <div className="img-hover-zoom">
              <img className="test" src={'./assets/project-thumbnail/p' + item.id + '.jpg'} alt="" />
            </div>
            </Link>
        </SplideSlide>
      )} 
    </Splide>

  );
}

export default ProjectList;