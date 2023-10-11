import { Link } from "react-router-dom";

const SingleSearchItem = ({book}) => {
  const { name, pages, id } = book || {};

  let imgInd;
  if (Number(id) >= 10) {
    imgInd = id;
  } else {
    imgInd = `0${id}`;
  }

    return (
        <div className="single-search-item">
                <div className="img-box">
                  <img src={`assets/img/books/${imgInd}.png`} alt="book-cover-img" />
                </div>
                <div className="content">
                  <p className="description">
                    But subsequently there was a change of circumstances and
                    by special divine succour a full-fledged mission came to
                    be launched on the basis of the ideology I had presented
                    in my <span className="light">book</span> Al-<span className="light">Islam</span>
                    <br />
                    This <span className="light">Book</span>, the English
                    version of Al-<span className="light">Islam</span>, is a
                    part of this mission. <br />
                    This <span className="light">Book</span> offers an
                    explanation of the teachings of
                    <span className="light">Islam</span>
                    in a contemporary style and aims at providing such an
                    interpretation of Islam as will address the modern mind.
                  </p>
                  <Link to={`/books/${name}`} className="read-btn">Read Section <i className="fa-solid fa-arrow-right" /></Link>
                  <ul className="btn-group">
                    <li>
                      <Link to={`/books/${name}`} className="btn-style-one"><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_513_16050)">
                            <path d="M7.5013 3.33301V18.333M5.0013 3.33301H14.168C14.61 3.33301 15.0339 3.5086 15.3465 3.82116C15.659 4.13372 15.8346 4.55765 15.8346 4.99967V14.9997C15.8346 15.4417 15.659 15.8656 15.3465 16.1782C15.0339 16.4907 14.61 16.6663 14.168 16.6663H5.0013C4.78029 16.6663 4.56833 16.5785 4.41205 16.4223C4.25577 16.266 4.16797 16.054 4.16797 15.833V4.16634C4.16797 3.94533 4.25577 3.73337 4.41205 3.57709C4.56833 3.42081 4.78029 3.33301 5.0013 3.33301Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.832 6.66699H12.4987" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.832 10H12.4987" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_513_16050">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                       {name}
                      </Link>
                    </li>
                    <li>
                      <Link to={`/books/${name}`} className="btn-style-one">Chapter {id}</Link>
                    </li>
                    <li>
                      <Link to={`/books/${name}`} className="btn-style-one"><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_513_16050)">
                            <path d="M7.5013 3.33301V18.333M5.0013 3.33301H14.168C14.61 3.33301 15.0339 3.5086 15.3465 3.82116C15.659 4.13372 15.8346 4.55765 15.8346 4.99967V14.9997C15.8346 15.4417 15.659 15.8656 15.3465 16.1782C15.0339 16.4907 14.61 16.6663 14.168 16.6663H5.0013C4.78029 16.6663 4.56833 16.5785 4.41205 16.4223C4.25577 16.266 4.16797 16.054 4.16797 15.833V4.16634C4.16797 3.94533 4.25577 3.73337 4.41205 3.57709C4.56833 3.42081 4.78029 3.33301 5.0013 3.33301Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.832 6.66699H12.4987" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.832 10H12.4987" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_513_16050">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        Page {pages}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
    );
}

export default SingleSearchItem;
