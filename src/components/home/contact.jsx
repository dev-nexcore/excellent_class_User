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
      <div className="contact-wrapper">
        {/* First Branch Office */}
        <motion.div
          className="contact-card branch"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, ease: "linear" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3>Branch Office</h3>
          <p>
            Shop No 1, 2 & 8, Swastik Chambers, Below Kurla Nursing Home,
            Near Kurla Station, Kurla (W), Mumbai – 400070.
          </p>
          <div className="contact-info">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <p>+91 9967787102</p>
              <p>+91 9967747102</p>
            </div>
          </div>
        </motion.div>

        {/* Head Office */}
        <motion.div
          className="contact-card head"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "linear" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3>Head Office</h3>
          <p>
            1, VIP Villa, House No. 16, Next to Michael High School,
            Kurla (W), Mumbai – 400 070.
          </p>
          <div className="contact-info">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <p>022 - 25039452</p>
              <p>9892755100</p>
              <p>9136955101</p>
            </div>
          </div>
          <div className="contact-info">
            <FaEnvelope className="contact-icon" />
            <p>info@excellentclasses.in</p>
          </div>
        </motion.div>

        {/* Last Branch Office */}
        <motion.div
          className="contact-card branch"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, ease: "linear" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3>Branch Office</h3>
          <p>
            Gala No.1, First Floor, Behind 2 Star Hotel, Chandu Studio Compound,
            Near Sony Center & Sony Mobile Shop, Kalina (E), Mumbai 400029
          </p>
          <div className="contact-info">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <p>+91 91369 55101</p>
              <p>+91 7304325859</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Follow Us On Heading */}
      <div className="social-follow">
        <h2>Follow Us On</h2>
      </div>

      {/* Social Media Icons (Spaced & Sized) */}
      <div
        className="social-icons"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "150px",
          marginTop: "30px",
        }}
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
            style={{ color: "#1877F2", fontSize: "160px" }}
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
            style={{ color: "#FF0000", fontSize: "160px" }}
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
            style={{ color: "#C13584", fontSize: "160px" }}
          />
        </motion.a>

        {/* Justdial Logo (Same Size as Icons) */}
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
            style={{ width: "200px", height: "160px", objectFit: "contain" }}
          />
        </motion.a>
      </div>

      {/* Reach Us Heading */}
      <div className="reach-us">
        <h2>How to Reach us</h2>
      </div>

      {/* Google Maps */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8650541329965!2d72.88528901490558!3d19.11707385579073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8f2d9d7e4df%3A0x3e0cfa04db26a7db!2sExcellent%20Classes!5e0!3m2!1sen!2sin!4v1653489517022!5m2!1sen!2sin"
          width="75%"
          height="350"
          style={{ border: 0, borderRadius: "12px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Duplicate Map (Optional) */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8650541329965!2d72.88528901490558!3d19.11707385579073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8f2d9d7e4df%3A0x3e0cfa04db26a7db!2sExcellent%20Classes!5e0!3m2!1sen!2sin!4v1653489517022!5m2!1sen!2sin"
          width="75%"
          height="350"
          style={{ border: 0, borderRadius: "12px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
