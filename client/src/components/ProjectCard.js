import React from 'react'


export default function ProCard({ item }) {
    return (
        <div className='col'>
            <div className='card mb-2' >
                <img src={item.image} className='card-img-top' alt='pattern1'/>
                <div className='card-body'>
                    <h5 className='card-title'>{item.title}</h5>
                    <p className='card-text'>{item.description}</p>
                    <a href={item.link} className='btn btn-outline-secondary'><i className="fab fa-github"></i></a>
                    {item.live 
                    ? <a className='btn btn-outline-danger ml-2' href={item.live}>Live</a>
                    : null}           
                </div>
            </div>
        </div>
    )
}