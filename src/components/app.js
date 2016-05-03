// find react library and attach to variable React
import React, { Component } from 'react';

// create new component. should produce some html.
// import FlashCardDeck from './containers/flash-card-deck';
import CategoryList from './../containers/category-list';

// this is the "master" App component that holds containers
export default class App extends Component {
  render() {
    return (
      <div>
        <CategoryList />
      </div>
    );
  }
}
