import React, { Component } from 'react';

class FlashCard extends Component {
  render() {
    return (
      <div>
        {this.props.cardData.text}
        <h6>{this.props.cardData.category}</h6>
      </div>
    )
  }
}

export default FlashCard;
