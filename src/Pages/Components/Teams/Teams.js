import React from 'react';
import aven from '../../../img/Aven.png'
import amara from '../../../img/Amara.png'
import circle from '../../../img/Circle.png'
import kyan from '../../../img/Kyan.png'
import treva from '../../../img/Treva.png'

const Teams = () => {
    return (
        <div>
            <h2 className='font-manrope text-xl text-center mt-24 mb-16 text-blue-700'>5,000+ high-impact teams rely on Fieldx</h2>
            <div className='flex justify-between mb-28 ml-32 mr-32'>
                <img className='w-16 h-6' src={aven} alt="" />
                <img className='w-16 h-6' src={amara} alt="" />
                <img className='w-16 h-6' src={circle} alt="" />
                <img className='w-16 h-6' src={kyan} alt="" />
                <img className='w-16 h-6' src={treva} alt="" />
            </div>
        </div>
    );
};

export default Teams;