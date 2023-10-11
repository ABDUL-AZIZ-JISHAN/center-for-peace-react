import Copyright from "../components/copyright";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ProfileViewSection from "../components/profileViewSection";
import SavedBookFilter from "../components/savedBookFilter";
import SavedBookTables from "../components/savedBookTables";
import logo from '../assets/img/index/logo-color.png'
const Profile = () => {
    return (
        <>
        <section className="header-style-one-section bg-img-none bg-transparent h-auto">
            <Navbar logo={logo}/>
        </section>
        <ProfileViewSection />
            <SavedBookFilter/>
            <SavedBookTables/>
            <div style={{margin: "100px 0"}}></div>
            <Footer/>
            <Copyright/>
        </>
    );
}

export default Profile;
