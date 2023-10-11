import { Link, useNavigate } from "react-router-dom";
import UseGetUser from "../hooks/useGetUser";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/features/users/userSlice";

const ProfileViewSection = () => {
  const user = UseGetUser();
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const handleLogOut = () =>{
   dispatch(removeUser());
   navigate("/signin");
  }
    return (
       <section className="user-profile-view">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="content">
          <div className="bg-img">
            <img src="assets/img/profile/user-bg.png" className="img-fluid bg" alt="bg-img" />
            <img className="user-img" src="assets/img/profile/user.png" alt="user-img" />
          </div>
          <div className="designation">
            <div className="left">
              <div className="identity">
                <h4 className="name">{user?.user.name}</h4>
                <p className="email">
                  <i className="fa-regular fa-envelope" />
                  {user?.user.email}
                </p>
              </div>
              <Link to={`edit/${user?.user.id}`} className="edit-btn btn-style-one">Edit</Link>
            </div>
            <div className="btn-groups ">
            <button onClick={handleLogOut} className="btn-style-one btn-round">Log out</button>
              <a href="ask-cps.html" className=" d-none btn-round">
                <svg width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_701_24467)">
                    <path d="M16.5625 5.72498C17.1458 6.05665 17.5042 6.67748 17.5 7.34832V13.4183C17.5 14.0925 17.1308 14.7142 16.535 15.0417L10.91 18.6C10.6311 18.7531 10.3181 18.8334 10 18.8334C9.68186 18.8334 9.36887 18.7531 9.09 18.6L3.465 15.0417C3.17347 14.8823 2.9301 14.6476 2.76034 14.362C2.59058 14.0765 2.50067 13.7505 2.5 13.4183V7.34748C2.5 6.67332 2.86917 6.05248 3.465 5.72498L9.09 2.40832C9.37711 2.25001 9.69964 2.16699 10.0275 2.16699C10.3554 2.16699 10.6779 2.25001 10.965 2.40832L16.59 5.72498H16.5625Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 13.8333V13.8416" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 11.3334C10.3748 11.3345 10.739 11.2093 11.0339 10.9779C11.3287 10.7465 11.537 10.4225 11.625 10.0582C11.7131 9.69393 11.6758 9.31058 11.5191 8.9701C11.3625 8.62961 11.0956 8.35187 10.7617 8.18171C10.4301 8.01189 10.0509 7.95923 9.68567 8.03231C9.32043 8.10539 8.99066 8.29991 8.75 8.58421" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_701_24467">
                      <rect width={20} height={20} fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
                Ask a CPS Scholar</a>
              <a href="join-cps.html" className="btn-round d-none">
                <svg width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_701_24474)">
                    <path d="M6.66797 6.33333C6.66797 7.21739 7.01916 8.06523 7.64428 8.69036C8.2694 9.31548 9.11725 9.66667 10.0013 9.66667C10.8854 9.66667 11.7332 9.31548 12.3583 8.69036C12.9834 8.06523 13.3346 7.21739 13.3346 6.33333C13.3346 5.44928 12.9834 4.60143 12.3583 3.97631C11.7332 3.35119 10.8854 3 10.0013 3C9.11725 3 8.2694 3.35119 7.64428 3.97631C7.01916 4.60143 6.66797 5.44928 6.66797 6.33333Z" stroke="#1C1F2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.332 16.3333H18.332" stroke="#1C1F2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.832 13.8333V18.8333" stroke="#1C1F2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 18V16.3333C5 15.4493 5.35119 14.6014 5.97631 13.9763C6.60143 13.3512 7.44928 13 8.33333 13H11.6667" stroke="#1C1F2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_701_24474">
                      <rect width={20} height={20} fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
                Join CPS</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    );
}

export default ProfileViewSection;
