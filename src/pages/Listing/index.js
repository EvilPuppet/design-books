import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../service/api";
import './index.css';

function Listing() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function loadBooks() {
            const response = await api.get("volumes?q=harry%20potter");
            console.log('respoense: ', response);
            const data = response.data.items.map(book => ({
                ...book,
            }));
            
            setBooks(data);
        }
        console.log(books);
        loadBooks();

    }, []);
    return (
      <div className="container">
          <ul className="bookList">
            {books.map(book => (
                <li key={book.id}>
                    <Link to={`details/${book.id}`}>
                        <img src={book.volumeInfo?.imageLinks?.thumbnail} />
                    </Link>
                </li>
            ))}
          </ul>
      </div>
    );
  }
  
  export default Listing;
  