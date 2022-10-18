import React from 'react';
import Iframe from 'react-iframe'

function Contact() {
    return (
        <div className="contact mb-5">
            <div className="contact-container">
                <div className="container__map" id="map">

                <Iframe url="https://www.google.com/maps/embed/v1/place?q=139%20L%C3%BD%20Ch%C3%ADnh%20Th%E1%BA%AFng%2C%20V%C3%B5%20Th%E1%BB%8B%20S%C3%A1u%2C%20Qu%E1%BA%ADn%203%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vi%E1%BB%87t%20Nam&key=AIzaSyDc7PnOq3Hxzq6dxeUVaY8WGLHIePl0swY"
                    width="640px"
                    height="320px"
                    id=""
                    className="iframe"
                    display="block"
                    position="relative"
                    allowFullScreen/>
             
                </div>
                <div className="container__content">

                    <p className="content__phone">077 2355 6108</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
