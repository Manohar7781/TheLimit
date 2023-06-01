import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../Images/logo1.jpg';
import wallpaper from '../Images/wallpaper.jpg';
import '../Css/Tasks.css'
function Tasks() {
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
          <h1> Manage your Tasks
          </h1>
          
          </div>
        </div>
        
    </section>
    </>
  )
}
export default Tasks;
