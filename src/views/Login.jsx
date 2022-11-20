import React from 'react'

//components
import NavBar from '../Components/NavBar';
import LoginForm from '../Components/LoginForm';

//css
import auth from '../assets/css/auth.css';

export default function Login() {
  return (
    <div>
      <NavBar />
      <section className="section-auth">
        <div className="row align-items-center gx-0">
          
          <div className="col-md-12 col-lg-7">
            <div className="img-content">
              <i className="fa-solid fa-cat"></i>
            </div>
          </div>
          
          <div className="col-md-12 col-lg-5">
            <LoginForm />
          </div>
        </div>
      </section>
    </div>
  )
}
