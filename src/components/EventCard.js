import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import Moment from 'moment';

import EventStatus from "./EventStatus.js";

const truncate = (string, length) => {
  if(string.length > length) {
    return string.substring(0, length) + '...';
  }
  return string
}

const formatDateTime = (dateTime) => (
  Moment(dateTime).format('DD MMM hh:mm')
)

class EventCard extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      description: truncate(this.props.event.description, 100),
      descriptionOpen: false
    };

  }

  renderDescriptionToggle() {
    if(this.state.descriptionOpen) {
      return (<Icon name='chevron up'/>)
    } else {
      return (<Icon name='chevron down'/>)
    }
  }

  toggleDescriptionExpand = () => {
    if(this.state.descriptionOpen) {
      this.setState({
        description: truncate(this.props.event.description, 100),
        descriptionOpen: false
      })
    } else {
      this.setState({
        description: this.props.event.description,
        descriptionOpen: true
      })
    }
  }

  render() {
    return (
      <Card>
        <Image src={this.props.event.cover.source} />
        <Card.Content textAlign='left'>
          <Card.Header>
            {this.props.event.name}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              {formatDateTime(this.props.event.start_time)} -&nbsp; 
              {formatDateTime(this.props.event.end_time)}
            </span>
            <span className='owner'>
              By {this.props.event.owner.name}
            </span>
          </Card.Meta>
          <Card.Description>
            {this.state.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <span>
            <Icon name='user' />
            {this.props.event.attending_count}
          </span>
        </Card.Content>
        <Card.Content extra>
          <EventStatus rsvp_status={this.props.event.rsvp_status} />
        </Card.Content>
        <Card.Content extra textAlign='center'>
          <a onClick={this.toggleDescriptionExpand}>
            {this.renderDescriptionToggle()}
          </a>
        </Card.Content>
      </Card>
    );
  }
}

// EventCard.propTypes = {
//   cover: PropTypes.PropTypes.shape({
//     source: PropTypes.string.isRequired,
//     offset_x: PropTypes.number,
//     offset_y: PropTypes.number
//   }),
//   name: PropTypes.string.isRequired,
//   owner: PropTypes.PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     id: PropTypes.string,
//   }),
//   description: PropTypes.string.isRequired,
//   attendingCount: PropTypes.number.isRequired
// }

export default EventCard
