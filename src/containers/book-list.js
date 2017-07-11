import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
// bindActionCreators makes action flow through all reducers
import { bindActionCreators } from 'redux';

// import within {} - pulls off single object

// Dumb component: no connection to redux
// You want the most parent component that cares about a piece of state to be a redux component (container)
// app.js doesn't care when the state of book-list changes, so it remians a dumb component
//    app doesnt care about the list of books or currently selected book, it just renders.
// book list cares about state of list
// book detail cares about state of active book


class BookList extends Component {
renderList() {
  return this.props.books.map((book) => {
    return (
      <li
        onClick={() => this.props.selectBook(book)}
        key={book.title}
        className='list-group-item'>
          {book.title}
        </li>
    );
  });
}

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
  }
}

// mapStateToProps is the glue between react and redux
// Anything returned from this function will end up as props on the bookList container
function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of BookList
  // Set equal to this.props
  // Takes in application state and sets container props
  // props are local to individual component/container

  return {
    books: state.books
  };
}

// Within container we can call this.props.selectBook, which will call action creator selectBook
// Dispatch function recieves actions like a funnel and spits them out to all reducers
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Take this component and mapState and return the container
// Take functions and component and creates container
// This allows reducers to update the state of component!
// Promote booklist from a component to a container - it needs to know about this dispatch method, selectBook.
//    and make it available as a prop.
// When exporting, redux expects these methods to bind actions and props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
