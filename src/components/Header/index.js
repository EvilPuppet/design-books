import React, { useEffect, useState, useRef } from 'react';
import SearchInput from '../SearchInput/';
import './index.css';
import finder from '../../assets/finder.svg';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import leftArrow from '../../assets/left-arrow.svg';

function Header(props) {
    const ref = useRef();
    const [backButton, setBackButton] = useState(false);
    const [changeButton, setChangeButton] = useState(true);
    const history = useHistory();

    const changeIcon = () => {
        setBackButton(true);
    } 

    const goBack = () => {
        history.goBack();
        setBackButton(false);
    }

    const handleMouseHover = () => {
        setChangeButton(!changeButton);
      }
    

    return (
      <header>
        <nav className="header">
          <ul>
            <li>
            {!backButton ? <Link to="/listing">
                <button className="burger" onClick={changeIcon}>
                <div className="risk"></div>
                <div className="risk"></div>
                <div className="risk"></div>
                </button>
            </Link> : 
            <button className="goBack" onClick={goBack}>
                <img src={leftArrow} />
            </button>}
            </li>
            <li> 
              <a href="#" style={{borderBottom: '1px solid #585858'}}>
                  {changeButton && (<p>Design Books</p>)}
                </a>
            </li>
            <li>
            <div onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover}>
                {changeButton ? 
                <img className="finder" src={finder} onClick={() => setChangeButton(false)} />  :
                    <SearchInput />
                }
                </div>
            </li>
          </ul>
        </nav>   
      </header>
    );
  }
  
  export default Header;