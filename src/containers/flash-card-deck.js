import React, { Component } from 'react';
import { connect } from 'react-redux';

import FlashCard from './../components/flash-card';

class FlashCardDeck extends Component {
  renderDeck() {
    return (
      this.props.cards.map(card => {
        return (
          <FlashCard key={card.id} cardData={card} />
        );
      })
    )
  }

  renderCategories() {

    if (!this.props.selectedCategories) {
      return (
        <p>No categories selected!</p>
      )
    }

    return (
      this.props.selectedCategories.map(category => {
        return(
          <p key={category}>{category}</p>
        )
      })
    )
  }

  render() {
    return (
      <div>
        {this.renderCategories()}
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
