import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";


const Floatingicon = () => {
  return (
    <div>
      <div className="fixed bottom-3 sm:bottom-5 right-3 sm:right-5 flex flex-col gap-2 sm:gap-3 z-50">

  {/* WhatsApp Button */}
  <a
    href="https://wa.me/919541438044"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-200 hover:-translate-y-1"
  
  >
    <FaWhatsapp className="text-2xl sm:text-4xl" />
  </a>

  {/* Call Button */}
  <a
    href="tel:+919541438044"
    className="flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition-all duration-200 hover:-translate-y-1"
  >
    <IoCallOutline className="text-2xl sm:text-4xl" />
  </a>

</div>
    </div>
  )
}

export default Floatingicon
