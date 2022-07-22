import React from 'react';
import { BsBox } from "react-icons/bs";
import fphone from '../../../img/Central phone 2.png'
import './Feature.css'

const Feature = () => {
    return (
        <div>
            <h4 className='text-center font-manrope text-blue-700 '>Products Features</h4>
            <h2 className='text-center text-black font-manrope text-2xl font-bold mb-64'>Make more out of your data</h2>


            <div className='bg-primary w-72 h-64 mx-auto rounded-full'>    
                   </div>


               <div className='feature -mt-96 mx-28'>


               <div className='font-manrope text-center mr-28'>
                    <p><BsBox className='text-blue-700 bg-white border-b border-l border-r shadow-lg rounded-lg p-1 text-3xl ml-48'></BsBox></p>
                    <h4 className='text-xl font-bold mb-5'>Real-time analytics</h4>
                    <p className='text-sm mb-14'>See product usage, sign-ins, feature metrics change as users work on your.</p>
                    <p><BsBox className='text-blue-700 bg-white border-b border-l border-r shadow-lg rounded-lg p-1 text-3xl ml-48'></BsBox></p>
                    <h4 className='text-xl font-bold mb-5'>Intuitive dashboard</h4>
                    <p className='text-sm mb-14'>See product usage, sign-ins, feature metrics change as users work on your.</p>
                    <p><BsBox className='text-blue-700 bg-white border-b border-l border-r shadow-lg rounded-lg p-1 text-3xl ml-48'></BsBox></p>
                    <h4 className='text-xl font-bold mb-5'>Smart suggestion</h4>
                    <p className='text-sm mb-14'>See product usage, sign-ins, feature metrics change as users work on your.</p>
                </div>

                
                   
                    <img className='drop-shadow-2xl shadow-blue-500/50 w-72 h-96' src={fphone} alt="" />
              

            

            
                    <div className='font-manrope ml-28'>
                    <p><BsBox className='text-blue-700 bg-white border-b border-l border-r shadow-lg rounded-lg p-1 text-3xl'></BsBox></p>
                    <h4 className='text-xl font-bold mb-5'>Multiple views</h4>
                    <p className='text-sm mb-14'>See product usage, sign-ins, feature metrics change as users work on your.</p>
                    <p><BsBox className='text-blue-700 bg-white border-b border-l border-r shadow-lg rounded-lg p-1 text-3xl'></BsBox></p>
                    <h4 className='text-xl font-bold mb-5'>AI-led diagnoses</h4>
                    <p className='text-sm mb-14'>See product usage, sign-ins, feature metrics change as users work on your.</p>
                    <p><BsBox className='text-blue-700 bg-white border-b border-l border-r shadow-lg rounded-lg p-1 text-3xl'></BsBox></p>
                    <h4 className='text-xl font-bold mb-5'>Responsive</h4>
                    <p className='text-sm mb-14'>See product usage, sign-ins, feature metrics change as users work on your.</p>
                </div>
               </div>
        </div>
        
    );
};

export default Feature;