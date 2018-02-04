import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserData } from '../../actions/userActions'
import Chirp from '../home/SingleHomePageChirp'

class SingleUserView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentUser: this.props.user
    }
  }

  componentWillMount() {
    this.props.getUserInfo(this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ currentUser: nextProps.user })
  }

  render() {
    if (this.state.currentUser === undefined) {
      return null
    }
    let user = this.state.currentUser
    return (
      <div class='content'>
        <div class='chirper'>

          <h2 class='titlebar'>{user.username}</h2>

          <a id='btnFollow' class='chirp-author' href='#'>Follow</a>

          <div id='userStats' className='user-details'>
            <span>{user.chirps.length} chirps</span> | <span>{user.subscriptions.length} following</span> | <span>{user.followers.length} followers</span>
          </div>
        </div>
        <div id='chirps' className='chirps'>
          <h2 className='titlebar'>Chirps</h2>
          {this.props.user.chirps.length > 0 ? this.props.user.chirps.map(chirp => {
            return (
              <Chirp key={chirp._id} chirp={chirp} id={user._id} deleteHandler={this.deleteHandler} />
            )
          }) : <div className='chirp'><span className='loading'>No chirps in database</span></div>}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state)
  return {
    user: state.userInfo || {
      username: 'Loading...',
      chirps: [],
      subscriptions: [],
      followers: []
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUserInfo: (userId) => dispatch(getUserData(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleUserView)
