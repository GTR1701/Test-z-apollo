import React from 'react'
import Navbar from '../../Components/navbar/component.navbar';
import GetUsers from "../../Components/getUsers/GetUsers";
import './home.css'

function Home({...props}) {
    return (
        <>
            <Navbar key={101} />
            <GetUsers />
        </>
        
     );
}

export default Home;
