"use client";
import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaYoutube,
  FaLocationDot,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Office Boxes Section */}
      <div className="flex flex-col items-center justify-center gap-8 px-5 py-10 md:flex-row md:flex-wrap md:px-20 md:py-16 lg:gap-12">
        {/* First Branch Office */}
        <motion.div
          className="w-full min-w-[300px] max-w-[400px] h-[460px] p-6 rounded-xl bg-[#20356B] text-white shadow-lg flex flex-col items-center text-center hover:-translate-y-[5px] transition-transform duration-300 md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, ease: "linear" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3 className="text-3xl md:text-[35px] font-bold mb-4 pb-2 border-b-2 border-current w-[80%]">
            Branch Office
          </h3>
          <div className="mt-6">
            <p className="text-lg md:text-[22px] leading-[1.7] font-normal">
              Shop No 1, 2 & 8, Swastik Chambers, Below Kurla Nursing Home, Near
              Kurla Station, Kurla (W), Mumbai – 400070.
            </p>
          </div>
          <div className="flex items-center gap-6 mt-8 justify-start w-full">
            <FaPhoneAlt className="text-2xl" />
            <div className="text-left">
              <p className="text-lg md:text-[23px]">‪‪+91 9967787102‬‬</p>
              <p className="text-lg md:text-[23px]">‪‪+91 9967747102‬‬</p>
            </div>
          </div>
        </motion.div>

        {/* Head Office */}
        <motion.div
          className="w-full min-w-[300px] max-w-[400px] h-[460px] p-6 rounded-xl bg-[#FFA629] text-black shadow-lg flex flex-col items-center text-center hover:-translate-y-[5px] transition-transform duration-300 md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)]"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "linear" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3 className="text-3xl md:text-[35px] font-bold mb-4 pb-2 border-b-2 border-current w-[80%]">
            Head Office
          </h3>
          <p className="text-lg md:text-[22px] leading-[1.7] font-normal">
            1, VIP Villa, House No. 16, Next to Michael High School, Kurla (W),
            Mumbai – 400 070.
          </p>
          <div className="flex items-center gap-6 mt-8 justify-start w-full">
            <FaPhoneAlt className="text-2xl" />
            <div className="text-left">
              <p className="text-lg md:text-[23px]">022 - 25039452</p>
              <p className="text-lg md:text-[23px]">9892755100</p>
              <p className="text-lg md:text-[23px]">9136955101</p>
            </div>
          </div>
          <div className="flex items-center gap-6 mt-6 justify-start w-full">
            <FaEnvelope className="text-2xl" />
            <p className="text-lg md:text-[23px]">info@excellentclasses.in</p>
          </div>
        </motion.div>

        {/* Last Branch Office */}
        <motion.div
          className="w-full min-w-[300px] max-w-[400px] h-[460px] p-6 rounded-xl bg-[#20356B] text-white shadow-lg flex flex-col items-center text-center hover:-translate-y-[5px] transition-transform duration-300 md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, ease: "linear" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3 className="text-3xl md:text-[35px] font-bold mb-4 pb-2 border-b-2 border-current w-[80%]">
            Branch Office
          </h3>
          <p className="text-lg md:text-[21px] leading-[1.7] font-normal">
            Gala No.1, First Floor, Behind 2 Star Hotel, Chandu Studio Compound,
            Near Sony Center & Sony Mobile Shop, Kalina (E), Mumbai 400029
          </p>
          <div className="flex items-center gap-6 mt-8 justify-start w-full">
            <FaPhoneAlt className="text-2xl" />
            <div className="text-left">
              <p className="text-lg md:text-[23px]">‪+91 91369 55101‬</p>
              <p className="text-lg md:text-[23px]">‪+91 7304325859‬</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Follow Us On Heading */}
      <div className="w-full bg-[#E85222] py-4">
        <h2 className="text-3xl md:text-[40px] font-bold text-white text-center font-poppins">
          Follow Us On
        </h2>
      </div>

      {/* Social Media Icons */}
      <div className="flex flex-wrap justify-center items-center gap-8 py-8 px-4 md:gap-16 md:py-12 lg:gap-36">
        <motion.a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hover:scale-110 transition-transform duration-300"
        >
          <FaSquareFacebook className="text-[80px] md:text-[120px] lg:text-[160px] text-[#1877F2]" />
        </motion.a>
        
        <motion.a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hover:scale-110 transition-transform duration-300"
        >
          <FaYoutube className="text-[80px] md:text-[120px] lg:text-[160px] text-[#FF0000]" />
        </motion.a>
        
        <motion.a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hover:scale-110 transition-transform duration-300"
        >
          <img
            src="/Logo/intagram.svg"
            alt="Instagram"
            className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px]"
          />
        </motion.a>
        
        <motion.a
          href="https://www.justdial.com/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hover:scale-110 transition-transform duration-300"
        >
          <img
            src="/Logo/justdial.svg"
            alt="Justdial"
            className="w-[120px] md:w-[140px] lg:w-[200px]"
          />
        </motion.a>
      </div>

      {/* Reach Us Heading */}
      <div className="w-full bg-[#20356B] py-4">
        <h2 className="text-3xl md:text-[40px] font-bold text-white text-center font-poppins">
          How to Reach us
        </h2>
      </div>

      {/* Google Maps */}
      <div className="flex justify-center p-5 bg-gray-50">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8650541329965!2d72.88528901490558!3d19.11707385579073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8f2d9d7e4df%3A0x3e0cfa04db26a7db!2sExcellent%20Classes!5e0!3m2!1sen!2sin!4v1653489517022!5m2!1sen!2sin"
          className="w-full md:w-[90%] lg:w-[75%] h-[350px] rounded-xl border-0 shadow-lg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      {/* Second Map */}
      <div className="flex justify-center p-5 bg-gray-50">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8650541329965!2d72.88528901490558!3d19.11707385579073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8f2d9d7e4df%3A0x3e0cfa04db26a7db!2sExcellent%20Classes!5e0!3m2!1sen!2sin!4v1653489517022!5m2!1sen!2sin"
          className="w-full md:w-[90%] lg:w-[75%] h-[350px] rounded-xl border-0 shadow-lg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}