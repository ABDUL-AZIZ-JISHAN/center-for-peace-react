import { Link, useNavigate } from "react-router-dom";
import UseGetUser from "../hooks/useGetUser";
import { useAddSavedBookMutation, useGetSavedBooksQuery, useGetUserSavedBooksQuery } from "../redux/features/savedBooks/savebookApi";
import { useEffect, useRef } from "react";

const SingleBookItem = ({ book }) => {
  const savedRef = useRef(null);
  const navigate = useNavigate();
  const user = UseGetUser();
  const { name, published, words, hours, pages, id } = book || {};
  const [addSavedBook, {isLoading, isError, isSuccess}] = useAddSavedBookMutation();
  const {data: savedBooks} = useGetUserSavedBooksQuery(user?.user.id);
  const savedBooksArray = savedBooks?.map(item => item.book_id);
  let imgInd;
  if (Number(id) >= 10) {
    imgInd = id;
  } else {
    imgInd = `0${id}`;
  }

 const isSaved = user?.accessToken ? savedBooksArray?.includes(id) ? true : false : null;

  const handleSaved = () =>{
    if(user.user.name){
      const savedBook = {
        student_id: user?.user.id,
        book_id: id,
        name,
        hours,
        pages,
        published
      }
      addSavedBook(savedBook);
      savedRef.current.classList.add("active")
    }else{
      navigate("/signin");
    }
  }
  
  useEffect(()=>{
   if(isError){
    savedRef.current.classList.remove("active")
   }
  },[isError]);


  return (
    <div className="single-book-item">
      <div className="img-box">
        <Link to={isSaved ? "/profile": "#0"} className={isSaved ? "fav active": "fav"} ref={savedRef} onClick={handleSaved}>
          <i className="fa-regular fa-heart" />
        </Link>
        <img src={`assets/img/books/${imgInd}.png`} alt="book-cover-img" />
      </div>
      <div className="content">
        <h3 className="title">{name}</h3>
        <ul className="des">
          <li>
            Published: <span>{published}</span>
          </li>
          <li>
            Total words: <span>{words}</span>
          </li>
          <li>
            Hours to Read: <span>{hours}</span>
          </li>
          <li>
            Pages: <span>{pages}</span>
          </li>
        </ul>
        <Link to={`/books/${name}`} className="btn btn-style-one">
          Read Now
        </Link>
      </div>
    </div>
  );
};

export default SingleBookItem;
