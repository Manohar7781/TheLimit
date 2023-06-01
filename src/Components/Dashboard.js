import React from 'react';
import '../Css/Dashboard.css';
import logo1 from '../Images/logo1.jpg';
import { Link } from 'react-router-dom';
import wallpaper from '../Images/wallpaper.jpg';
import Typewriter from "typewriter-effect";

 function Dashboard() {
  
  return (
    <>
     <header>
        <div class="navbar">
            <div class="logo">
                <img src={logo1} alt="The Limit" class="logo"/>
            </div>
            <ul>
                <li><Link to="/Dashboard">Home</Link></li>
                <li><Link to="/Tasks">Tasks</Link></li>
            </ul>
        </div>
    </header> <br/>
    <section className="middle-banner-section">
        <div className="banner-image-div">
          <img className="bannerimage" src={wallpaper} alt="BannerImage" />
          <div className="centered">
          <h1>Never<Typewriter onInit={(typewriter)=> {
              typewriter
              .typeString("Miss a Deadline!")
              .pauseFor(1000)
              .start();
             }}/>
          </h1>
          <h1>Users Can <Typewriter onInit={(typewriter)=> {
              typewriter
              .typeString("Create Tasks")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Track Tasks")
              .deleteAll()
              .typeString("Share Tasks")
              .deleteAll()
              .typeString("Collaborate Tasks")
              .start();
             }}/>
          </h1>
          </div>
        </div>
        
    </section>
    </>
  )
}
export default Dashboard;