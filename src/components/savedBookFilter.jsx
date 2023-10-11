import { Link } from "react-router-dom";
import CustomSelect from "./customSelect";

const SavedBookFilter = () => {
    return (
<section className="filter-saved-book">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="top-title-box">
          <div className="left-content">
            <h2 className="title">Saved Books</h2>
            <ul className="items-button-group">
              <li>
                <Link to="/profile" className="btn-style-one active">
                  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_205_35039)">
                      <path d="M2.5 15.8334C3.64014 15.1752 4.93347 14.8286 6.25 14.8286C7.56652 14.8286 8.85986 15.1752 10 15.8334C11.1401 15.1752 12.4335 14.8286 13.75 14.8286C15.0665 14.8286 16.3599 15.1752 17.5 15.8334" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2.5 4.99993C3.64014 4.34166 4.93347 3.99512 6.25 3.99512C7.56652 3.99512 8.85986 4.34166 10 4.99993C11.1401 4.34166 12.4335 3.99512 13.75 3.99512C15.0665 3.99512 16.3599 4.34166 17.5 4.99993" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2.5 5V15.8333" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 5V15.8333" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17.5 5V15.8333" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_205_35039">
                        <rect width={20} height={20} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Saved Books
                </Link>
              </li>
              <li className="d-none">
                <a href="profile-two.html" className="btn-style-one">
                  <svg width={14} height={17} viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5013 1.33325V16.3333M2.0013 1.33325H11.168C11.61 1.33325 12.0339 1.50885 12.3465 1.82141C12.659 2.13397 12.8346 2.55789 12.8346 2.99992V12.9999C12.8346 13.4419 12.659 13.8659 12.3465 14.1784C12.0339 14.491 11.61 14.6666 11.168 14.6666H2.0013C1.78029 14.6666 1.56833 14.5788 1.41205 14.4225C1.25577 14.2662 1.16797 14.0543 1.16797 13.8333V2.16659C1.16797 1.94557 1.25577 1.73361 1.41205 1.57733C1.56833 1.42105 1.78029 1.33325 2.0013 1.33325Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Jump to pages
                </a>
              </li>
            </ul>
          </div>
          {/* <CustomSelect/> */}
        </div>
      </div>
    </div>
  </div>
</section>

    );
}

export default SavedBookFilter;
