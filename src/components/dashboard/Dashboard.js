import React, { Component } from 'react'
import ProjectList from '../notes/Note'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'



class Dashboard extends Component {
  render() {
    const { projects, auth, log } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <div className=" dashboard  container">
        <div className=" row">
          <div className="  col s8 m8">
            <ProjectList projects={projects} />
          </div>
         
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc']},
    { collection: 'notifications', orderBy: ['time', 'desc']}
  ])
)(Dashboard)
