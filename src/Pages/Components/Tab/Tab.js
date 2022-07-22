import React from 'react';
import tab from '../../../img/tablet 1.png';
import phone from '../../../img/phone 1.png'

const Tab = () => {
    return (
        <div>
           <div className=''>
           <img className=' w-7/12 mx-auto -mt-56' src={tab} alt="" />
            <img className='w-52 mx-auto absolute -mt-96 right-80' src={phone} alt="" />
           </div>
        </div>
    );
};

export default Tab;