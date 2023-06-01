import React from 'react'
import {Link} from 'react-router-dom';
import logo1 from '../Images/logo1.jpg'
import facebook from '../Images/facebook.png'
 function Signup() {
  return (
    <div className="signup-page">
    <div id="content">
      <div id="content-wrapper">
  <div id="form" className="row">
          <div class="form-title"> <br/>
              <img src={logo1} alt="logo" id="brand-image" width="80px" height="80px"/>
          </div> <br/>
              <div id="social-providers" class="col-social-section">
                  <div id="social-provider-text">Sign in with</div>
                  <ul class="login-social">
                          <li class="login-pf-social-link"><img src={facebook} alt="" width="35px" height="35px"/></li>
                          <li class="login-pf-social-link"><img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="" width="35px" height="35px"/></li>
                  </ul>
          </div>
      </div>        
          <form id="login-email" action="Home.html"  name="form">
             <div id="use_email">or use your email address</div>
              <div class="login__field">
                      <i class="icon fa fa-envelope"></i>
                      <input tabindex="1" id="username" class="login__input" name="email" value=""  type="email" autocomplete="off" placeholder="Email"/>
              </div>
              <div class="login__field">
                  <i class="icon fa fa-user"></i>
                  <input tabindex="1" id="firstname" class="login__input" name="email" value=""  type="text" autocomplete="off" placeholder="FirstName"/>
          </div>
          <div class="login__field">
              <i class="icon fa fa-user"></i>
              <input tabindex="1" id="lastname" class="login__input" name="name" value=""  type="text" autocomplete="off" placeholder="lastname"/>
      </div>
      <div class="login__field">
          <i class="icon fa fa-phone"></i>
          <input tabindex="1" id="phonenumber" class="login__input" name="phone" value=""  type="tel" autocomplete="off" placeholder="phonenumber"/>
  </div>
              <div class="login__field">
                  <i class="icon fa fa-lock"></i>
                  <input tabindex="6" id="password" class="login__input" name="password" type="password" autocomplete="off" placeholder="Password"/>
              </div>
              <div class="form-field">
                  <button class="btn" type="submit">Sign Up</button>
              </div>
              <div class="form-field" >
                  <p class="new_user" >Already <Link to="/Login" >Register?</Link></p>
              </div>
</form>
    </div>
    </div>
  </div>

  )
}
export default Signup;