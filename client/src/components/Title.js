import React, {Component} from 'react'
import { Spring, config} from 'react-spring/renderprops'
import VisibilitySensor from 'react-visibility-sensor'

export default class Title extends Component {
    state = {
        name: this.props.name,
        visible: false
    }

    onChangeVisibility = (isVisible) => (
        this.setState({visible: isVisible})
    )

    render(){
        return (
            <VisibilitySensor onChange={this.onChangeVisibility} active={!this.state.visible}>
                {({ isVisible }) => (
                    <Spring
                        from={{ opacity: 0 }}
                        to={{
                            opacity: isVisible ? 1 : 0,
                        }}
                        delay={300}
                        config={config.slow}
                        >
                        {props => <h1 style={props}>{this.state.name}</h1>}
                    </Spring>
                )}
            </VisibilitySensor>
    
        )
    }
    
}