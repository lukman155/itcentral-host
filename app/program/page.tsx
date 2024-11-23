// components/LearnersPathway.js
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Image from 'next/image'
import { Typography, Box, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { Separator } from '@/components/ui/separator';
import homeSlider2 from '@/public/images/homeSlider2.jpg'
import internpic from '@/public/images/homeSlider4.jpg'
import { Button } from '@/components/ui/button';


import Event1 from '@/public/images/ATHackaton.jpg'
import Event2 from '@/public/images/BCGwinners.jpg'
import Event3 from '@/public/images/eidTrophy.png'
import Event4 from '@/public/images/eidtrophy2.png'
import Event5 from '@/public/images/connectedWin.jpg'
import Event6 from '@/public/images/interns.png'
import Event7 from '@/public/images/bootcampGirls.jpg'
import Header from '@/components/Header';
import { FaArrowCircleRight } from 'react-icons/fa';



const LearnersPathway = () => {
    const eventData = [
        {
            img: '/images/ATHackaton.jpg',
            title: "Africa's Talking Hackathon",
            description: "Showcase your skills in a competitive coding challenge and win prizes",
            month: 'July',
            rows: 1,
            cols: 1,
        },
        {
            img: '/images/interns.png',
            title: "iHatch Hackathon",
            description: "Showcase your skills in a competitive coding challenge and win prizes",
            month: 'July',
            cols: 2,
            rows: 4,
        },
        {
            img: '/images/connectedWin.jpg',
            title: "Hackathon",
            description: "Showcase your skills and win prizes",
            month: 'September',
            cols: 1,
            rows: 1,
        },
        {
            img: '/images/connectedWin.jpg',
            title: "Hackathon",
            description: "Showcase your skills and win prizes",
            month: 'October',
            cols: 1,
            rows: 1,
        },
        {
            img: '/images/eidTrophy.png',
            title: "Eid Celebration",
            description: "Celebrate milestones and community events together",
            month: 'August',
            cols: 3,
            rows: 2,
        },

        {
            img: 'images/BCGwinners.jpg',
            title: "iHatch Hackathon",
            description: "Showcase your skills in a competitive coding challenge and win prizes",
            month: 'July',
            cols: 2,
            rows: 1,
        },
        {
            img: 'images/bootcampGirls.jpg',
            title: "Bootcamp winners",
            description: "Celebrate the success of our top-performing bootcamp graduates",
            month: 'November',
            cols: 2,
            rows: 1,
        },

        {
            img: '/images/eidTrophy.png',
            title: "Eid Celebration",
            description: "Celebrate milestones and community events together",
            month: 'August',
            cols: 3,
            rows: 2,
        },

        {
            img: 'images/BCGwinners.jpg',
            title: "iHatch Hackathon",
            description: "Showcase your skills in a competitive coding challenge and win prizes",
            month: 'July',
            cols: 2,
            rows: 1,
        },
        {
            img: 'images/bootcampGirls.jpg',
            title: "Bootcamp winners",
            description: "Celebrate the success of our top-performing bootcamp graduates",
            month: 'November',
            cols: 2,
            rows: 1,
        }
    ]

    return (
        <>
            <div style={{ padding: 50, background: "linear-gradient(#012A47, #025793, #0266AD)" }}>
                <h1 style={{ fontSize: 48, textAlign: "center", color: "#fff", fontWeight: 800 }}>Our Programs</h1>
                <p style={{ textAlign: "center", color: "#fff" }}>Your Journey to Tech Mastery </p>
            </div>
            <Box sx={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Learners Pathway
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    From foundational training to real-world experience, follow our Learner’s path to success.
                </Typography>

                <Button className='bg-[#0070C0] hover:bg-[#0070C0] rounded-xl px-4 py-2 max-w-xs text-white mt-5'>Apply Now
                    <FaArrowCircleRight className='ml-2' />
                </Button>

                <Timeline position="alternate">
                    {/* Bootcamp Step */}
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary" className='mt-4' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>


                            <div className='flex'>
                                <Separator className=' my-[15px] w-24 pl-3 bg-black hidden lg:block' />
                                <Typography className='lg:ml-2'>
                                    <span className='text-1xl lg:text-2xl '>BOOTCAMP</span>
                                    <div className='text-[12.5px] lg:text-1xl'>
                                        Intensive training for people with zero-level skills, designed to provide hands-on
                                        experience in key tech skills. Currently, we have an all-girls tech bootcamp in operation.
                                    </div>
                                </Typography>
                            </div>



                        </TimelineContent>
                    </TimelineItem>

                    {/* 6 Months Training Step */}
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary" className='mt-4' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>


                            <div className='flex'>
                                <Separator className=' my-[15px] w-24 pl-3 bg-black order-last hidden lg:block' />
                                <Typography className='lg:mr-2'>
                                    <span className='text-1xl lg:text-2xl'>6 MONTHS TRAINING</span>
                                    <div className='text-[12.5px] lg:text-1xl'>
                                        Bootcamp graduates are trained for 6 months to help guide them. This ends with various
                                        tests to identify the right talent to join our internship stream.
                                    </div>
                                </Typography>
                            </div>

                        </TimelineContent>
                    </TimelineItem>

                    {/* Internship Step */}
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary" className='mt-4' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className='flex'>
                                <Separator className=' my-[15px] w-24 pl-3 bg-black hidden lg:block' />
                                <Typography className='lg:ml-2'>
                                    <span className='text-1xl lg:text-2xl'>INTERNSHIP</span>
                                    <div className='text-[12.5px] lg:text-1xl'>
                                        The top 2 from the training, who already have basic skills, are provided mentorship and
                                        project experience. Students undergoing SWISE fit into this category.
                                    </div>
                                </Typography>
                            </div>
                        </TimelineContent>
                    </TimelineItem>

                    {/* Talent Pool Step */}
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary" className='mt-4' />
                        </TimelineSeparator>
                        <TimelineContent>

                            <div className='flex'>
                                <Separator className=' my-[15px] w-24 pl-3 bg-black order-last hidden lg:block' />
                                <Typography className='lg:mr-2'>
                                    <span className='text-1xl lg:text-2xl'>TALENT POOLS / AFFILIATES</span>
                                    <div className='text-[12.5px] lg:text-1xl'>
                                        After the internship, you can either join our talent pool (Junior Partners) or work with
                                        our affiliates and partners.
                                    </div>
                                </Typography>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Box >

            {/* Girls bootcamp section   */}

            <div className="flex items-center justify-center lg:min-h-screen">
                <div className="relative lg:w-[1150px] lg:h-[400px] rounded-2xl h-[300px] w-[300px] md:w-[850px] shadow-lg">
                    {/* Background Image */}
                    <Image
                        src='/images/bootcampGirls.jpg' // Place your image in the "public" folder or provide correct path
                        alt="ITCentral Girls Tech Bootcamp"
                        layout="fill" // Fill the container
                        objectFit="cover" // Ensure the image covers the container
                        className="rounded-2xl"
                    />

                    {/* Blue overlay */}
                    <div className="absolute inset-0 bg-blue-900 bg-opacity-50 rounded-2xl"></div>

                    {/* Text and Button Section (Aligned to the Left) */}
                    <div className="absolute inset-0 flex flex-col items-start justify-center text-white p-10">
                        <h1 className="text-3xl font-bold mb-4">iTCentral Girls Tech Bootcamp</h1>
                        <p className="text-lg mb-6 max-w-lg">
                            Empowering young women in tech to bridge the digital divide.
                        </p>
                        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg cursor-not-allowed" disabled>
                            Application closed
                        </button>
                    </div>
                </div>
            </div>


            {/* internship application section */}


            <div className='p-6'>
                <div className=" flex flex-col lg:flex-row items-center justify-center lg:min-h-screen lg:mx-10">
                    {/* Left side - Image */}

                    <div className="lg:w-1/2 mb-6 lg:mb-0 lg:mr-6 lg:ml-14">
                        <div className="relative w-[300px] md:w-[400px] lg:w-[450px] h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src={internpic} // Replace with the correct path to your image
                                alt="Internship Image"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-2xl"
                            />
                        </div>
                    </div>

                    {/* Right side - Text and qualifications */}
                    <div className="lg:w-1/2 w-full bg-white p-6 rounded-lg">
                        <h5 className="text-sm font-semibold text-gray-500 mb-2 uppercase">Intern Applications</h5>
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">Launch Your Tech Career with an Internship</h1>
                        <p className="text-gray-600 mb-6">
                            Unlock opportunities by applying as an intern and gain valuable benefits.
                        </p>
                        <h6 className="text-gray-500 font-semibold mb-2 uppercase">Qualifications</h6>

                        {/* Qualification List */}
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4">
                                    ✔
                                </span>
                                Basic tech skills and experience
                            </li>
                            <li className="flex items-center">
                                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4">
                                    ✔
                                </span>
                                Ability to collaborate and work in teams
                            </li>
                            <li className="flex items-center">
                                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4">
                                    ✔
                                </span>
                                Eagerness to learn and grow in the tech space
                            </li>
                            <li className="flex items-center">
                                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4">
                                    ✔
                                </span>
                                Commitment to a full-time or part-time internship
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* event section  */}

            <div className="min-h-screen bg-gray-50 p-6">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold">Our Events</h1>
                    <p className="text-lg text-gray-600">Where Talent Meets Opportunity</p>
                </div>
                <div>
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
                    {/* <ImageList
                        sx={{ width: '100%', height: 'auto' }}
                        variant="quilted"
                        cols={1}
                        rowHeight={200}
                    >
                        {eventData.map((item) => (
                            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={item.description}
                                    sx={{
                                        background:
                                            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                    }}
                                    />
                                    </ImageListItem>
                        ))}
                        </ImageList> */}
                    <div className="items-center justify-center lg:grid lg:grid-cols-6 lg:gap-4 lg:mx-14 flex flex-col">
                        <Image alt="events" src={Event1} className='bg-black h-[200px] w-[300px] lg:col-span-2 rounded-xl text-white lg:w-full lg:h-[160px] object-cover shadow-lg my-3 lg:my-0' />
                        <Image alt="events" src={Event2} className='bg-black h-[200px] w-[300px] lg:col-span-2 rounded-xl text-white lg:w-full lg:h-[160px] object-cover shadow-lg my-3 lg:my-0' />
                        <Image alt="events" src={Event3} className='bg-black h-[200px] w-[300px] lg:row-span-2 rounded-xl lg:col-span-2 lg:w-auto lg:h-[338px] text-white shadow-lg my-3 lg:my-0' />
                        <Image alt="events" src={Event4} className='bg-black h-[200px] w-[300px] lg:col-span-2 rounded-xl text-white lg:w-full lg:h-[160px] object-cover shadow-lg my-3 lg:my-0' />
                        <Image alt="events" src={Event5} className='bg-black h-[200px] w-[300px] lg:col-span-1 rounded-xl  text-white lg:w-full lg:h-[160px] object-cover shadow-lg my-3 lg:my-0' />
                        <Image alt="events" src={Event6} className='bg-black h-[200px] w-[300px] lg:col-span-1 rounded-xl  text-white lg:w-full lg:h-[160px] object-cover shadow-lg my-3 lg:my-0' />

                    </div>
                    <div className="items-center justify-center lg:grid lg:grid-cols-6 lg:gap-4 lg:mx-14 flex flex-col mt-0 lg:mt-5">
                        <Image alt="events" src={Event1} className='bg-black h-[200px] w-[300px] lg:col-span-2 rounded-xl text-white lg:w-full lg:h-[160px] object-cover shadow-lg my-3 lg:my-0' />
                        <Image alt="events" src={Event2} className='bg-black h-[200px] w-[300px] lg:col-span-2 rounded-xl text-white lg:w-full lg:h-[160px] object-cover shadow-lg my-3 lg:my-0' />
                        <Image alt="events" src={Event3} className='bg-black h-[200px] w-[300px] lg:row-span-2 rounded-xl lg:col-span-2 lg:w-auto lg:h-[338px] text-white shadow-lg my-3 lg:my-0' />
                        <Image alt="events" src={Event4} className='bg-black h-[200px] w-[300px] lg:col-span-2 rounded-xl text-white lg:w-full lg:h-[160px] object-cover shadow-lg my-3 lg:my-0' />
                        <Image alt="events" src={Event5} className='bg-black h-[200px] w-[300px] lg:col-span-1 rounded-xl  text-white lg:w-full lg:h-[160px] object-cover shadow-lg my-3 lg:my-0' />
                        <Image alt="events" src={Event6} className='bg-black h-[200px] w-[300px] lg:col-span-1 rounded-xl  text-white lg:w-full lg:h-[160px] object-cover shadow-lg my-3 lg:my-0' />

                    </div>
                </div>
            </div>
        </>

    );
};

export default LearnersPathway;
