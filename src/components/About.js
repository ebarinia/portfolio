import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {

    return ( 
        <div className="about-me">
        <img className="face" src={require("../images/annoyed.jpg")} alt="my face" />
        <div className="text">   
        <h5>Hi, I'm Emmanuel and welcome to my portfolio</h5> 
        <p>I am a Codeclan student and soon to become a full-stack software developer. I enjoy bulding applications and learning about the tech industry. I LOVE anything related to techology(audio & video in particular), as well as video games and photography.</p>
        <p>Here you will find a collection of all the things I've built, both during my coursework and in my spare time. I hope you'll enjoy what's here, and don't hesitate to get in touch through my socials if you have any questions!</p>
        <br></br>
        <h6>I have hands-on experience with the following programming languages & techology:</h6>
        <div className='languages'>
        <FontAwesomeIcon class="text-dark m-2" icon="fa-brands fa-html5" />
        <FontAwesomeIcon class="text-dark m-2" icon="fa-brands fa-python" />
        <FontAwesomeIcon class="text-dark m-2" icon="fa-brands fa-square-js" />
        <FontAwesomeIcon class="text-dark m-2" icon="fa-brands fa-react" />
        </div>
        </div>
        </div>
     );
}
 
export default About;