"use client";

import React from "react";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <>
      {/* Office Boxes Section */}
      <div className="contact-wrapper flex flex-col lg:flex-row flex-wrap gap-6 justify-center items-start px-4">
        {/* First Branch Office */}
        <motion.div
          className="contact-card branch w-full sm:w-[90%] md:w-[80%] lg:w-[30%]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, ease: "linear" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3 className="text-lg font-semibold mb-2">Branch Office</h3>
          <p className="text-sm mb-3">
            Shop No 1, 2 & 8, Swastik Chambers, Below Kurla Nursing Home,
            Near Kurla Station, Kurla (W), Mumbai – 400070.
          </p>
          <div className="contact-info flex gap-3">
            <FaPhoneAlt className="contact-icon mt-1" />
            <div className="text-sm">
              <p>+91 9967787102</p>
              <p>+91 9967747102</p>
            </div>
          </div>
        </motion.div>

        {/* Head Office */}
        <motion.div
          className="contact-card head w-full sm:w-[90%] md:w-[80%] lg:w-[30%]"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "linear" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3 className="text-lg font-semibold mb-2">Head Office</h3>
          <p className="text-sm mb-3">
            1, VIP Villa, House No. 16, Next to Michael High School,
            Kurla (W), Mumbai – 400 070.
          </p>
          <div className="contact-info flex gap-3 mb-3">
            <FaPhoneAlt className="contact-icon mt-1" />
            <div className="text-sm">
              <p>022 - 25039452</p>
              <p>9892755100</p>
              <p>9136955101</p>
            </div>
          </div>
          <div className="contact-info flex gap-3">
            <FaEnvelope className="contact-icon mt-1" />
            <p className="text-sm">info@excellentclasses.in</p>
          </div>
        </motion.div>

        {/* Last Branch Office */}
        <motion.div
          className="contact-card branch w-full sm:w-[90%] md:w-[80%] lg:w-[30%]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, ease: "linear" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3 className="text-lg font-semibold mb-2">Branch Office</h3>
          <p className="text-sm mb-3">
            Gala No.1, First Floor, Behind 2 Star Hotel, Chandu Studio Compound,
            Near Sony Center & Sony Mobile Shop, Kalina (E), Mumbai 400029
          </p>
          <div className="contact-info flex gap-3">
            <FaPhoneAlt className="contact-icon mt-1" />
            <div className="text-sm">
              <p>+91 91369 55101</p>
              <p>+91 7304325859</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Follow Us On Heading */}
      <div className="social-follow text-center mt-10">
        <h2 className="text-xl font-semibold">Follow Us On</h2>
      </div>

      {/* Social Media Icons */}
      <div
        className="social-icons flex flex-wrap justify-center gap-10 md:gap-24 lg:gap-[150px] mt-6 px-4"
      >
        {/* Facebook */}
        <motion.a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaSquareFacebook
            className="social-icon"
            style={{ color: "#1877F2", fontSize: "80px" }}
          />
        </motion.a>

        {/* YouTube */}
        <motion.a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <FaYoutube
            className="social-icon"
            style={{ color: "#FF0000", fontSize: "80px" }}
          />
        </motion.a>

        {/* Instagram */}
        <motion.a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FaSquareInstagram
            className="social-icon"
            style={{ color: "#C13584", fontSize: "80px" }}
          />
        </motion.a>

        {/* Justdial Logo */}
        <motion.a
          href="https://www.justdial.com/"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img
            src="/Logo/justdial.png"
            alt="Justdial"
            className="w-[120px] h-[80px] object-contain"
          />
        </motion.a>
      </div>

      {/* Reach Us Heading */}
      <div className="reach-us text-center mt-12">
        <h2 className="text-xl font-semibold">How to Reach us</h2>
      </div>

      {/* Google Maps */}
      <div className="map-container flex justify-center mt-6 px-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8650541329965!2d72.88528901490558!3d19.11707385579073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8f2d9d7e4df%3A0x3e0cfa04db26a7db!2sExcellent%20Classes!5e0!3m2!1sen!2sin!4v1653489517022!5m2!1sen!2sin"
          className="w-full sm:w-[90%] md:w-[80%] lg:w-[75%] h-[350px] rounded-xl border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Duplicate Map */}
      <div className="map-container flex justify-center mt-6 px-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8650541329965!2d72.88528901490558!3d19.11707385579073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8f2d9d7e4df%3A0x3e0cfa04db26a7db!2sExcellent%20Classes!5e0!3m2!1sen!2sin!4v1653489517022!5m2!1sen!2sin"
          className="w-full sm:w-[90%] md:w-[80%] lg:w-[75%] h-[350px] rounded-xl border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
