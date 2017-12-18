import React, { Component } from 'react';
import { connect } from 'react-redux'

import logo from './logo.svg';
import './App.css';
import EventCard from "./components/EventCard.js";
import FacebookLogin from 'react-facebook-login';

const componentClicked = (event) => {
  console.log(event);
}

class App extends Component {
  render() {

    if (this.props.accessToken) {
      return this.props.events.map(event =>
        <EventCard key={event.id}
          event={event}
        />
      );
      
    } else {
      return (<FacebookLogin
        appId="155200058572684"
        fields="name,email,picture"
        onClick={componentClicked}
        callback={this.props.callback} />
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  events: state.data,
  accessToken: state.accessToken
})

const mapDispatchToProps = (dispatch) => ({
  callback: (response) => {
    dispatch({type: "SET_FB_LOGIN_STATUS", accessToken: response.accessToken})
  }
})


const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;
