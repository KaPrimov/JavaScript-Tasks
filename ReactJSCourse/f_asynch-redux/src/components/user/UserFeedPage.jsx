import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as chirpsActions from '../../actions/chirpsActions'
import ChirperForm from '../home/ChirperForm'
import SingleChirpUser from './SingleChirpUser'

class UserFeedPage extends Component {

  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }

    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
    this.deleteHandler = this.deleteHandler.bind(this)
  }

  onChangeHandler (event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmitHandler (event) {
    event.preventDefault()
    if (this.state.text.length === 0) {
      alert('Write some text!')
      return
    }
    this.props.actions.createChirpFunc(this.props.user.username, this.state.text)
    this.setState({ text: '' })
  }

  deleteHandler (event) {
    event.preventDefault()
    this.props.actions.deleteChirpActionCreator(event.target.name)
  }

  render () {
    if (this.props.user.username === undefined) {
      return null
    }
    return (
      <section>
        <ChirperForm
          text={this.state.text}
          onChangeHandler={this.onChangeHandler}
          onSubmit={this.onSubmitHandler}
          user={this.props.user}
        />
        <div id='chirps' className='chirps'>
          <h2 className='titlebar'>Chirps</h2>
          {this.props.user.chirps ? this.props.user.chirps.map(chirp => {
            return (
              <SingleChirpUser key={chirp._id} chirp={chirp} deleteHandler={this.deleteHandler} />
            )
          }) : <div className='chirp'><span className='loading'>No chirps in database</span></div>}
        </div>
      </section>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(chirpsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserFeedPage)
