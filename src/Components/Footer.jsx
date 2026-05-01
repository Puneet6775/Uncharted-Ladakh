import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div className='container mx-auto md:px-0 px-4 py-16 sm:py-14 flex flex-col sm:flex-row justify-between gap-12 sm:gap-0'>
                {/* left side footer */}
                <div className="flex flex-col items-start gap-6 text-start font-medium w-full sm:w-1/4">
                    <img src="Image/Logo.svg" alt="Uncharted Ladakh Logo" />

                    <p>Because your Ladakh journey deserves more than just a rental — it deserves an experience.</p>

                    <div className="flex items-start gap-4">
                        <a href="https://www.instagram.com/uncharted_ladakh?igsh=MWVhcWcxdWw2eDNwag==/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} />
                        </a>
                        <a href="https://www.facebook.com/unchartedladakh" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={30} />
                        </a>
                        <a href="https://www.linkedin.com/company/uncharted-ladakh/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} />
                        </a>
                    </div>
                </div>

                {/* right side footer */}
                <div className='flex flex-col sm:flex-row gap-12 sm:gap-28 w-full sm:w-auto'>
                    <div className='flex flex-col gap-3.5'>
                        <p className='text-lg font-medium'>Quick Links</p>
                        <ul className="flex flex-col items-start gap-4 mt-4">
                            <li><Link to="/" className="hover:underline">Home</Link></li>
                            <li><Link to="/about" className="hover:underline">About Us</Link></li>
                            <li><Link to="/bikes" className="hover:underline">Bikes On Rent</Link></li>
                            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
                        </ul>
                    </div>


                </div>
            </div>


            <div className='container mx-auto flex flex-col md:px-0 px-4 sm:flex-row md:items-start items-center justify-between gap-3.5 py-4 border-t border-gray-300'>
                <p>&copy; 2023 Uncharted Ladakh. All rights reserved.</p>
                <p className='flex gap-1.5 justify-center items-center'>Designed by <a href="https://www.webnestmedia.in" className='underline' target="_blank" rel="noopener noreferrer">
                <img src="/Image/logo-white.svg" className='w-auto h-7' alt="" /></a></p>
                <p>
                    Terms of Service | Privacy Policy
                </p>
            </div>

        </>

    )
}

export default Footer
