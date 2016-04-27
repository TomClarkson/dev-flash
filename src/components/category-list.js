import React, { Component } from 'react';
import CategoryListItem from './category-list-item';

class CategoryList extends Component {
  renderList() {
    return this.props.categories.map(category => {
      return (
        <li onClick={() => this.props.selectCategory(category)} key={category.name}>{category.name}</li>
      );
    })
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

export default CategoryList;
