import Navbar from "../components/navbar";
import logo from '../assets/img/index/logo-color.png'
import ProfileEditForm from "../components/profileEditForm";
import img from "../assets/img/profile/user-bg.png"
import { useParams } from "react-router-dom";
const EditProfile = () => {
  const {id} = useParams();

    return (
        <>
            <section className="header-style-one-section bg-img-none bg-transparent h-auto">
                <Navbar logo={logo}/>
            </section>
<section className="title-with-img-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <img src={img}  />
      </div>
    </div>
    <div className="top-content-with-btn">
      <div className="left">
        <div className="button-back">
          <button onClick={() =>window.history.back()} className="back-btn">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_487_27397)">
                <path d="M5 12H19" stroke="#7A808A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 12L11 18" stroke="#7A808A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 12L11 6" stroke="#7A808A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_487_27397">
                  <rect width={24} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
      <div className="right">
        <div className="content">
          <h3 className="title">Personal info</h3>
          <p className="text">Set your account settings down below</p>
        </div>
      </div>
    </div>
  </div>
</section>
<ProfileEditForm id={id}/>
        </>
    );
}

export default EditProfile;
