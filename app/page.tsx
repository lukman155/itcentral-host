import React from 'react'
import Image from 'next/image'
import homeSlider1 from '@/public/images/homeSlider1.jpg'
import homeSlider2 from '@/public/images/homeSlider2.jpg'
import homeSlider3 from '@/public/images/homeSlider3.jpg'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

// export function Example() {
//   return (
//     <Carousel
//       plugins={[
//         Autoplay({
//           delay: 2000,
//         }),
//       ]}
//     >

//     </Carousel>
//   )
// }
import { RiFolder2Fill, RiComputerFill, RiTeamFill, RiLightbulbFill } from 'react-icons/ri';
const offerCards = [
  {
    icon: RiFolder2Fill,
    title: 'Internship',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quaerat et doloribus!'
  },
  {
    icon: RiComputerFill,
    title: 'Training',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quibusdam.'
  },
  {
    icon: RiTeamFill,
    title: 'Mentorship',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    icon: RiLightbulbFill,
    title: 'Innovation',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  }
];

import ASCLogo from '@/public/images/ACSCLogo.png'
import JbLogo from '@/public/images/JbLogo.png'
import NAFLogo from '@/public/images/NAFLogo.png'
import Plogo from '@/public/images/PrimeLogo.png'
import SLogo from '@/public/images/schoolaLogo.png'
import Event1 from '@/public/images/ATHackaton.jpg'
import Event2 from '@/public/images/BCGwinners.jpg'
import Event3 from '@/public/images/eidTrophy.png'
import Event4 from '@/public/images/eidtrophy2.png'
import Event5 from '@/public/images/connectedWin.jpg'
import Event6 from '@/public/images/interns.png'
import Event7 from '@/public/images/bootcampGirls.jpg'

import { FaStar } from "react-icons/fa6";
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { FaArrowCircleRight } from "react-icons/fa";
// import { RiFolder2Fill } from "react-icons/ri";

