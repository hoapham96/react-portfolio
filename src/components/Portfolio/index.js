import React, { useState } from 'react';
import Project from "../Project";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
    const [pages] = useState([
        {
            name: "portfolio"
        }
    ]);
    const [currentPage] = useState(pages[0]);
    const [projects] = useState([
        {
            name: 'M&M',
            description: 'JQuery/API/HTML/CSS/ Javascript',
            link: "https://jideogun.github.io/MusicAndMovies/",
            repo: "https://github.com/hoapham96/hoapham96.Music_and_Movie.github.io.git"
        },
        {
            name: 'Poke-Friends',
            description: 'MERN Stack',
            link: "https://pokefriends-v1.herokuapp.com/",
            repo: "https://github.com/hoapham96/PokeFriends-Project.git"
        },
        {
            name: 'run-buddy',
            description: 'HTML/CSS',
            link: "https://hoapham96.github.io/run-buddy/",
            repo: "https://github.com/hoapham96/run-buddy.git"
        },
        {
            name: 'tech-blog',
            description: 'Node/MySQL/Sequalize',
            link: "https://tech-blog-1396.herokuapp.com/",
            repo: "https://github.com/hoapham96/Tech-Blog.git"
        },
        {
            name: 'weather-dashboard',
            description: 'JavaScript/API/Bootstrap',
            link: "https://hoapham96.github.io/hoapham96.weather_dashboard.github.io/",
            repo: "https://github.com/hoapham96/hoapham96.weather_dashboard.github.io.git"
        },
        {
            name: 'food-festival',
            description: 'JS/Node/PWA',
            link: "https://hoapham96.github.io/food-festival/",
            repo: "https://github.com/hoapham96/food-festival.git"
        },
        {
            name: 'code-quiz',
            description: 'JavaScript/JQuery/CSS',
            link: "https://hoapham96.github.io/hoapham.Code-Quiz.github.io/",
            repo: "https://github.com/hoapham96/hoapham.Code-Quiz.github.io.git"
        },
        {
            name: 'password-generator',
            description: 'HTML/CSS/JavaScript',
            link: "https://hoapham96.github.io/password-generator/",
            repo: "https://github.com/hoapham96/hoapham.password-generator.github.io.git"
        },
        {
            name: 'note-taker',
            description: 'Node/Express/Bootstrap',
            link: "https://desolate-sierra-68220.herokuapp.com/",
            repo: "https://github.com/hoapham96/Note-Taker.git"
        },
        {
            name: 'work-day-scheduler',
            description: 'HTML/CSS/JavaScript',
            link: "https://hoapham96.github.io/hoapham96-Work-Day-Scheduler.github.io/",
            repo: "https://github.com/hoapham96/hoapham96-Work-Day-Scheduler.github.io.git"
        },
        {
            name: 'taskmaster-pro',
            description: 'HTML/CSS/JavaScript',
            link: "https://hoapham96.github.io/taskmaster-pro/",
            repo: "https://github.com/hoapham96/taskmaster-pro.git"
        },
        {
            name: 'git-it-done',
            description: 'HTML/Bootstrap/JavaScript',
            link: "https://hoapham96.github.io/git-it-done/",
            repo: "https://github.com/hoapham96/git-it-done.git"
        }
    ]);

    return (
        <section className="p-0">
            <div className="container-fluid p-0">
                <h1 className="text-center margin-top">{capitalizeFirstLetter(currentPage.name)}</h1>
                <hr className="my-4" />
                <div className="row no-gutters popup-gallery">
                   
                        {projects.map((project, idx) => (
                            <Project
                                project={project}
                                key={"project" + idx}
                            />
                        ))}
                    </div>
                
            </div>
        </section>
    );
};

export default Portfolio;
