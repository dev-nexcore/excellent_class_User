"use client";
import React, { useState } from 'react';
import AboutBanner from "../../../public/img/aboutBanner.png";
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function BreadCrumbs() {
    const path = usePathname();
    const isHomePage = path === '/';
    let currentPath = path.split("/").pop() || "home";

    if (isHomePage) {
        return null; // Don't render anything on home page
    }

    return (
        <div className="relative h-60">
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
                    <span>{currentPath}</span>
                </nav>
            </div>
        </div>
    );
}