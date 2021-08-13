import React, { Component } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import BeerCard from './BeerCard'


export class Beers extends Component {
   
    state = {
        beers: [],
    }

    componentDidMount(){
        axios
        .get('https://ih-beers-api2.herokuapp.com/beers')
        .then((res) => {
            this.setState({
                beers: res.data
            })
            console.log(this.state.beers)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            
            <div>
                <NavBar />
                <h1>Beers Page</h1>
                <ul>
                {this.state.beers.map((beer) => {
                    return (
                        <li key={beer._id}>    
                            <BeerCard beer={beer} />
                        </li>
                    )
                })}
                </ul>
               
            </div>
        )
    }
}

export default Beers
