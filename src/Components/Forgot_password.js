import React from 'react';
import { Link } from 'react-router-dom';
 function Forgot_password() {
  return (
    <div className='forgot_password1'>
        <div className='forget_heading'>
            <form id="reset-email" action="#"  name="form">
              <div id="use_email">Forgot Password</div>
              <div className="login__field" id='email'>
                      <i className="icon fa fa-envelope"></i>
                      <input tabindex="1" id="username" className="login__input" name="email" value=""  type="email"  placeholder="Email"/>
              </div>
              <div className="form-field">
                  <button className="btn"  id="reset_btn" type="submit">Reset Password</button>
              </div>
              <div className="or_account">
                  <p className="have_account">Or <Link to='/Login' >Login?</Link></p>
              </div>
</form>
        </div>
    </div>
  )
}
export default Forgot_password;