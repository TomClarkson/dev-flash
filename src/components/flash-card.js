import React, { Component } from 'react';

class FlashCard extends Component {
  render() {
    return (
      <div
        className={"flash-card" + (this.props.cardData.filtered && this.props.cardData.active ? " active-flash-card": "")} >
        {this.props.cardData.text}
        <h6>{this.props.cardData.category}</h6>
        <button onClick={() => this.props.skipCard()}>Skip</button>
        <button>Flip</button>
        <button>Remove</button>
      </div>
    )
  }
}

export default FlashCard;
