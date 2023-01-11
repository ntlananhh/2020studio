import React from 'react';
import Iframe from 'react-iframe'

function Contact() {
    return (
        <div className="contact mt-5">
            <div className="contact-container container">
                <div className="row">
                    <div className="col-md-8 container-map p-0">
                        <Iframe url="https://www.google.com/maps/embed/v1/place?q=139%20L%C3%BD%20Ch%C3%ADnh%20Th%E1%BA%AFng%2C%20V%C3%B5%20Th%E1%BB%8B%20S%C3%A1u%2C%20Qu%E1%BA%ADn%203%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vi%E1%BB%87t%20Nam&key=AIzaSyDc7PnOq3Hxzq6dxeUVaY8WGLHIePl0swY"
                            width="100%"
                            height="100%"
                            id=""
                            className="iframe"
                            display="block"
                            position="relative"
                            allowFullScreen/>
                    </div>
                    <div className="col-md contact-content p-md-5 p-3 mt-3 mt-md-0 ">
                        <h2 className='mb-5'>Contact us</h2>
                        <p><i className="fab fa-twitter"></i> Location: <br/>183 Ly Chinh Thang, 3 District, Ho Chi Minh City</p>
                        <p><i className="fab fa-twitter"></i> Country: Viet Nam</p>
                        <p><i className="fab fa-twitter"></i> Phone: 0901 005 990</p>
                        <p><i className="fab fa-twitter"></i> Email: 2020studio.saigon@gmail.com</p>
                    </div>
                </div>
            
            </div>
        </div>
    );
}

export default Contact;
