import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>  <i class="large material-icons">add</i></NavLink></li>
        <li><NavLink to='/calendar'>  <i class="large material-icons">today</i></NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
        <li><NavLink to='/' className="btn waves-effect blue lighten-1">
          {props.profile.firstName}
        </NavLink></li>
        
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
