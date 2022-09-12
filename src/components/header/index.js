import React from 'react'
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className="header">
            <nav className="navbar sticky-top navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="https://www.wildbaerheule.ch/">2020Studio.</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto w-100 justify-content-end">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Other</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
                    );
}

export default Header;
