/*
Container component that needs to be connected to state
Will list all categories and allow user to toggle which ones are selected
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleCategory } from './../actions/index';
import { bindActionCreators } from 'redux';

class CategoryList extends Component {
  renderList() {
    return this.props.categories.map(category => {
      return (
        <li key={category.name} className="list-group-item">{category.name}</li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// function to connect CategoryList to props
function mapStateToProps(state) {
  return {
    categories: state.categories
  }
};

// function to make actions available on props
function mapDispatchToProps() {
  return bindActionCreators({toggleCategory: toggleCategory}, dispatch);
};

// connects CategoryList to props
export default connect(mapStateToProps)(CategoryList);
