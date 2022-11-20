import React from 'react'

//components
import NavBar from '../Components/NavBar';
import RegisterForm from '../Components/RegisterForm';

//css
import auth from '../assets/css/auth.css';

export default function Register() {
  return (
    <div>
      <NavBar />
      <section className="section-auth">
        <div className="row gx-0">
          
          <div className="col-md-12 col-lg-7">
            <div className="img-content">
              <i className="fa-solid fa-cat"></i>
            </div>
          </div>
          
          <div className="col-md-12 col-lg-5">
            <RegisterForm />
          </div>
        </div>
      </section>
    </div>
  )
}
