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
          className={"list-group-item" + (category.selected ? " selected-category" : "")}>
          {category.name}
        </li>
      )
    })
  }

  renderSelectAll() {
    return (
      <li className="list-group-item">
        <button>select all</button>
        <button>deselect all</button>
      </li>
    )
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderSelectAll()}
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
function mapDispatchToProps(dispatch) {
  return bindActionCreators({toggleCategory: toggleCategory}, dispatch);
};

// connects CategoryList to props
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
