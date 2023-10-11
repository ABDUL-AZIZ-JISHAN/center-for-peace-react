
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addSearch } from '../redux/features/search/searchSlice';
const HeroArea = ({styleTwo, headerTitle}) => {
  const navigate = useNavigate();
  const popularSearch = useSelector(state => state.search.popularSearch);
  const searchState = useSelector(state => state.search.search)

 const [search, setSearch] = useState("");
 const dispatch = useDispatch();

 const handleSearch = (e) => {
  e.preventDefault();
    navigate("/search");
    setSearch(e.target.value);
};

useEffect(()=>{
  dispatch(addSearch(search));
},[search])



    return (
        <div className="hero-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 justify-content-center align-items-center text-center">
          {headerTitle &&  <div className="hero-content">
                <h1 className="hero-title">{headerTitle}</h1>
              </div>}
              <div className={styleTwo ? "d-none " :"hero-content"}>
                <span className="hero-subtitle">Welcome to</span>
                <h1 className="hero-title">The Library of Peace</h1>
                <p className="hero-text">
                  An online repository on the work and publications of the
                  renowned scholar teacher, philosopher, and peace activist
                  Maulana Wahiduddin Khan
                </p>
              </div>
              <div className="search-form-area">
                <form className="search-form">
                  <input value={search} onChange={(handleSearch)} type="text" placeholder="Search books here..." />
                  <button className="icon" type="submit">
                    <svg width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_530_22398)">
                        <path d="M10.5 17C14.366 17 17.5 13.866 17.5 10C17.5 6.13401 14.366 3 10.5 3C6.63401 3 3.5 6.13401 3.5 10C3.5 13.866 6.63401 17 10.5 17Z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.5 21L15.5 15" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_530_22398">
                          <rect width={24} height={24} fill="white" transform="translate(0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </form>
                <div className="popular-search">
                  <span className="search-title">Popular search:</span>
                  <ul className="search-item">
                    {popularSearch?.map((search, ind) =>{
                     return  <li key={ind}>
                      <Link style={{textTransform: "uppercase"}} className="btn-style-one" to={`/books/${search}`}>{search}</Link>
                    </li>
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default HeroArea;
