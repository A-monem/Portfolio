import React from 'react'
import { Spring, config } from 'react-spring/renderprops'
import VisibilitySensor from 'react-visibility-sensor'
import TechLogo from './TechLogo'

export default function Card({ cardName, items, direction, delay }) {
    
    return (
        <VisibilitySensor partialVisibility={true}>
            {({ isVisible, active }) => (
                
                <Spring
                    from={{ opacity: 0 }}
                    to={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateX(0)" : `translateX(${direction}px)`
                    }}
                    delay={200}
                    config={config.slow}>
                    {props => (
                        <div className="card" style={props}>
                            <div className="card-header">
                                <strong>{cardName}</strong>
                            </div>
                            <div className="card-body">
                                <ul>
                                    {items.map((item, i) => (
                                        <li key={i} style={props}><TechLogo id={item}/></li>
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