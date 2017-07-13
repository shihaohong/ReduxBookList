import React, { Component } from 'react';
import { connect } from 'react-redux'; // glue between React and Redux
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; 

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title} 
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
            {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// any changes to state will cause the 
// component to automatically re-render
function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props 
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}


// Promote BookList froma  component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);