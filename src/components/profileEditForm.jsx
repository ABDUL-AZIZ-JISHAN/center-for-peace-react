import { useEffect, useState } from "react";
import avatar from "../assets/img/profile/user.png";
import UseGetUser from "../hooks/useGetUser";
import { useEditUserMutation } from "../redux/features/users/userApi";
import Error from "./error";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/features/users/userSlice";
import { useNavigate } from "react-router-dom";
const ProfileEditForm = () => {
  const user = UseGetUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState(user?.user?.email || "");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(user?.user?.name || "");
  const [editUser, { data: userData, isLoading, isError, isSuccess }] =
    useEditUserMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const editedUserInfo = { id: user?.user.id, name, password, email };
    editUser(editedUserInfo);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(addUser({ accessToken: user.accessToken, user: userData }));
      navigate(-1);
    }
  }, [isSuccess, user]);

  return (
    <section className="change-info-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="content">
              <div className="img-box">
                <img src={avatar} alt="img" />
                <h4 className="about-img">
                  {name} <span>Min 200×200px PNG or .JPEG</span>
                </h4>
              </div>
              <form onSubmit={handleSubmit} className="user-change-form">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Abdullah Al Mamun"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    placeholder="abdullahalmamun@gmail.com"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    placeholder="*********"
                  />
                </div>
                <button
                  disabled={isLoading}
                  type="submit"
                  className="btn-style-one"
                >
                  Save Changes
                </button>
              </form>
              {isError && <Error title={"Failed To Upload.."} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileEditForm;
