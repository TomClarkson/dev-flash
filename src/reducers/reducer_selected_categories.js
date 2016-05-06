// what to do to selected categories state when CATEGORY_TOGGLED action occurs?
export default function(state = [], action) {
  switch(action.type) {
    case 'CATEGORY_TOGGLED':
      // make copy of current state array
      let selectedCategories = state.slice();
      let category = action.payload.name;
      let categoryPos = selectedCategories.indexOf(category);

      // if category not selected, i.e. isn't in selected categories:
      if (categoryPos === -1) {
        selectedCategories.push(category); // add it
      } else { // if it is, remove it:
        selectedCategories.splice(categoryPos, 1);
      }
      return selectedCategories;
    default:
      return state;
  }
}
