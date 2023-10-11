import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Preloader from "../src/components/preloader";
import { useEffect, useState } from "react";
import NotFound from "./pages/notFound";
import Books from "./pages/books";
import Periodicals from "./pages/periodicals";
import BookDetails from "./pages/bookDetails";
import PeriodicalsViewAll from "./pages/periodicalsViewAll";
import SignIn from "./pages/signIn";
import Register from "./pages/register";
import UseGetUser from "./hooks/useGetUser";
import Search from "./pages/search";
import Profile from "./pages/profile";
import EditProfile from "./pages/editProfile";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/features/users/userSlice";
import PrivateRoute from "./components/privateRoute";
import PublicRoute from "./components/publicRoute";
function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const user = UseGetUser();

  useEffect(() => {
    if (user !== null || undefined) {
      dispatch(addUser(user));
    }
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [loading, user]);

  return loading ? (
    <Preloader loading={loading} />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:name" element={<BookDetails />} />
        <Route path="/periodicals" element={<Periodicals />} />
        <Route
          path="/periodicals-view-all/:type"
          element={<PeriodicalsViewAll />}
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile/edit/:id"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
