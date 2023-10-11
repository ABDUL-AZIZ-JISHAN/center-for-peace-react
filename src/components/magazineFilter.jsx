import React from 'react';

const MagazineFilter = ({filter, setFilter}) => {

  const handleFilter = (value) => {
    setFilter("");
    setFilter(value);
  }
    return (
        <section className="magazine-filter">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="top-title-box">
          <h2 className="title">Magazines</h2>
          <div className="divider" />
          <ul className="items-button-group">
            <li className={filter.includes("ascending") ? "active" : ""}>
              <button onClick={() => handleFilter("ascending")} className="btn-style-one">
                Name
                <svg width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_261_27453)">
                    <path d="M12.5 8.83333V4.66667C12.5 3.51667 13.0167 3
                  14.1667 3C15.3167 3 15.8333 3.51667 15.8333
                  4.66667V8.83333M15.8333 6.33333H12.5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.8333 18.0001H12.5L15.8333
                                12.1667H12.5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.33203 13L5.83203 15.5L8.33203 13" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.83203 5.5V15.5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_261_27453">
                      <rect width={20} height={20} fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </li>
            <li className={filter.includes("recent") ? "active" : ""}>
              <button onClick={() => handleFilter("recent")} className="btn-style-one">Published</button>
            </li>
            <li className={filter.includes("word") ? "active" : ""}>
              <button onClick={() => handleFilter("word")} className="btn-style-one">Reading Time</button>
            </li>
            <li className={filter.includes("descending") ? "active" : ""}>
              <button onClick={() => handleFilter("descending")} className="btn-style-one">
                Name
                <svg width={20} height={21} viewBox="0 0
                                    20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_261_27461)">
                    <path d="M12.5 18.0001V13.8334C12.5
                                        12.6834 13.0167 12.1667 14.1667
                                        12.1667C15.3167 12.1667 15.8333 12.6834
                                        15.8333 13.8334V18.0001M15.8333
                                        15.5001H12.5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.8333 8.83333H12.5L15.8333
                                          3H12.5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.33203 13L5.83203
                                            15.5L8.33203 13" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.83203 5.5V15.5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_261_27461">
                      <rect width={20} height={20} fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <hr />
      </div>
    </div>
  </div>
</section>

    );
}

export default MagazineFilter;
