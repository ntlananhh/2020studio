import React from 'react'

function Header() {
    return (
        <div className="header">
            <nav class="navbar sticky-top navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="https://www.wildbaerheule.ch/">2020Studio.</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto w-100 justify-content-end">
                            <li class="nav-item active">
                                <a class="nav-link" href="https://www.wildbaerheule.ch/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://www.wildbaerheule.ch/">About</a>
                            </li>
                            <li class="nav-item">
                                    <a class="nav-link" href="https://www.wildbaerheule.ch/">Contact</a>
                            </li>
                            <li class="nav-item">
                                        <a class="nav-link" href="https://www.wildbaerheule.ch/">Services</a>
                            </li>
                            <li class="nav-item">
                                            <a class="nav-link" href="https://www.wildbaerheule.ch/">Other</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
                    );
}

export default Header;
