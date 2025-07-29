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
        <div className="relative h-90">

          <Image
            src={AboutBanner}
            alt="Office workspace background"
            fill
            className="object-cover brightness-50"
            priority // Add this for better loading
          />
          {/* Adjusted overlay opacity for better visibility */}

          <div className="relative z-10 flex items-center justify-center h-full">
            <nav className="text-white text-5xl font-bold">
              <span className="pr-3 mr-8">home</span>
              <span className="mx-6 mr-8">{">>>"}</span>

              <span>about us</span>
            </nav>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="py-16 px-4 flex justify-center w-full mb-[6vw]">
          <div className="">
            <div className="flex gap-10 justify-between items-center w-[90vw] px-6">

              {/* Left Image with animation */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="relative rounded-tl-4xl rounded-br-4xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-tl-[5vw] rounded-br-[5vw] shadow-lg w-[40vw] h-full"></div>
                  <div className="relative rounded-3xl rounded-tl-[5vw] rounded-br-[5vw] p-2 translate-y-6 translate-x-6">
                    <Image
                      src={AboutSection}
                      alt="Teacher helping student at computer"
                      className="h-[30vw] w-[40vw] rounded-tl-[5vw] rounded-br-[5vw] object-cover shadow-lg"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Right Content with animation */}
             <motion.div
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1, delay: 0.3 }}
  className="flex flex-col space-y-8 px-8 py-12 w-[43vw] h-[20vw]"
>
  {/* Badge - animate from top */}
  <motion.div
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 0.2 }}
    className="flex justify-start"
  >
    <div className="inline-flex items-center px-10 py-6 bg-[#20356B] text-white rounded-full text-sm font-medium mb-6">
      <span className="w-5 h-5 bg-[#E85222] rounded-full mr-3"></span>
      <span className="text-3xl capitalize">about us</span>
      <span className="w-5 h-5 bg-[#E85222] rounded-full ml-3"></span>
    </div>
  </motion.div>

  {/* Text Content - animate from right */}
  <motion.div
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
    className="space-y-8"
  >
    <h1 className="text-[2.7vw] font-bold text-gray-900 leading-tight">
      We have the Best Teachers
    </h1>
    <h1 className="text-6xl font-bold text-center text-gray-900 leading-tight">
      available in the City
    </h1>

    <p className="leading-relaxed text-[1.3vw]">
      Established in 1990. Successfully trained more than 20000
      <p className="text-center">
        students. Driven by motivated and dedicated team.
      </p>
    </p>
  </motion.div>
</motion.div>

            </div>
          </div>
        </div>
      </div>
      {/* second hero section */}
      <div className='bg-[#E85222] flex justify-center items-center py-[3vw] px-12 mb-[4vw]'>
        <div className='text-6xl capitalize font-bold text-white text-center tracking-wide'> our Story</div>
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly px-4 py-10 gap-4">
  {/* Left Content */}  
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="w-full lg:w-[40vw] px-12 py-6"
  >

    <p className="text-4xl tracking-wider leading-relaxed text-black font-radey">

      <span >
        <span className="text-[5vw] font-semibold text-blue-900 -ml-6">Established</span>{' '}
        <span className="text-black">in 1990.</span>
      </span>

      <p className="-mt-12">
        Successfully trained more than 20000 students. Driven by motivated and dedicated team.
        We at Excellent strongly believe that the best faculty creates the best students and that is why we have a faculty who are masters in their subjects. We offer our students expertise that they would never experience anywhere else. We invest in training and developing their skills, thus providing our students a complete upgraded education. Qualified and experience faculty accelerate the learning process.
      </p>
      <p>
        I am glad to share my thoughts about our journey in pursuit of excellence. Our endeavour has been to be the preferred choice for quality education and we keep striving to surpass our benchmarks year after year. We believe in giving the Best. Excellent has been and will continue to serve the students community through innovative coaching programs with a clear accent on quality. We are proud of our legacy. It gives me immense satisfaction to say “We teach Success”. We are there to give you a competitive advantage in future with unseen challenges. We will always seek to deliver optimal quality of service to our students, our customer with integrity and unscrupulous honesty as cornerstones of our quality policy. In your happiness, we count our blessings.
      </p>
    </p>
  </motion.div>

  {/* Right Content */}  
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="w-[45vw] flex flex-col items-center justify-center py-[6vw]"
  >
    <div className="relative w-[40vw]  flex flex-col items-center">

      {/* SVG Behind the Image */}  
      <img
        src="/img/squareDesign.svg"
        alt="SVG Decoration"
        className="absolute top-[60vw] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[15vw] h-auto z-0 "
      />
      {/* Image on Top */}  
      <Image
        src={ExcellentBroucher}
        alt="Excellent Broucher"
        className="w-[36vw] relative z-10"
      />
    </div>
    <p className="text-center text-6xl font-bold  uppercase py-6 z-20 mt-8">
      Excellent Classes Broucher
    </p>
  </motion.div>
