import React, { Component } from 'react'
import { Spring, config } from 'react-spring/renderprops'
import VisibilitySensor from 'react-visibility-sensor'
import TechLogo from './TechLogo'

export default class SkillCard extends Component {
    state = {
        cardName: this.props.cardName,
        items: this.props.items,
        direction: this.props.direction,
        visible: false
    }

    onChangeVisibility = (isVisible) => (
        this.setState({visible: isVisible})
    )

    render() {
        return (
            <VisibilitySensor partialVisibility={true} onChange={this.onChangeVisibility} active={!this.state.visible}>
                {({ isVisible, active }) => (
                    <Spring
                        from={{ opacity: 0 }}
                        to={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? "translateX(0)" : `translateX(${this.state.direction}px)`
                        }}
                        delay={200}
                        config={config.slow}>
                        {props => (

                            <div className="card shadow-sm" style={{ ...props, 'marginTop': '30px', 'width': '70vw' }}>
                                <div className="card-header">
                                    <strong>{this.state.cardName}</strong>
                                </div>
                                <div className="card-body center">
                                    <ul>
                                        {this.state.items.map((item, i) => (
                                            <li key={i} style={props}><TechLogo id={item} /></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </Spring>
                )}
            </VisibilitySensor>
        )
    }

}
