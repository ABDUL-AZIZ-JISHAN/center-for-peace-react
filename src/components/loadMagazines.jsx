import { useState } from "react";
import { Link } from "react-router-dom";

const LoadMagazines = ({title, books, alt, filter}) => {

    const handleFiler = (a, b ) =>{

      if(filter === "ascending"){
        return a.year - b.year;
      }else if (filter === "descending"){
        return b.year - a.year;
      }else if (filter === "recent"){
        return b.hours - a.hours;
      }else if (filter === "word"){
        return a.words - b.words;
      }
    }

    return (
<section className="magazine-items spirit-of-islam">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-top">
          <h2 className="title">{title}</h2>
          <Link className="view-btn" to={`/periodicals-view-all/${title}`}>View All</Link>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="magazine-items-box">
        {...Array.from({ length: 8 }).map((_, ind) => {
            let imgInd;
            if (Number(books?.[ind].id) >= 10) {
              imgInd = books?.[ind].id;
            } else {
              imgInd = `0${books?.[ind].id}`;
            }

        return (
          <div className="magazine-item">
          <div className="img-box">
            <img src={alt ? `assets/img/periodicals/risala/${imgInd}.png` : `assets/img/periodicals/${imgInd}.png`} alt="img" />
          </div>
          <div className="content">
            <h4 className="mag-title">{title}</h4>
            <p>Published: <span>{books?.slice().sort(handleFiler)?.[ind].published}</span></p>
            <button  className="btn-style-one">
              Read Now
            </button>
          </div>
        </div>
        );
      })}
      </div>
    </div>
  </div>
</section>

    );
}

export default LoadMagazines;
