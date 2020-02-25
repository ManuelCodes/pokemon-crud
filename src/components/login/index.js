import React from 'react';
import './style.css';

import GoogleAuth from './GoogleAuth';

class Login extends React.Component {

  render() {
    return (
      <div>

        <form>
          <div className="group">
            <input type="text" />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Name</label>
          </div>
          <div className="group">
            <input type="email"/>
            <span className="highlight"></span><span className="bar"></span>
            <label>Email</label>
          </div>

          <GoogleAuth />
        </form>
      </div>
    );
  }
}

export default Login;
