import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './BeerCard.css'


const BeerCard = (props) => {
    
        return (
            <div className='beerCard'>
                <div>
                    <img src={props.beer.image_url} alt="" />
                </div>
                <div className='beersInfo'>
                    <h2>{props.beer.name}</h2>
                    <div className='tagLine'>{props.beer.tagline}</div>
                    <div className='contributedBy'> <b>Created by : </b>{props.beer.contributed_by}</div>
                    <Link to={`/beer/${props.beer._id}`}>See More</Link>
                </div>
                
            </div>
        )
    
    }

export default BeerCard
