/*
Container component that needs to be connected to state
Will list all categories and allow user to toggle which ones are selected
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

class CategoryList extends Component {
  renderList() {
    return this.props.categories.map(category => {
      return (
        <li key={category.name} className="list-group-item">{category.name}</li>
      );
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// function to connect CategoryList to props
function mapStateToProps(state) {
  return {
    categories: state.categories;
  }
};

// connects CategoryList to props
export default connect(mapStateToProps)(CategoryList);
