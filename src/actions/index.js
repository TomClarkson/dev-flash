export function toggleCategory(category) {
  return {
    type: 'CATEGORY_TOGGLED',
    payload: category
  };
}
