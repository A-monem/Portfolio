import React from 'react'


export default function ProjectCard({ item, image }) {
    return (
        <div className='col-sm-4 mt-4'>
            <div className='card'>
                <img src={image} className='card-img-top' alt='pattern1' style={{'width':'100%', 'height': '12rem'}}/>
                <div className='card-body '>
                    <h5 className='card-title'>{item.title}</h5>
                    <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href='#' className='btn btn-outline-success'>Download</a>
                    <button className='btn btn-outline-danger ml-2'><i className='far fa-heart'></i></button>
                </div>
            </div>
        </div>
    )
}