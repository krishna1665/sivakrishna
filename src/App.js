import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { MDBFooter } from 'mdbreact';
import HomePage from './Components/HomePage';

import * as Msal from 'msal'
import { msalConfig } from './adalConfig'


import Names from './Components/Names'

const myMSALObj = new Msal.UserAgentApplication(msalConfig)


class App extends Component {
  state = {
    collapseID: '',
    login: null,
    userData: null,
    admin:null
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ''
  }))

  closeCollapse = collId => () => {
      const { collapseID } = this.state
      window.scrollTo(0, 0)
      collapseID === collId && this.setState({ collapseID: '' })
  }

  componentDidMount() {
    
  }

  componentWillReceiveProps(props) {
  
}


render() {
  const overlay = (
    <div
      id="sidenav-overlay"
      style={{ backgroundColor: 'transperent' }}
      onClick={this.toggleCollapse("mainNavbarCollapse")}
    />
  )
  const { collapseID } = this.state
  const authProps = {
    login: this.state.login,
    userData: this.state.userData,
    admin: this.state.admin
  }
   
    return (
      <Router>
        <div className="flyout">
          <Navbar loginData={authProps} authData={authProps}/>
          {collapseID && overlay}
          <main style={{ marginTop: '4rem' }}>
            <Switch>
              <Route exact path="/" render={(props) => <HomePage {...props} authData={authProps} /> } />
  
              <Route exact path="/names" render={(props) => <Names {...props} authData={authProps} /> } />
  
              <Redirect to="/" />
   
            </Switch> 
          </main>
          <MDBFooter style={{backgroundColor: '#2f3d5e'}}>
            <p className="footer-copyright mb-0 py-3 text-center">
              &copy; Copyright 2012 -  { new Date().getFullYear() }
              <a href="https://cloudthat.in"> FullThrottle Labs Prvate Limited</a>
            </p>
          </MDBFooter>
        </div>
      </Router>
    )
  }
}

export default App;
