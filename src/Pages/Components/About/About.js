import React from 'react';
import img1 from '../../../img/Pre order vs delivery 1.png'
import img2 from '../../../img/Top Selling Routes 1.png';
import img3 from '../../../img/Avg 1.png'
import person from '../../../img/Ellipse 1.png'
import icon from '../../../img/monitor-mobbile.png'
import { FaUsers } from "react-icons/fa";
import {  AiOutlineUser, AiOutlineTrophy } from "react-icons/ai";

const About = () => {
    return (
      <div>
          <div className='flex gap-36 pt-32'>
           <div> <div className=' ml-32 bg-blue-50 rounded-lg w-80 h-80'>
            </div>
            <div>
                <img className='-mt-96 w-60 ml-40 h-72' src={img1} alt="" />
                <div className='ml-20 flex'>
                    <img className='-mt-2 w-56 h-60' src={img2} alt="" />
                    <img className='w-48 h-36' src={img3} alt="" />
                </div>
            </div></div>
            <div className='mr-28'>
                <h4 className='text-blue-700 font-manrope mb-5'>About us</h4>
                <h2 className='font-bold text-2xl mb-10'>A dedicated solution for startups and enterprises</h2>
                <p className='text-sm mb-20'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <hr />
                <div className='flex mt-20 align-middle'>
                    <img className='w-16 h-16' src={person} alt="" />
                    <p className='text-sm ml-10 mt-4'>"Fieldx is for teams that care about their product growth." 
                    <br />
                    <span className='font-semibold'>CEO, FieldX</span></p>
                </div>
            </div>
        </div>
        <div className='font-manrope flex justify-between mt-28 mx-36'>
            <div>
            <img className='mx-auto w-8 h-8' src={icon} alt="" />
            <p className='text-center font-bold text-blue-700 text-3xl my-4'>10 +</p>
            <p className='text-sm mx-auto'>Platforms Created</p>
            </div>
            <div className='text-center'>
            <FaUsers className=' text-3xl mx-auto text-blue-700'></FaUsers>
            <p className='font-bold text-blue-700 text-3xl my-4'>1559+</p>
            <p className='text-sm'>Total Users</p>
            </div>
            <div className='text-center'>
           <AiOutlineUser className='text-3xl mx-auto text-blue-700'></AiOutlineUser>
           <p className='font-bold text-blue-700 text-3xl my-4'>10+</p>
           <p className='text-sm'>Total Clients</p>
            </div>
            <div className='text-center'>
            <AiOutlineTrophy className='text-3xl mx-auto text-blue-700'></AiOutlineTrophy>
            <p className='font-bold text-blue-700 text-3xl my-4'>300 Days</p>
            <p className='text-sm'>In Operations</p>
            </div>
        </div>
      </div>
    );
};

export default About;