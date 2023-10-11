import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { addActivePage } from "../redux/features/search/searchSlice";
import  defautlLogo from "../assets/img/index/logo.png"
import userImg from "../assets/img/profile/user.png"
const Navbar = ({bgColor, logo}) => {
  const dispatch = useDispatch();
 const active = useSelector(state => state.search.activePage);
 const {user} = useSelector(state => state.user);
 
 const setActive = (value) =>{
  dispatch(addActivePage(value));
 }

    return (
        <div style={bgColor ? {backgroundColor: bgColor} : {}} className="navbar-area">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/">
            <img src={logo ? logo : defautlLogo} alt="logo" />
          </Link>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className={active === "Home" ? "nav-item active" : "nav-item"}>
                <NavLink onClick={()=> setActive("Home")}  className="nav-link" to="/">HOME</NavLink>
              </li>
              <li  className={active === "Books" ? "nav-item active" : "nav-item"}>
                <NavLink onClick={()=> setActive("Books")}  className="nav-link" to="/books">BOOKS</NavLink>
              </li>
              <li className={active === "Periodicals" ? "nav-item active" : "nav-item"}>
                <NavLink onClick={()=> setActive("Periodicals")}  className="nav-link" to="/periodicals">PERIODICALS</NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <div className="button-group d-flex justify-content-center align-items-center">
            { user.user?.name &&   <Link
                    to="/profile"
                    className="btn login with-img my-2 my-sm-0"
                    type="button"
                  >
                    <img src={userImg} alt="img" />
                  </Link>}
             {!user.user?.name &&   <NavLink to="/signin" className="btn login my-2 my-sm-0" type="button">
                  SIGN IN
                </NavLink>}
              </div>
            </form>
          </div>
        </nav>
      </div>
    </div>
    );
}

export default Navbar;
