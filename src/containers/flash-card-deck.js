import React, { Component } from 'react';
import { connect } from 'react-redux';

import FlashCard from './../components/flash-card';

class FlashCardDeck extends Component {
  renderDeck() {
    return (
      this.props.cards.map(card => {
        return (
          <FlashCard key={card.id} cardData={card} currCard={this.props.currentCard} />
        );
      })
    )
  }

  // renderCategories() {
  //
  //   if (this.props.selectedCategories.length === 0) {
  //     return (
  //       <p>No categories selected!</p>
  //     )
  //   }
  //
  //   return (
  //     this.props.selectedCategories.map(category => {
  //       return (
  //         <span key={category}>{category + " "}</span>
  //       );
  //     })
  //   )
  // }

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
    cards: state.cards
  }
}

export default connect(mapStateToProps)(FlashCardDeck);
