import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useParams } from "react-router-dom";
import { Navigate } from 'react-router-dom'

const ProjectDetail = () => {
  let name = useParams().name;
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
      "name": "Na House",
      "countDetail": 22,
      "category": 'interior'
    }
  ]
  const project = projectList.filter((project => project.name.replace(/\s/g, '-') === name)) 
 if(project.length){
  var rows = [], i = 0, len = project[0].countDetail;
  while (++i <= len) rows.push(i);
  return (
    <>
      <Splide aria-label="Project detail" id="hi"
          autoWidth={true} type="loop"
          options={{
          type: 'loop',
          height: '70vh',
          autoWidth: true,
          pagination: rows.length > 5 ? false : true
        }}
      >
        {
          rows.map((row) => {
            return <SplideSlide key={row}>
                <img className="test px-1" src={'/assets/project-detail/' + project[0].name.replace(/\s/g, '-').toLowerCase() + '-' + row + '.jpg'} alt="" />
            </SplideSlide>
          })
        }
      </Splide>
    </>
  )
 }
 else return <Navigate to='/' replace />



}

export default ProjectDetail