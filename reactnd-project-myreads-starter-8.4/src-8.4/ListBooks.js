import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from "prop-types";
import Book from './Book'




const ListBooks = (props)=>{
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <H2>Currently Reading</H2>
                        <Div>
                            <Book books={props.book.currentlyReading} changeShelf={shelfChange}/>
                        </Div>
                    </div>
                    <div className="bookshelf">
                        <H2>Want to Read</H2>
                        <Div>
                            <Book books={props.book.wantToRead} changeShelf={shelfChange}/>
                        </Div>
                    </div>
                    <div className="bookshelf">
                        <H2>Read</H2>
                        <Div>
                            <Book books={props.book.read} changeShelf={shelfChange}/>
                        </Div>
                    </div>
                </div>
            </div>
            <div className="open-search">
                <Link to={"/search"}>Add a book</Link>
            </div>
        </div>
    )
};

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
};

export default ListBooks