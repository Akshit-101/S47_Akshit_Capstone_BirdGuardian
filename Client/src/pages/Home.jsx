// import { useState } from "react";
import React,{ useState }from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import bird from "../assets/images/sparrow4.jpg"

const Home = () => {
    return (
        <>
        <div className="navbar">
            <p className="nav">Home</p>
            <p className="nav">Store</p> 
            <p className="nav">Login</p>
            <p className="nav">About Us</p>
            <p className="nav">Contact Us</p>
        </div>
        <div className="imageOfTop">
            <img className="photo" src={bird} alt="bird" />
        </div>
        </>
    )
}

export default Home;