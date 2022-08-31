import React from 'react'
import "../index.css"
import Linkedin from ".././assets/images/linkedin.png"
import Github from ".././assets/images/github_icon.png"
import Resume from ".././assets/images/resume.png"
function HeroNAV(){

    return(
        <div className="card bg-white card-rounded w-100 min-90%-vh" id = "bodyHolder">
        <section className="hero is-primary is-medium">
        {/* <!-- Hero head: will stick at the top --> */}
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <span className="navbar-burger " id="burgerMenu" onClick="toggleBurgerMenu()" aria-label="menu"
                  aria-expanded="false" data-target="navbarMenuHeroA">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item is-active">
                    Home
                  </a>
                  <a href="https://www.linkedin.com/in/leelai-hayslett/" target="_blank" rel="noopener noreferrer"
                    className="navbar-item">
                    <img src={Linkedin} alt="img"></img>
                  </a>
                  <a href="https://github.com/Leelai064" target="_blank" rel="noopener noreferrer" className="navbar-item">
                    <img src={Github}></img>
                  </a>
                  <span className="navbar-item">
                    <a href="https://drive.google.com/file/d/14VZYEj0RIz0ENESsE3OjZ4NbBknb0ZrQ/view?usp=sharing"
                      target="_blank" rel="noopener noreferrer" className="button is-primary is-inverted">
                      <span className="icon">
                        <img src={Resume}></img>
                        <i className="fab fa-github"></i>
                      </span>
                      <span>Resume</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
    
        {/* <!-- Hero content: will be in the middle --> */}
        <div className="hero-body">
          <div className="container has-text-centered" id="typeWriterContainer">
            <h1>Hi I'm</h1>
            <p className="title">
              Leelai Hayslett
            </p>
    
            <p className="subtitle">
            <h2></h2>
            <span id="typed"></span>
            </p>
          </div>
        </div>
{/*     
        <!-- Hero footer: will stick at the bottom --> */}
        <div className="hero-foot">
          <nav className="tabs">
            <div className="container">
              <ul className="magic">
                <li className="is-active"><a href="#Overview">Overview</a></li>
                {/* <!-- <li><a href="#Experience">Experience</a></li> --> */}
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#About">About</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
      </div>
    )


}
export default HeroNAV;