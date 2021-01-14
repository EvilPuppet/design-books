import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../service/api";
import './index.css';

function SearchInput() {
    const [books, setBooks] = useState([]);
    const ref = useRef();
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    let history = useHistory();
    const handleChange = e => {
        setSearchTerm(e.target.value);
    };

    const useOutsideClick = (ref, callback) => {
        const handleClick = e => {
          if (ref.current && !ref.current.contains(e.target)) {
            callback();
          }
        };
      
        useEffect(() => {
          document.addEventListener("click", handleClick);
      
          return () => {
            document.removeEventListener("click", handleClick);
          };
        });
      };

    useOutsideClick(ref, () => {
        setBooks([]);
      });

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            history.push({
                pathname: '/listing',
                state: searchTerm
            });
        }
        setBooks([]);
    }

    useEffect(() => {
        async function loadSearchBook() {
            if (searchTerm.length >= 3) {
                
                const response = await api.get(`volumes?q=${searchTerm}`);
                const data = response.data.items.map(book => ({
                    ...book,
                }));
                
                setBooks(data);
            }
        }
        loadSearchBook();
    }, [searchTerm]);

    

    return (
        <div className="App" ref={ref}>
            <input type="text" list="data" type="text"
                className="searchInput"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
                onKeyDown={handleKeyDown} />
                {searchTerm.length > 0 && books.length > 0 && (
                    <div className="list-body">
                        <ul className="search-list">
                        {books.map(book => (
                            <li key={book.id}>
                                <Link to={`details/${book.id}`} onClick={() => setBooks([])}>
                                    <div className="ellipsis">
                                        <img src={book.volumeInfo?.imageLinks?.thumbnail} />
                                        {book.volumeInfo?.title}
                                    </div>
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </div>
                )}
        </div>
    );
  }
  
  export default SearchInput;
  