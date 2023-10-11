import { Link } from "react-router-dom";
import logo from '../assets/img/index/logo-color.png'
const Footer = () => {
    return (
        <footer className="footer-section">
        <div className="container">
          <div className="footer-content">
            <div className="footer-item">
              <div className="about">
                <img src={logo} alt="logo" />
                <p>
                  Maulana Wahiduddin Khan is an Islamic spiritual scholar who has
                  adopted peace as the mission of his life. Known for his Gandhian
                  views, he considers non-violence as the only method to achieve
                  success.
                </p>
              </div>
            </div>
            <div className="footer-item">
              <h3 className="title">Links</h3>
              <ul className="links">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/menus">Menus</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/others">Other</Link>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <h3 className="title">Books</h3>
              <ul className="links">
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/orders">Orders &amp; Returns</Link>
                </li>
                <li>
                  <Link to="/videos">Videos</Link>
                </li>
                <li>
                  <Link to="/reservation">Reservation</Link>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <h3 className="title">Community</h3>
              <ul className="links">
                <li>
                  <Link to="/issues">Issues</Link>
                </li>
                <li>
                  <Link to="/discussions">Discussions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
