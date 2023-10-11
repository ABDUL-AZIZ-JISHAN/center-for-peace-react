import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <section className="copyright-section">
      <div className="container">
        <div className="copyright-items justify-content-between">
          <div className="copyright-item">
            <ul className="socials">
              <li>
                <Link target="_blank" to="https://www.facebook.com">
                  <i className="fa-brands fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link target="_blank" to="https://www.instagram.com">
                  <i className="fa-brands fa-instagram" />
                </Link>
              </li>
              <li>
                <Link target="_blank" to="https://www.twitter.com">
                  <i className="fa-brands fa-twitter" />
                </Link>
              </li>
              <li>
                <Link target="_blank" to="https://www.skype.com/en/">
                  <i className="fa-brands fa-skype" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="copyright-item">
            <div className="middle">
              <p>© 2023 Peace and Spirituality | All rights reserved.</p>
            </div>
          </div>
          <div className="copyright-item">
            <div className="right text-md-center text-sm-center text-lg-right">
              <Link to="/terms&cons">Terms &amp; Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Copyright;
