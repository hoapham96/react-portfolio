import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function About() {
    const [pages] = useState([
        {
            name: "about me"
        }
    ]);
    const [currentPage] = useState(pages[0]);

    return (
        <div className="masthead text-center text-white d-flex">
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h1>{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr />
                        <p className="text-faded mb-5">I am an experienced front end developer with detailed full stack knowledge. I have more than one year of experience in developing mid- to large-scale websites using the latest core web technologies, in which I maintain expert-level knowledge. I recently earned a Certificate in Full Stack Web Development from the University of Texas at Austin, where I developed skills in MERN Stack and SQL Server.</p>
                       
                        <p className="text-faded mb-5">My strong organizational skills and excellent problem-solving abilities allow me to effectively collaborate on cross-functional teams that include designers, software developers, scrum masters, and project managers. My advanced education, professional background in technology, drive for success, and strong attention to detail are great assets that I own.</p>
                        {/* <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Check Out My Work</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About