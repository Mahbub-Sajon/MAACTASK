import React from 'react';
import img1 from '../../../img/Pre order vs delivery 1.png'
import img2 from '../../../img/Top Selling Routes 1.png';
import img3 from '../../../img/Avg 1.png'
import person from '../../../img/Ellipse 1.png'

const About = () => {
    return (
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
                <p></p>
            </div>
        </div>
    );
};

export default About;