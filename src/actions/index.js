export function toggleCategory(category) {
  return {
    action: 'CATEGORY_TOGGLED',
    payload: category
  };
}
