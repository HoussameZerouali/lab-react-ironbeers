import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


export class Home extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <div>
                    <Link to='/beers'>Beers</Link>
                    <p>See a list of all our beers ! </p>
                </div>
                <div>
                    <Link to='/random-beer'>Random Beer</Link>
                    <p>Get a random beer suggestion !</p>
                </div>
                <div>
                    <Link to='/new-beer'>New Beer</Link>
                    <p>Add a new beer to our database </p>
                </div>
                
            </div>
        )
    }
}

export default Home
