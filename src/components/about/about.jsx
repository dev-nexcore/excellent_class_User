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
      <div className="min-h-screen overflow-x-hidden">
        {/* Hero Section */}


        {/* Main Content Section */}
   {/* Main Content Section - Made Responsive */}
        <div className="py-8 md:py-16 px-4 flex justify-center w-full mb-4 md:mb-[6vw]">
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
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-tl-[6vw] md:rounded-tl-[5vw] rounded-br-[6vw] md:rounded-br-[5vw] shadow-lg w-[80vw] md:w-[30vw] h-64 md:h-72"></div>
                  <div className="relative rounded-3xl rounded-tl-[6vw] md:rounded-tl-[5vw] rounded-br-[6vw] md:rounded-br-[5vw] p-2 translate-y-2 translate-x-2">
                    <Image
                      src={AboutSection}
                      alt="Teacher helping student at computer"
                      className="h-60 md:h-[25vw] w-[80vw] md:w-[30vw] object-cover rounded-tl-[6vw] md:rounded-tl-[5vw] rounded-br-[6vw] md:rounded-br-[5vw] shadow-lg"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Right Content with animation - Made Responsive */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8 px-4 md:px-8 py-4 md:py-6 w-full sm:w-[90vw] md:w-[50vw] h-auto md:h-[30vw]"
              >
                {/* Badge - animate from top */}
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                  className="flex justify-start"
                >
                  <div className="inline-flex items-center px-3 py-2 bg-[#20356B] text-white rounded-full text-xs md:text-sm font-medium mb-2">
                    <span className="w-2 h-2 bg-[#E85222] rounded-full mr-2 md:mr-3"></span>
                    <span className="text-[10px] md:text-[12px] font-bold">about us</span>
                    <span className="w-2 h-2 bg-[#E85222] rounded-full ml-2 md:ml-3"></span>
                  </div>
                </motion.div>

                {/* Text Content - animate from right - Made Responsive */}
                <div
                  
                  className="space-y-3 md:space-y-4 lg:space-y-6 font-poppins w-full"
                >
                  {/* Responsive Headings */}
                <div className="w-full flex justify-center">
  <div className="text-center inline-block">
    <h1 className="font-semibold text-xl sm:text-2xl md:text-2xl lg:text-4xl leading-tight">
      We have the Best Teachers
    </h1>
    <h1 className="font-semibold text-xl sm:text-2xl md:text-2xl lg:text-4xl leading-tight">
      available in the City
    </h1>
  </div>
</div>

                  {/* Responsive Description */}
                 <div className="w-full text-base sm:text-base md:text-lg lg:text-md font-radley leading-relaxed flex justify-center md:justify-start text-center md:text-left">
  <div className="inline-block">
    {/* For small screens (mobile) */}
    <div className="block sm:hidden">
      <p>Established in 1990.
      Successfully trained more than 20000 students.</p>
      <p>Driven by motivated and dedicated team.</p>
    </div>

    {/* For medium and above screens */}
    <div className="hidden sm:block">
      <p>Established in 1990. Successfully trained more than 20000 students.</p>
      <p className="text-center">Driven by motivated and dedicated team.</p>
    </div>
  </div>
