import React from 'react';

function JobPosting() {
  // Dummy data for 6 job postings
  const jobData = [
    {
      id: 1,
      company: 'IT Central',
      location: 'REMOTE',
      title: 'Creative Development',
      description:
        'Lorem ipsum dolor sit amet consectetur. Risus dictum id mauris eget. Quis id tempus lectus laoreet.',
      salary: 'N50,000.00',
      timePosted: '15 hours ago',
    },
    {
      id: 2,
      company: 'IT Central',
      location: 'REMOTE',
      title: 'Creative Development',
      description:
        'Lorem ipsum dolor sit amet consectetur. Risus dictum id mauris eget. Quis id tempus lectus laoreet.',
      salary: 'N50,000.00',
      timePosted: '15 hours ago',
    },
    {
      id: 3,
      company: 'IT Central',
      location: 'REMOTE',
      title: 'Creative Development',
      description:
        'Lorem ipsum dolor sit amet consectetur. Risus dictum id mauris eget. Quis id tempus lectus laoreet.',
      salary: 'N50,000.00',
      timePosted: '15 hours ago',
    },
    {
      id: 4,
      company: 'IT Central',
      location: 'REMOTE',
      title: 'Creative Development',
      description:
        'Lorem ipsum dolor sit amet consectetur. Risus dictum id mauris eget. Quis id tempus lectus laoreet.',
      salary: 'N50,000.00',
      timePosted: '15 hours ago',
    },
    {
      id: 5,
      company: 'IT Central',
      location: 'REMOTE',
      title: 'Creative Development',
      description:
        'Lorem ipsum dolor sit amet consectetur. Risus dictum id mauris eget. Quis id tempus lectus laoreet.',
      salary: 'N50,000.00',
      timePosted: '15 hours ago',
    },
    {
      id: 6,
      company: 'IT Central',
      location: 'REMOTE',
      title: 'Creative Development',
      description:
        'Lorem ipsum dolor sit amet consectetur. Risus dictum id mauris eget. Quis id tempus lectus laoreet.',
      salary: 'N50,000.00',
      timePosted: '15 hours ago',
    },
  ];

  return (
    <div style={{ paddingLeft: 100, paddingRight: 100 }}>
      <h3 style={{ color: '#272D37', fontWeight: 'bold', fontSize: 32, textAlign: 'center', marginTop: 30 }}>
        Job Postings
      </h3>
      <p style={{ color: '#5F6D7E', fontSize: 16, textAlign: 'center', marginBottom: 30 }}>
        Explore available job opportunities below.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '60px' }}>
        {jobData.map((job) => (
          <div
            key={job.id}
            style={{
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              cursor: "pointer"
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <h4 style={{ color: '#012A47', fontSize: '18px', fontWeight: 600 }}>{job.company}</h4>
              <p style={{ color: '#888', fontSize: '14px', fontWeight: 600, borderWidth: 1, borderColor: "#888", padding: 5, borderRadius: 10 }}>{job.location}</p>
            </div>
            <hr />
            <h3 style={{ fontSize: '20px', color: '#272D37', marginBottom: '10px', fontWeight: 600 }}>
              {job.title}
            </h3>
            <p style={{ color: '#5F6D7E', fontSize: '14px', marginBottom: '20px' }}>
              {job.description}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <h4 style={{ fontSize: '16px', color: '#333', fontWeight: 600 }}>Salary</h4>
              <p style={{ color: '#888', fontSize: '14px' }}>{job.salary}</p>
            </div>
            <hr />
            <p style={{ color: '#888', fontSize: '12px' }}>{job.timePosted}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobPosting;
