import React, { useEffect, useRef } from 'react';
import { Building, Briefcase, Layers, Users } from "lucide-react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import img1 from '../assests/heroimg.jpg';
import img2 from '../assests/hero-2.png';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

interface Stat {
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    number: number;
    label: string;
    prefix?: string;
}

const Hero: React.FC = () => {
    const heroRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);
    const statsRef = useRef<HTMLDivElement | null>(null);
    const mobileRef = useRef<HTMLDivElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const downloadRef = useRef<HTMLDivElement | null>(null);

    const stats: Stat[] = [
        { icon: Building, color: "text-green-500", number: 3500, label: "Companies", prefix: "+" },
        { icon: Briefcase, color: "text-blue-500", number: 1000, label: "Live Projects", prefix: "+" },
        { icon: Layers, color: "text-orange-500", number: 12, label: "Categories" },
        { icon: Users, color: "text-purple-500", number: 300000, label: "Teenlancers" }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Create main timeline
            const mainTl = gsap.timeline({
                defaults: { ease: "power3.out" }
            });

            // Initial state setup
            gsap.set(heroRef.current, { opacity: 0 });
            gsap.set(textRef.current?.children, { opacity: 0, y: 30 });
            gsap.set(statsRef.current, { opacity: 0, y: 50 });
            gsap.set(mobileRef.current, { opacity: 0, x: 50 });

            // Hero section fade in with backdrop blur
            mainTl.to(heroRef.current, {
                opacity: 1,
                duration: 0.8,
                clearProps: "all"
            });

            // Animate heading with text reveal effect
            if (headingRef.current) {
                const text = headingRef.current.textContent || "";
                mainTl.to(headingRef.current, {
                    duration: 0.1,
                    text: { 
                        value: text,
                        delimiter: "",
                    },
                    opacity: 1,
                    ease: "none"
                }, "-=0.3");
            }

            // Animate text elements with stagger
            mainTl.to(Array.from(textRef.current?.children || []), {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: {
                    amount: 0.3,
                    ease: "power2.out"
                }
            }, "-=0.2");

            // Animate stats section
            mainTl.to(statsRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                onComplete: () => {
                    // Animate numbers after stats section appears
                    if (statsRef.current) {
                        Array.from(statsRef.current.children).forEach((child, index) => {
                            const numberElement = child.querySelector('.number');
                            if (numberElement) {
                                gsap.to(numberElement, {
                                    duration: 1.5,
                                    textContent: stats[index].number.toString(),
                                    snap: { textContent: 1 },
                                    ease: "power2.out"
                                });
                            }
                        });
                    }
                }
            }, "-=0.3");

            // Animate mobile screens with bounce effect
            mainTl.to(mobileRef.current, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.8)"
            }, "-=0.4");

            // Add hover animations for download buttons
            const buttons = downloadRef.current?.querySelectorAll('button');
            buttons?.forEach(button => {
                button.addEventListener('mouseenter', () => {
                    gsap.to(button, {
                        scale: 1.05,
                        duration: 0.2,
                        ease: "power2.out"
                    });
                });
                
                button.addEventListener('mouseleave', () => {
                    gsap.to(button, {
                        scale: 1,
                        duration: 0.2,
                        ease: "power2.in"
                    });
                });
            });

            // Hover effect for stats
            if (statsRef.current) {
                Array.from(statsRef.current.children).forEach((stat) => {
                    stat.addEventListener('mouseenter', () => {
                        gsap.to(stat, {
                            y: -5,
                            duration: 0.2,
                            ease: "power2.out"
                        });
                    });
                    
                    stat.addEventListener('mouseleave', () => {
                        gsap.to(stat, {
                            y: 0,
                            duration: 0.2,
                            ease: "power2.in"
                        });
                    });
                });
            }
        });

        // Cleanup function
        return () => ctx.revert();
    }, []);

    return (
        <div className=" w-full over " ref={heroRef}>
            <div className="relative w-full">
                {/* Background Image Section */}
                <div className="w-full h-[550px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10 transition-all duration-500" />
                    <img
                        src={img1}
                        alt="Background with people and Shark Tank logo"
                        className="w-full h-[550px] object-cover transform transition-transform duration-700"
                    />
                    
                    {/* Hero Content */}
                    <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col justify-center px-4 md:px-12 lg:px-24" ref={textRef}>
                        <div className="max-w-2xl">
                            <h1 ref={headingRef} className="text-white text-4xl md:text-6xl font-bold tracking-tight opacity-0">
                                TEENLANCERS
                            </h1>
                            <p className="text-white/90 mt-6 text-lg md:text-xl font-light leading-relaxed">
                                Adult Journey starts at Teen, Work with Real High Professional Companies, 
                                Real Client Side Projects, Real Boost To Your Earnings, Real Money.
                            </p>
                            
                            {/* App Download Section */}
                            <div className="mt-8" ref={downloadRef}>
                                <p className="text-white text-lg mb-4">Download App</p>
                                <div className="flex flex-wrap gap-4">
                                    <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 rounded-lg p-3 flex items-center gap-2 transform">
                                        <img src="/api/placeholder/120/40" alt="App Store" className="h-8" />
                                    </button>
                                    <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 rounded-lg p-3 flex items-center gap-2 transform">
                                        <img src="/api/placeholder/120/40" alt="Google Play" className="h-8" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div
                        ref={statsRef}
                        className="absolute -bottom-24 lg:bottom-0 right-0 w-full lg:w-2/3 bg-white/95 backdrop-blur-md p-6 shadow-2xl lg:shadow-none rounded-lg  md:rounded-tl-3xl  z-30 grid grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-row gap-2 shadow-xl rounded-lg p-2 items-center text-center transform cursor-pointer">
                                <stat.icon className={`${stat.color} w-8 h-8 lg:w-10 lg:h-10`} />
                                <div className="flex flex-col items-baseline mt-2">
                                    <span className="number text-2xl lg:text-3xl font-bold">0+</span>
                                   
                                <p className="text-gray-600 text-sm lg:text-base mt-1">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile App Screens */}
                    <div
                        ref={mobileRef}
                        className="hidden lg:flex absolute bottom-0 right-0 items-center justify-center  w-1/3 h-full z-20"
                    >
                        <img
                            src={img2}
                            alt="Mobile app screens"
                            className=" h-[60%] object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;