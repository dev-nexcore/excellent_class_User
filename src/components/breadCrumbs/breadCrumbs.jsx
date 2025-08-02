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
        <div className="relative h-40">
            <Image
                src={AboutBanner}
                alt="Office workspace background"
                fill
                className="object-cover brightness-50"
                priority
            />
            <div className="relative z-10 flex items-center justify-center h-full">
                <nav className="text-white text-3xl font-bold flex">
                    {/* Home link */}
                    <Link href="/" className="hover:underline">HOME</Link>

                    {/* Separator after HOME */}
                    {segments.length > 0 && <span className="mx-3">{">>>"}</span>}

                    {/* Dynamic segments */}
                    {segments.map((segment, index) => {
                        const href = "/" + segments.slice(0, index + 1).join("/");
                        const label = decodeURIComponent(segment)
                            .replace(/-/g, " ")
                            .toUpperCase();

                        return (
                            <span key={index} className="flex items-center">
                                <Link href={href} className="capitalize hover:underline">
                                    {label}
                                </Link>
                                {/* Add >>> separator except for last segment */}
                                {index < segments.length - 1 && (
                                    <span className="mx-3">{">>>"}</span>
                                )}
                            </span>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}
