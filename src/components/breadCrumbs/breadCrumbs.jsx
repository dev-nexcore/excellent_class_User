import React from 'react'
import AboutBanner from "../../../public/img/aboutBanner.png"
export default function breadCrumbs() {
  return (
    <>
       <div className="relative h-90">
      
                <Image
                  src={AboutBanner}
                  alt="Office workspace background"
                  fill
                  className="object-cover brightness-50"
                  priority 
                />
      
                <div className="relative z-10 flex items-center justify-center h-full">
                  <nav className="text-white text-5xl font-bold">
                    <span className="pr-3 mr-8">home</span>
                    <span className="mx-6 mr-8">{">>>"}</span>
      
                    <span>about us</span>
                  </nav>
                </div>
              </div>
    </>
  )
}
