import './index.css';
import finder from '../../assets/finder.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <header>
        <nav className="header">
          <ul>
            <li>
          <Link to="/listing">
            <button className="burger">
              <div className="risk"></div>
              <div className="risk"></div>
              <div className="risk"></div>
            </button>
          </Link>
            </li>
            <li> 
              <a href="#" style={{borderBottom: '1px solid #585858'}}>Design Books</a>
            </li>
            <li>
                <img className="finder" src={finder} />
            </li>
          </ul>
        </nav>   
      </header>
    );
  }
  
  export default Header;