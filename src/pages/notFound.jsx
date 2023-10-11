import React from 'react';
import Navbar from '../components/navbar';
import Footer from "../components/footer";
import Copyright from "../components/copyright";
const NotFound = () => {
    return (
        <>
            <Navbar bgColor="#1d7c84"/>
            <div className='d-flex align-items-center justify-content-center' style={{padding: "120px 0", background:"white"}}>
                <img src="assets/img/404.avif" alt="img-not-found" />
            </div>
            <Footer/>
            <Copyright/>
        </>
    );
}

export default NotFound;
