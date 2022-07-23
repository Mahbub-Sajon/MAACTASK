import React from 'react';
import field from '../../../img/FieldX2.png'
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
    return (
        <div>

            <div>
                <footer class="footer footer-center p-10 bg-accent text-primary-content">
                    <div>
                        <img className='w-16 h-8' src={field} alt="" />
                        <p className="text-white w-96">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque.
                        </p>
                        <div class="grid grid-flow-col gap-4 text-xl text-white mt-8 mb-20">
                            <AiFillTwitterCircle></AiFillTwitterCircle>
                            <AiFillLinkedin></AiFillLinkedin>
                            <BsFacebook></BsFacebook>

                        </div>
                    </div>
                    <hr />
                    <div>
                        <p><span className=' text-white'>©All right reserved by</span> <span className='text-red-700'>MAAC</span></p>
                    </div>
                </footer>
            </div>

        </div>
    );
};

export default Footer;