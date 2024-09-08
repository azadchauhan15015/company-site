"use client";

import React from 'react'
import { useState } from 'react'
import Link from 'next/link';
import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer';
const page = () => {

    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      

 {/* navbar */}

   
 <Navbar/>


        <div
          className="relative flex-grow flex items-center justify-center w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/rectangle-21@2x.png)', height: "60vh" }} // Adjust height for better responsiveness
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative z-10 text-center px-4 w-full flex justify-center">

            <h1 className="  text-white text-2xl md:text-4xl lg:text-5xl font-bold flex ">ABOUT US</h1>

          </div>
        </div>
      





      {/* who we are */}

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center max-w-[90vw] sm:max-w-[85vw] md:max-w-[80vw] mx-auto gap-12 md:gap-[4rem] lg:gap-[6.3125rem]">
          {/* Left Side (Text and Image) */}
          <div className="lg:w-1/2 flex flex-col justify-start">
            {/* Text Section */}
            <h2 className="font-montserrat text-[32px] sm:text-[36px] md:text-[40px] lg:text-[45px] font-bold leading-[36px] lg:leading-[40px] text-left mb-4 sm:mb-6 lg:mb-[10px]">
              Who We Are
            </h2>
            <p className="font-rubik text-[14px] sm:text-[15px] md:text-[16px] font-light leading-[26px] sm:leading-[28px] md:leading-[30px] text-left">
              We are a software & product-based company dedicated to helping businesses, brands, & small enterprises all over the globe. We specialize in creating custom solutions that match our client's specific needs. Whether you want to build a user-friendly website or design attractive graphics, our focus is always on delivering top-quality work quickly & efficiently. We believe in being more than just a service provider; we aim to be a true partner in every collaboration.
            </p>
            {/* Image Below Text */}
            <div className="relative pl-[40px] sm:pl-[60px] md:pl-[80px]">
              <img
                className="absolute -right-8 -top-5 -z-10 sm:-right-6 sm:-top-4 md:-right-8 md:-top-5"
                src="/Fill 1.png"
              />
              <img
                src="/kal-visuals-PFC2fY9LE_g-unsplash.png"
                alt="Person working"
                className="pt-[10px] sm:pt-[15px] md:pt-[20px] pl-[5px] sm:pl-[8px] md:pl-[10px]"
              />
            </div>
          </div>

          {/* Right Side (Image) */}
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center self-start pt-14 relative">
            <img
              src="/you-x-ventures-nF0nQuqBsrI-unsplash.png"
              alt="Team working"
              className="max-w-[90%] md:max-w-full"
            />
            <div className="bg-[#fffdfd] h-[100px] w-[100px] sm:h-[100px] sm:w-[100px] sm:border-[20px] sm:-bottom-8 sm:-left-4 md:h-[110px] md:w-[110px] md:border-[22px] md:-bottom-9 md:-left-6 lg:h-[120px] lg:w-[120px] lg:border-[27px] absolute rounded-full border-red-500 -bottom-8 -left-5 -z-10 mb-[-16px] "></div>
          </div>
        </div>
      </div>


      {/* 4 column */}


      <div className="bg-[rgb(231,230,239)] py-6 md:py-12">
        <div className="max-w-[90vw] md:max-w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* Left Side (Images in 2x2 grid) */}
          <div className="min-w-[20vw]  grid grid-cols-2 gap-4 lg:px-10 relative">
            <div className="w-full flex justify-center items-center relative">
              <img
                src="/1.png"
                alt="Team working"
                className="object-cover h-[200px] w-[200px]"
              />
            </div>
            <div className="w-full flex justify-center items-center relative top-[50px]">
              <img
                src="/1 copy.png"
                alt="Collaboration"
                className="object-cover w-[200px] h-[260px]"
              />
            </div>
            <div className="w-full flex justify-center items-center relative">
              <img
                src="/1 copy 2.png"
                alt="Discussion"
                className="object-cover w-[200px] h-[260px]"
              />
            </div>
            <div className="w-full flex justify-center items-center relative top-[60px]">
              <img
                src="/1 copy 3.png"
                alt="Planning"
                className="object-cover h-[200px] w-[200px]"
              />
            </div>
          </div>

          {/* Right Side (Text Content) */}
          <div className="pt-10 space-y-6 md:space-y-8">
            {[
              { number: 1, title: 'Quick, Quality Solutions', text: 'We focus on delivering fast, reliable solutions that don\'t compromise quality. Our team works around the clock to make sure your project is completed on time & exceeds your expectations.' },
              { number: 2, title: 'Client Focused Services', text: 'Our clients are at the heart of everything we do. We take the time to understand your business & your goals, so we can create solutions that truly fit your needs.' },
              { number: 3, title: 'Innovative Thinking', text: 'We are always looking for new ways to solve problems & improve our services. Our team is full of creative thinkers who love new ideas and bring fresh perspectives to every project.' },
              { number: 4, title: 'Your Business Growth Partner', text: 'We don\'t just offer services, we build long partnerships. Whether you\'re a startup or an established business, we support your every step.' }
            ].map(({ number, title, text }, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                <div className="h-[40px] w-[40px] md:h-[50px] md:w-[50px] bg-[#ced7ff] text-black flex items-center justify-center rounded-full text-base md:text-lg font-bold">
                  {number}
                </div>
                <div className="flex-1">
                  <h3 className="font-rubik text-[18px] md:text-[21px] font-bold leading-[22px] md:leading-[24.89px] text-left pb-[8px] md:pb-[10px]">{title}</h3>
                  <p className="font-rubik text-[12px] md:text-[14px] font-light leading-[16px] md:leading-[20px] text-left text-black">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>




      {/* our mission */}



      <div className=" bg-white-500 py-8">
        <div className="max-w-[80vw] m-auto items-center h-full bg-gradient-to-b from-[#ED6165] to-[#F5F5F5] flex flex-col md:flex-row justify-center ">
          <div className="text-white text-center md:text-left md:w-1/2  flex flex-col items-start justify-center max-w-full md:max-w-[23vw] m-auto">
          <img
        src="/Content Left.png" 
        alt="Decorative Image"
        className="mb-4 object-contain brightness-0"
      />
            <h2 className="font-rubik text-[35px] font-bold leading-[50px] text-left text-black">Our Mission</h2>
            <p className='font-rubik text-[18px] font-light leading-[22px] text-left text-black'>
              Our mission is to stay curious and innovative, constantly pushing
              the boundaries of technology to create solutions that help our
              partners succeed. We believe in the power of technology to
              transform businesses & are dedicated to making that transformation
              as smooth & effective as possible.
            </p>
          </div>
          <div className="md:w-1/2 p-4 flex justify-center pt-[60px] pb-[60px]">
            <img
              src="/Bitmap.png"
              alt="Mission Image"
              width={277.69}
              height={360}
              className="object-contain shadow-[-24px_23px_0px_-4px_rgba(249,246,246,0.75)]"

            />
          </div>
        </div>
      </div>





      <div className=" bg-white-500 py-8">
        <div className="max-w-[80vw] m-auto items-center h-full bg-white-500 flex flex-col  md:flex-row-reverse  justify-center ">
          <div className="text-red-500 text-center md:text-left md:w-1/2  flex flex-col items-start justify-center max-w-full md:max-w-[23vw] m-auto">
          <img
        src="/Content Left.png" 
        alt="Decorative Image"
        className="mb-4 object-contain"
      />
            <h2 className="font-rubik text-[35px] font-bold leading-[50px] text-left">Our Vision</h2>
            <p className='font-rubik text-[18px] font-light leading-[22px] text-left'>
              Our vision is to be the go to partner for businesses looking to gain a competitive edge in their industry.  We work hard to create & deliver the top solutions that not only meet but also go beyond what our clients expect.
            </p>
          </div>
          <div className="md:w-1/2 p-4 flex justify-center pt-[60px] pb-[60px]">
            <img
              src="/Bitmap1.png"
              alt="Mission Image"
              width={277.69}
              height={360}
              className="object-contain shadow-[-24px_23px_0px_-4px_rgba(249,246,246,0.75)]"

            />
          </div>
        </div>
      </div>




      <div className=" bg-white-500 py-8">
        <div className="max-w-[80vw] m-auto items-center h-full bg-gradient-to-b from-[#ED6165] to-[#F5F5F5] flex flex-col md:flex-row justify-center ">
          <div className="text-white text-center md:text-left md:w-1/2  flex flex-col items-start justify-center max-w-full md:max-w-[23vw] m-auto">
          <img
        src="/Content Left.png" 
        alt="Decorative Image"
        className="mb-4 object-contain brightness-0"
      />
            <h2 className="font-rubik text-[35px] font-bold leading-[50px] text-left text-black">Our Values</h2>
            <p className='font-rubik text-[18px] font-light leading-[22px] text-left text-black'>
              We believe in the potential of every business & are committed to helping our client business.  Our values are centred around delivering custom solutions that drive growth, improve  productivity & provide a strong return on investment (ROI).
            </p>
          </div>
          <div className="md:w-1/2 p-4 flex justify-center pt-[60px] pb-[60px]">
            <img
              src="/Bitmap.png"
              alt="Mission Image"
              width={277.69}
              height={360}
              className="object-contain shadow-[-24px_23px_0px_-4px_rgba(249,246,246,0.75)]"

            />
          </div>
        </div>
      </div>







     









{/* contact us  */}





{/* <div className="flex flex-wrap items-center justify-center bg-gray-100 p-8 rounded-md shadow-lg max-w-[80vw] mx-auto border-4  gap-[150px] mt-[80px] ">
<div className="relative flex-shrink-0">
  <div className="w-32 h-32 bg-red-500 rounded-full flex items-center justify-center">
  <div className="absolute">
    <img
      src="/17-businessman-png-image 1.png" 
      alt="Person"
      width={250} 
      height={200} 
      
    />
  </div>
  </div>
</div>
<div className='call bg-red-500 rounded-full h-[60px] w-[60px] -mt-48 ml-[50px]'>   
<img className='ml-[14px] mt-[18px]' src='/call@2x.png'/>
</div>
<div className="ml-8 flex flex-col gap-[20px]">
     <h2 className="font-rubik text-[27px] font-semibold leading-[8.5px] text-center">
       Are You Set for</h2>
     <span className="font-rubik text-4xl font-bold leading-8 text-center">Success?</span>
  
  <button className="bg-red-500 text-white px-[55px] py-[16px] mt-[5px]  hover:bg-red-600 font-montserrat text-[15px] font-bold leading-[18.29px]">
    Book Your Call & Find Out!
  </button>
</div>
</div>



 */}







<div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-md shadow-lg w-[80%] mx-auto border-4 gap-8 mt-8 sm:flex-row sm:gap-[150px] sm:mt-[80px]">
      <div className="relative flex-shrink-0">
        <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center sm:w-32 sm:h-32">
          <div className="absolute">
            <img
              src="/17-businessman-png-image 1.png"
              alt="Person"
              width={200}
              height={160}
              className="sm:w-[200px] sm:h-[170px]"
              style={{ aspectRatio: "200/160", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
      <div className="call bg-red-500 rounded-full h-[50px] w-[50px] -mt-24 ml-[40px] sm:-mt-40 sm:ml-[50px]">
        <img
          className="ml-[2px] mt-[1px] sm:ml-[11px] sm:mt-[14px]"
          src="/call@2x.png"
          width={24}
          height={24}
          alt="Call"
          style={{ aspectRatio: "24/24", objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col gap-[10px] mt-[10px] items-center sm:ml-8 sm:items-center">
        <h2 className="font-rubik text-[24px] font-semibold leading-[6.5px] sm:text-[27px]">Are You Set for</h2>
        <span className="font-rubik text-3xl font-bold leading-8 sm:text-4xl">Success?</span>
        <button className="bg-red-500 text-white px-[40px] py-[12px] mt-[5px] sm:px-[55px] sm:py-[16px]">
         Book Your Call & Find Out!
        </button>
      </div>
    </div>



{/* footer */}





<Footer/>











    </>
  )
}

export default page
