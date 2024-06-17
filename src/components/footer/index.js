import React from 'react';

function Footer() {
    return (
        <div className= "footer">
            <div className='social-icon-group d-flex justify-content-center'>
                <span className="social-icon">
                    <a href='https://www.facebook.com/2O2Ostudio/'><i className="fab fa-facebook-f"></i></a>
                </span>
                <span className="social-icon">
                    <a href='https://www.facebook.com/2O2Ostudio/'><i className="fab fa-linkedin-in"></i></a>
                </span>
                <span className="social-icon">
                    <a href='https://www.instagram.com/2020_studio_saigon'><i className="fab fa-instagram"></i></a>
                </span>
            </div>
            <div className='copy-right d-flex justify-content-center mt-2'>
                <p>Copyright &copy; by 2020Studio </p>
            </div>
        </div>
    );
}

export default Footer;
