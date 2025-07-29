export default function WhyChooseUs() {
  return (
    <section className="bg-white">
      {/* Top Title */}
      <div className="text-center py-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Why Choose us?
        </h2>
      </div>

      {/* Curved section */}
      <div className="relative bg-blue-900 text-white">
        {/* Curved top edge */}
        <svg
          className="absolute top-0 left-0 w-full -translate-y-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
        >
          <path
            fill="#1e3a8a" // same as blue-900 background
            d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
          ></path>
        </svg>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left - Image */}
          <div className="flex justify-center">
            <img
              src="/award_img.png" // Place your image in public folder
              alt="Award Ceremony"
              className="rounded-lg shadow-lg border-4 border-white"
            />
          </div>

          {/* Right - Text */}
          <div>
            <p className="text-lg leading-relaxed text-justify">
              We at Excellent strongly believe that the best faculty creates the best students and 
              that is why we have a faculty who are masters in their subjects. We offer our students 
              expertise that they would never experience anywhere else. We invest in training and 
              developing their skills, thus providing our students a complete upgraded education. 
              <span className="font-semibold">
                {" "}Qualified and experienced faculty accelerate the learning process.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
