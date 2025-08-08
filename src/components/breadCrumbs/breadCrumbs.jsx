"use client";
import React from 'react';
import AboutBanner from "../../../public/img/aboutBanner.png";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function BreadCrumbs() {
    const path = usePathname();
    const isHomePage = path === '/';

    if (isHomePage) {
        return null; // Don't render anything on home page
    }

    // Split the path into segments and filter out empty ones
    const segments = path.split("/").filter((seg) => seg !== "");

    return (
        <div className="relative h-32 md:h-40">  {/* Reduced height on mobile */}
            <Image
                src={AboutBanner}
                alt="Office workspace background"
                fill
                className="object-cover brightness-50"
                priority
            />
            <div className="relative z-10 flex items-center justify-center h-full">
                <nav className="text-white text-lg sm:text-xl md:text-3xl font-bold flex flex-wrap justify-center px-4">  {/* Added responsive text sizes and padding */}
                    {/* Home link */}
                    <Link href="/" className="hover:underline">HOME</Link>

                    {/* Separator after HOME */}
                    {segments.length > 0 && <span className="mx-2 md:mx-3">{">>>"}</span>}  {/* Reduced margin on mobile */}

                    {/* Dynamic segments */}
                    {segments.map((segment, index) => {
                        const href = "/" + segments.slice(0, index + 1).join("/");
                        const label = decodeURIComponent(segment)
                            .toUpperCase();

                        return (
                            <span key={index} className="flex items-center">
                                <Link href={href} className="capitalize hover:underline">
                                    {label}
                                </Link>
                                {/* Add >>> separator except for last segment */}
                                {index < segments.length - 1 && (
                                    <span className="mx-2 md:mx-3">{">>>"}</span>  
                                )}
                            </span>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}