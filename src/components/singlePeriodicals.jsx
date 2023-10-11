import bg from '../assets/img/periodicals/01.png'
import bg2 from '../assets/img/periodicals/10.png'

const SinglePeriodicals = ({book, alt}) => {
    return (
        <div className="magazine-item">
              <div className="img-box">
                <img src={alt ? bg2 :bg} alt="img" />
              </div>
              <div className="content">
                <h4 className="mag-title">The Spirit Of Islam</h4>
                <p>Published: <span>{book?.published}</span></p>
                <button  className="btn-style-one">Read
                  Now</button>
              </div>
            </div>
    );
}

export default SinglePeriodicals;
