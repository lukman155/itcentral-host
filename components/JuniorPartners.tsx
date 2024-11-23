import React from 'react'
import junior_parner1 from '@/public/images/junior_parner1.png'; // Assuming you have the image file
import junior_parner2 from '@/public/images/junior_parner2.png'; // Assuming you have the image file
import junior_parner3 from '@/public/images/junior_parner3.png'; // Assuming you have the image file
import junior_parner4 from '@/public/images/junior_parner4.png'; // Assuming you have the image file
import userIcon from '../public/icon.png'; // Assuming you have a user icon
import Image from 'next/image';


function JuniorPartners() {

  const projects = [
    {
      id: 1,
      image: junior_parner1,
      name: "Amina Mustapha",
      contributors: "Skills: UI/UX Design, Research",
      projects: "projects: Jaji , Simplifi"
    },
    {
      id: 2,
      image: junior_parner2,
      name: "Amina Mustapha",
      contributors: "Skills: UI/UX Design, Research",
      projects: "projects: Jaji , Simplifi"
    },
    {
      id: 3,
      image: junior_parner3,
      name: "Amina Mustapha",
      contributors: "Skills: UI/UX Design, Research",
      projects: "projects: Jaji , Simplifi"
    },
    {
      id: 4,
      image: junior_parner4,
      name: "Amina Mustapha",
      contributors: "Skills: UI/UX Design, Research",
      projects: "projects: Jaji , Simplifi"
    },

  ];

  return (
    <div>
      <h3 style={{ color: "#272D37", fontWeight: "bold", fontSize: 32, textAlign: "center" }}>Junior Partners</h3>
      <p style={{ color: "#5F6D7E", fontWeight: "regular", fontSize: 16, textAlign: "center" }}>Lorem ipsum dolor sit amet consectetur. Posuere volutpat .</p>

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

              <div>
                {/* Project Name */}
                <p style={styles.projectName}>{project.name}</p>
                <p style={styles.projectBy}>{project.contributors}</p>
                <p style={styles.projectBy}>{project.projects}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  cardContainer: {
    width: 300, // Card width same as image width
    borderRadius: 32,
    overflow: 'hidden' as 'hidden', // Ensures nothing goes outside the card
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Card shadow for depth
    marginBottom: 50, // Add spacing between cards
    cursor: "pointer"
  },
  projectImage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    filter: 'grayscale(100%)',
  },
  cardFooter: {
    width: '100%',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    padding: '0 15px',
    boxSizing: 'border-box' as 'border-box',
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: '50%',
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

export default JuniorPartners
