// The state argument is not application state, it is only the state that this reducer is responsible for.
// Be sure to initialize with a reasonable default for state (in this case, state=null)
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
