import React from 'react'

const Footer = () => {
  return (
    <>
      

      <div className='pt-[80px]'>
<footer className="w-full bg-black text-white py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="/Asset 1@4x 1.png"
              alt="Logo"
              className="mb-4"
              width="90"
              height="90"
              style={{ aspectRatio: "50/50", objectFit: "contain" }}
            />
            <p className='font-rubik text-[14px] font-light leading-[18px] text-left'>
              We offer custom solutions for big companies, IT firms, brands or new startups. We use our efficient &
              straightforward approach that helps our clients achieve increased value & productivity through the
              solutions we provide.
            </p>
            <div className="flex space-x-4 mt-4">
              <img src='/facebookappsymbol@2x.png' className="w-6 h-6 object-contain" />
              <img src='/linkedin-1@2x.png' className="w-6 h-6 object-contain" />
              <img src='/instagram.png' className="w-6 h-6 object-contain" />
              <img src='/twitter.png' className="w-6 h-6 object-contain" />
            </div>
          </div>
          <div>
            <h3 className="font-rubik text-[22px] font-bold leading-[26px] text-left text-red-500 pb-[20px]">Services</h3>
            <ul className="space-y-2 font-rubik text-[14px] font-light leading-[24px] text-left">
              <li>Software Development</li>
              <li>Web Designing</li>
              <li>Graphic Designing</li>
              <li>Web Development</li>
              <li>Digital Marketing</li>
              <li>Testing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-rubik text-[22px] font-bold leading-[26px] text-left text-red-500 pb-[20px]">Legal</h3>
            <ul className="space-y-2 font-rubik text-[14px] font-light leading-[24px] text-left">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Cookies Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-rubik text-[22px] font-bold leading-[26px] text-left text-red-500 pb-[20px]">Information</h3>
            <ul className="space-y-2 font-rubik text-[14px] font-light leading-[24px] text-left">
              <li>+91 8759 000 038</li>
              <li>info@instantprovidedservices.com</li>
              <li>IPS(Instant Provided Services)</li>
            </ul>
            <div className="mt-4">
              <h4 className="font-rubik text-[14px] font-light leading-[14px] text-left mb-6">Subscribe Now</h4>
              <div className="flex">
                <input type="email" placeholder="Email" className="h-[35px] rounded-sm pl-3" />
                <button className="bg-red-500 text-white rounded-sm w-[40px]">
                  <img src='/social-media 1.png' className="w-8 h-6 object-contain" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
        <div className='flex justify-center items-center w-full h-[80px] bg-red-500'>

<p className='font-rubik text-[14px] font-light leading-[26px] text-left'>© Copyright since 2024 Instant Provided Services-All Rights Reserved</p>

        </div>
    
</div>











    </>
  )
}

export default Footer
