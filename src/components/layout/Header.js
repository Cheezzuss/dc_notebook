import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedIn'
import SignedOutLinks from './SignedOut'
import { connect } from 'react-redux'

const Header = (props) => {
  const { auth, profile } = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  return (
    <nav className="nav-wrapper transparent z-depth-5">
      <div className="container">
        <Link to='/' className="left brand-logo">  <i class="large material-icons">event_note</i>DC Notebook</Link>
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Header)
