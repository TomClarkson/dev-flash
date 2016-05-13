export function toggleCategory(category) {
  return {
    type: 'CATEGORY_TOGGLED',
    payload: category
  };
}

export function selectAll() {
  return {
    type: 'SELECT_ALL',
    payload: null
  }
}

export function deselectAll() {
  return {
    type: 'DESELECT_ALL',
    payload: null
  }
}
