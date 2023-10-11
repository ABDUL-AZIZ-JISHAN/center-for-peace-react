import { Link } from "react-router-dom";
import { useDeleteSavedBookMutation, useGetSavedBooksQuery } from "../redux/features/savedBooks/savebookApi";

const SavedBookTables = () => {
  const {data: savedBooks, isLoading, isError} = useGetSavedBooksQuery();
   const [deleteSavedBook] = useDeleteSavedBookMutation();
   const handleRemove = (id) =>{
    deleteSavedBook(id);
   }
   return (
<section className="saved-book-table-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <table className="saved-book-table w-100">
          <thead>
            <tr>
              <th>Book name</th>
              {/* <th>Total read</th> */}
              <th>Pages</th>
              <th>Duration</th>
              <th>Status</th>
              <th className="d-none">button</th>
            </tr>
          </thead>
          <tbody>
         {savedBooks?.map(book =>{

let imgInd;
if (Number(book.id) >= 10) {
  imgInd = book.id;
} else {
  imgInd = `0${book.id}`;
}
           return    <tr key={book.id}>
           <td className="img-with-text">
             <div className="img-box">
               <img src={`assets/img/books/${imgInd}.png`} alt="img" />
             </div>
             <div className="about">
               <h5 className="name">{book.name}</h5>
               <p className="pub">Published: <span>{book.published}</span></p>
             </div>
           </td>
           <td className="read d-none">
             <div className="read-percentage-box">
               <p className="percent">10%</p>
               <div className="main-line">
                 <div className="percentage-line" />
               </div>
             </div>
           </td>
           <td className="chapter">{book.pages}</td>
           <td className="duration">{book.hours} Hour</td>
           <td className="status">
             <button onClick={() => handleRemove(book.id)} data-toggle="tooltip" title="Unsave this Book!" className="bookmark-btn">
               <svg width={12} height={17} viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M3.16146 1.16675H8.66146C9.14769 1.16675 9.614 1.3599 9.95782 1.70372C10.3016 2.04754 10.4948 2.51385 10.4948 3.00008V15.8334L5.91146 13.0834L1.32812 15.8334V3.00008C1.32812 2.51385 1.52128 2.04754 1.8651 1.70372C2.20891 1.3599 2.67523 1.16675 3.16146 1.16675Z" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
             </button>
           </td>
           <td className="btn-reading">
             <Link to={`/books/${book.name}`} className="btn-style-one">Continue reading</Link>
           </td>
         </tr>  
         })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

    );
}

export default SavedBookTables;
