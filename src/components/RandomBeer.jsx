import axios from 'axios'
import React, { Component } from 'react'
import NavBar from './NavBar'
import './OneBeer.css'

export class RandomBeer extends Component {
    
    state = {
        beer: [],
    }

    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        
        .then((res) => {
            this.setState({
                beer: res.data
            })
            console.log(this.state.beer)
        }).catch((err) => {
            console.log(err)
        })
    }

    

    render() {
        return (
            <div>
                
                <div>
                <NavBar />
                <div className='OneBeer'>
                    <img src={this.state.beer.image_url} alt="" />
                </div>
                <div> 
                    <div className='headerDiv'>
                        <h1 className='beer-name'>{this.state.beer.name}</h1>
                        <h1 className='attenuation'>{this.state.beer.attenuation_level}</h1>
                    </div>  
                    <div className='secondName'>
                        <div className='taglineDiv'>{this.state.beer.tagline}</div>
                        <div className ='brewedDiv'><b>{this.state.beer.first_brewed}</b></div>
                    </div>
                    
                    <div className='descriptionDiv'>
                        {this.state.beer.description}
                    </div>
                    <div>
                        <b>{this.state.beer.contributed_by}</b>
                    </div>
                </div>
                
               
            </div>
            </div>
        )
    }
}

export default RandomBeer
