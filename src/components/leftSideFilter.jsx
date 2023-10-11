import { useRef } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const LeftSideFilter = ({className,filter, year , setYear, checkedCategories, setCheckedCategories, setCheckedLanguages, checkedLanguages, books}) => {

  const categoryRef = useRef(null);
  const languageRef = useRef(null);
  // Function to handle category checkbox changes
  const handleCategoryChange = (event, category) => {
    const updatedCategories = event.target.checked
      ? [...checkedCategories, category]
      : checkedCategories.filter((c) => c !== category);
    setCheckedCategories(updatedCategories);
  };

  // Function to handle language checkbox changes
  const handleLanguageChange = (event, language) => {
    const updatedLanguages = event.target.checked
      ? [...checkedLanguages, language]
      : checkedLanguages.filter((l) => l !== language);
    setCheckedLanguages(updatedLanguages);
  };

  // Function to handle "Select All" for categories
  const handleSelectAllCategories = () => {
    const allCategories = filter.categories;
    setCheckedCategories(allCategories);
  };

  // Function to handle "Select All" for languages
  const handleSelectAllLanguages = () => {
    const allLanguages = filter.languages;
    setCheckedLanguages(allLanguages);
  };

  // Function to handle "Reset All"
  const handleResetAll = () => {
    setCheckedCategories([]);
    setCheckedLanguages([]);
    setYear([filter.year[0], filter.year[1]]);
  };

  const CategoriesCount = (value) =>{
    return  books?.filter(book => book.categories.includes(value)).length
  }

  const languagesCount = (value) =>{
    return  books?.filter(book => book.languages.includes(value)).length
  }

  return (
    <div className={className ? className : "col-lg-4 col-md-5 mobile-none" }>
      <div className="year-range-slider">
        <h2 className="title">Year</h2>
        <hr />
        <div className="slider-box">
          <RangeSlider
            id="range-slider"
            min={filter.year[0]}
            max={filter.year[1]}
            value={year}
            onInput={setYear}
          />
          <div className="output">
            <input
              readOnly
              type="number"
              value={year[0]}
              className="from val-show"
            />
            <input
              readOnly
              type="number"
              value={year[1]}
              className="to val-show"
            />
          </div>
        </div>{" "}
      </div>
      {/* catagories filter */}
      <div className="catagories filter-select-item">
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <button
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                // aria-expanded={() => this.classList.contains("collapsed") ? true : false}
                aria-controls="collapseOne"
                onClick={(e)=> {
                  e.target.classList.toggle("collapsed")
                  categoryRef.current.classList.toggle("show")
                }}
              >
                Categories <i className="fa-solid fa-chevron-up" />
              </button>
            </div>
            <div
             ref={categoryRef}
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <form className="catagroy-form">
                  {filter?.categories.map((category, ind) => (
                    <label key={ind} className="control control--checkbox">
                      {category}
                      <div className="name">
                        <input
                          type="checkbox"
                          checked={checkedCategories.includes(category)}
                          onChange={(e) => handleCategoryChange(e, category)}
                        />
                        <div className="control__indicator" />
                      </div>
                      <div className="length">
                        <p>({CategoriesCount(category)})</p>
                      </div>
                    </label>
                  ))}
                  <label id="select-all" className="d-none control control--checkbox">
                    Select All
                    <div className="name">
                      <input
                        type="checkbox"
                        onChange={handleSelectAllCategories}
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
      {/* language filter */}
      <div className="languages filter-select-item">
        <div className="accordion" id="accordionExample-two">
          <div className="card">
            <div className="card-header" id="headingTwo">
              <button
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded={() => this.classList.contains("collapsed") ? true : false}
                aria-controls="collapseTwo"
                onClick={(e)=> {
                  e.target.classList.toggle("collapsed")
                  languageRef.current.classList.toggle("show")
                }}
              >
                Language <i className="fa-solid fa-chevron-up" />
              </button>
            </div>
            <div
            ref={languageRef}
              id="collapseTwo"
              className="collapse show"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample-two"
            >
              <div className="card-body">
                <form className="language-form">
                  {filter?.languages.map((language, ind) => (
                    <label key={ind} className="control control--checkbox">
                      {language}
                      <div className="name">
                        <input
                          type="checkbox"
                          checked={checkedLanguages.includes(language)}
                          onChange={(e) => handleLanguageChange(e, language)}
                        />
                        <div className="control__indicator" />
                      </div>
                      <div className="length">
                        <p >({languagesCount(language)})</p>
                      </div>
                    </label>
                  ))}
                  <label
                    id="select-all-languages"
                    className="d-none control control--checkbox"
                  >
                    Select All
                    <div className="name">
                      <input
                        type="checkbox"
                        onChange={handleSelectAllLanguages}
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
      <button id="reset-filter-btn" onClick={handleResetAll}>
        Reset All
      </button>
    </div>
  );
};

export default LeftSideFilter;
