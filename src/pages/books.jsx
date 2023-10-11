import BookDetailsSection from "../components/bookDetailsSection";
import HeaderStyleOne from "../components/headerStyleOne";
import Footer from "../components/footer";
import Copyright from "../components/copyright";
const Books = () => {
  return (
    <>
      <HeaderStyleOne bg="./assets/img/books/header-bg.png" styleTwo />
      <BookDetailsSection />
      <Footer />
      <Copyright />
    </>
  );
};

export default Books;
