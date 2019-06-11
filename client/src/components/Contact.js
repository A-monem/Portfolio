import React, { Component } from 'react'
import Title from './Title'
import Maps from './Maps'
import Swal from "sweetalert2";
import dotenv from 'dotenv'

dotenv.config()

export default class Contact extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }

    handlePostRequest = (e) => {
        e.preventDefault()

        const { firstName, lastName, email, message } = this.state

        fetch('/api/email', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                message
            })
        }).then(this.setState({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        })
        ).then(this.HandleClick())
    }

    handleChange = e => (
        this.setState({
            [e.target.name]: e.target.value
        })
    )

    HandleClick() {  
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });
          
          Toast.fire({
            type: 'success',
            title: 'Message Sent'
          }) 
    }  

    render() {
        
        return (
            
            <div className='section' id='contact'>
                <br />
                <Title name='Contact' />
                <div className='contact-info' >

                    <div className='row my-3'>

                        <div className="col-md-6 center">
                            <Maps
                                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE}&v=3.exp&libraries=geometry,drawing,places`}
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `100%`, width: '80%' }} />}
                                mapElement={<div style={{ height: `100%`, filter: 'grayscale(100%)' }} />}
                            />
                        </div>

                        <div className="col-md-6">
                                <form onSubmit={this.handlePostRequest} >
                                    <div className='form-group'>
                                        <label>Name</label>
                                        <div className="row">
                                            <div className="col">
                                                <input type="text" value={this.state.firstName} className="form-control" name="firstName" placeholder="First name" onChange={this.handleChange} required />
                                            </div>
                                            <div className="col">
                                                <input type="text" value={this.state.lastName} className="form-control" name="lastName" placeholder="Last name" onChange={this.handleChange} required />
                                            </div>
                                        </div>
                                        <label className='mt-1'>Email address</label>
                                        <input type="email" value={this.state.email} className="form-control" name="email" placeholder="name@example.com" onChange={this.handleChange} required />
                                        <label className='mt-1'>Message</label>
                                        <textarea className="form-control" value={this.state.message} name="message" rows="4" onChange={this.handleChange} required></textarea>
                                        <button style={{ 'width': '100%' }} type="submit" className="btn btn-outline-secondary my-2" value="Send">Send</button>
                                    </div>
                                </form>
                        </div>
                    </div>

                    <div className='center'>
                        <a className='m-4 center' href='https://www.linkedin.com/in/abdelmoneim-nafea/'><i className="fab fa-linkedin fa-4x"></i></a>
                        <a className='m-4 center' href='https://github.com/A-monem/'><i className="fab fa-github-square fa-4x"></i></a>
                    </div>

                </div>
                <p>ABDELMONEIM NAFEA@2019</p>
            </div>
        )
    }
}