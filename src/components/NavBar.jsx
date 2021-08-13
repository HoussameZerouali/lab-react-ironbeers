import React, { Component } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'


export class NavBar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <nav>
                    <NavLink to='/'>
                        Go to Home Page
                    </NavLink>
                </nav>
            </div>
        )
    }
}

export default NavBar
