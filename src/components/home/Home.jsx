export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-none h-full relative">
        
        {/* Right Section - Image (behind) */}
        <div className="absolute inset-7 bg-gray-100">
          <img 
            src="/office image.jpg" 
            alt="Office Interior" 
            className="w-full h-full"
          />
        </div>

        {/* Left Section - Blue with diagonal cut overlaying the image */}
        <div className="absolute inset-0">
          <div className="relative h-full">
            {/* Blue section with diagonal cut */}
            <div 
              className="h-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 relative flex flex-col justify-center px-16 overflow-hidden"
              style={{
                width: '65%',
                clipPath: 'polygon(0 0, calc(100% - 80px) 0, calc(100% - 0px) 100%, 0 100%)'
              }}
            >
              {/* Background decorative circles */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="w-20 h-20 bg-blue-400 rounded-full absolute top-16 left-16 opacity-40 blur-sm"></div>
                <div className="w-12 h-12 bg-blue-400 rounded-full absolute top-24 right-20 opacity-50"></div>
                <div className="w-16 h-16 bg-blue-400 rounded-full absolute bottom-20 left-12 opacity-30 blur-sm"></div>
                <div className="w-24 h-24 bg-blue-400 rounded-full absolute bottom-16 right-16 opacity-25 blur-md"></div>
                <div className="w-8 h-8 bg-blue-400 rounded-full absolute top-32 left-32 opacity-60"></div>
                <div className="w-14 h-14 bg-blue-400 rounded-full absolute bottom-32 right-24 opacity-35"></div>
                <div className="w-10 h-10 bg-blue-400 rounded-full absolute top-40 right-32 opacity-45"></div>
              </div>
              
              <div className="relative z-10 text-white">
                <h1 className="text-5xl font-bold leading-tight mb-10">
                  Committed To<br />
                  <span className="text-orange-500">Quality</span><br />
                  Education
                </h1>
                
                {/* Arrow-shaped button */}
                <div className="relative inline-flex">
                  <div className="bg-orange-500 px-8 py-4 text-white font-semibold text-lg relative">
                    Enroll now
                    {/* Arrow point */}
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[26px] border-b-[26px] border-l-[20px] border-t-transparent border-b-transparent border-l-orange-500 transform translate-x-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}