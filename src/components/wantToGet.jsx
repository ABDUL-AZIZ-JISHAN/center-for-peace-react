import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const WantToGet = () => {
    return (
        <section className="want-to-get-section section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 text-center">
              <div className="content">
                <h2 className="title">
                  Want to get in time <br />
                  for new publish
                </h2>
                <p className="des">
                  An online repository on the work and publications of the
                  renowned scholar activist Maulana Wahiduddin Khan
                </p>
                <Link to="/donate" className="btn-style-two d-inline subscribe">Donate</Link>
              </div>
            </div>
          </div>
        </div>
        {/* img marquee area  */}
        <div className="marquee-area">
          <div className="img-gallery marquee-this">
          <Marquee loop={100} >
            <div className="marquee-content">
              <div className="img-box">
                <img className="img-fluid" src="assets/img/index/best-book-1.png" alt="img" />
              </div>
              <div className="img-box">
                <img className="img-fluid" src="assets/img/index/get2.png" alt="img" />
              </div>
              <div className="img-box">
                <img className="img-fluid" src="assets/img/index/get3.png" alt="img" />
              </div>
              <div className="img-box">
                <img className="img-fluid" src="assets/img/index/grp-marquee.png" alt="img" />
              </div>
              <div className="img-box">
                <img className="img-fluid" src="assets/img/index/get6.png" alt="img" />
              </div>
              <div className="img-box">
                <img className="img-fluid" src="assets/img/index/get7.png" alt="img" />
              </div>
              <div className="img-box">
                <img className="img-fluid" src="assets/img/index/get8.png" alt="img" />
              </div>
            </div>
            </Marquee>
          </div>
        </div>
      </section>
    );
}

export default WantToGet;
