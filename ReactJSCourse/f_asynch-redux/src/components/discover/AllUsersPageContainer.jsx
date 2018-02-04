import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/userActions'
import UserRow from './UserRow'

class AllUsersPageContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      users: this.props.users
    }
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.users) {
      this.setState({users: nextProps.users})
    }
  }

  render () {
    return (
      <div className='content'>
        <div className='chirps'>
          <h2 className='titlebar'>Discover</h2>
          <div id='userlist'>
            {this.state.users.map(user => {
              return (
                <UserRow
                  username={user.username}
                  id={user._id}
                />
              )
            })}

          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    users: state.author
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsersPageContainer)
