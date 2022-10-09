import React from 'react';

function AboutUs() {
    return (
        <div className=" about-us mb-5">      
            <div class="about-us-content-container">  
                <img src="./assets/about-us.jpg" class="about-us-img" alt="" />
                <div className='about-us-content container-fluid row'>
                    <div className='about-us-header col-md p-0 text-uppercase'>
                        <h1 className='align-top pl-2 m-0'>About us</h1>
                    </div>
                    <div className='about-us-text col-md-8 p-0'>
                        <div className='about-us-headline p-md-0'>
                            <p className=''>Established in 2020 in HoChiMinh City, Vietnam, 2020 studio is a Research and Design Workshop gathering architects and architectural students in the South of Vietnam activating in the fields of: Planning, Architecture, Interior, Landscape.</p>
                        </div>
                        <div className='about-us-decription container-fluid row p-0 m-0'>
                            <p className='col-md'>With young, active and passionate people, 2020 studio always seriously values the balance between academic in Research as well as precision in Practice to achieve the highest value of every project: Housing, Public works, Religious works, etc. </p>
                            <p className='col-md'>The design of 2020 studio is always aimed at standard, effectiveness and emotion by meticulously definement and throughout maintaining most basic and important elements: function, structure, proportion, material, light as well as harmony and delicacy in every space.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
