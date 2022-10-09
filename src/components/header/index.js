import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Header() {
    const [show, setShow] = useState(false);
    return (
        <div className="header sticky-top">
            <nav className="navbar  navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="./assets/logo.jpg" class="about-us-img" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto w-100 justify-content-end">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item" onClick={()=> setShow(!show)} >
                                <span className="nav-link">
                                    <span className="project-link">Projects</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" bi bi-chevron-down" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/> </svg>                                </span>
                            </li>
                        
                            <div 
                                className="sub-nav sub-nav-mobile" 
                                style={ { transform: `scaleY(${show ? 1 : 0})`, height:  `${show ? 280 : 0}px` } }>
                                <ul className="list-group">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/housing">Housing</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/public-work">Public work</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/religious-work">Religious work</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/interior">Interior</Link>
                                    </li>           
                                </ul>
                            </div>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/other">Other</Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
            <div className='container'>
                <div 
                    className="sub-nav d-none d-md-block" 
                    style={ { transform: `scaleY(${show ? 1 : 0})`, height:  `${show ? 60 : 0}px` } }>
                    <ul className="list-group">
                        <li className="nav-item">
                            <Link className="nav-link" to="/housing">Housing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/public-work">Public work</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/religious-work">Religious work</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/interior">Interior</Link>
                        </li>           
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
