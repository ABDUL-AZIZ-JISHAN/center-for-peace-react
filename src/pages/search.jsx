import { useSelector } from "react-redux";
import Copyright from "../components/copyright";
import Footer from "../components/footer";
import HeroArea from "../components/heroArea";
import LeftSideFilter from "../components/leftSideFilter";
import Navbar from "../components/navbar";
import SingleSearchItem from "../components/singleSearchItem";
import { useEffect, useState } from "react";
import { useGetBooksQuery } from "../redux/features/books/booksApi";
const Search = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();
  const search = useSelector(state => state.search.search)
  const filter = useSelector((state) => state.filter);
  const [year, setYear] = useState([filter.year[0], filter.year[1]]);
  const [checkedCategories, setCheckedCategories] = useState(filter.categories);
  const [checkedLanguages, setCheckedLanguages] = useState(filter.languages);
  const [length, setLength] = useState(books?.length);
  // let length = 0;
  const filterByCategories = (item) => {
    if (checkedCategories.length === 0) {
      return true;
    }
    return item.categories.some((cat) => checkedCategories.includes(cat));
  };
  const filterByLanguages = (item) => {
    if (checkedLanguages.length === 0) {
      return true;
    }
    return item.languages.some((lan) => checkedLanguages.includes(lan));
  };

  const filterByYear = (item) => {
    const [startYear, endYear] = year;
    return item.year >= startYear && item.year <= endYear;
  };

  const filterBySearch = (item) => {
     return item.name.toLowerCase().includes(search.toLowerCase()) 
  };

  useEffect(() => {
    const filteredBooks = books
      ?.filter(filterByCategories)
      .filter(filterByLanguages)
      .filter(filterByYear)
      .filter(filterBySearch)
    setLength(filteredBooks?.length);

  }, [books, checkedCategories, checkedLanguages, year,filterBySearch ]);

  return (
    <>
      <section
        className="header-style-one-section"
        style={{ backgroundImage: "url(./assets/img/search/search-bg.png)" }}
      >
        <Navbar />
        <HeroArea styleTwo />
      </section>
      <section className="search-section">
        <div className="container">
          <div className="row justify-content-center">
            {/* left side filter content start  */}
            <LeftSideFilter
            books={books}
              filter={filter}
              year={year}
              setYear={setYear}
              checkedCategories={checkedCategories}
              checkedLanguages={checkedLanguages}
              setCheckedCategories={setCheckedCategories}
              setCheckedLanguages={setCheckedLanguages}
              className="col-lg-3 col-md-4 mobile-none"
            />
            {/* left side filter content end  */}
            {/* right side main content start  */}
            <div className="col-lg-9 col-md-8 col-sm-12">
              <div className="right-side-content">
                <div className="all-books">
                  <div className="top-content">
                    <h2 className="top-title">
                      Search Results{" "}
                      <span className="items">({length} results)</span>
                    </h2>
                  </div>
                  <div className="search-items-box">
                    {isLoading && <h2>Fetching Books data...</h2>}
                    {isError && (
                      <Error title={"Something went Wrong to fetch data..."} />
                    )}
                    {books
                      ?.filter(filterByCategories)
                      .filter(filterByLanguages)
                      .filter(filterByYear)
                      .filter(filterBySearch)
                      .map((book, ind) => {
                        return <SingleSearchItem book={book} key={book.id} />;
                      })}
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
            </div>
            {/* right side main content end  */}
          </div>
        </div>
      </section>

      <Footer />
      <Copyright />
    </>
  );
};

export default Search;