const Home = () => {
  return (
    <div>
      {/* Todo this is a slider with multi images awaiting desgin team final design */}

      {/* <section className="relative font-poppins">
        <Carousel opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {[homeSlider1, homeSlider2, homeSlider3].map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative">
                  <Image src={image} alt={`Slider ${index + 1}`} className="w-full h-full" />
                  <div className="absolute inset-5 flex flex-col items-start justify-center ml-4">
                    <span className="text-white font-semibold bg-opacity-50 pl-4 py-2 rounded-md max-w-2xl text-[60px]">
                      Building the Next Generation of Tech Talents
                    </span>
                    <span className='text-white text-sm font-light bg-opacity-50 px-4 pb-2 rounded-md max-w-xs mt-2'>
                      Lorem ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum.
                    </span>
                    <Button className="bg-[#012A47] rounded-xl px-4 pt-2 max-w-xs mt-5 ml-4 w-32 text-white">Explore</Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section> */}
      <section className="relative font-poppins">
        <Image src={homeSlider1} alt='Slider1'
          // layout="fill" // Fill the container
          // objectFit="cover"
          className="lg:w-full lg:h-full h-[500px] object-cover" />
        <div className="absolute inset-5 flex flex-col items-start justify-center lg:ml-4">
          <span className="text-white font-semibold bg-opacity-50 lg:pl-4 lg:py-2 rounded-md lg:max-w-2xl lg:text-[60px] text-[40px]">
            Building the Next Generation of Tech Talents
          </span>
          <span className='text-white text-sm font-light bg-opacity-50 lg:px-4 ml-2 pb-2 rounded-md max-w-xs mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum.
          </span>
          <Button className="bg-[#0070C0] rounded-xl lg:px-4 pt-2 lg:max-w-xs mt-5 lg:ml-4 ml-2 lg:w-32 w-32 text-white hover:bg-[#0070C0] ">Explore</Button>
          {/* <Button className="rounded-xl lg:px-4 pt-2 lg:max-w-xs mt-5 lg:ml-4 ml-2 lg:w-32 w-16 text-white hover:bg-[#0070C0] ">Learn More</Button> */}
        </div>

      </section >



      <section className='text-center lg:w-full lg:h-[321px] place-content-center w-[360px] h-[200px]  '>
        <p className='pb-6 font-medium text-2xl font-poppins mb-3 text-[#272D37]'>Our Clients</p>
        <div className='flex flex-row justify-center lg:gap-8 gap-3'>
          <Image src={NAFLogo} alt='logo'
            className="lg:w-[80px] lg:h-[83px] w-[30px] h-[43px] mt-1" />
          <Image src={ASCLogo} alt='logo'
            className="lg:w-[65px] lg:h-[83px] w-[30px] h-[43px] mt-1" />
          <Image src={JbLogo} alt='logo'
            className="lg:w-[272px] lg:h-[93px] w-[110px] h-[50px] gap-0" />
          <Image src={Plogo} alt='logo'
            className="lg:w-[180px] lg:h-[90px] w-[78px] h-[50px] gap-0" />
          <Image src={SLogo} alt='logo'
            className="lg:mt-4 lg:w-[200px] lg:h-[38px] w-[65px] h-[30px] mt-1" />

        </div>
      </section>


      <section className='bg-[#ECF0F5] h-auto pb-14'>
        <div className='place-content-center text-center'>
          <p className='font-medium font-poppins text-3xl mt-5 text-[#272D37]'>What We Offer</p>
          <p className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Button className='bg-[#0070C0] hover:bg-[#0070C0] rounded-xl px-4 py-2 max-w-xs text-white mt-5'>Learn More
            <FaArrowCircleRight className='ml-2' />
          </Button>
        </div>
        {/* ... title and button ... */}
        <div className='flex flex-wrap justify-center mx-6 lg:mt-7 mt-5'>
          {offerCards.map((card, index) => (
            <div key={index} className='px-2 py-4 lg:py-0'>
              <Card className='w-[280px] h-[280px] bg-[#FFFFFF] rounded-xl'>
                <CardContent>
                  <div className='bg-[#012A47] mt-6 mb-5 ml-2 w-14 h-16 rounded-xl content-center'>
                    <card.icon className='ml-4 text-white w-5 h-6' />
                  </div>
                  <span className='ml-2 font-semibold text-[#012A47]'>{card.title}</span>
                  <Separator className='mt-3 mb-2 ml-2 w-10 bg-[#012A47]' />
                  <p className='ml-2'>{card.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className='text-center '>
          <p className='font-bold text-3xl mt-11 font-poppins text-[#272D37]'>Testimonials</p>
          <p className='lg:mx-[240px] text-justify mt-2 mx-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fuga error accusamus. Ratione ad ipsam obcaecati alias ex, voluptatum eius facilis nostrum, illum sint tenetur ut, eum sunt accusamus quisquam quod!</p>
        </div>

        <div className="flex flex-wrap justify-center mb-4 lg:mb-8">
          <div className="w-full md:w-1/3 xl:w-1/3 p-4 lg:p-6">
            <div className="bg-card p-4 rounded-lg">
              <div className='flex justify-center'>
                <img alt="client-1" src="https://placehold.co/50x50" className="w-12 h-12 rounded-full mb-2" />
              </div>
              <div className="flex justify-center mb-2 text-yellow-600">
                <FaStar className="w-4 h-4 mr-1" />
                <FaStar className="w-4 h-4 mr-1" />
                <FaStar className="w-4 h-4 mr-1" />
                <FaStar className="w-4 h-4 mr-1" />
                <FaStar className="w-4 h-4 mr-1" />
              </div>
              <p className="text-muted-foreground text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex."</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/3 p-4 lg:p-6">
            <div className="bg-card p-4 rounded-lg">
              <div className='flex justify-center'>
                <img alt="client-1" src="https://placehold.co/50x50" className="w-12 h-12 rounded-full mb-2" />
              </div>
              <div className="flex items-center mb-2 justify-center text-yellow-600">
                <FaStar className="w-4 h-4 mr-1" />
                <FaStar className="w-4 h-4 mr-1" />
                <FaStar className="w-4 h-4 mr-1" />
                <FaStar className="w-4 h-4 mr-1" />
                <FaStar className="w-4 h-4 mr-1" />
              </div>
              <p className="text-muted-foreground text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex."</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/3 p-4 lg:p-6">
            <div className="bg-card p-4 rounded-lg justify-self-center ">
              <div className='flex justify-center'>
                <img alt="client-1" src="https://placehold.co/50x50" className="w-12 h-12 rounded-full mb-2" />
              </div>
              <div className="flex items-center mb-2 justify-center text-yellow-600">
                <FaStar className="w-4 h-4 mr-1" />
                <FaStar className="w-4 h-4 mr-1" />
                <FaStar className="w-4 h-4 mr-1" />
                <FaStar className="w-4 h-4 mr-1" />
                <FaStar className="w-4 h-4 mr-1" />
              </div>
              <p className="text-muted-foreground text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex."</p>
            </div>
          </div>
        </div>
      </section>

      <section className='pb-12'>
        <div className='text-center '>
          <p className='font-bold text-3xl font-poppins text-[#272D37]'>Our Events</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="flex flex-wrap justify-center space-x-4 my-8 ">
          {['July', 'August', 'September', 'October', 'November', 'December', 'January'].map((month) => (
            <Button
              key={month}
              variant="outline"
              className="px-4 py-2 rounded-full hover:bg-[#0070C0] hover:text-white transition-colors"
            >
              {month}
            </Button>
          ))}
        </div>
        <div className="items-center justify-center lg:grid lg:grid-cols-6 lg:gap-4 lg:mx-14 flex flex-col">
          <Image alt="events" src={Event1} className='bg-black h-[200px] w-[300px] lg:col-span-2 rounded-xl text-white lg:w-full lg:h-[160px] object-cover shadow-lg my-3 lg:my-0' />
          <Image alt="events" src={Event2} className='bg-black h-[200px] w-[300px] lg:col-span-2 rounded-xl text-white lg:w-full lg:h-[160px] object-cover shadow-lg my-3 lg:my-0' />
          <Image alt="events" src={Event3} className='bg-black h-[200px] w-[300px] lg:row-span-2 rounded-xl lg:col-span-2 lg:w-auto lg:h-[338px] text-white shadow-lg my-3 lg:my-0' />
          <Image alt="events" src={Event4} className='bg-black h-[200px] w-[300px] lg:col-span-2 rounded-xl text-white lg:w-full lg:h-[160px] object-cover shadow-lg my-3 lg:my-0' />
          <Image alt="events" src={Event5} className='bg-black h-[200px] w-[300px] lg:col-span-1 rounded-xl  text-white lg:w-full lg:h-[160px] object-cover shadow-lg my-3 lg:my-0' />
          <Image alt="events" src={Event6} className='bg-black h-[200px] w-[300px] lg:col-span-1 rounded-xl  text-white lg:w-full lg:h-[160px] object-cover shadow-lg my-3 lg:my-0' />

        </div>



      </section>



    </div >

  )
}

export default Home