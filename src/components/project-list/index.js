import React from 'react';
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
  ]

  const projectList = [
    {
      "id": 1,
      "name": "Project 1",
      "countDetail": 5,
      "category": 'public-work'
    },
    {
      "id": 2,
      "name": "Project 2",
      "countDetail": 5,
      "category": 'housing'
    },
    {
      "id": 3,
      "name": "Project 3",
      "countDetail": 5,
      "category": 'religious-work'
    },
    {
      "id": 4,
      "name": "Project 4",
      "countDetail": 5,
      "category": 'housing'
    },
    {
      "id": 5,
      "name": "Project 5",
      "countDetail": 5,
      "category": 'interior'
    }
  ]
  const list = category === 'all' ? projectList : projectList.filter((project => project.category === category));
  if ((category !== 'all' && categoryList.find(cate => cate.name === category) !== 'undefined') || category === 'all') {
    return (
      <div className=''>
      <Splide aria-label="My Favorite Images" autoWidth={true} type={list.length >= 2 ? 'loop' : ''}
        options={{
          type: 'loop',
          height: '75vh',
          autoWidth: list.length >= 2 ? true : false,
          arrows: list.length >= 2 ? true : false,
          pagination: false
        }}>
        {list.length ? list.map((item, index) =>
          <SplideSlide key={index}>
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
          </SplideSlide>
        )
          :
          <Navigate to='/' replace />}
      </Splide>
      </div>
    )
  }
  else <Navigate to='/' replace />
}

export default ProjectList;