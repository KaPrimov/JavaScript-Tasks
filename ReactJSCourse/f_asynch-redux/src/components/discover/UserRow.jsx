import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { findAllFollowers } from '../../actions/userActions'

class UserRow extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      followers: 0
    }
  }
  
  componentWillMount () {
    this.props.findFollowers(this.props.username)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({followers: nextProps.followers.length})
  }

  render() {
    return (
      <div className='userbox'>
        <div><NavLink to={'/user/' + this.props.id} className='chirp-author'>{this.props.username}</NavLink></div>

        <div className='user-details'>
          <span>{this.state.followers} followers</span>
        </div>
      </div>
    )
  }
}
function mapStateToProps (state, ownProps) {
  return {
    followers: state.followers[ownProps.username] || 0
  }
}

function mapDispatchToProps (dispatch) {
  return {
    findFollowers: (username) => dispatch(findAllFollowers(username))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRow)
