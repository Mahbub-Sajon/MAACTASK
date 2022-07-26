import React, { useState } from 'react';
import Nav from '../Components/Nav/Nav';
import { Link, useNavigate } from "react-router-dom";
import bg from '../../img/bg-img.png'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate("/");
    }

    const handleCreateUser = event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError('Confirm password should be same as password!!!')
            return;
        }
        if (password.length < 8) {
            setError('Password must be at least 8 characters!!!')
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div>
            <div style={{
                backgroundImage: `url(${bg})`
            }}>

                <Nav></Nav>


                <div>
                    <div className="hero min-h-screen ">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="text-center lg:text-left">


                            </div>
                            <div className="card px-28 shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <h2 className='text-xl font-bold'>Create Account!</h2>
                                    <p>Fill in the details below to create an account</p>




                                    <form onSubmit={handleCreateUser}>
                                        <div className="form-control">
                                            <label className="label">

                                            </label>
                                            <input type="text" placeholder="Enter Your Full Name" className="input input-bordered" required />
                                        </div>




                                        <div className="form-control">
                                            <label className="label">

                                            </label>
                                            <input onBlur={handleEmailBlur} type="email" placeholder="Enter Your Email" className="input input-bordered" required />
                                        </div>



                                        <div className="form-control">
                                            <label className="label">

                                            </label>
                                            <input type="number" placeholder="Enter Your ID" className="input input-bordered" required />
                                        </div>



                                        <div className="form-control">
                                            <label className="label">

                                            </label>
                                            <input type="number" placeholder="Enter Your Mobile Number" className="input input-bordered" required />
                                        </div>



                                        <div className="form-control">
                                            <label className="label">

                                            </label>
                                            <input onBlur={handlePasswordBlur} type="password" placeholder="Password" className="input input-bordered" required />
                                        </div>



                                        <div className="form-control">
                                            <label className="label">

                                            </label>
                                            <p className='text-red-700'>{error}</p>
                                            <input onBlur={handleConfirmPasswordBlur} type="Password" placeholder="Confirm Password" className="input input-bordered" required />
                                        </div>






                                        <div class="form-control">
                                            <label className="label">

                                            </label>

                                            <select class="select select-bordered">
                                                <option disabled selected>Select Your Role</option>
                                                <option>HUB</option>
                                            </select>

                                        </div>

                                        <div class="form-control">
                                            <label class="label cursor-pointer">
                                                <input type="checkbox" class="checkbox" />
                                                <span class="label-text font-manrope">I read and agree to the <span className='text-blue-700'><a href="#">Terms & Conditions</a></span></span>

                                            </label>
                                        </div>



                                        <div className="form-control mt-6">
                                            {/* <button className=" text-white font-manrope py-2 rounded-lg btn-primary">Create Account</button> */}
                                            <input className='text-white font-manrope py-2 rounded-lg btn-primary cursor-pointer' type="submit" value="Create Account" />
                                        </div>
                                    </form>

                                    <label className="label">
                                        <p className='font-manrope'>
                                            Already have an account?  <Link to="/login" className="text-sm text-blue-700 label-text-alt link link-hover">Sign In</Link>
                                        </p>

                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SignIn;