import React, { Component } from 'react'
import { Link } from 'react-scroll'

export default class Nav extends Component {

    render() {
        return (
            <div className='sticky'>
                <nav className='navigation'>
                    <div className='container nav-list'>
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Home</Link>
                            <Link
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-75}
                                duration={500}
                            >Skills</Link>
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >Projects</Link>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                            >Contact</Link>
                    </div>

                </nav>
            </div>
        )
    }
}