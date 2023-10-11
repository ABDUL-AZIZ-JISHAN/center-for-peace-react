import AboutSection from "../components/aboutSection";
import BestBookSection from "../components/bestBookSection";
import HeaderStyleOne from "../components/headerStyleOne";
import WantToGet from "../components/wantToGet";
import Footer from "../components/footer";
import Copyright from "../components/copyright";
import { useEffect, useState } from "react";
import Preloader from "../components/preloader";
const Home = () => {
  // const [loading, setLoading] = useState(true);
 
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false); 
  //   }, 500); 
  // }, []);
  return (
    <>
        {/* <Preloader loading={loading}/> */}
      <HeaderStyleOne />
      <AboutSection />
      <BestBookSection />
      <WantToGet />
      <Footer/>
      <Copyright/>
    </>
  );
};

export default Home;
