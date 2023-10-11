import { useState } from 'react';
import bookImg from '../assets/img/book-details/book-deatils.png'
import { useGetBookQuery } from '../redux/features/books/booksApi';
import CustomSelect from './customSelect';
import langIcon from '../assets/img/book-details/lan-icon.svg'
import hourIcon from '../assets/img/book-details/hour-icon.svg'
import wordIcon from '../assets/img/book-details/words-icon.svg'
import pageIcon from '../assets/img/book-details/page-icon.svg'
import { Link } from 'react-router-dom';

const selectOptions = [
   {value: 'english', label: 'English'},
   {value: 'arabic', label: 'Arabic'},
   {value: 'hindi', label: 'Hindi'},
   {value: 'urdu', label: 'Urdu'},
]

const SingleBookDetails = ({title, setActiveRead}) => {
  const {data: book,isLoading, isError} = useGetBookQuery(title)
   const {bio, selection, year, published, words, hours, pages, languages,description}  = book?.[0] || {};

  const languageOption = languages?.map(lan =>{
    return {value: lan , label: lan}
    });

    const [lang, setLang] = useState("")
    return (
<section className="book-details-section">
  <div className="container">
    <div className="img-with-intro-area">
      <div className="row justify-content-start">
        <div className="col-lg-4 col-md-12">
          <div className="img-box">
            <img src={bookImg} alt="img" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 flex-column justify-content-between">
          <div className="book-intro">
            <h2 className="book-title">{title}</h2>
            <span className="selection">Selections form the {selection}</span>
            <p className="des">
              {bio}
            </p>
            <ul className="features">
              <li>
                <img src={langIcon} alt="icon" />
                Language:<span>{languageOption?.[0].value}</span>
              </li>
              <li>
                <img src={wordIcon} alt="icon" />
                Total words:<span> {words}</span>
              </li>
              <li>
                <img src={wordIcon} alt="icon" />Hours of Read:<span> {hours} Hours</span>
              </li>
              <li>
                <img src={pageIcon} alt="icon" />
                Pages:<span> {pages}</span>
              </li>
            </ul>
            <ul className="button-groups">
              <li>
                <Link to="#0" className="btn-style-two"><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_92_29387)">
                      <path d="M3.33398 14.1667V15.8334C3.33398 16.2754 3.50958 16.6994 3.82214 17.0119C4.1347 17.3245 4.55862 17.5001 5.00065 17.5001H15.0007C15.4427 17.5001 15.8666 17.3245 16.1792 17.0119C16.4917 16.6994 16.6673 16.2754 16.6673 15.8334V14.1667" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5.83398 9.16675L10.0007 13.3334L14.1673 9.16675" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 3.33325V13.3333" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_92_29387">
                        <rect width={20} height={20} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Free Download</Link>
              </li>
              <li>
                <Link onClick={()=> setActiveRead(true)} to="#0"  className="btn-style-two"><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_92_29394)">
                      <path d="M2.5 15.8334C3.64014 15.1752 4.93347 14.8286 6.25 14.8286C7.56652 14.8286 8.85986 15.1752 10 15.8334C11.1401 15.1752 12.4335 14.8286 13.75 14.8286C15.0665 14.8286 16.3599 15.1752 17.5 15.8334" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2.5 4.99993C3.64014 4.34166 4.93347 3.99512 6.25 3.99512C7.56652 3.99512 8.85986 4.34166 10 4.99993C11.1401 4.34166 12.4335 3.99512 13.75 3.99512C15.0665 3.99512 16.3599 4.34166 17.5 4.99993" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2.5 5V15.8333" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 5V15.8333" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17.5 5V15.8333" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_92_29394">
                        <rect width={20} height={20} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Read Online</Link>
              </li>
              <li>
                <Link to="#0" className="btn-style-two">
                  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_92_29403)">
                      <path d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15 7.5C16.3807 7.5 17.5 6.38071 17.5 5C17.5 3.61929 16.3807 2.5 15 2.5C13.6193 2.5 12.5 3.61929 12.5 5C12.5 6.38071 13.6193 7.5 15 7.5Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15 17.5C16.3807 17.5 17.5 16.3807 17.5 15C17.5 13.6193 16.3807 12.5 15 12.5C13.6193 12.5 12.5 13.6193 12.5 15C12.5 16.3807 13.6193 17.5 15 17.5Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.25 8.91658L12.75 6.08325" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.25 11.0833L12.75 13.9166" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_92_29403">
                        <rect width={20} height={20} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Share</Link>
              </li>
              <li>
                <Link to="#0" className="btn-style-two"><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_92_29412)">
                      <path d="M5.00065 17.5001C5.92113 17.5001 6.66732 16.7539 6.66732 15.8334C6.66732 14.9129 5.92113 14.1667 5.00065 14.1667C4.08018 14.1667 3.33398 14.9129 3.33398 15.8334C3.33398 16.7539 4.08018 17.5001 5.00065 17.5001Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14.1667 17.5001C15.0871 17.5001 15.8333 16.7539 15.8333 15.8334C15.8333 14.9129 15.0871 14.1667 14.1667 14.1667C13.2462 14.1667 12.5 14.9129 12.5 15.8334C12.5 16.7539 13.2462 17.5001 14.1667 17.5001Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14.1673 14.1667H5.00065V2.5H3.33398" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5 4.16675L16.6667 5.00008L15.8333 10.8334H5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_92_29412">
                        <rect width={20} height={20} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Buy</Link>
              </li>
            </ul>
            <hr />
          </div>
        </div>
      </div>
    </div>
    <div className="description-area">
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <div className="description des-item">
            <h3 className="des-title">Description</h3>
            <p className="des-text">
              {description}
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-12">
              <div className="catagories des-item">
                <h3 className="des-title">Catagories</h3>
                <p className="des-text">
                  In Calling People to God Maulana Wahiduddin Khan explains
                  that dawah work has been termed in the Quran as ‘the call
                  to God.’
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="language des-item">
                <h3 className="des-title">Language</h3>
                <p className="des-text">
                  {/* This Book is available in <span>English, Urdu</span>. Read */}
                  Read this book in
                </p>
                <CustomSelect setSelectOption={setLang} options={languageOption || selectOptions}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    );
}

export default SingleBookDetails;
