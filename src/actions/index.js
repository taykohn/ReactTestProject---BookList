export function selectBook(book) {
  // selectBook is an action creator, so it needs to return an action
  // An action is an object with a type property and data (payload)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
