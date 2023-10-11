import UseGetUser from '../hooks/useGetUser';
import Home from '../pages/home';

const PublicRoute = ({children}) => {
    const user = UseGetUser();
    return user?.accessToken ? <Home/> : children
}

export default PublicRoute;
