import React, { Component, useState, useRef } from 'react'
import Title from './Title'
import { useTransition, useSpring, useChain, config } from 'react-spring'
import { animated } from 'react-spring/renderprops-universal';
import ProjectCard from './ProCard'
import basketball from '../images/screenshots/basketball.PNG'
import blog from '../images/screenshots/blog.png'
import gift from '../images/screenshots/gift.jpg'
import battle from '../images/screenshots/war.png'
import weather from '../images/screenshots/weather.JPG'
import yelp from '../images/screenshots/yelpcamp.jpg'

const images = [basketball, blog, gift, battle, weather, yelp]

const projects = [ 
    {name: 'basketball', title: 'Basketball League', link: 'https://github.com/A-monem/BasketBall-League' },
    {name: 'battle' ,title: 'Github Battle', link: 'https://github.com/A-monem/Github-Battle' },
    {name:'gift' ,title: 'Gift Card Wallet', link: 'https://github.com/A-monem/Gift-Card-Wallet' },
    {name: 'yelp',title: 'Yelp Camp', link: 'https://github.com/A-monem/Yelp_Camp' },
    {name:'blog' ,title: 'Blog App', link: 'https://github.com/A-monem/Restful-Blog-App' },
    {name: 'weather' ,title: 'Weather App', link: 'https://github.com/A-monem/Weather-Application' }
]

export default function Projects() {

    return (
        <div className='section' id='projects'>
            <hr style={{ color: '#212529', backgroundColor: '#212529', 'width': '90vw', 'height': '10px' }} />
            <Title name='Projects' />
            <div style={{'width':'75%'}}>
                <div className='row'>
                    { projects.map((project, i) => (
                        <ProjectCard key={project.name} item={project} image={images[i]}/>
                        ))}
                </div>
            </div>  
        </div>
    )
}















