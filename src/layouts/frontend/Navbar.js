import React from "react";
import { Link } from "react-router-dom";

import { useHistory } from 'react-router-dom';


import swal from 'sweetalert';
import axios from 'axios';
import { useState } from "react";


function Navbar() {
   
    const history = useHistory();
    const [searchInput, setSearchInput] = useState('');

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        history.push(`/search?q=${searchInput}`);
    };
      
  

    const logoutSubmit = (e) => {
        e.preventDefault();
        
        axios.post(`/api/logout`).then(res => {
            if(res.data.status === 200)
            {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                swal("Success",res.data.message,"success");
                history.push('/');
            }
        });

    }

    var AuthButtons = '';
    if(!localStorage.getItem('auth_token'))
    {
        AuthButtons = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
            </ul>
        );
    }
    else
    {
        AuthButtons = (
            <li className="nav-item">
                <button type="button" onClick={logoutSubmit} className="nav-link btn btn-danger btn-sm text-white">Logout</button>
            </li>
        );
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">
            <div className="container">
            <Link className="navbar-brand" to="/">
             <img src="/img/TechTrend.jpg" alt="Bootstrap" width="100" height="80"/>
            </Link>
                <Link className="navbar-brand" to="/">TechTrend</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                   
                            <li className="nav-item mb-2 me-5">
                            <form onSubmit={handleSubmit} class="d-flex" role="search">
                            <input class="form-control me-2" type="search" value={searchInput} placeholder="Search" aria-label="Search" 
                                 onChange={handleSearchInputChange}
                            />
                            <button class="btn btn-dark" type="submit">Search</button>
                            </form>
                           
                            </li>
                   
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/collections">Collection</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Cart</Link>
                        </li>
                        {AuthButtons}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
