import React, { Component } from 'react'
import Input from '../form/formFields/Input'
import PokemonField from '../form/formFields/PokemonField'

class PokemonForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      pokemonName: '',
      pokemonImg: '',
      pokemonInfo: '',
      data: []
    }
  }

  createPokemon (event) {
    event.preventDefault()
    let payload = {
      pokemonName: this.state.pokemonName,
      pokemonImg: this.state.pokemonImg,
      pokemonInfo: this.state.pokemonInfo
    }
    this.savePokemon(payload)
  }

  savePokemon (payload) {
    fetch('http://localhost:5000/pokedex/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(res => {
        fetch('http://localhost:5000/pokedex/pokedex')
          .then(data => {
            return data.json()
          })
          .then(data => {
            this.setState({ data: data.pokemonColection })
          })
      })
      .then(data => {
        this.props.authenticateFunction(data)
      })
  }

  componentDidMount () {
    fetch('http://localhost:5000/pokedex/pokedex')
    .then(data => {
      return data.json()
    })
    .then(data => {
      this.setState({ data: data.pokemonColection })
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.createPokemon.bind(this)}>
          <fieldset className='App'>
            <div style={{ display: 'inline-grid' }}>
              <h2>Login</h2>
              <Input
                data='pokeName'
                name='Pokemon Name'
                func={e => {
                  this.setState({ pokemonName: e.target.value })
                }}
                valid
              />
              <Input
                data='pokeImage'
                name='Pokemon Image'
                func={e => {
                  this.setState({ pokemonImg: e.target.value })
                }}
                valid
              />
              <Input
                data='pokeInfo'
                name='Pokemon Info'
                func={e => {
                  this.setState({ pokemonInfo: e.target.value })
                }}
                valid
              />
              <input
                type='submit'
                value='Create Pokemon'
              />
            </div>
          </fieldset>
        </form>
        {this.state.data.map((p, i) => {
          console.log(p)
          return <PokemonField
            key={i}
            data={p}
           />
        })}
      </div>

    )
  }
}

export default PokemonForm