</div>

                </div>
              </motion.div>
            </div>
          </div>
        </div>
        


      </div>
      {/* second hero section */}
      <div className='bg-[#E85222] flex justify-center items-center py-[1.7vw] px-12 -mt-[8vw] mb-[4vw]'>
        <div className='text-3xl font-semibold capitalize  text-white text-center tracking-wide'> our Story</div>
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly px-4 py-2 gap-6 -mt-[2vw]">
  {/* Left Content */}
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true, amount: 0.4 }} // 👈 Trigger animation when 20% in view
    className="w-full lg:w-[40vw] px-4 md:px-8 lg:px-12 py-6"
  >
    <div className="relative">
      {/* Heading Line with Font Separation */}
      <span className="block leading-tight -mb-[1vw]">
        <span className="text-[12vw] md:text-[4vw] lg:text-[5vw] text-blue-900 font-radley">
          Established
        </span>{' '}
        <span className="text-black font-normal text-[3.5vw] md:text-[2.2vw] lg:text-[1.3vw]">
          in 1990.
        </span>
      </span>

      {/* Paragraph 1 */}
      <p className="mt-0 text-[3.5vw] md:text-[2.2vw] lg:text-[1.3vw] tracking-wide text-black">
        Successfully trained more than 20000 students. Driven by motivated and dedicated team.
        We at Excellent strongly believe that the best faculty creates the best students and that is why we have a faculty who are masters in their subjects. We offer our students expertise that they would never experience anywhere else. We invest in training and developing their skills, thus providing our students a complete upgraded education. Qualified and experienced faculty accelerate the learning process.
      </p>
      {/* Paragraph 2 */}
      <p className=" text-[3.5vw] md:text-[2.2vw] lg:text-[1.3vw] tracking-wide text-black font-radey">
        I am glad to share my thoughts about our journey in pursuit of excellence. Our endeavour has been to be the preferred choice for quality education and we keep striving to surpass our benchmarks year after year. We believe in giving the Best. Excellent has been and will continue to serve the students community through innovative coaching programs with a clear accent on quality. We are proud of our legacy. It gives me immense satisfaction to say "We teach Success". We are there to give you a competitive advantage in future with unseen challenges. We will always seek to deliver optimal quality of service to our students, our customer with integrity and unscrupulous honesty as cornerstones of our quality policy. In your happiness, we count our blessings.
      </p>
    </div>
  </motion.div>

  {/* Right Content */}
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true, amount: 0.4 }} // 👈 Trigger animation at 20%
    className="w-full lg:w-[45vw] flex flex-col items-center justify-center py-[6vw]"
  >
    <div className="relative w-[90vw] md:w-[60vw] lg:w-[40vw] flex flex-col items-center">
      {/* Decorative SVG */}
      <img
        src="/img/squareDesign.svg"
        alt="SVG Decoration"
        className="absolute top-[100vw] md:top-[70vw] lg:top-[60vw] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25vw] md:w-[18vw] lg:w-[15vw] max-w-full h-auto z-0"
      />

      {/* Image on Top */}
      <Image
        src={ExcellentBroucher}
        alt="Excellent Broucher"
        className="w-[80vw] md:w-[50vw] lg:w-[36vw] relative z-10"
      />
    </div>

    {/* Caption Text */}
    <p className="text-center text-[5vw] md:text-[3vw] lg:text-2xl font-bold font-poppins uppercase py-6 z-20 mt-8">
      Excellent Classes Broucher
    </p>
  </motion.div>
