import React from 'react';
import Nav from '../Components/Nav/Nav';
import bg from '../../img/bg-img.png'
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div style={{
            backgroundImage: `url(${ bg })`
        }}>
            <Nav></Nav>

           <div>
           <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
     
    </div>
    <div className="card px-36 shadow-2xl bg-base-100">
      <div className="card-body">
        <h2 className='text-xl font-bold'>Welcome Back!</h2>
        <p>Please login to your account</p>

        
        <div className="form-control">
          <label className="label">
           
          </label>
          <input type="email" placeholder="Enter Your Email" className="input input-bordered" required/>
        </div>



        <div className="form-control">
          <label className="label">
        
          </label>
          <input type="password" placeholder="Password" className="input input-bordered" required/>
          <label className="label">
            <p className='font-manrope'>
            Don't have an account?  <Link to="/signin" className="text-sm text-blue-700 label-text-alt link link-hover">Sign Up</Link>
            </p>
           
          </label>
        </div>
        <div className="form-control mt-6">
          <button className=" text-white font-manrope py-2 rounded-lg btn-primary">Sign in</button>
        </div>
      </div>
    </div>
  </div>
</div>
           </div>

            </div>
            
        </div>
    );
};

export default Login;