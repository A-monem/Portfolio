import React from 'react'
import { Spring, config} from 'react-spring/renderprops'
import VisibilitySensor from 'react-visibility-sensor'



export default function Title({name}) {

    return (
        <VisibilitySensor >
            {({ isVisible }) => (
                <Spring
                    from={{ opacity: 0 }}
                    to={{
                        opacity: isVisible ? 1 : 0,
                    }}
                    delay={100}
                    config={config.slow}
                    >
                    {props => <h1 style={props}>{name}</h1>}
                </Spring>
            )}
        </VisibilitySensor>

    )
}