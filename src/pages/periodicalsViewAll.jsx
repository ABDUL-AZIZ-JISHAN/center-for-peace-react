  import React, { useRef, useState } from 'react';
  import { useParams } from 'react-router-dom';
  import Navbar from '../components/navbar';
  import BreadCrumb from '../components/breadCrumb';
  import breadCrumbBg from '../assets/img/periodicals-view-all/p-v-all-bg.png';
  import SinglePeriodicals from '../components/singlePeriodicals';
  import resetBtnImg from "../assets/img/books/resetbtn.svg"
  import Footer from "../components/footer";
  import Copyright from "../components/copyright";
  import { useGetBooksQuery } from '../redux/features/books/booksApi';
  import { useSelector } from 'react-redux';
  const PeriodicalsViewAll = () => {
    const { type } = useParams();
    const { data: books, isLoading, isError } = useGetBooksQuery();
    const yearsArray = useSelector(state => state.filter.year)
    const yearRef = useRef();
    const years = [];
    for (let year = yearsArray[0]; year <= yearsArray[1]; year++) {
      years.push(year);
    }

    const [selectedYears, setSelectedYears] = useState(years);
    const [selectAllYears, setSelectAllYears] = useState(true);

    // Function to handle year checkbox changes
    const handleYearChange = (event, year) => {
      if (event.target.checked) {
        setSelectedYears([...selectedYears, year]);
      } else {
        setSelectedYears(selectedYears.filter(y => y !== year));
      }
    };

    // Function to handle "Select All" button
    const handleSelectAll = () => {
      if (!selectAllYears) {
        setSelectedYears([...years]);
      } else {
        setSelectedYears([]);
      }
      setSelectAllYears(!selectAllYears);
    };

    // Function to handle "Reset All" button
    const handleResetAll = () => {
      setSelectedYears([]);
      setSelectAllYears(false);
    };

  const filterByYears = item =>{
    const bookYear = item.year; // Assuming there is a 'year' property in your book object
    return selectedYears.includes(bookYear);
  }

    return (
      <>
        <section className="header-style-one-section with-title">
          <Navbar />
        </section>
        <BreadCrumb title={type} bgImg={breadCrumbBg} />
        <section className="periodicals-books-details-section">
          <div className="container">
            <div className="row">
              {/* left side filter content start  */}
              <div className="col-lg-3 col-md-4 col-sm-6 mobile-none">
                <div className="left-side-filter-content">
                  {/* year filter */}
                  <div className="year filter-select-item">
                    <div className="accordion" id="accordionExample">
                      <div className="card">
                        <div className="card-header" id="headingOne">
                          <button
                           onClick={(e)=> {
                            e.target.classList.toggle("collapsed");
                            yearRef.current.classList.toggle("show");
                           }}
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Years <i className="fa-solid fa-chevron-up" />
                          </button>
                        </div>
                        <div
                        ref={yearRef}
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <form className="catagroy-form">
                              {years?.map(year => {
                                return <label
                                key={year}
                                className="control control--checkbox"
                              >
                                {year}
                                <div className="name">
                                  <input
                                    type="checkbox"
                                    checked={selectedYears.includes(year)}
                                    onChange={(e) => handleYearChange(e, year)}
                                  />
                                  <div className="control__indicator" />
                                </div>
                              </label>
                              })}
                              <label
                                id="select-all"
                                className="control control--checkbox"
                              >
                                Select All
                                <div className="name">
                                  <input
                                    type="checkbox"
                                    checked={selectAllYears.length === years.length}
                                    onChange={handleSelectAll}
                                  />
                                  <div className="control__indicator" />
                                </div>
                              </label>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* reset btn */}
                  <button id="reset-filter-btn" className='d-none' onClick={handleResetAll}>
                    <img src={resetBtnImg} alt="btn" />
                    Reset All
                  </button>
                </div>
              </div>
              {/* left side filter content end  */}
              {/* right side main content start  */}
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="right-side-magazine-content">
                  <div className="magazine-view-all-box">
                  {isLoading && <h2>Fetching Books data...</h2>}
                    {isError && (
                      <Error title={"Something went Wrong to fetch data..."} />
                    )}
                    {books?.filter(filterByYears).map((book) => (
                        <SinglePeriodicals alt={type === "Al Risala Monthly"} book={book} key={book.id} />
                      ))}
                  </div>
                  <div className="d-none pagination-box">
                    <ul className="pagination">
                      <li>
                        <a href="#0">
                          <i className="fa-solid fa-chevron-left" />
                        </a>
                      </li>
                      <li className="active">
                        <a href="#0">1</a>
                      </li>
                      <li>
                        <a href="#0">2</a>
                      </li>
                      <li>
                        <a href="#0">3</a>
                      </li>
                      <li>
                        <a href="#0">4</a>
                      </li>
                      <li>
                        <a href="#0">
                          <i className="fa-solid fa-chevron-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* right side main content end  */}
            </div>
          </div>
        </section>
        <Footer/>
        <Copyright/>
      </>
    );
  };

  export default PeriodicalsViewAll;
