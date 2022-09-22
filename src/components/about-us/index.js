import React from 'react';

function AboutUs() {
    return (
        <div className="container about-us">
            <div className='about-us-header'>
                <h1>About us</h1>
                <p className='logo'>2020</p>
            </div>
            <div class="about-us-content-container">
                <img src="./assets/project-thumbnail/p5.jpg" class="about-us-img" alt="" />
                <div className='about-us-content'>
                    <div class="about-us-stats">
                        <div class="block">
                            <div class="num">50</div>
                            <span class="text">Projects</span>
                        </div>
                        <div class="block">
                            <div class="num">30</div>
                            <span class="text">Clients</span>
                        </div>
                        <div class="block">
                            <div class="num">15</div>
                            <span class="text">Employees</span>
                        </div>
                    </div>
                    <div className='about-us-decription'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repudiandae rerum dolores voluptate quod tempora amet eos repellendus odio voluptates quibusdam sequi unde sint aliquam, esse repellat facilis consectetur. Rem.</p>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
