"use client";
import React from 'react'
import Image from 'next/image'
import AboutBanner from "../../../public/img/AboutHeroBanner.jpg"
import AboutSection from "../../../public/img/AboutSection.png"
import ExcellentBroucher from "../../../public/img/ExcellentBroucher.png"
import Principle from "../../../public/img/Principle.png"
import { motion } from "framer-motion";
import { useRef } from 'react';
import { useInView, inView } from 'framer-motion';
import { GraduationCap, Users, Landmark } from "lucide-react";
export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true });
  const rightInView = useInView(rightRef, { once: true });
  const left1Ref = useRef(null);
  const left2Ref = useRef(null);
  const right1Ref = useRef(null);
  const right2Ref = useRef(null);

  const inViewLeft1 = useInView(left1Ref, { once: true });
  const inViewLeft2 = useInView(left2Ref, { once: true });
  const inViewRight1 = useInView(right1Ref, { once: true });
  const inViewRight2 = useInView(right2Ref, { once: true });



  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}


        {/* Main Content Section */}
        <div className="py-16 px-4 flex justify-center w-full mb-[6vw] ">
          <div className="">
            <div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-evenly items-center w-full md:w-[90vw] px-4 md:px-6">

              {/* Left Image with animation */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="relative rounded-tl-4xl rounded-br-4xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-tl-[6vw] md:rounded-tl-[5vw] rounded-br-[6vw] md:rounded-br-[5vw] shadow-lg w-[80vw] md:w-[30vw] h-full"></div>
                  <div className="relative rounded-3xl rounded-tl-[6vw] md:rounded-tl-[5vw] rounded-br-[6vw] md:rounded-br-[5vw] p-2 translate-y-2 translate-x-2">
                    <Image
                      src={AboutSection}
                      alt="Teacher helping student at computer"
                      className="h-[60vw] md:h-[30vw] w-[80vw] md:w-[30vw] object-cover rounded-tl-[6vw] md:rounded-tl-[5vw] rounded-br-[6vw] md:rounded-br-[5vw] shadow-lg"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Right Content with animation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="flex flex-col space-y-6 md:space-y-8 px-2 md:px-8 py-4 md:py-6 w-full sm:w-[90vw] md:w-[50vw] h-auto md:h-[30vw] "
              >
                {/* Badge - animate from top */}
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                  className="flex justify-start "
                >
                  <div className="inline-flex items-center px-3 py-2 bg-[#20356B] text-white rounded-full text-xs md:text-sm font-medium mb-2">
                    <span className="w-2 h-2 bg-[#E85222] rounded-full mr-2 md:mr-3"></span>
                    <span className="text-[10px] md:text-[12px] font-bold">about us</span>
                    <span className="w-2 h-2 bg-[#E85222] rounded-full ml-2 md:ml-3"></span>
                  </div>
                </motion.div>

                {/* Text Content - animate from right */}
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="space-y-4 sm:space-y-6 md:space-y-8 font-poppins px-2 sm:px-4 md:px-6 sm:py-4 md:py-0 w-full"
                >
                  <h1 className="text-[5vw] sm:text-[4vw] md:text-[2.5vw] font-bold text-gray-900 leading-tight text-left sm:text-center">
                    We have the Best Teachers
                  </h1>

                  <h1 className="text-[5vw] sm:text-[4vw] md:text-[2.3vw] -mt-2 md:-mt-4 font-bold text-center text-gray-900 leading-tight">
                    available in the City
                  </h1>

                  <div className="w-full text-[3.5vw] sm:text-[14px] md:text-[1.3vw] font-radley leading-relaxed text-left sm:text-center">
                    {/* For small screens: one-line version */}
                    <p className="block sm:hidden w-auto text-center  ">
                      Established in 1990. Successfully trained more than 20000 students. Driven by motivated and dedicated team.
                    </p>

                    {/* For sm and above: multiline version */}
                    <div className="hidden sm:block ">
                      Established in 1990. Successfully trained more than 20000
                      <p className="text-center">
                        students. Driven by motivated and dedicated team.
                      </p>
                    </div>
                  </div>

                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>


      </div>
      {/* second hero section */}
      <div className='bg-[#E85222] flex justify-center items-center py-[1.4vw] px-12 mb-[4vw]'>
        <div className='text-3xl capitalize  text-white text-center tracking-wide'> our Story</div>
      </div>
      {/* 4 div content */}
      <div className="min-h-screen py-10 px-4 flex flex-col items-center font-sans relative mt-[1vw] overflow-visible font-poppins">
        <img
          src="/img/squareDesign.svg"
          alt="Left background design"
          className="absolute top-[20vw] md:top-[12vw] -left-[10vw] w-[50vw] md:w-[30vw] lg:w-[25vw] h-[80vw] md:h-[50vw] lg:h-[45vw] -z-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* 1. OUR VISION - From LEFT TOP */}
          <motion.div
            ref={left1Ref}
            initial={{ x: -100, y: -50, opacity: 0 }}
            animate={inViewLeft1 ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute w-[90vw] md:w-[45vw] lg:w-[40vw] h-[50vw] md:h-[25vw] lg:h-[20vw] bg-[#E85222] rounded-tl-[80px] md:rounded-tl-[100px] lg:rounded-tl-[120px] shadow-md transform -translate-y-4 -translate-x-4"></div>

            <div className="relative z-10 w-[90vw] md:w-[45vw] lg:w-[40vw] h-[50vw] md:h-[25vw] lg:h-[20vw] bg-[#20356B] text-white p-6 flex justify-center items-center gap-4 md:gap-6 lg:gap-8 flex-col rounded-tl-[80px] md:rounded-tl-[100px] lg:rounded-tl-[120px] shadow-lg">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-3">OUR VISION</h2>
              <p className="text-lg md:text-xl lg:text-2xl text-center">To be a preferred center for providing quality education.</p>
            </div>
          </motion.div>

          {/* 2. OUR CULTURE - From RIGHT TOP */}
          <motion.div
            ref={right1Ref}
            initial={{ x: 100, y: -50, opacity: 0 }}
            animate={inViewRight1 ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-[80vw] md:w-[45vw] lg:w-[27vw] h-[40vw] md:h-[22vw] lg:h-[17vw] bg-[#F9B233] text-black py-[4vw] md:py-[2vw] lg:py-[1vw] rounded-tr-[60px] md:rounded-tr-[90px] lg:rounded-tr-[120px] shadow-lg ml-2 md:ml-4 mb-4 mt-[4vw] md:mt-[3vw]"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center">OUR CULTURE</h2>
            <ul className="list-disc list-inside space-y-1 text-[10px] md:text-[12px] leading-relaxed px-8 md:px-10 lg:px-14 font-bold">
              <li>Commitment</li>
              <li>Enriching Education</li>
              <li>Encouraging Learning</li>
              <li>Building Confidence</li>
              <li>Developing Passion to Excel</li>
            </ul>
          </motion.div>

          {/* 3. CORE VALUES - From LEFT BOTTOM */}
          <motion.div
            ref={left2Ref}
            initial={{ x: -100, y: 50, opacity: 0 }}
            animate={inViewLeft2 ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="w-[80vw] md:w-[45vw] lg:w-[27vw] h-[40vw] md:h-[22vw] lg:h-[17vw] bg-[#F9B233] text-black py-[4vw] md:py-[2vw] lg:py-[1vw] rounded-bl-[60px] md:rounded-bl-[90px] lg:rounded-bl-[120px] shadow-lg ml-auto -mt-[2vw] mr-[1vw]"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center">CORE VALUES</h2>
            <ul className="list-disc list-inside space-y-1 text-[10px] md:text-[12px] leading-relaxed px-8 md:px-10 lg:px-14 font-bold">
              <li>Commitment</li>
              <li>Enriching Education</li>
              <li>Encouraging Learning</li>
              <li>Building Confidence</li>
              <li>Developing Passion to Excel</li>
            </ul>
          </motion.div>

          {/* 4. OUR MISSION - From RIGHT BOTTOM */}
          <motion.div
            ref={right2Ref}
            initial={{ x: 100, y: 50, opacity: 0 }}
            animate={inViewRight2 ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-[90vw] md:w-[45vw] lg:w-[40vw] h-[50vw] md:h-[25vw] lg:h-[20vw]"
          >
            <div className="absolute w-[90vw] md:w-[45vw] lg:w-[40vw] h-[50vw] md:h-[25vw] lg:h-[20vw] bg-[#20356B] rounded-br-[80px] md:rounded-br-[100px] lg:rounded-br-[120px] shadow-lg transform translate-y-4 translate-x-4"></div>
            <div className="relative z-10 w-[90vw] md:w-[45vw] lg:w-[40vw] h-[50vw] md:h-[25vw] lg:h-[20vw] bg-[#E85222] text-white p-4 md:p-6 flex justify-center items-center gap-4 md:gap-6 lg:gap-8 flex-col rounded-br-[80px] md:rounded-br-[100px] lg:rounded-br-[120px] shadow-lg">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-3">OUR MISSION</h2>
              <p className="text-lg md:text-xl lg:text-2xl text-center">
                To create passion for learning and contribute to developing student's learning graph through quality education.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* pricipal section */}
      <div className="flex flex-col lg:flex-row justify-evenly px-4 pb-[2vw] gap-4 overflow-hidden">
        {/* Left Content - Animated */}
        <motion.div
          ref={leftRef}
          initial={{ x: -100, opacity: 0 }}
          animate={leftInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.4 }} // faster animation
          className="w-full lg:w-[40vw] px-4 md:px-8 lg:px-12 py-6 mt-[8vw]"
        >
          <div className="text-[5vw] md:text-[3vw] lg:text-4xl tracking-wider leading-relaxed text-black font-poppins">
            <span className="text-[4.5vw] md:text-[2.8vw] lg:text-[2vw] font-semibold text-blue-900">From The</span>
            <br />
            <span className="text-[6vw] md:text-[4vw] lg:text-[2.6vw] text-[#E85222] font-bold uppercase">Principle's desk</span>
            <br />
            <span className='text-[4.5vw] md:text-[3vw] lg:text-[2vw] font-bold italic mb-2 block'>
              "The whole purpose of education is to turn mirrors in to windows."
            </span>
          </div>
          <p className='mt-4 text-[3.5vw] md:text-[2vw] lg:text-[1.2vw] '>
            I extend my warm welcome once again to all the students and parents to a new academic year. Our hard work, dedication, tried and tested practices have produced excellent results for our students. Our strong team culture and emphasis on our corevalues has propelled us to be one of the best classes.
            <br />
            At Excellent Classes, we provide a conducive atmosphere to our students, where they are encouraged to channelize their potential in the pursuit of excellence. The talent, skills and abilities of each student are identified, nurtured and encouraged so that he / she is able to perform better with confidence. We strive hard to teach andrealize each students how to succeed in today's competitive environment without losing sight of values & discipline.
            <br />
            At our institute we believe our teachers and co-ordinators needs to be humble, accessible and invite participation in dialogues. It should give all concerned a sense of pride and belongings. During the pandemic when the entire world was grappling with issues of proximity, Excellent classes has shown exemplary vision and invested in infrastructure to move all teachings ONLINE.
            <br />
            Parents are the most strengthening power in moulding the future of their children. Their consistent support empowers us to do more. I pay my gratitude to them for putting their trust in us.
          </p>
        </motion.div>

        {/* Right Content - Image with Overlay Text - Animated */}
        <motion.div
          ref={rightRef}
          initial={{ x: 100, opacity: 0 }}
          animate={rightInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }} // faster and slight delay
          className="w-full lg:w-[40vw] h-auto lg:h-[60vw] flex flex-col items-center justify-center py-[7vw] relative mt-[8vw] "
        >
          <div className="w-full lg:w-[40vw] h-auto lg:h-[60vw] relative rounded-md">
            <Image
              src={Principle}
              alt="Principal"
              className="w-full h-[78vw] md:h-[60vw] lg:h-[60vw] sm:h-[90vw] object-cover rounded-md"
            />
            <img
              src="/img/squareDesign.svg"
              alt="Decorative SVG"
              className="w-[20vw] md:w-[12vw] lg:w-[15vw] mt-[-2.5vw] -mb-[1vw] absolute -right-[10vw] md:-right-[6vw] lg:-right-[8vw] z-0"
            />

            {/* Text Overlay */}
            <div className="text-center p-4 mt-2">
              <p className="font-bold text-[4.5vw] md:text-[3vw] lg:text-[2.5vw]">Dr Jamil bhai</p>
              <p className="text-[#20356B] font-bold text-[2.8vw] md:text-[2vw] lg:text-[1.5vw]">Principal</p>
            </div>
          </div>
        </motion.div>
      </div>


      {/* display card  */}
      <div
        ref={ref}
        className="bg-[#20356B] py-[3vw] text-white flex flex-col items-center"
      >
        <div className="flex flex-col md:flex-row justify-evenly gap-10 items-center">

          {/* Left Box */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col items-center justify-center 
                 md:w-[30vw] md:h-[12vw] w-[80vw] h-[35vw]"
          >
            <Image src="/img/school.png" alt="Graduation" width={80} height={80} />
            <h3 className="font-bold mt-2 text-[2vw] md:text-[2vw] text-[6vw]">20K</h3>
            <p className="text-[2vw] md:text-[2vw] text-[4.5vw]">Students Till Date</p>
          </motion.div>

          {/* Middle Box */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col items-center 
                 md:w-[30vw] md:h-[12vw] w-[80vw] h-[35vw]"
          >
            <Image src="/img/diversity_3.png" alt="Faculty" width={70} height={70} />
            <h3 className="font-bold mt-2 text-[2vw] md:text-[2vw] text-[6vw]">60</h3>
            <p className="text-[2vw] md:text-[2vw] text-[4.5vw]">Faculties</p>
          </motion.div>

          {/* Right Box */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col items-center 
                 md:w-[30vw] md:h-[12vw] w-[80vw] h-[35vw] "
          >
            <Image src="/img/account_balance.png" alt="Established" width={80} height={80} />
            <h3 className="font-bold mt-2 text-[2vw] md:text-[2vw] text-[6vw]">1990</h3>
            <p className="text-[2vw] md:text-[2vw] text-[4.5vw] ">Established Since</p>
          </motion.div>

        </div>
      </div>

    </>
  )
}
