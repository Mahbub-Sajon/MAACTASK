import React from 'react';

const Faq = () => {
    return (
        <div className='pt-8'>
            <div className='text-white text-center font-manrope'>
                <p className='mb-5 mt-32'>Common Question</p>
                <h2 className='font-bold text-xl mb-20'>FREQUENTLY ASKED QUESTIONS</h2>
            </div>


            <div className='flex justify-center mr-28 ml-28'>
                <div className='mr-4'>
                    <div tabindex="0" className=" mb-8 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div class="collapse-title font-bold font-manrope ">
                            What kind of data can I see in FieldX?
                        </div>
                        <div class="collapse-content">
                            <p className='text-sm font-manrope'>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</p>
                        </div>
                    </div>
                    <div tabindex="0" className=" mb-8 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title font-bold font-manrope ">
                           Does Bizzy read my customer's data?
                        </div>
                        <div class="collapse-content">
                        <p className='text-sm font-manrope'>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</p>
                        </div>
                    </div>
                    <div tabindex="0" className="mb-8 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title font-bold font-manrope ">
                            What's your refund and cancellation policy ?
                        </div>
                        <div class="collapse-content">
                        <p className='text-sm font-manrope'>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</p>
                        </div>
                    </div>
                </div>


                <div className='ml-4'>
                    <div tabindex="0" className="mb-8 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title font-bold font-manrope ">
                            How do you take payments?
                        </div>
                        <div class="collapse-content">
                        <p className='text-sm font-manrope'>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</p>
                        </div>
                    </div>
                    <div tabindex="0" className="mb-8 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title font-bold font-manrope ">
                            Can I also track website analytics on FieldX?
                        </div>
                        <div class="collapse-content">
                        <p className='text-sm font-manrope'>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</p>
                        </div>
                    </div>
                    <div tabindex="0" className="mb-8 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title font-bold font-manrope ">
                            What makes Bizzy different from other analytics tools?
                        </div>
                        <div class="collapse-content">
                        <p className='text-sm font-manrope'>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Faq;