import React, {Component} from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { Trail } from 'react-spring/renderprops'
import Title from './Title'
import ProCard from './ProjectCard'
import basketball from '../images/screenshots/basketball.PNG'
import blog from '../images/screenshots/blog.png'
import gift from '../images/screenshots/gift.jpg'
import battle from '../images/screenshots/war.png'
import weather from '../images/screenshots/weather.JPG'
import yelp from '../images/screenshots/yelpcamp.jpg'

const projects = [
    { name: 'basketball', title: 'Basketball League', link: 'https://github.com/A-monem/BasketBall-League', image: basketball, description:'Basketball League is an application that keeps track of basketball teams and their players. This application is part of Tayler Mcginnes "React Router" course. It is built using React, React Router, Axios, Slug, Prop-types, Query-strings, Babel and Webpack', live: null },
    { name: 'battle', title: 'Github Battle', link: 'https://github.com/A-monem/Github-Battle', image: battle, description:'Compares between two Github users. A score is calcualted based on number of followers, stars and number of public repos. The application is part of Tyler Mcginnes course "Introduction to react". It is built using React, React Router, Axios, Babel and Webpack', live: 'https://github-repo-battle.firebaseapp.com/'},
    { name: 'gift', title: 'Gift Card Wallet', link: 'https://github.com/A-monem/Gift-Card-Wallet', image: gift, description:'Gift card wallet is an application which allow users to buy or send gift cards. Main features are Authentiction(login, sign up and sign out), Authorization and Archiving of old cards. It is built using React, React Router, Bootstrap, CSS, Babel, Webpack, Django, sqllite DB', live: null },
    { name: 'yelp', title: 'Yelp Camp', link: 'https://github.com/A-monem/Yelp_Camp', image: yelp, description:'Web Appication that allow users to review campergrounds. Users can preview comments and photos of campergrounds, add comments and check location in google maps. Application is built using ejs, Bootstrap, Express, mongo DB, mongoose, passport', live: 'https://anafea-yelp-camp.herokuapp.com/' },
    { name: 'blog', title: 'Blog App', link: 'https://github.com/A-monem/Restful-Blog-App', image: blog, description:'A Blog web application implementing restful routes', live: null },
    { name: 'weather', title: 'Weather App', link: 'https://github.com/A-monem/Weather-Application', image: weather, description:'A Blog web application implementing restful routes', live: null}
]

export default class Projects extends Component{
    state={
        visible: false
    }

    onChangeVisibility = (isVisible) => (
        this.setState({visible: isVisible})
    )
        
    render(){
        return (
            <div className='section project' id='projects'>
                <hr/>
                <Title name='Projects' />
                <div className='container'>
                    <VisibilitySensor partialVisibility={false} onChange={this.onChangeVisibility} active={!this.state.visible}>
                        {({ isVisible }) => (
                            <Trail
                                items={projects}
                                keys={project => project.name}
                                from={{ marginLeft: -20, opacity: 0, transform: 'translateY(-40px)' }}
                                to={{
                                    marginLeft: isVisible ? 20 : -20,
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateY(0)' : 'translateY(-40px)'
                                }}>
                                {project => props => (
                                    <div style={props} className='mb-2'>
                                        <div className='row d-flex flex-row justify-content-center align-items-center bg-light'>
                                            <h4 className='m-0 p-2'>{project.title}</h4>
                                            <button className='btn ml-auto' type='button' data-toggle='collapse' data-target={`#collapse${project.name}`} aria-expanded='false' aria-controls='collapseExample'>
                                                <i className='fas fa-plus-circle fa-2x'></i>
                                            </button>
                                            <div className="collapse m-0 p-0" id={`collapse${project.name}`} style={{ 'width': '100%' }}>
                                                <ProCard item={project} />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Trail>
                        )}
                    </VisibilitySensor>
                </div>
            </div>
        )
    }
    
}


