import UseGetUser from '../hooks/useGetUser';
import SignIn from '../pages/signin';

const PrivateRoute = ({children}) => {
    const user = UseGetUser();
    return user?.accessToken ? children : <SignIn/>
}

export default PrivateRoute;
