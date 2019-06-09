import React, { Component } from 'react'
import Title from './Title'

export default class Contact extends Component {

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
                            <form action="https://formspree.io/aamnafea@hotmail.com" method="POST">
                                <div className='form-group'>
                                    <label>Name</label>
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" className="form-control" name="first_name" placeholder="First name" />
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" name="last_name" placeholder="Last name" />
                                        </div>
                                    </div>
                                    <label className='mt-1'>Email address</label>
                                    <input type="email" className="form-control" name="email" placeholder="name@example.com" />
                                    <label className='mt-1'>Message</label>
                                    <textarea className="form-control" name="message" rows="4"></textarea>
                                    <button type="submit" class="btn btn-outline-secondary my-2" value="Send">Send</button>
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