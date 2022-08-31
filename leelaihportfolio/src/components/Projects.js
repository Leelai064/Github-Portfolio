import React from 'react'
import "../index.css"

const Projects = () => {
    return (

        <div className="section is-large" id="Projects">
            <nav className="navbar" id='projectsNavbar' role="navigation" aria-label="dropdown navigation">
                <div className="navbar-item has-dropdown is-hoverable projectmagic" id=" projNavbarHover">
                    <a href='#projects' className="navbar-link">
                        Projects
                    </a>
                    <div className="navbar-dropdown">
                        <a href="#webDev" className="navbar-item">
                            University of Pennsylvania
                        </a>
                        <hr className="navbar-divider" />
                        <a href="#fitEng" className="navbar-item">
                            FIT Engineering
                        </a>
                    </div>
                </div>
            </nav>

            <div id="projects" className="show">

                <h1 className="title">Project Credentials</h1>
                <h2 className="subtitle">
                    Check the dropdown menu above to cycle through past projects!
                </h2>
            </div>

            <div id="webDev" className="hide">
                <div className="section-dark my-work" id="myWork">
                    <div className="uPennContainer">
                        <div className="columns is-multiline" data-aos="fade-in" data-aos-easing="linear">
                            <div className="column is-12">
                                <h1 className="title">Completed Projects</h1>
                            </div>

                            <section id="portfolio" />
                            <div className="project">
                                <img className="project__image" id="firstImage" src="assets/images/readmeGenerator.png"></img>
                                <p>README Generator</p>
                                <h3 className="grid__title"> front-end</h3>
                                <div className="grid__overlay">
                                    <form action="https://drive.google.com/file/d/1m3efrJPmTyj1w7raCMwYSF1bl2oxlgBi/view?usp=sharing"
                                        method="get" target="_blank">
                                        <button> Launch Demo!</button>
                                    </form>
                                    <form action="https://github.com/Leelai064/READMEGenerator" method="get" target="_blank">
                                        <button> Github Repo</button>
                                    </form>
                                </div>
                            </div>

                            <div className="project">
                                <img className="project__image" id="otherImage" src="assets/images/passwordgenerator.png" ></img>
                                <p>Password Generator</p>
                                <h3 className="grid__title"> front-end</h3>
                                <div className="grid__overlay">
                                    <form action="https://leelai064.github.io/passwordgenerator/" method="get" target="_blank">
                                        <button> Launch Website!</button>
                                    </form>
                                    <form action="https://github.com/Leelai064/passgenerator" method="get" target="_blank">
                                        <button> Github Repo</button>
                                    </form>
                                </div>
                            </div>



                            <div className="project">
                                <img className="project__image" id="otherImage" src="assets/images/PlannerDemo.gif"></img>
                                <p>Personal Scheduler</p>
                                <h3 className="grid__title"> full-stack</h3>
                                <div className="grid__overlay">
                                    <form action="https://github.com/Leelai064/PersonalScheduler" method="get" target="_blank">
                                        <button> Launch Website!</button>
                                    </form>
                                    <form action="https://github.com/Leelai064/PersonalScheduler" method="get" target="_blank">
                                        <button> Github Repo</button>
                                    </form>
                                </div>
                            </div>

                            <div className="project">
                                <img width="1500 vh" height="2500 vh" id="otherImage" className="project__image"
                                    src="assets/images/projectone.png" ></img>
                                <p>Entertainment Hub</p>
                                <h3 className="grid__title"> API Intergration</h3>
                                <div className="grid__overlay">
                                    <form action="https://hkhalfan1979.github.io/entertainment-hub/" method="get" target="_blank">
                                        <button> Launch Website!</button>
                                    </form>
                                    <form action="https://github.com/hkhalfan1979/entertainment-hub" method="get" target="_blank">
                                        <button> Github Repo</button>
                                    </form>
                                </div>
                            </div>
                            <div className="project">
                                <img className="project__image" id="otherImage" src="assets/images/buildacareer.png" ></img>
                                <p>Build-A-Career</p>
                                <h3 className="grid__title"> Full Stack React App</h3>
                                <div className="grid__overlay">

                                    <form action="" method="get" target="_blank">
                                        <button href=" " className="deployedApp">Launch Website!</button>
                                    </form>
                                    <form action="https://github.com/stefcarter/resume-final" method="get" target="_blank">
                                        <button> Github Repo</button>
                                    </form>
                                </div>
                            </div>
                            <div className="overlay">
                                <div className="overlay__inner">
                                    <button className="close">close X</button>
                                    <img />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default Projects;