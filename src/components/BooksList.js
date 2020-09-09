import React from "react";
import {connect} from "react-redux";
import Book from "./Book";

const BookList = ({books}) => {
    localStorage.setItem("books", JSON.stringify(books))
    return books.map(book => <Book book={book} key={book.year*book.pages}/>)
}

const mapStateToProps = state => {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(BookList)