"use client";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Timeline from '@/components/Timeline';
import React from 'react'


const page = () => {


  const features = [
    {
      title: 'Experience:',
      description: 'Our team has years of experience in delivering high-quality IT services across various industries.',
      icon: 'experience.png'
    },
    {
      title: 'Commitment to Quality',
      description: 'We never compromise on quality. Every project we take on is executed with the highest standards.',
      icon: 'quality.png'
    },
    {
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our top priority. We work hard to ensure youre happy with the final product.',
      icon: 'rate.png'
    },
    {
      title: 'Agile Approach',
      description: 'We use an agile methodology, allowing us to be flexible & responsive to your needs.',
      icon: 'agile-approach.png'
    }
  ]



  return (
    <>
      <Navbar />


      <div
        className="relative flex-grow flex items-center justify-center w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/rectangle-21@2x.png)', height: "60vh" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4 w-full flex justify-center">
          <h1 className="  text-white text-2xl md:text-4xl lg:text-5xl font-bold flex ">ABOUT US</h1>
        </div>
      </div>



      {/* how we work */}

      <div className="w-full">
        <div className="max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] mx-auto flex flex-col justify-center items-center pt-[40px] md:pt-[60px]">

          <h1 className="font-montserrat text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] font-bold leading-[40px] sm:leading-[45px] md:leading-[50px] text-left pb-[20px] md:pb-[30px]">
            How We Work
          </h1>

          <p className="font-rubik text-[16px] sm:text-[18px] font-light leading-[24px] sm:leading-[30px] text-center">
            Our approach is designed to make your experience smooth, clear & effective & gives you the best end results. We believe that great works start with a great approach or understanding your needs that will help to end with your success.
          </p>

        </div>
      </div>

      <div className="flex justify-center items-center pt-[20px] md:pt-[30px] font-rubik text-[18px] sm:text-[20px] md:text-[22px] font-normal leading-[28px] sm:leading-[32px] md:leading-[35px] text-center text-[#EE4037]">
        <h1>Our Result Oriented Approach</h1>
      </div>





      {/* timeline */}

      <Timeline />




      {/* why choose us  */}


      <div className='max-w-[100vw] bg-[#E2E2E2]'>

        <div className="max-w-[90vw] mx-auto bg-[#E2E2E2] p-4 sm:p-6 md:p-8">
          <h1 className="font-montserrat text-[45px] sm:text-3xl md:text-[45px] font-bold text-red-500 mb-4 sm:mb-6 md:mb-[5px] text-center md:text-start md:w-1/2 md:ml-auto md:relative md:top-[80px]">
            Why Choose Us?
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:relative md:top-[33px]">
            <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
              <img
                src="/woman-with-hair-bun-wearing-oversized-sweater 1.png?height=600&width=500"
                alt="Woman in orange sweater"
                className="rounded-lg w-full max-w-[300px] sm:max-w-[400px] md:max-w-full h-auto object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-y-[70px] md:pt-[112px]">
              {features.map((item, index) => (
                <div key={index} className="flex flex-row items-start">
                  <div className="bg-red-500 rounded-full p-2 mr-4 w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h2 className="font-montserrat text-[20px] font-bold leading-[50px] sm:text-xl mb-1">{item.title}</h2>
                    <p className="font-rubik text-[16px] font-light leading-[24px] text-left text-black">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>




      {/* contact */}


      <div className="mt-20 relative flex items-center justify-center w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/image.png)', minHeight: "70vh" }}>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto py-8 sm:py-12 md:py-16">
          <h2 className="max-w-[90vw] font-montserrat text-[44px] font-bold leading-[50px] text-center text-white  mb-3 sm:mb-4 md:mb-6">Let's Build Something Great Together</h2>
          <p className=" text-white font-rubik text-[16px] font-normal leading-[24px] text-center mb-4 sm:mb-6 md:mb-8">If you're looking for a partner who will take the time to understand your needs, deliver top-quality results, & support you every step of the way, you've come to the right place.</p>
          <button className="font-montserrat lg:text-[21px] md:text-[19px] sm:text-[18px] bg-red-500 hover:bg-red-600 text-white font-bold py-5 px-6 sm:px-8 md:px-10 rounded-lg w-full sm:w-auto transition duration-300">
            Book a quick consultation Call Now
          </button>
        </div>
      </div>





      {/* fooeter */}

      <Footer />



    </>
  )
}

export default page
