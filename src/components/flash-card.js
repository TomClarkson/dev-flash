import React, { Component } from 'react';

class FlashCard extends Component {
  render() {
    return (
      <div
        className={"flash-card" + (this.props.cardData.active ? " active-flash-card": "")} >
        {this.props.cardData.text}
        <h6>{this.props.cardData.category}</h6>
        <button>Skip</button>
        <button>Flip</button>
        <button>Remove</button>
      </div>
    )
  }
}

export default FlashCard;
