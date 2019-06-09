import React, { Component } from 'react'
import Title from './Title'

export default class Contact extends Component {

    state = {
        firstName: '',
        lastName: '',
        email:'',
        message:''
    }

    handlePostRequest = async(e) => {
            e.preventDefault()
            const { firstName, lastName, email, message} = this.state
            const response = await fetch('/api/email', {
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
            })
        }
    
    handleChange = e => (
        this.setState({
            [e.target.name]: e.target.value
        })
    )    

    render() {
        return (
            <div className='section m-0 mt-5 p-0' id='contact'>
                <br/>
                <Title  name='Contact' />
                <div className='contact-info' >
                    <div className='row my-3 unskew'>
                        <div className="col-md-6 center">
                            logos
                        </div>
                        <div className="col-md-6 center">
                            <form onSubmit={this.handlePostRequest}>
                                <div className='form-group'>
                                    <label>Name</label>
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" className="form-control" name="firstName" placeholder="First name" onChange={this.handleChange}/>
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" name="lastName" placeholder="Last name" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <label className='mt-1'>Email address</label>
                                    <input type="email" className="form-control" name="email" placeholder="name@example.com" onChange={this.handleChange}/>
                                    <label className='mt-1'>Message</label>
                                    <textarea className="form-control" name="message" rows="4" onChange={this.handleChange}></textarea>
                                    <button type="submit" className="btn btn-outline-secondary my-2" value="Send">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <p>ABDELMONEIM NAFEA@2019</p>
            </div>
        )
    }
}