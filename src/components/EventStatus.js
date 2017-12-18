import React, { Component } from 'react'
import { connect } from 'react-redux'


class EventStatus extends Component {

  render() {
    return (
      <a>
        {this.props.rsvp_status}
      </a>
    );
  }
}

let mapStateToProps = (state, ownProps) => (ownProps)
let mapActionsToProps = (dispatch) => ({
  updateEvent: dispatch({type: "TEST"})
});


let ConnectedEventStatus = connect(mapStateToProps, mapActionsToProps)(EventStatus);

export default ConnectedEventStatus
