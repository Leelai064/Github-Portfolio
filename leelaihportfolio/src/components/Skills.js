import React from 'react'
import "../index.css"
function Skills(){
return(
    <section className="section is-large hide" id="Skills">
    <div id="skillsContainer">
      <h1 className="title has-text-centered">Technology Learning Progression</h1>
      <div className="columns is-6">
        <div className="column is-multiline" data-aos="fade-in" data-aos-easing="linear">
          <h2 id="progressHeader"><strong>HTML</strong></h2>
          <progress className="progress is-medium" value="85" max="100">60%</progress>
          <h2 id="progressHeader"><strong>CSS</strong></h2>
          <progress className="progress is-medium" value="80" max="100">60%</progress>
          <h2 id="progressHeader"><strong>Javascript</strong></h2>
          <progress className="progress is-medium active" value="75" max="100">60%</progress>
        </div>
        <div className="column is-multiline" data-aos="fade-in" data-aos-easing="linear">
          <h2 id="progressHeader"><strong>React.js</strong></h2>
          <progress className="progress is-medium active" value="80" max="100">60%</progress>
          <h2 id="progressHeader"><strong>Express.js</strong></h2>
          <progress className="progress is-medium active" value="45" max="100">60%</progress>
          <h2 id="progressHeader"><strong>Node.js</strong></h2>
          <progress className="progress is-medium active" value="60" max="100">60%</progress>
        </div>
      </div>
    </div>

  </section>
    
)
    
}

export default Skills;