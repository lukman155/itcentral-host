import React from 'react';
import Image from 'next/image';
import project1 from '@/public/images/project1.png'; // Assuming you have the image file
import project2 from '@/public/images/project2.png'; // Assuming you have the image file
import { User } from 'lucide-react';

function ProjectCard() {
  const projects = [
    {
      id: 1,
      image: project1,
      name: "AFCSC JAJI WEBSITE",
      contributors: "By: Amina, MrTeey, Ibrahim, Muhammad",
    },
    {
      id: 2,
      image: project2,
      name: "SIMPLIFY -AI ADVISORY PLATFORM",
      contributors: "By: Amina, Mr T, Ibrahim, Muhammad",
    },
    {
      id: 3,
      image: project1,
      name: "AFCSC JAJI WEBSITE",
      contributors: "By: Amina, Mr T, Ibrahim, Muhammad",
    },
    {
      id: 4,
      image: project2,
      name: "SIMPLIFY -AI ADVISORY PLATFORM",
      contributors: "By: Amina, Mr T, Ibrahim, Muhammad",
    },
    {
      id: 5,
      image: project1,
      name: "HealthCare App",
      contributors: "By: Fatima, Ali, Musa, Zainab",
    },
    {
      id: 6,
      image: project2,
      name: "SIMPLIFY -AI ADVISORY PLATFORM",
      contributors: "By: Amina, Mr T, Ibrahim, Muhammad",
    },
  ];

  return (
    <div style={{ padding: 50, width: "100vw", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>

      {projects.map((project) => (
        <div key={project.id} style={styles.cardContainer}>
          {/* Project Image */}
          <Image
            src={project.image}
            alt={project.name}
            width={490}
            height={300} // Adjusted height for better aspect ratio
            style={styles.projectImage as React.CSSProperties}
          />

          {/* Bottom content with user icon and name */}
          <div style={styles.cardFooter as React.CSSProperties}>
            {/* User Icon */}
            <User className='w-10 h-10 p-1'/>
            <div>
              {/* Project Name */}
              <p style={styles.projectName}>{project.name}</p>
              <p style={styles.projectBy}>{project.contributors}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// CSS styles for the card
const styles = {
  cardContainer: {
    width: 450, // Card width same as image width
    borderRadius: 32,
    overflow: 'hidden' as 'hidden', // Ensures nothing goes outside the card
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Card shadow for depth
    marginBottom: 50, // Add spacing between cards
    cursor: "pointer"
  },
  projectImage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardFooter: {
    width: '100%',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    padding: '0 15px',
    boxSizing: 'border-box' as 'border-box',
  },
  projectName: {
    marginLeft: 15,
    fontSize: 18,
    color: '#000',
    fontWeight: 600,
  },
  projectBy: {
    marginLeft: 15,
    fontSize: 15,
    color: '#000',
    fontWeight: 400,
  },
};

export default ProjectCard;
