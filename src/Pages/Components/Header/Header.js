import React from 'react';
import bg from '../../../img/bg-img.png'

const Header = () => {
    return (
        <div>
            <div>
                <h2 className='text-5xl text-center mx-72 text-black font-bold font-manrope mb-12 mt-40'>Analytics that transform your product inside-out</h2>
                <div className='flex mx-28 pb-72 justify-center'>
                    <button className='mr-4 w-52 h-11 rounded-md text-white bg-primary'>Request for Demo</button>
                    <button className=' w-32 h-11 border-l border-t border-r-2 border-b-2 border-indigo-500 rounded-md  text-blue-700'>Download</button>
                </div>
            </div>
        </div>
    );
};

export default Header;