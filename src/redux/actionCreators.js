export function toggleShouldShowForm() {
  return {type: 'TOGGLE_SHOULD_SHOW_FORM'};
}

export function toggleWord(id) {
  return {type: 'TOGGLE_WORD', id};
}
export function removeWord(id) {
  return {type: 'REMOVE_WORD', id};
}