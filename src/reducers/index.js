import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// combineReducers: each reducer manages independent parts of the state. 
//    this helper function turns an object whose values are different reducing functions into a single 
//    reducing function that you can pass to createStore
// The resulting reducer calls every child reducer, and gathers their results into a single state object. 
// The shape of the state object matches the keys of the passed reducers.
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
