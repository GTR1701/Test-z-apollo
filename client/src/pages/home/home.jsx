import React from 'react'
import Navbar from '../../Components/navbar/component.navbar';
import GetUsers from "../../Components/getUsers/GetUsers";
import './home.css'

function Home({...props}) {
    return (
        <div>
            <Navbar key={101} />
            <GetUsers />
        </div>
        
     );
}

export default Home;
