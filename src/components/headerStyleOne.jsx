import HeroArea from "./heroArea";
import Navbar from "./navbar";

const HeaderStyleOne = ({styleTwo, bg , headerTitle, type}) => {
  return (
    <section
      className={type ? "header-style-one-section" : `header-style-one-section ${type}`}
      style={{ backgroundImage: `url(${bg || "./assets/img/index/header-bg.png"})` }}
    >
      <Navbar />
      <HeroArea headerTitle={headerTitle} styleTwo={styleTwo} />
    </section>
  );
};

export default HeaderStyleOne;
