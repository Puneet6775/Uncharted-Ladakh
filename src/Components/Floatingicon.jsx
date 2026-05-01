import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";


const Floatingicon = () => {
  return (
    <div>
      <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">

  {/* WhatsApp Button */}
  <a
    href="https://wa.me/919541438044"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg"
  
  >
    <FaWhatsapp className="text-4xl" />
  </a>

  {/* Call Button */}
  <a
    href="tel:+919541438044"
    className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg"
  >
    <IoCallOutline className="text-4xl" />
  </a>

</div>
    </div>
  )
}

export default Floatingicon
