import { useDispatch, useSelector } from "react-redux";
import { useGetBooksQuery } from "../redux/features/books/booksApi";
import CustomSelect from "./customSelect";
import Error from "./error";
import LeftSideFilter from "./leftSideFilter";
import SingleBookItem from "./singleBookItem";
import { useState } from "react";

const BookDetailsSection = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();

  const filter = useSelector((state) => state.filter);
  const [year, setYear] = useState([filter.year[0], filter.year[1]]);
  const [checkedCategories, setCheckedCategories] = useState(filter.categories);
  const [checkedLanguages, setCheckedLanguages] = useState(filter.languages);
  const [selectOption, setSelectOption] = useState("");

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

  const SortByOptions = (a, b) => {
    if (selectOption === "ascending") {
      return a.hours - b.hours;
    } else if (selectOption === "descending") {
      return b.hours - a.hours;
    } else if (selectOption === "recent") {
      return a.year - b.year;
    } else if (selectOption === "percentage") {
      return b.year - a.year;
    } else {
      return true;
    }
  };

  return (
    <section className="books-details-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <LeftSideFilter 
            books={books}
            filter={filter}
            year={year}
            setYear={setYear}
            checkedCategories={checkedCategories}
            checkedLanguages={checkedLanguages}
            setCheckedCategories={setCheckedCategories}
            setCheckedLanguages={setCheckedLanguages}
          />
          {/* right side main content start  */}
          <div className="col-lg-8 col-md-7 col-sm-12">
            <div className="right-side-content">
              <div className="all-books">
                <div className="top-content">
                  <h2 className="title">All Books</h2>
                  <CustomSelect setSelectOption={setSelectOption} />
                </div>
                <div className="books-items-box">
                  {isLoading && <h2>Fetching Books data...</h2>}
                  {isError && (
                    <Error title={"Something went Wrong to fetch data..."} />
                  )}
                  {books
                    ?.filter(filterByCategories)
                    .filter(filterByLanguages)
                    .filter(filterByYear)
                    .sort(SortByOptions)
                    .map((book) => (
                      <SingleBookItem book={book} key={book.id} />
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
          </div>
          {/* right side main content end  */}
        </div>
      </div>
    </section>
  );
};

export default BookDetailsSection;
