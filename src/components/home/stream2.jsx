"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ExamSection() {
  const exams = [
    {
      title: "ENTRANCE EXAMS",
      image: "/Home/Rectangle 34.png",
      desc: "NEET, JEE ( M ), MHT-CET",
      direction: "left",
      link: "/",
    },
    {
      title: "COMPETITIVE EXAMS",
      image: "/Home/Rectangle 35.png",
      desc: "CA Foundation",
      direction: "right",
      link: "/",
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        {exams.map((exam, idx) => (
          <motion.div
            key={idx}
            initial={{
              x: exam.direction === "left" ? -250 : 250, // <-- distance increased
              opacity: 0,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-md bg-white border border-gray-200"
          >
            {/* Title */}
            <div className="bg-[#20356B] text-white text-center py-4 font-semibold text-sm tracking-wide rounded-t-lg">
              {exam.title}
            </div>

            {/* Image */}
            <div>
              <Image
                src={exam.image}
                alt={exam.title}
                width={150}
                height={150}
                className="w-full h-[180px] object-cover"
              />
            </div>

            {/* Description */}
            <div className="bg-[#e94f1d] text-white text-center font-medium text-sm py-3">
              {exam.desc}
            </div>

            {/* Button */}
            <Link href={exam.link} >
            <button
              type="button"
              className="bg-[#20356B] w-full py-4 text-white font-semibold text-sm tracking-wider rounded-b-lg flex justify-center items-center gap-2 hover:bg-[#1a2e5a] transition"
            >
              ENQUIRE NOW <span className="text-base">&#10132;</span>
            </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
