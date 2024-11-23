'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { localPageData, Solution } from './pageData';

interface Interests {
  ux: boolean;
  web: boolean;
  system: boolean;
  graphic: boolean;
  other: boolean;
}

export default function LocalPage(): JSX.Element {
  const [interests, setInterests] = useState<Interests>({
    ux: false,
    web: false,
    system: false,
    graphic: false,
    other: false
  });

  const [isFormOpen, setFormOpen] = useState(false);
  const openForm = () => setFormOpen(true);
  const closeForm = () => setFormOpen(false);
  const toggleInterest = (key: keyof Interests) => {
    setInterests(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <Header title={localPageData.headerTitle} subtitle={localPageData.headerSubtitle} />
      <SolutionsSection solutions={localPageData.solutions} />
      <CallToActionSection 
        title={localPageData.ctaTitle}
        description={localPageData.ctaDescription}
        applicationOpen={localPageData.applicationOpen} 
        openForm={openForm} 
      />
      {isFormOpen && <StartupForm onClose={closeForm} interests={interests} toggleInterest={toggleInterest} />}
    </>
  );
}

function Header({ title, subtitle }: { title: string; subtitle: string }): JSX.Element {
  return (
    <section className="md:h-[297px] text-white flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#012A47] to-[#0266AD]">
      <h2 className="mb-[20px] text-white text-center font-semibold font-poppins text-[40px] md:text-[48px]">
        <span className="px-4 bg-[#37689E]">{title.split(' ')[0]}</span> {title.split(' ').slice(1).join(' ')}
      </h2>
      <p className='font-[400] hidden md:block md:text-[22px] font-inter'>
        {subtitle}
      </p>
    </section>
  );
}

function SolutionsSection({ solutions }: { solutions: Solution[] }): JSX.Element {
  return (
    <section className="p-4 flex flex-col items-center gap-10 font-poppins">
      {solutions.map((solution, index) => (
        <SolutionCard key={solution.id} solution={solution} index={index} />
      ))}
    </section>
  );
}

function SolutionCard({ solution, index }: { solution: Solution; index: number }): JSX.Element {
  return (
    <div 
      className={`flex flex-col justify-around gap-5 md:gap-20 bg-white p-4 rounded-[5px] ${
        index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      <div className='mb-[18px] flex flex-col justify-center max-w-[500px]'>
        <Image
          src={solution.logo}
          alt={solution.name}
          width={100}
          height={50}
        />
        <h3 className="mb-[18px] font-bold text-[30px]">{solution.name}</h3>
        <p className='mb-[20px]'>{solution.description}</p>
        <Link
          className="self-start bg-[#0070C0] text-white px-4 py-2 rounded-[8px]"
          href={solution.link}
        >
          Visit website
        </Link>
      </div>

      <div className="min-w-[45%] max-w-[400px] flex items-center">
        <Image
          src={solution.imageUrl}
          alt={solution.name}
          width={690}
          height={653}
        />
      </div>
    </div>
  );
}

function CallToActionSection({ title, description, applicationOpen, openForm }: { 
  title: string; 
  description: string; 
  applicationOpen: boolean; 
  openForm: () => void 
}): JSX.Element {
  return (
    <section className="md:my-40 p-5 md:p-20 bg-cover bg-center bg-blend-darken md:h-[698px] items-start justify-center md:justify-end flex flex-col"
      style={{ backgroundImage: 'url("/images/localbg.png")' }}
    >
      <div className="font-poppins p-[30px] md:p-[90px] bg-white flex flex-col gap-10">
        <h2 className='text-[16px] md:text-[32px] font-[600] text-[#012A47]'>
          {title}
        </h2>
        <p className="text-[12px] md:text-[20px] ">
          {description}
        </p>

        {applicationOpen ? (
          <button
            className="self-start bg-[#0070C0] text-white px-4 py-2 rounded-[8px]"
            onClick={openForm}
          >
            Apply now
          </button>
        ) : (
          <p className='font-[700] text-[12px] md:text-[20px] text-[#888]'>
            Application closed
          </p>
        )}
      </div>
    </section>
  );
}

// StartupForm component remains the same as in the previous version

interface StartupFormProps {
  onClose: () => void;
  interests: Interests;
  toggleInterest: (key: keyof Interests) => void;
}

function StartupForm({ onClose, interests, toggleInterest }: StartupFormProps): JSX.Element {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform form submission logic here
    onClose();
  };

  return (
    <div className="fixed p-2 inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <Card ref={formRef} className="w-full rounded-3xl max-w-md mx-auto bg-white text-[#787878]">
        <CardHeader>
          <CardTitle className="text-[20px] font-semibold text-[#094874]">I am interested in:</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {(Object.keys(interests) as Array<keyof Interests>).map((key) => (
              <Button 
                key={key}
                onClick={() => toggleInterest(key)}
                className={interests[key] ? "bg-[#094874] text-[white] rounded-full hover:bg-[#06375a]" : "rounded-full hover:text-[#094874] outline outline-1 border-0"} 
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Button>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input 
              placeholder="Your name" 
              className="bg-transparent rounded-full border-b border-gray-600 px-5 placeholder:text-gray-400"
            />
            <Input 
              type="email" 
              placeholder="Your email" 
              className="bg-transparent border-b border-gray-600 rounded-full px-5 placeholder:text-gray-400"
            />
            <Textarea 
              placeholder="Your message" 
              className="bg-transparent border-b border-gray-600 rounded-2xl px-5 placeholder:text-gray-400 min-h-[100px]"
            />
            <Button type="submit" className="w-full text-white hover:outline outline-1 hover:outline-black rounded-full bg-[#0a2540] border border-white hover:bg-white hover:text-[#0a2540] transition-colors">
              Send message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}