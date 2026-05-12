import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";




const contact = () => {
  return (
    <div className='mt-12 sm:mt-16 flex flex-col gap-8 sm:gap-16 container mx-auto md:px-0 px-4 py-8 sm:py-16'>
        <h1 className='heading text-2xl sm:text-4xl font-bold text-start'>Contact Us</h1>

        <div>
            <iframe className="w-full h-64 sm:h-[300px] md:h-[500px] rounded-lg sm:rounded-2xl border border-gray-200" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Gompa%20Complex%20Shop%20no%2070,%20Main%20market%20%20Leh%20Ladakh+(Uncharted%20Ladakh)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://www.privat-krankenversicherung-vergleich.at/'></a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=fd3dec6e7197c2fc3a540323adfed0b5d10bf70d'></script>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6'>
            <div className='border border-gray-300 flex flex-col gap-2.5 py-6 sm:py-8 px-4 sm:px-6 md:px-10 rounded-lg sm:rounded-2xl items-center text-center'>
                <CiLocationOn size={32} className="sm:size-[40px]" />
                <h1 className='text-xl sm:text-2xl font-bold'>Our Location</h1>
                <p className='text-xs sm:text-base text-center font-light'>Gompa Complex Shop no 70, Main market  Leh Ladakh</p>

            </div>
                    <a className='hover:bg-gray-100 border border-gray-300 flex flex-col gap-2.5 py-6 sm:py-8 px-4 sm:px-6 md:px-10 rounded-lg sm:rounded-2xl items-center text-center'
href="tel:919541438044" target="_blank" rel="noopener noreferrer">

                <IoCallOutline size={32} className="sm:size-[40px]" />
                <h1 className='text-xl sm:text-2xl font-bold'>Call</h1>
                                        <p className='text-xs sm:text-base text-center font-light'>Connect via Phone</p>

                

    </a>
            <a className='hover:bg-gray-100 border border-gray-300 flex flex-col gap-2.5 py-6 sm:py-8 px-4 sm:px-6 md:px-10 rounded-lg sm:rounded-2xl items-center text-center'

    href="https://wa.me/919541438044"
    target="_blank"
    rel="noopener noreferrer" >
<FaWhatsapp size={32} className="sm:size-[40px]" />
                <h1 className='text-xl sm:text-2xl font-bold'>Whatsapp</h1>
                 
                <p className='text-xs sm:text-base text-center font-light'>Connect Via Whatsapp</p>

            </a>
        </div>
      
    </div>
  )
}

export default contact
