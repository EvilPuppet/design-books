import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../service/api";
import './index.css';

function Listing(props) {
    const { state } = props.history?.location;
    const [books, setBooks] = useState([]);
    const [startIndex, setStartIndex] = useState(11);
    const [maxResults, setMaxResults] = useState(10);


    useEffect(() => {
        const loadBooks = async () => {
            const response = await api.get(`volumes?q=${!!state ?  state: "harry%20potter"}`);
            const data = response.data.items.map(book => ({
                ...book,
            }));
            
            setBooks(data);
        }
        loadBooks();

    }, []);

    const loadMore = async () => {
        const response = await api.get(`volumes?q=${!!state ?  state: "harry%20potter"}?max-results=${maxResults}?start-index=${startIndex}`);
        const data = response.data.items.map(book => ({
            ...book,
        }));

        setBooks(oldArray => [...oldArray, ...data]);
        setStartIndex(startIndex + 10);
        setMaxResults(maxResults +  10);
    }


    return (
      <div className="container-listing">
          <ul className="bookList">
            {books.map(book => (
                <li key={book.id}>
                    <Link to={`details/${book.id}`}>
                        <img src={book.volumeInfo?.imageLinks?.thumbnail} />
                    </Link>
                </li>
            ))}
          </ul>
          <div className="container-button">
            <button className="load-more" onClick={loadMore}>LOAD MORE</button>
          </div>
      </div>
    );
  }
  
  export default Listing;
  