</div>
      {/* 4 div design over here */}
      <div className="min-h-screen   py-10 px-4 flex flex-col items-center font-sans relative mt-[10vw] overflow-visible ">
        <img
    src="/img/squareDesign.svg"
    alt="Left background design"
    className="absolute top-[10vw] -left-[6vw] w-[25vw] h-[45vw] -z-10 "
  />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* OUR VISION (Left In) */}
          <motion.div
            ref={left1Ref}
            initial={{ x: -100, opacity: 0 }}
            animate={inViewLeft1 ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute w-[40vw] h-[20vw] bg-[#E85222] rounded-tl-[120px] shadow-md transform -translate-y-12 -translate-x-10"></div>
            <div className="relative z-10 w-[40vw] h-[20vw] bg-[#20356B] text-white p-6 flex justify-center items-center gap-8 flex-col rounded-tl-[120px] shadow-lg">
              <h2 className="text-8xl font-semibold mb-3">OUR VISION</h2>
              <p className="text-4xl text-center">To be a preferred center for providing quality education.</p>
            </div>
          </motion.div>

          {/* OUR CULTURE (Right In) */}
          <motion.div
            ref={right1Ref}
            initial={{ x: 100, opacity: 0 }}
            animate={inViewRight1 ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-[27vw] h-[17vw] bg-[#F9B233] text-black py-[2vw] rounded-tr-[120px] shadow-lg ml-14 mb-6 mt-[3vw]"
          >
            <h2 className="text-6xl font-semibold mb-6 text-center">OUR CULTURE</h2>
            <ul className="list-disc list-inside space-y-3 text-3xl leading-relaxed px-14 font-bold">
              <li>Commitment</li>
              <li>Enriching Education</li>
              <li>Encouraging Learning</li>
              <li>Building Confidence</li>
              <li>Developing Passion to Excel</li>
            </ul>
          </motion.div>

          {/* CORE VALUES (Left In) */}
          <motion.div
            ref={left2Ref}
            initial={{ x: -100, opacity: 0 }}
            animate={inViewLeft2 ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="w-[27vw] h-[17vw] bg-[#F9B233] text-black py-[2vw] rounded-bl-[120px] shadow-lg ml-auto mt-[1vw] mr-[1vw]"
          >
            <h2 className="text-6xl font-semibold mb-6 text-center">CORE VALUES</h2>
            <ul className="list-disc list-inside space-y-3 text-3xl leading-relaxed px-14 font-bold">
              <li>Commitment</li>
              <li>Enriching Education</li>
              <li>Encouraging Learning</li>
              <li>Building Confidence</li>
              <li>Developing Passion to Excel</li>
            </ul>
          </motion.div>

          {/* OUR MISSION (Right In) */}
          <motion.div
            ref={right2Ref}
            initial={{ x: 100, opacity: 0 }}
            animate={inViewRight2 ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[40vw] h-[20vw]"
          >
            <div className="absolute w-[40vw] h-[20vw] bg-[#20356B] rounded-br-[120px] shadow-lg transform translate-y-12 translate-x-10 "></div>
            <div className="relative z-10 w-[40vw] h-[20vw] bg-[#E85222] text-white p-6 flex justify-center items-center gap-8 flex-col rounded-br-[120px] shadow-lg">
              <h2 className="text-8xl font-semibold mb-3">OUR MISSION</h2>
              <p className="text-4xl text-center">To create passion for learning and contribute to developing student's learning graph through quality education.</p>
            </div>
          </motion.div>
        </div>
      </div>
      {/* pricipal section */}
      <div className="flex flex-col lg:flex-row justify-evenly px-4 py-10 gap-4 overflow-hidden">
        {/* Left Content - Animated */}
        <motion.div
          ref={leftRef}
          initial={{ x: -100, opacity: 0 }}
          animate={leftInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.3 }} // faster animation

          className="w-full lg:w-[40vw] px-12 py-6 mt-[8vw]"

        >
          <div className="text-4xl tracking-wider leading-relaxed text-black font-radey">
            <span className="text-[4vw] font-semibold text-blue-900">From The</span>
            <br />
            <span className="text-[4vw] text-[#E85222] font-bold uppercase">Principle's desk</span>
            <br />
            <span className='text-[2.2vw] font-bold italic mb-2 block'>
              "The whole purpose of education is to turn mirrors in to windows."
            </span>
          </div>
          <p className='mt-4 text-[1.4vw] leading-14 '>
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

          className="w-[40vw] h-[60vw] flex flex-col items-center justify-center py-[7vw] relative mt-[8vw]"

        >
          <div className="w-[40vw] h-[60vw] relative rounded-md">
            <Image
              src={Principle}
              alt="Principal"
              className="w-full h-[60vw] object-cover rounded-md"
            />
              <img
    src="/img/squareDesign.svg"
    alt="Decorative SVG"
    className="w-[15vw] mt-[-2.5vw] -mb-[1vw] absolute -right-[8vw] z-0"
  />

           
            {/* Text Overlay */}
            <div className="text-center p-4 mt-2">
              <p className=" font-bold text-[2.5vw]">Dr Jamil bhai</p>
              <p className="text-[#20356B] font-bold text-[1.5vw]">Principal</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* display card  */}
      <div
        ref={ref}
        className="bg-[#20356B] py-[5vw] text-white flex flex-col items-center "
      >
        <div className="flex flex-col md:flex-row justify-evenly gap-10 items-center">
          {/* Left Box */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col items-center justify-center w-[30vw] h-[12vw]"
          >
            <GraduationCap size={200} />
            <h3 className="text-[2vw] font-bold mt-2">20K</h3>
            <p className="text-[2vw]">Students Till Date</p>
          </motion.div>

          {/* Middle Box */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col items-center w-[30vw] h-[12vw]"
          >
            <Users size={200} />
            <h3 className="text-[2vw] font-bold mt-2">60</h3>
            <p className="text-[2vw]">Faculties</p>
          </motion.div>

          {/* Right Box */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col items-center w-[30vw] h-[12vw]"
          >
            <Landmark size={200} />
            <h3 className="text-[2vw] font-bold mt-2">1990</h3>
            <p className="text-[2vw]">Established Since</p>
          </motion.div>
        </div>
      </div>
    </>
  )
}
