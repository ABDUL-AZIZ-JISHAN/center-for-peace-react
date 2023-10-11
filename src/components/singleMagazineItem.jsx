
const SingleMagazineItem = () => {
    return (
        <div className="magazine-item">
        <div className="img-box">
          <img src="assets/img/periodicals/01.png" alt="img" />
        </div>
        <div className="content">
          <h4 className="mag-title">The Spirit Of Islam</h4>
          <p>Published: <span>Jan - Feb, 2023</span></p>
          <button onclick="openPdfReader()" className="btn-style-one">
            Read Now
          </button>
        </div>
      </div>
    );
}

export default SingleMagazineItem;
