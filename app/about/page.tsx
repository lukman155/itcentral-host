import { Button } from '@/components/ui/button';
import NewSlider from '@/components/ui/NewSlider';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {

  const directors = [
  { name: 'Nasir Mustapha', title: 'Project Director', img: '/images/nasirAbout.png' },
  { name: 'Aisha Yakubu', title: 'Talent Director', img: '/images/aishaAbout.png' },
  { name: 'Abdul Bature', title: 'Startup Director', img: '/images/abdulAbout.png' },
  { name: 'Mas’oud Mustapha', title: 'Finance Director', img: '/images/masoudAbout.png' },
];

const DirectorCards = () => {
  return (
    <div className="flex flex-col md:flex-row gap-16 mb-8">
      {directors.map((director, index) => (
        <div key={index}>
          <Image 
            className='grayscale hover:grayscale-0 transition duration-300' 
            width={296} 
            height={370} 
            alt={director.name} 
            src={director.img} 
          />
          <h3 className='mt-3 text-base font-poppins font-bold'>{director.name}</h3>
          <h3 className='text-sm font-poppins'>{director.title}</h3>
        </div>
      ))}
    </div>
  );
};

  return (
    <>
    <section className='mb-48 md:mb-72 bg-gradient-to-b from-[#012A47] to-[#0266AD] text-white font-poppins'>
      <div className='flex flex-col mx-auto px-4 items-center justify-center'>
        <div className="flex mt-[100px]  max-w-[740px]  flex-col items-center justify-center gap-8">
          <h1 className=' leading-normal text-center font-semibold text-[40px] md:text-4xl '>
iT Central, Empowering the Innovators of Tomorrow, Today
          </h1>
          <p className="text-[16px] text-center">
We embody community based learning - boosting motivation , and fostering growth.           </p>
          <div className="hidden gap-4">
            <Link className='w-[124px] border rounded-xl border-white bg-white text-[#0266AD]  font-medium text-base text-center py-2' href={'/'}>Explore</Link>
            <Link className='w-[124px] border rounded-xl border-white bg-transparent text-white  font-medium text-base text-center  py-2' href={'/'}>Learn More</Link>
          </div>
        </div> 

      <div className=' md:mt-[-80px] translate-y-12 md:translate-y-24 flex gap-4 md:gap-8'>
        <Image
          className='translate-y-12'
          alt='picture of ITCentral staff' 
          src='/images/hero1.png'
          height={395.25}
          width={312.5}
        />
        <Image
          className='translate-y-20 md:translate-y-24'
          alt='picture of ITCentral staff' 
          src='/images/hero1.png'
          height={395.25}
          width={312.5}
        />
        <Image
          className='hidden md:block translate-y-12'
          alt='picture of ITCentral staff' 
          src='/images/hero1.png'
          height={395.25}
          width={312.5}
        />
        <Image
          className='hidden md:block translate-y-24'
          alt='picture of ITCentral staff' 
          src='/images/hero1.png'
          height={395.25}
          width={312.5}
        />
      </div>
      </div>
    </section>
    <section className='flex flex-col items-center md:gap-2 px-4'>
      <h2 className='font-poppins text-[#272D37] font-bold text-4xl md:text-4xl text-center'>Our Core Values</h2>
      <Link
        href="#"
        className="mt-3 border rounded-xl inline-flex items-center gap-1 md:gap-3 text-xs md:text-base px-4 py-2 bg-[#0070C0] text-white hover:bg-blue-700 transition-colors duration-300"
      >
        Learn More<svg 
      className="w-[13px] h-[13px] md:w-6 md:h-6"
      viewBox="0 0 13 13" 
      fill="none"
    >
  <path d="M6.31607 8.81339L8.64445 6.48501L6.31607 4.15663L5.50113 4.97157L6.43249 5.90292H3.98769V7.06711H6.43249L5.50113 7.99846L6.31607 8.81339ZM6.31607 12.306C5.51084 12.306 4.75411 12.1532 4.0459 11.8476C3.33768 11.542 2.72163 11.1272 2.19775 10.6033C1.67386 10.0795 1.25912 9.4634 0.953517 8.75518C0.647917 8.04697 0.495117 7.29024 0.495117 6.48501C0.495117 5.67978 0.647917 4.92306 0.953517 4.21484C1.25912 3.50663 1.67386 2.89058 2.19775 2.36669C2.72163 1.8428 3.33768 1.42806 4.0459 1.12246C4.75411 0.816862 5.51084 0.664062 6.31607 0.664062C7.1213 0.664062 7.87802 0.816862 8.58624 1.12246C9.29445 1.42806 9.91051 1.8428 10.4344 2.36669C10.9583 2.89058 11.373 3.50663 11.6786 4.21484C11.9842 4.92306 12.137 5.67978 12.137 6.48501C12.137 7.29024 11.9842 8.04697 11.6786 8.75518C11.373 9.4634 10.9583 10.0795 10.4344 10.6033C9.91051 11.1272 9.29445 11.542 8.58624 11.8476C7.87802 12.1532 7.1213 12.306 6.31607 12.306Z" fill="white"/>
  </svg>
      </Link>
      <div className="my-20 flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 ">
        <article className="md:w-[532px] h-[252px] rounded-xl shadow-lg shadow-gray-100 p-6 px-14 flex flex-col items-center  border">
        <svg className='mb-4 w-[27px] h-[20px] md:w-[55px] md:h-[40px]' viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.6152 0.167969C18.7638 0.167969 23.052 3.08311 26.4148 8.75378L26.6788 9.20864L26.7328 9.32865L26.7688 9.42826L26.7856 9.49427L26.8024 9.59268L26.8156 9.7127V9.84471L26.7988 9.97793C26.7909 10.0225 26.7805 10.0666 26.7676 10.1099L26.7208 10.2396L26.6776 10.3296L26.6584 10.3656C23.3412 16.1695 19.0975 19.2226 13.9909 19.3654L13.6152 19.3702C8.33941 19.3702 3.9697 16.3111 0.572094 10.3644C0.468533 10.1831 0.414063 9.9779 0.414062 9.7691C0.414062 9.56031 0.468533 9.35513 0.572094 9.17383C3.9697 3.22713 8.33941 0.167969 13.6152 0.167969ZM13.6152 6.16868C12.6603 6.16868 11.7446 6.54801 11.0694 7.22322C10.3941 7.89843 10.0148 8.81421 10.0148 9.7691C10.0148 10.724 10.3941 11.6398 11.0694 12.315C11.7446 12.9902 12.6603 13.3695 13.6152 13.3695C14.5701 13.3695 15.4859 12.9902 16.1611 12.315C16.8363 11.6398 17.2157 10.724 17.2157 9.7691C17.2157 8.81421 16.8363 7.89843 16.1611 7.22322C15.4859 6.54801 14.5701 6.16868 13.6152 6.16868Z" fill="#0070C0"/>
        </svg>
        <h3 className='text-2xl font-semibold mb-4'>Our Vision</h3>
        <p className='text-xs md:text-lg text-center'>To create a thriving ecosystem where young innovators develop local solutions with global impact.</p>
      </article>

      <article className="md:w-[532px] h-[252px] rounded-xl shadow-lg shadow-gray-100  p-6 px-14 flex flex-col items-center border">
        <svg className='mb-4 w-[25px] h-[25px] md:w-[50px] md:h-[55px]'  viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.6149 0.699219C13.6602 0.699219 14.6729 0.836885 15.6366 1.09472L13.1562 3.57389C12.9681 3.76281 12.8021 3.97261 12.6616 4.19922H12.6149C10.9997 4.19922 9.42075 4.67819 8.07775 5.57555C6.73475 6.47292 5.68801 7.74837 5.06989 9.24064C4.45178 10.7329 4.29005 12.3749 4.60516 13.9591C4.92027 15.5433 5.69807 16.9985 6.8402 18.1406C7.98233 19.2827 9.43749 20.0605 11.0217 20.3756C12.6058 20.6907 14.2479 20.529 15.7402 19.9109C17.2324 19.2928 18.5079 18.246 19.4052 16.903C20.3026 15.56 20.7816 13.9811 20.7816 12.3659V12.3192C21.0071 12.1792 21.2152 12.0139 21.4057 11.8234L23.8861 9.34422C24.1439 10.3079 24.2816 11.3206 24.2816 12.3659C24.2816 18.8094 19.0584 24.0326 12.6149 24.0326C6.17141 24.0326 0.948242 18.8094 0.948242 12.3659C0.948242 5.92239 6.17141 0.699219 12.6149 0.699219ZM12.1319 6.55239C12.1319 7.54522 12.0829 8.55205 12.1366 9.54372L11.5066 10.1737C11.2899 10.3904 11.118 10.6477 11.0007 10.9309C10.8834 11.214 10.823 11.5175 10.823 11.824C10.823 12.1304 10.8834 12.4339 11.0007 12.7171C11.118 13.0002 11.2899 13.2575 11.5066 13.4742C11.7233 13.6909 11.9806 13.8628 12.2637 13.9801C12.5469 14.0974 12.8503 14.1578 13.1568 14.1578C13.4633 14.1578 13.7668 14.0974 14.0499 13.9801C14.3331 13.8628 14.5904 13.6909 14.8071 13.4742L15.4371 12.8442C16.4287 12.8979 17.4344 12.8489 18.4284 12.8489C18.3362 13.9576 17.9289 15.0169 17.2545 15.9017C16.5801 16.7866 15.6667 17.4601 14.6221 17.8429C13.5775 18.2257 12.4452 18.3017 11.3587 18.0621C10.2723 17.8225 9.27703 17.2772 8.49033 16.4905C7.70364 15.7038 7.15832 14.7085 6.9187 13.6221C6.67908 12.5356 6.75514 11.4033 7.13792 10.3587C7.5207 9.31405 8.19423 8.40066 9.07908 7.72626C9.96393 7.05185 11.0232 6.64455 12.1319 6.55239ZM20.2029 0.847386C20.4159 0.935678 20.5979 1.08508 20.726 1.27673C20.8541 1.46838 20.9226 1.69369 20.9227 1.92422V4.05922H23.0566C23.2873 4.05927 23.5128 4.12772 23.7046 4.25592C23.8964 4.38412 24.0459 4.56631 24.1342 4.77945C24.2225 4.9926 24.2456 5.22714 24.2006 5.45342C24.1556 5.6797 24.0445 5.88756 23.8814 6.05072L19.7549 10.1726C19.5362 10.3914 19.2395 10.5143 18.9301 10.5144H16.1149L13.9822 12.6482C13.7633 12.8671 13.4664 12.9901 13.1568 12.9901C12.8472 12.9901 12.5503 12.8671 12.3314 12.6482C12.1125 12.4293 11.9895 12.1324 11.9895 11.8228C11.9895 11.5132 12.1125 11.2163 12.3314 10.9974L14.4652 8.86589V6.04955C14.4651 5.89616 14.4953 5.74425 14.5539 5.60251C14.6126 5.46078 14.6986 5.332 14.8071 5.22355L18.9312 1.09939C19.0944 0.936131 19.3023 0.824937 19.5287 0.779872C19.755 0.734807 19.9897 0.757896 20.2029 0.846219" fill="#0070C0"/>
        </svg>
        <h3 className='text-2xl font-semibold mb-4'>Our Mission</h3>
        <p className='text-xs md:text-lg text-center'>To nurture, train, and empower the next generation of tech leaders through hands-on experience, mentorship, and community-driven development.</p>
      </article>
      </div>
    </section>

    <section className='mt-4 mb-8 md:mb-48 flex flex-col items-center px-6'>
      <h2 className={`mb-2 font-poppins text-[#272D37] font-bold text-3xl md:text-4xl text-center`}>Departments and Leadership</h2>
      <p className='text-xs md:text-base text-center mb-8 md:mb-20'>
        Meet the team guiding our talents and startups towards excellence.
      </p>
      <DirectorCards />
    </section>

    <section className='mb-16 md:mb-48 flex flex-col px-4'>
      <h2 className={`mb-2 font-poppins text-[#272D37] font-bold text-3xl text-center`}>News & Recents</h2>
      <p className='text-xs text-center mb-8'>Lorem ipsum dolor sit amet consectetur. Habitant dolor morbi ut molestie vulputate.</p>
      <NewSlider />

    </section>

  </>
  )
}

export default About;