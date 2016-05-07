import React, { Component } from 'react';
import { connect } from 'react-redux';


class FlashCardDeck extends Component {
  renderDeck() {
    return (
      this.props.cards.map(card => {
        return (
          <div key={card.id}>
            {card.text}
            <h5>{card.category}</h5>
          </div>
        );
      })
    )
  }

  render() {
    return (
      <div>
        {this.renderDeck()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedCategores: state.selectedCategories,
    cards: state.cards
  }
}

export default connect(mapStateToProps)(FlashCardDeck);
