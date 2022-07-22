import React from 'react';
import img from '../../../img/FieldX.png'
const Nav = () => {
    return (
      <div>
          <div className='flex justify-between py-5'>
            <div>
                <img className='w-22 h-10 ml-28' src={img} alt="" />
            </div>
            <div>
                <button className='mr-4 w-20 h-11 rounded-md text-white bg-primary'>Login</button>
                <button className=' w-32 h-11 border-l border-t border-r-2 border-b-2 border-indigo-500 rounded-md mr-28 text-blue-700'>Register</button>
            </div>
           
        </div>
        <hr />
      </div>
    );
};

export default Nav;