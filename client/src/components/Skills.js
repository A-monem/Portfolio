import React, { Component } from 'react'
import Title from './Title'
import SkillCard from './SkillCard'

export default class Skills extends Component {

    state = {
        frontEnd: ['html5', 'javascript', 'css3', 'bootstrap', 'jquery', 'react', 'webpack', 'babel'],
        backEnd: ['nodejs', 'django', 'mongodb', 'sqlserver', 'mysql'],
        other: ['npm', 'git', 'aws', 'firebase', 'heroku', 'ubuntu']
    }

    render() {

        return (
            <div className='skills mt-3' id='skills'>
                <Title name='Skills' />
                <SkillCard cardName='Front-End' items={this.state.frontEnd} direction={-50} delay={200}/>
                <SkillCard cardName='Back-End' items={this.state.backEnd} direction={50} delay={300}/>
                <SkillCard cardName='Other' items={this.state.other} direction={-50} delay={400}/>
            </div>
        )
    }
}