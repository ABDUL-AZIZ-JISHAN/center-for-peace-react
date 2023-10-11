import Navbar from "../components/navbar";
import logo from "../assets/img/index/logo-color.png";
import BestBookSection from "../components/bestBookSection";
import LearnFromBook from "../components/learnFromBook";
import SingleBookDetails from "../components/singleBookDetails";
import Footer from "../components/footer";
import Copyright from "../components/copyright";
import { useParams } from "react-router-dom";
import BookReadMode from "../components/bookReadMode";
import { useState } from "react";

const BookDetails = () => {
  const { name } = useParams();
  const [activeRead, setActiveRead] = useState(false);
  return (
    <>
      <section className="header-style-one-section bg-img-none">
        <Navbar logo={logo} />
      </section>
      <SingleBookDetails setActiveRead={setActiveRead} title={name} />
      <LearnFromBook />
      <BestBookSection />
      <Footer />
      <Copyright />
      <BookReadMode bookName={name} setActiveRead={setActiveRead} active={activeRead}/>
    </>
  );
};

export default BookDetails;
