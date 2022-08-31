import React from 'react'
import "../index.css"

const About = () =>{

    <section className="section is-large hide" id="About">
    <div className="columns is-8 is-vcentered" id="aboutContainer" >
      <div className="colum is-8 notification " id="aboutCard">
        <h1 className="title">Hi There!</h1>
        <p>
          My name is <strong>Leelai Hayslett</strong>. I am a recent alumni from <strong>Florida Institue of Technology
          </strong> with a bachelors degree in Mechanical Engineering. Currently, I am a full-time employee at CCI
          Systems
          Inc. as a Design Engineer and expanding my knowledge in Full-Stack Web Development through a UPenn Bootcamp.
          Feel
          free to check out the projects I've done both currently in the past. If you are interested in what I do, feel
          free
          to connect with me through Linkedin, or check out my Github repository.
        </p>
      </div>
      <div className="column is-8">
        <img id="professionalImg" src="./assets/images/professionalPicture.jpg"/>
      </div>
    </div>
  </section>

}

export default About;