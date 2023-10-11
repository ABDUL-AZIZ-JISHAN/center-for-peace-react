

const UseGetUser = () => {
    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString);

    if(user?.accessToken){
        return user;
    }else{
        return null;
    }
    
}

export default UseGetUser;
