import axios from 'axios'
import React, { Component } from 'react'
import FormField from './FormField'
import NavBar from './NavBar'


export class CreateBeer extends Component {
    
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: '',
    }

    handleChange = (event) => {
        const key = event.target.name
        const value = event.target.value

        this.setState({
            [key]: value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description,
            first_brewed: this.state.first_brewed,
            brewers_tips: this.state.brewers_tips,
            attenuation_level: this.state.attenuation_level,
            contributed_by: this.state.contributed_by
        }

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', data).then((res) => {
            console.log('success', res)
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <NavBar />
                <h1>Create Beer</h1>
                <form action="" onSubmit={this.handleSubmit}>
                    <FormField label='Name' htmlFor = 'name'>
                        <input type="text" id='name' name='name' value={this.state.name} onChange={this.handleChange} />
                    </FormField>
                    <FormField label='Tagline' htmlFor = 'tagline'>
                        <input type="text" id='tagline' name='tagline' value={this.state.tagline} onChange={this.handleChange} />
                    </FormField>
                    <FormField label='Description' htmlFor = 'description'>
                        <input type="text" id='description' name='description' value={this.state.description} onChange={this.handleChange} />
                    </FormField>
                    <FormField label='First Brewed' htmlFor = 'first_brewed'>
                        <input type="text" id='first_brewed' name='first_brewed' value={this.state.first_brewed} onChange={this.handleChange} />
                    </FormField>
                    <FormField label='Brewers Tips' htmlFor = 'brewers_tips'>
                        <input type="text" id='brewers_tips' name='brewers_tips' value={this.state.brewers_tips} onChange={this.handleChange} />
                    </FormField>
                    <FormField label='Attenuation Level' htmlFor = 'attenuation_level'>
                        <input type="number" id='attenuation_level' name='attenuation_level' value={this.state.attenuation_level} onChange={this.handleChange} />
                    </FormField>
                    <FormField label='Contributed By' htmlFor = 'contributed_by'>
                        <input type="text" id='contributed_by' name='contributed_by' value={this.state.contributed_by} onChange={this.handleChange} />
                    </FormField>
                    <button type='submit'>Submit</button>
                    
                </form>
            </div>
        )
    }
}

export default CreateBeer


// name - must be type text
// tagline - must be type text
// description - must be type text
// first_brewed - must be type text
// brewers_tips - must be type text
// attenuation_level - must be type number !!!
// contributed_by - must be type text