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
        <li
          key={category.name}
          onClick={() => this.props.toggleCategory(category)}
          // if category is selected, add a class to the li to highlight it
          className={"list-group-item" + (this.props.selectedCategories.indexOf(category.name) > -1 ? " selected-category" : "")}>
          {category.name}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        <li className="list-group-item">select all</li>
        {this.renderList()}
      </ul>
    )
  }
}

// function to connect CategoryList to props
function mapStateToProps(state) {
  return {
    categories: state.categories,
    selectedCategories: state.selectedCategories
  }
};

// function to make actions available on props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({toggleCategory: toggleCategory}, dispatch);
};

// connects CategoryList to props
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
