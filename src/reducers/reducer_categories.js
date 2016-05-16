/*
This reducer creates the "categories" piece of state
*/

var initialCategories = [
  {name: 'javascript'},
  {name: 'html'},
  {name: 'css'},
  {name: 'angular'},
  {name: 'cs fundamentals'},
  {name: 'node'},
  {name: 'git'},
  {name: 'unix'},
  {name: 'miscellaneous'}
];

export default function(state=initialCategories, action) {
  let categories = state.slice();
  switch(action.type) {
    case 'CATEGORY_TOGGLED':
      let categoryToToggle = action.payload.name;
      let findCategory = (category) => {
        return category.name === categoryToToggle;
      };
      let categoryIndex = categories.findIndex(findCategory);
      // invert category selected status
      categories[categoryIndex].selected = !categories[categoryIndex].selected;

      return categories;
    case 'SELECT_ALL':
      return categories.map(function(category) {
        category.selected = true;
        return category;
      });
    case 'DESELECT_ALL':
      return categories.map(function(category) {
        category.selected = false;
        return category;
      });
    default:
      return state;
  }
};
