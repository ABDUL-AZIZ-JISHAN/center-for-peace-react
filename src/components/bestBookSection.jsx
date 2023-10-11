import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useGetBooksQuery } from "../redux/features/books/booksApi";
import { Link } from "react-router-dom";
import book1 from "../assets/img/index/best-book-1.png";
import book2 from "../assets/img/index/best-book-2.png";
import book3 from "../assets/img/index/best-book-3.png";
import book4 from "../assets/img/index/best-book-4.png";

const BestBookSection = () => {
  const { data: books} = useGetBooksQuery();

  const swiperParams = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false,
    },
  };

  return (
    <section className="best-book-section section-padding">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="section-title">
            <h4 className="subtitle">Maulana’s Published</h4>
            <h2 className="title">The Best Books</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10">
            {/* <div ref={leftRef} className="swiper-button-next" />
            <div ref={rightRef} className="swiper-button-prev" /> */}
            <Swiper className="best-book-slider" {...swiperParams}>
              {...Array.from({ length: 4 }).map((_, ind) => {
                let img;
                if (ind === 0) {
                  img = book1;
                } else if (ind === 1) {
                  img = book2;
                } else if (ind === 2) {
                  img = book3;
                } else {
                  img = book4;
                }
                return (
                  <SwiperSlide key={ind}>
                    <div className="swiper-slide">
                      <div className="single-books-item">
                        <div className="img-box">
                          <img src={img} alt="img" />
                        </div>
                        <div className="content">
                          <h3
                            style={{ textTransform: "capitalize" }}
                            className="book-title"
                          >
                            {books?.[ind].name}
                          </h3>
                          <p className="book-des">
                            Published: {books?.[ind].published} <br />
                            Total words: {books?.[ind].words}
                          </p>
                          <Link
                            to={`/books/${books?.[ind].name}`}
                            className="btn-style-one"
                          >
                            More Info
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestBookSection;
