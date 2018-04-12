const words = [
  {id: 111, en: 'One', vn: 'Một', isMemorised: true},
  {id: 112, en: 'Two', vn: 'Hai', isMemorised: false},
  {id: 113, en: 'Three', vn: 'Ba', isMemorised: true},
  {id: 114, en: 'Four', vn: 'Bốn', isMemorised: false}
]
export function wordsReducer(state = words, action) {
  if (action.type === 'TOGGLE_WORD') {
    return state.map(word => {
      if (word.id !== action.id) return word;
      return { ...word, isMemorised: !word.isMemorised };
    });
  }
  if (action.type === 'REMOVE_WORD') {
    return state.filter(word => word.id !== action.id);
  }
  return state;
}