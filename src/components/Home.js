import React, { Component } from 'react'
import Particles from 'react-particles-js'
import image from '../images/Abdelmoneim.jpg'

const part = {
    "particles": {
        "number": {
            "value": 100
        },
        "size": {
            "value": 5
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
}

export default class Home extends Component {

    render() {
        return (
            <div className='home' id='home'>
                <Particles className='home-background' params={part} />
                <img src={image} alt='Abdelmoneim' />
                <h1>Hi, my name is Abdelmoneim Nafea</h1>
                <h3>and I am a Front-End Developer</h3>
            </div>

        )
    }
}