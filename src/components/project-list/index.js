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
      "category": 'public-work',
      "area": 200,
      "year": "2022",
      "region": "Hue, Viet Nam"
    },
    {
      "id": 2,
      "name": "Project 2",
      "countDetail": 5,
      "category": 'housing',
      "area": 550,
      "year": "2021",
      "region": "Hue, Viet Nam"
    },
    {
      "id": 3,
      "name": "Project 3",
      "countDetail": 5,
      "category": 'religious-work',
      "area": 500,
      "year": "2022",
      "region": "Ho Chi Minh city, Viet Nam"
    },
    {
      "id": 4,
      "name": "Project 4",
      "countDetail": 5,
      "category": 'housing',
      "area": 300,
      "year": "2022",
      "region": "Da Nang, Viet Nam"
    },
    {
      "id": 5,
      "name": "Na House",
      "countDetail": 5,
      "category": 'interior',
      "area": 300,
      "year": "2022",
      "region": "Can Tho, Viet Nam"
    }
  ]
  const list = category === 'all' ? projectList : projectList.filter((project => project.category === category));
  
  if ((category !== 'all' && categoryList.find(cate => cate.name === category) !== 'undefined') || category === 'all') {
    return (
      <>
        <Splide aria-label="My Favorite Images" autoWidth={true} type={list.length >= 2 ? 'loop' : ''}
          options={{
            type: 'loop',
            height: '70vh',
            autoWidth: list.length >= 2 ? true : false,
            arrows: list.length > 2 ? true : false,
            pagination: list.length >= 5 ? false : true
          }}>
          {list.length ? list.map((item, index) =>
            <SplideSlide key={index} className="splide-slide">
              <div class="project-tag">
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
            </SplideSlide>
          )
            :
            <Navigate to='/' replace />}
        </Splide>
      </>
    )
  }
  else <Navigate to='/' replace />
}

export default ProjectList;