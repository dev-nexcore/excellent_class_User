import React from 'react';
export default function HeroSection() {
  return (
    <>
      <div className="w-screen h-[60vw] relative overflow-hidden">
        {/* LEFT BLUE SIDE */}
        <div
          className="absolute top-0 left-0 w-full h-[40vw] bg-blue-600 z-10"
          style={{
            clipPath: 'polygon(0 0, 53.5% 0, 48.5% 100%, 0 100%)',
          }}
        />

        {/* ORANGE DIAGONAL BORDER */}
        <div
          className="absolute top-0 left-0 w-full h-[40vw] bg-orange-400 z-20"
          style={{
            clipPath: 'polygon(53.5% 0, 54% 0, 49% 100%, 48.5% 100%)',
          }}
        />

        {/* RIGHT IMAGE SECTION with CURVED BOTTOM */}
        <div className="absolute top-0 right-0 w-[60vw] h-[44vw] z-0 overflow-hidden">
          {/* SVG CLIP-PATH for bottom curve */}
          <svg
            className="w-full h-full absolute top-0 left-0 z-10"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <clipPath id="heroClip" clipPathUnits="objectBoundingBox">
                {/* Bottom curve path */}
                <path d="M0,0 H1 V0.9 Q0.5,1 0,0.9 Z" />
              </clipPath>
            </defs>
          </svg>

          {/* Image wrapper with skewY to simulate wider top */}
          <div
            className="w-full h-full origin-top-left"
            style={{
              clipPath: 'url(#heroClip)',
              transform: 'skewY(-6deg)', // Tilt top outward
            }}
          >
            {/* Image inside skewed container */}
            <img
              src="/img/homeBanner.jpg"
              alt="Green Section"
              className="w-full h-full object-cover scale-105" // Optional scale for fill
            />
          </div>
        </div>
      </div>
    </>
  );
}
