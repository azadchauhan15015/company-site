"use client";
import React, { useState, useEffect, useRef } from 'react';

const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function () {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            if (lastFunc) {
                clearTimeout(lastFunc);
            }
            lastFunc = setTimeout(function () {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
};

const Timeline = () => {
    const timelineItems = [
        {
            title: "Understanding Your Needs",
            content: "The first step in our process is to get to know you & your business. We start by having a detailed conversation to understand your goals, challenges & vision. This is where we learn what you need & how we can help.",
            bullets: [
                "We pay attention to what you want & how you envision your project.",
                "We discuss any problems or obstacles you are facing.",
                "Together, we define what success looks like for your project."
            ],
        },
        {
            title: "Planning & Strategy",
            content: "Once we understand your needs, we move on to planning. We create a clear, step by step that outlines how we’ll achieve your goals.",
            bullets: [
                "We customise our services to fit your specific requirements, whether",
                "it's web design, development part or marketing or designing",
                " We develop a strategy that aligns with your business goals & industry standards."
            ],
        },
        {
            title: "Design and Development",
            content: "With a solid plan in place, we start the design and development phase. This is where your idea  begins to take shape.",
            bullets: [
                "Our design team created highly visually appealing & user friendly designs that match your brand identity.",
            "We develop prototypes to give you a preview of the final products.",
                "We involve you in the process, gathering your feedback & making adjustments along the way."
            ],
        },
        {
            title: "Implementation & Testing",
            content: "Once the design is finalized, we move to implementation. This is where we build the actual products, whether it is a website, app, or digital marketing campaign",
            bullets: [
                "Our skilled developers bring the designs to life using the latest technology.",
                "We test everything to make sure it works perfectly across all the platforms.",
                "  Any bug issues that arise are promptly addressed & resolved."
            ],
        },
        {
            title: "Launch & Deployment",
            content: "After testing, it's time to go live. We handle the launch process smoothly to make sure everything is in a place for successful release.",
            bullets: [
                "We deploy the final product with minimal disruptions to your business.",
                " We provide ongoing support after the launch."
            ],
        },
        {
            title: "Implementation & Testing",
            content: "Once the design is finalized, we move to implementation. This is where we build the actual products, whether it is a website, app, or digital marketing campaign.",
            bullets: [
                "Our skilled developers bring the designs to life using the latest technology.",
                "We test everything to make sure it works perfectly across all the platforms",
                "Any bug issues that arise are promptly addressed & resolved."
            ],
        },
        {
            title: "Ongoing Support & Maintenance",
            content: "Our work doesn't end with the launch. We continue to support you with regular updated, maintenance & improvements. We keep your product up to date with the latest features & security patches. We gather feedback & make improvements to make sure your product remind competitive. Our team is always available assist you with any issue. Our work doesn’t end with the launch. We continue to support you with regular updates, maintenance & improvements.",
            bullets: [
                "We keep your product up-to-date with the latest features & security patches.",
                "We gather feedback & make improvements to ensure your product remains competitive.",
                "Our team is always available to assist you with any issues or questions that may arise"
            ],
        },
        {
            title: "Building Long-Term Relationships",
            content: "We believe in building lasting relationships with our clients. We’re not just here for one  project—we want to be your trusted partner for the long haul",
            bullets: [
                "We maintain clear & open communication, keeping you informed at every stage.",
                " We see ourselves as an extension of your team, working together to achieve your goals.",
                "We help you plan for the future, offering insights & suggestions to keep your business growing."
            ],
        }
    ];



    const [activeIndex, setActiveIndex] = useState(null);
    const timelineRef = useRef(null);

    useEffect(() => {
        const handleScroll = throttle(() => {
            if (timelineRef.current) {
                const boxes = Array.from(timelineRef.current.children);
                const viewportHeight = window.innerHeight;
                const scrollPosition = window.scrollY + viewportHeight / 2;

                let newActiveIndex = null;
                for (let i = 0; i < boxes.length; i++) {
                    const box = boxes[i];
                    const boxTop = box.getBoundingClientRect().top + window.scrollY;
                    const boxBottom = boxTop + box.offsetHeight;

                    if (boxTop < scrollPosition && boxBottom > scrollPosition) {
                        const boxHeight = box.offsetHeight;
                        const boxCenter = boxTop + boxHeight / 2;
                        if (boxCenter >= scrollPosition - viewportHeight / 2 && boxCenter <= scrollPosition + viewportHeight / 2) {
                            newActiveIndex = i;
                            break;
                        }
                    }
                }

                if (newActiveIndex !== activeIndex) {
                    setActiveIndex(newActiveIndex);
                }
            }
        }, 100);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeIndex]);

    return (
        <div className="relative min-h-screen max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="absolute left-1/2 top-[241px] bottom-[270px] w-1 bg-gray-200 transform -translate-x-1/2">
                <div
                    className="absolute top-0 left-0 w-full transition-all duration-300 ease-in-out"
                    style={{
                        height: `calc(100% * ${activeIndex !== null ? (activeIndex + 1) / timelineItems.length : 0})`,
                        backgroundColor: 'red'
                    }}
                ></div>
            </div>
            <div ref={timelineRef} className="relative pt-16 pb-16">
                {timelineItems.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col sm:flex-row items-center ${index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'
                            }`}
                    >
                        <div className={`w-full sm:w-[40vw] ${index % 2 === 0 ? 'sm:pr-8' : 'text-left sm:pl-8'}`}>
                            <div className={`flex justify-center flex-col p-4 sm:p-6 shadow-lg transition-all duration-300 sm:h-80 md:h-96 overflow-hidden ${index === activeIndex ? 'bg-red-500 text-white' : 'bg-red-200 text-white'
                                }`}>
                                <h3 className="font-rubik text-[16px] font-bold leading-[50px] text-left">{item.title}</h3>
                                <p className={`font-rubik text-[16px] font-light leading-[18px] text-left sm:text-base transition-opacity duration-300 ${index === activeIndex ? 'opacity-100' : 'opacity-50'
                                    }`}>{item.content}</p>
                                <ul className="list-disc pl-5 mt-2 font-rubik text-[16px] font-light leading-[18px] text-left">
                                    {item.bullets.map((bullet, bulletIndex) => (
                                        <li key={bulletIndex} className="text-sm sm:text-base">
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="w-[20vw] sm:w-[10vw] flex justify-center">
                            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold z-10 ${index <= activeIndex ? 'bg-red-500' : 'bg-gray-400'
                                }`}>
                                {index + 1}
                            </div>
                        </div>
                        <div className="w-full sm:w-[40vw]"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;







