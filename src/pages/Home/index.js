import React from "react";
import { Link } from 'react-router-dom';
import './index.css';

function Home(props) {
    return (
      <div className="containerHome">
         <h1>Design Books</h1>
        <h2>
        <Link to="/listing">Listing</Link>
        </h2>
         
      </div>
    );
  }
  
  export default Home;
  