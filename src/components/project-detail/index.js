import React, { useState } from 'react';
import { projectList } from '../variables';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useParams } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// import { LazyLoadImage } from 'react-lazy-load-image-component';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      <Modal.Body>
        <div className="hehe">
          <TransformWrapper
            initialScale={1}
            initialPositionX={1}
            initialPositionY={1}
          >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <React.Fragment>
                <TransformComponent>
                  <img className="hihi" src={props.imgUrl} alt="test" />

                </TransformComponent>
                <div className="tools">
                  <button className="btn btn-outline-secondary" onClick={() => zoomIn()}>
                    <img src="/assets/icons/zoom-in.png" alt="zoom-in" />
                  </button>
                  <button className="btn btn-outline-secondary" onClick={() => zoomOut()}>
                    <img src="/assets/icons/zoom-out.png" alt="zoom-out" />
                  </button>
                  <button className="btn btn-outline-secondary" onClick={() => resetTransform()}>
                    <img src="/assets/icons/1-1-size.png" alt="zoom-out" />
                  </button>
                </div>
              </React.Fragment>
            )}
          </TransformWrapper>
        </div>
      </Modal.Body>
    </Modal>
  );
}

const ProjectDetail = () => {
  let name = useParams().name;
  const [modalShow, setModalShow] = useState(false);
  const [imgUrl, setImgUrl] = useState('');

  const project = projectList.filter((project => project.name.replace(/\s/g, '-') === name))
  function showModal(url) {
    setModalShow(true);
    setImgUrl(url)
  }
  if (project.length) {
    var rows = [], i = 0, len = project[0].countDetail;
    while (++i <= len) rows.push(i);
    return (
      <>
        <Splide aria-label="Project detail" id="hi"
          autoWidth={true} type="loop"
          options={{
            type: 'loop',
            height: '45vh',
            autoWidth: true,
            pagination: false
          }}
        >
          {
            rows.map((index) => {
              const count = index < 10 ? '0' : ''
              const originalImgLink = '/assets/project-detail/' + project[0].name.replace(/\s/g, '-').toLowerCase() + '/original/' + count + index + '.jpg'
              return <SplideSlide key={index}>
                <img
                  onClick={(e) => showModal(originalImgLink)}
                  src={'/assets/project-detail/' + project[0].name.replace(/\s/g, '-').toLowerCase() + '/thumbnail/' + count + index + '.jpg'}
                  className="test px-1"
                  alt=""
                />
              </SplideSlide>
            })
          }
        </Splide>

        <MyVerticallyCenteredModal
          show={modalShow}
          imgUrl={imgUrl}
          onHide={() => setModalShow(false)}
        />
      </>
    )
  }
  else return <Navigate to='/' replace />
}

export default ProjectDetail