</div>


      {/* 4 div content */}
   <div className="min-h-screen py-10 px-4 flex flex-col items-center font-sans relative mt-[1vw] overflow-visible font-poppins">
  <img
    src="/img/squareDesign.svg"
    alt="Left background design"
    className="absolute top-[20vw] md:top-[12vw] -left-[10vw] w-[50vw] md:w-[30vw] lg:w-[25vw] h-[80vw] md:h-[50vw] lg:h-[45vw] -z-10"
  />

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {/* 1. OUR VISION */}
    <motion.div
      ref={left1Ref}
      initial={{ x: -100, y: -50, opacity: 0 }}
      animate={inViewLeft1 ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      viewport={{ amount: 0.4, once: true }}
      className="relative"
    >
      <div className="absolute w-full md:w-[45vw] lg:w-[40vw] h-[50vw] md:h-[25vw] lg:h-[20vw] bg-[#E85222] rounded-tl-[80px] md:rounded-tl-[100px] lg:rounded-tl-[120px] shadow-md transform -translate-y-4 -translate-x-4"></div>

      <div className="relative z-10 w-full md:w-[45vw] lg:w-[40vw] h-[50vw] md:h-[25vw] lg:h-[20vw] bg-[#20356B] text-white p-6 flex justify-center items-center gap-4 md:gap-6 lg:gap-8 flex-col rounded-tl-[80px] md:rounded-tl-[100px] lg:rounded-tl-[120px] shadow-lg">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-3">OUR VISION</h2>
        <p className="text-base md:text-xl lg:text-xl text-center">To be a preferred center for providing quality education.</p>
      </div>
    </motion.div>

    {/* 2. OUR CULTURE */}
    <motion.div
      ref={right1Ref}
      initial={{ x: 100, y: -50, opacity: 0 }}
      animate={inViewRight1 ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ amount: 0.4, once: true }}
      className="w-full md:w-[45vw] lg:w-[27vw] h-[45vw] md:h-[22vw] lg:h-[17vw] bg-[#F9B233] text-black py-[4vw] md:py-[2vw] lg:py-[1vw] rounded-tr-[60px] md:rounded-tr-[90px] lg:rounded-tr-[120px] shadow-lg ml-auto mr-auto md:ml-[-4vw] lg:ml-[0.5vw] -mt-[6vw] md:-mt-[4vw] lg:-mt-[0.1vw] mb-7"
    >
      <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center">OUR CULTURE</h2>
      <ul className="list-disc list-inside space-y-1 text-xs md:text-sm leading-relaxed px-6 md:px-8 lg:px-12 font-medium">
        <li>Commitment</li>
        <li>Enriching Education</li>
        <li>Encouraging Learning</li>
        <li>Building Confidence</li>
        <li>Developing Passion to Excel</li>
      </ul>
    </motion.div>

    {/* 3. CORE VALUES */}
    <motion.div
      ref={left2Ref}
      initial={{ x: -100, y: 50, opacity: 0 }}
      animate={inViewLeft2 ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      viewport={{ amount: 0.4, once: true }}
      className="w-full md:w-[45vw] lg:w-[27vw] h-[45vw] md:h-[22vw] lg:h-[17vw] bg-[#F9B233] text-black py-[2vw] md:py-[2vw] lg:py-[1vw] rounded-bl-[60px] md:rounded-bl-[90px] lg:rounded-bl-[120px] shadow-lg ml-auto -mt-[0.3vw] mr-[3vw]"
    >
      <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center">CORE VALUES</h2>
      <ul className="list-disc list-inside space-y-1 text-xs md:text-sm leading-relaxed px-6 md:px-8 lg:px-12 font-medium">
        <li>Commitment</li>
        <li>Enriching Education</li>
        <li>Encouraging Learning</li>
        <li>Building Confidence</li>
        <li>Developing Passion to Excel</li>
      </ul>
    </motion.div>

    {/* 4. OUR MISSION */}
    <motion.div
      ref={right2Ref}
      initial={{ x: 100, y: 50, opacity: 0 }}
      animate={inViewRight2 ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ amount: 0.4, once: true }}
      className="relative w-full md:w-[45vw] lg:w-[40vw] h-[50vw] md:h-[25vw] lg:h-[20vw] right-0 md:right-9 bottom-0 md:bottom-6"
    >
      <div className="absolute w-full md:w-[45vw] lg:w-[40vw] h-[50vw] md:h-[25vw] lg:h-[20vw] bg-[#20356B] rounded-br-[80px] md:rounded-br-[100px] lg:rounded-br-[120px] shadow-lg transform translate-y-4 translate-x-4"></div>

      <div className="relative z-10 w-full md:w-[45vw] lg:w-[40vw] h-[50vw] md:h-[25vw] lg:h-[20vw] bg-[#E85222] text-white p-4 md:p-6 flex justify-center items-center gap-4 md:gap-6 lg:gap-8 flex-col rounded-br-[80px] md:rounded-br-[100px] lg:rounded-br-[120px] shadow-lg">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-3">OUR MISSION</h2>
        <p className="text-base md:text-xl lg:text-xl text-center">
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
  transition={{ duration: 0.4 }}
          className="w-full lg:w-[40vw] px-4 md:px-8 lg:px-12 py-6 mt-[8vw]"
        >
          <div className="text-[5vw] md:text-[3vw] lg:text-4xl tracking-wider leading-relaxed text-black font-poppins">
            <span className="text-[4.5vw] md:text-[2.8vw] lg:text-[2vw] font-semibold text-blue-900">From The</span>
            <br />
            <span className="text-[6vw] md:text-[4vw] lg:text-[2.6vw] text-[#E85222] font-bold uppercase">Principle's desk</span>
            <br />
            <span className='text-[4.5vw] md:text-[3vw] lg:text-[2vw] font-semibold italic mb-2 block'>
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
  transition={{ duration: 0.4, delay: 0.1 }}

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
              <p className="font-bold text-[4.5vw] md:text-[3vw] lg:text-[2.5vw]">Dr Jamil khan</p>
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