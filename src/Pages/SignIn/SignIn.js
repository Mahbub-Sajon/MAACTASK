import React from 'react';
import Nav from '../Components/Nav/Nav';
import { Link } from "react-router-dom";
import bg from '../../img/bg-img.png'


const SignIn = () => {
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




                                    <div className="form-control">
                                        <label className="label">

                                        </label>
                                        <input type="text" placeholder="Enter Your Full Name" className="input input-bordered" required />
                                    </div>




                                    <div className="form-control">
                                        <label className="label">

                                        </label>
                                        <input type="email" placeholder="Enter Your Email" className="input input-bordered" required />
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
                                        <input type="password" placeholder="Password" className="input input-bordered" required />
                                    </div>



                                    <div className="form-control">
                                        <label className="label">

                                        </label>
                                        <input type="Password" placeholder="Confirm Password" className="input input-bordered" required />
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
                                        <button className=" text-white font-manrope py-2 rounded-lg btn-primary">Create Account</button>
                                    </div>

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