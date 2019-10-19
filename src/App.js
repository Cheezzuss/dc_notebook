import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/notes/NoteInformation'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Notifications from './components/dashboard/Notifications'
import CreateProject from './components/notes/AddNotes'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/calendar' component={Notifications} />
            <Route path='/create' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
