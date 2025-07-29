// ExamSection.js
"use client";
import Image from "next/image";

export default function ExamSection() {
  const exams = [
    {
      title: "ENTRANCE EXAMS",
      image: "/Gallery/Rectangle157.png",
      desc: "NEET, JEE ( M ), MHT-CET",
    },
    {
      title: "COMPETITIVE EXAMS",
      image: "/Gallery/Rectangle157.png",
      desc: "CA Foundation",
    },
  ];

  return (
    <section className="bg-white py-6"> {/* padding kam kiya */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        {exams.map((exam, idx) => (
          <div
            key={idx}
            className="rounded-lg overflow-hidden shadow-md bg-white border border-gray-200"
          >
            {/* Title */}
            <div className="bg-[#20356B] text-white text-center py-3 font-bold text-sm tracking-wide rounded-t-lg">
              {exam.title}
            </div>

            {/* Image */}
            <div className="px-4 py-2">
              <Image
                src={exam.image}
                alt={exam.title}
                width={400}
                height={200}
                className="w-full rounded-sm object-cover"
              />
            </div>

            {/* Description */}
            <div className="bg-[#e94f1d] text-white text-center font-medium text-sm py-2">
              {exam.desc}
            </div>

            {/* Button */}
            <button
              type="button"
              className="bg-[#20356B] w-full py-3 text-white font-semibold text-sm tracking-wider rounded-b-lg flex justify-center items-center gap-2 hover:bg-[#1a2e5a] transition"
            >
              ENQUIRE NOW
              <span className="text-lg">&#10132;</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
