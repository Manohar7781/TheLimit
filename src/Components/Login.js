import React from 'react';
import {Link} from 'react-router-dom';
import '../Css/Login.css';
import facebook from '../Images/facebook.png'
import logo1 from '../Images/logo1.jpg'
 function Login() {
  return (
    <>
    <div className="login-page">
    <div id="content">
      <div id="content-wrapper">
  <div id="form" className="row">
          <div className="form-title"><br/>
              <img src={logo1} alt="logo" id="brand-image" width="80px" height="80px"/>
          </div> <br/>
              <div id="social-providers" className="col-social-section">
                  <div id="social-provider-text">Sign in with</div> <br/>
                  <ul className="login-social">
                          <li className="login-pf-social-link"><img src={facebook} alt="" width="35px" height="35px"/></li>
                          <li className="login-pf-social-link"><img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="" width="35px" height="35px"/></li>
                  </ul><br/>
          </div>
      </div>       
          <form id="login-email" action="#"  name="form">
              <div id="use_email">or use your email address</div>
              <div className="login__field">
                      <i className="icon fa fa-envelope"></i>
                      <input tabindex="1" id="username" className="login__input" name="email" value=""  type="email" autocomplete="off" placeholder="Email"/>
              </div>
              <div className="login__field">
                  <i className="icon fa fa-lock"></i>
                  <input tabindex="6" id="password" className="login__input" name="password" type="password" autocomplete="off" placeholder="Password"/>
                  <div id="pass_error">Please enter correct password</div>
              </div>
              <div className="form-field">
                  <button className="btn"  id="login_btn" type="submit">Sign in</button>
              </div>
              <div className="form-field">
                  <p className="forgot_password" id="forgot_password"> <Link to='/Forgot_password'>Forgot Password?</Link></p>
                  <p className="new_user">New User <Link to='/Signup' >Register?</Link></p>
              </div>
</form>
    </div>
    </div>
  </div>
    </>
  )
}
export default Login;