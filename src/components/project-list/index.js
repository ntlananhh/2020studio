import React from 'react';
import { projectList } from '../variables';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link, Navigate } from 'react-router-dom'

function ProjectList({ category }) {

  const categoryList = [
    {
      id: 1,
      name: 'housing'
    },
    {
      id: 2,
      name: 'public-work'
    },
    {
      id: 3,
      name: 'religious-work'
    },
    {
      id: 4,
      name: 'interior'
    },
    {
      id: 5,
      name: 'landscape'
    }
  ]

  const list = category === 'all' ? projectList : projectList.filter((project => project.category === category));
  
  if ((category !== 'all' && categoryList.find(cate => cate.name === category) !== 'undefined') || category === 'all') {
    return (
      <>
        <Splide aria-label="My Favorite Images" autoWidth={true} type={list.length >= 2 ? 'loop' : ''}
              renderControls={() => (
                <div className="splide__arrows">
                    <div className=" splide__arrow--prev" role="button">
                      pre
                    </div>
                    <div className="splide__arrow--next" role="button">
                      next
                    </div>
                </div>
            )}
          options={{
            type: 'loop',
            height: '45vh',
            autoWidth: list.length >= 2 ? true : false,
            arrows: list.length > 3 ? true : false,
            pagination: false
          }}>
              
          {list.length ? list.map((item, index) =>
            <SplideSlide key={index} className="splide-slide">
              <div className='project-container'>
                <div className="project-tag">
                  <h4>{item.name}</h4>
                  <p className="m-0">Area: {item.area}m<sup>2</sup></p>
                  <p className="m-0">Year: {item.year}</p>
                  <p className="m-0">Region: {item.region}</p>
                </div>
                <Link to={{
                  pathname: `/project/${item.name.replace(/\s/g, '-')}`,
                  query: {
                    test: `${item.countDetail}`,
                  }
                }}>
                  <div className="img-hover-zoom">
                    <img className="test" src={'./assets/project-thumbnail/p' + item.id + '.jpg'} alt="" />
                  </div>
                </Link>
             </div>
            </SplideSlide>
          )
            :
            <div className="d-flex justify-content-center align-items-center updating-text text-center">
              <p>We're updating...</p>
            </div>
          }
        </Splide>
      </>
    )
  }
  else <Navigate to='/' replace />
}

export default ProjectList;