import React, { useState } from 'react';
import Nav from '../Components/Nav/Nav';
import bg from '../../img/bg-img.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signInWithEmailAndPassword,
      user,
      loading,
      error] = useSignInWithEmailAndPassword(auth);

      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || '/';

      const handleUserSignIn = async event => {
        event.preventDefault();
        
    }
  

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

        
      <form onSubmit={handleUserSignIn}>
      <div className="form-control">
          <label className="label">
           
          </label>
          <input type="email" placeholder="Enter Your Email" className="input input-bordered" required/>
        </div>



        <div className="form-control">
          <label className="label">
        
          </label>
          <input type="password" placeholder="Password" className="input input-bordered" required/>
          
        </div>


        <label className="label">
            <p className='font-manrope'>
            Don't have an account?  <Link to="/signin" className="text-sm text-blue-700 label-text-alt link link-hover">Sign Up</Link>
            </p> 
          </label>


        <div className="form-control mt-6">
         

          <input className='text-white font-manrope py-2 rounded-lg btn-primary cursor-pointer' type="submit" value="Sign in" />
        </div>
      </form>


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