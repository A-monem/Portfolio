import React, { Component } from 'react'
import Particles from 'react-particles-js'
import image from '../images/Abdelmoneim.jpg'
import { Link } from 'react-scroll'
import resume from '../resume/resume.pdf'


const part = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#b6b2b2"
      }
    },
    "opacity": {
      "value": 0.5211089197812949,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 8.017060304327615,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 12.181158184520175,
        "size_min": 0.1,
        "sync": true
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#212529",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

export default class Home extends Component {

  render() {
    return (
      <div className='home' id='home'>
        <Particles className='home-background' params={part} />
        <img src={image} alt='Abdelmoneim' />
        <h1>Hi, my name is Abdelmoneim Nafea</h1>
        <h3>and I am a Front-End Developer</h3>
        <a href={resume} download="resume" role="button" className='btn btn-outline-dark mb-5'><i className="fas fa-download"></i> Resume</a>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-75}
          duration={500}><i className="fas <i fa-arrow-alt-circle-down fa-2x"></i>
        </Link>
      </div>

    )
  }
}