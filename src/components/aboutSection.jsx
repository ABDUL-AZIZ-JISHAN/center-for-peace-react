import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const videoRef = useRef(null);
  const buttonRef = useRef(null);
  const handlePlay = () =>{
    if (videoRef.current.paused) {
      videoRef.current.play();
      buttonRef.current.classList.remove("fa-play");
      buttonRef.current.classList.add("fa-pause");
    } else {
      videoRef.current.pause();
      buttonRef.current.classList.add("fa-play");
      buttonRef.current.classList.remove("fa-pause");
    }
  }
    return (
        <section className="about-section section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 text-center">
              <div className="video-box">
                <video
                  className="img-fluid"
                  id="about-video"
                  src="assets/about.mp4"
                  ref={videoRef}
                />
                <button onClick={handlePlay} id="video-play-btn">
                  <i ref={buttonRef} className="fa-solid fa-play" />
                </button>
              </div>
              <div className="about-content">
                <div className="row text-left justify-content-center">
                  <div className="col-lg-6 text-md-left text-lg-left left">
                    <span>Maulana’s life &amp; works</span>
                    <h2 className="title">Islam in the Modern World</h2>
                    <p className="about d-lg-none d-md-inline-block">
                      Maulana Wahiduddin Khan is an Islamic scholar, spiritual
                      leader and peace activist. He is the founder of Centre for
                      Peace and Spirituality and has been internationally
                      recognized for his contributions to world peace. The
                      Maulana has authored over 200 books dealing with Islam’s
                      spiritual wisdom, the Prophet’s nonviolent approach,
                      religion’s relation to modernity and other contemporary
                      issues. His English translation of the Quran is widely
                      popular because its language is simple, contemporary and
                      easily understandable.
                    </p>
                    <Link className="btn-style-two" to="/about">
                      More Info
                    </Link>
                  </div>
                  <div className="col-lg-6 d-md-none d-lg-block">
                    <p className="about small-none">
                      Maulana Wahiduddin Khan is an Islamic scholar, spiritual
                      leader and peace activist. He is the founder of Centre for
                      Peace and Spirituality and has been internationally
                      recognized for his contributions to world peace. The
                      Maulana has authored over 200 books dealing with Islam’s
                      spiritual wisdom, the Prophet’s nonviolent approach,
                      religion’s relation to modernity and other contemporary
                      issues. His English translation of the Quran is widely
                      popular because its language is simple, contemporary and
                      easily understandable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutSection;
