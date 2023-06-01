import '../Css/Home.css';
import logo1 from '../Images/logo1.jpg'
import {Link} from 'react-router-dom';
function Home() {
  return (
    <div className="App">
      <div className="banner">
        <nav className="navbar">
          <img src= {logo1}alt="thelimit" class="logo"/>
          <a href="#" id="responsive-page"></a>
          <ul>
            <li><Link to='/login'>LOGIN</Link></li>
          </ul>
        </nav>
        <div className="content">
          <h1>WELCOME TO THE LIMIT</h1>
          <p> ADD YOUR TASKS</p>
          <div className="neon-btn"><Link to="/Signup">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          <span>Let's Begin</span></Link></div>
            
        </div>
      </div>
    </div>
  );
}

export default Home;
