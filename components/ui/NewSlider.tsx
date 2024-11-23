'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { CalendarDays } from 'lucide-react'
import Link from 'next/link'

// Dummy data
const dummyPosts = [
  {
    id: 1,
    type:'achievement',
    title: "HACKATHON 2024",
    description: "Join our annual coding competition and showcase your skills!",
    year: "2024",
    image: "/images/hackNews.png"
  },
  {
    id: 2,
    type:'news',
    title: "TWITTER SPACE",
    description: "Explore the latest advancements in artificial intelligence.",
    year: "2024",
    image: "/images/twitterNews.png"
  },
  {
    id: 3,
    type:'news',
    title: "STARTUP PITCH",
    description: "Present your innovative ideas to potential investors.",
    year: "2023",
    image: "/images/twitterNews.png"
  },
  {
    id: 4,
    type:'achievement',
    title: "TECH AWARDS",
    description: "Celebrating excellence in technology and innovation.",
    year: "2023",
    image: "/images/threeWin.png"
  },
  {
    id: 5,
    type:'news',
    title: "BLOCKCHAIN SUMMIT",
    description: "Dive deep into the world of blockchain and cryptocurrencies.",
    year: "2024",
    image: "/images/twitterNews.png"
  },
  {
    id: 6,
    type:'achievement',
    title: "WOMEN IN TECH",
    description: "Empowering women in the technology industry.",
    year: "2023",
    image: "/images/threeWin.png"
  },
  {
    id: 7,
    type:'achievement',
    title: "WOMEN IN TECH",
    description: "Empowering women in the technology industry.",
    year: "2023",
    image: "/images/threeWin.png"
  },
  {
    id: 8,
    type:'achievement',
    title: "WOMEN IN TECH",
    description: "Empowering women in the technology industry.",
    year: "2023",
    image: "/images/threeWin.png"
  },
  {
    id: 9,
    type:'achievement',
    title: "WOMEN IN TECH",
    description: "Empowering women in the technology industry.",
    year: "2023",
    image: "/images/threeWin.png"
  },
]

export default function ResponsiveNewSlider() {
  const [activeTab, setActiveTab] = useState('news')
  const newsTabRef = useRef<HTMLButtonElement>(null)
  const achievementsTabRef = useRef<HTMLButtonElement>(null)
  const [borderStyle, setBorderStyle] = useState({})

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  useEffect(() => {
    const activeTabElement = activeTab === 'news' ? newsTabRef.current : achievementsTabRef.current
    if (activeTabElement) {
      setBorderStyle({
        width: `${activeTabElement.offsetWidth* .75}px`,
        transform: `translateX(${activeTabElement.offsetLeft}px)`,
      })
    }
  }, [activeTab])

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="relative flex gap-6 border-b border-gray-200 mb-6">
        <button
          ref={newsTabRef}
          className={`font-poppins text-[17.5px] sm:text-base transition-colors duration-300 ${
            activeTab === "news" ? "text-black font-medium" : "text-gray-500"
          }`}
          onClick={() => handleTabChange("news")}
          aria-selected={activeTab === "news"}
          role="tab"
        >
          Recent News
        </button>

        <div
          className="absolute bottom-0 h-0.5 bg-[#0070C0] transition-all duration-300 ease-in-out"
          style={borderStyle}
          aria-hidden="true"
        />
      </div>
      <div className="relative">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center transition-opacity duration-300 ${
            activeTab === "news"
              ? "opacity-100"
              : "opacity-0 hidden absolute inset-0 pointer-events-none"
          }`}
        >
          {dummyPosts.map((post) => (
            <Article key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Article({ title, description, year, image }: { 
  title: string, 
  description: string, 
  year: string,
  image: string
}) {
  return (
    <article className='flex flex-col max-w-sm w-full'>
      <div className='rounded-3xl border h-full flex flex-col'>
        <Image className='rounded-3xl rounded-b-none w-full h-auto' src={image} alt={title} width={360} height={238} />
        <div className='flex flex-col flex-grow p-6'>
          <h3 className='mb-2 font-poppins text-xl font-medium'>{title}</h3>
          <p className='mb-4 font-poppins text-sm flex-grow'>{description}</p>
          <div className='mt-auto'>
            <p className='font-poppins inline-flex gap-1 items-center text-[#272D37] pb-4 mb-4 border-b text-sm'>
              <CalendarDays className="w-4 h-4" />{year}
            </p>
            <Link className='text-[#0070C0] text-right block text-sm' href='#'>View More</Link>
          </div>
        </div>
      </div>
    </article>
  )
}