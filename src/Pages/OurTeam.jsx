import React from 'react';

const teamDepartments = [
  {
    department: 'Our Management',
    members: [
      { name: 'Gurbir Singh Bhatia', role: 'Founder and Managing Director', linkedin: 'https://www.linkedin.com/in/gurbir/' },
      { name: 'Harish Kumar Gandhi', role: 'Chief Mentor', linkedin: 'https://www.linkedin.com/in/dr-harish-gandhi-947b4982' },
      { name: 'Pankaj Dua', role: 'Advisor & Consultant', linkedin: 'https://www.linkedin.com/in/pankaj-dua-142b9a48/' },
      { name: 'Tarun Thareja', role: 'Advisor & Consultant', linkedin: 'https://www.linkedin.com/in/tarun-thareja-40064848' },
      { name: 'Rahul Sinha', role: 'Advisor Overseas Business', linkedin: '' }
    ]
  },
  {
    department: 'IoT Services & Product',
    members: [
      { name: 'Abhijit Natu', role: 'India Delivery Head', linkedin: '' },
      { name: 'Ajay Batra', role: 'Head IoT', linkedin: 'https://www.linkedin.com/in/ajay-batra-515b501a6/' },
      { name: 'Abhishek Vashisht', role: 'IoT Data Expert', linkedin: 'https://www.linkedin.com/in/abhishekvashisht097' }
    ]
  },
  {
    department: 'Infrastructure Management',
    members: [
      { name: 'Ramanath Raiguru', role: 'Head Infra & IT', linkedin: 'https://www.linkedin.com/in/ramnathh-raiguruu-977a7221/' },
      { name: 'Sohan Silotri', role: 'IT Lead', linkedin: '' },
      { name: 'Abhijeet Gaikwad', role: 'IT Support Engineer', linkedin: '' },
      { name: 'Anand Kumar', role: 'IT Support Engineer', linkedin: '' }
    ]
  },
  {
    department: 'Data Analytics Services & Product',
    members: [
      { name: 'Balaji P', role: 'Vice President Analytics', linkedin: '' },
      { name: 'Sanjeev E', role: 'ETL Engineer', linkedin: '' },
      { name: 'Prajwal', role: 'Data Scientist', linkedin: '' },
      { name: 'Jigya Keertanaa', role: 'AI Expert', linkedin: '' },
      { name: 'Munvar Noor', role: 'Visualization Expert - Tableau', linkedin: '' },
      { name: 'Prasath', role: 'Visualization Expert Power BI', linkedin: '' },
      { name: 'Anurag', role: 'Data Engineer', linkedin: '' }
    ]
  },
  {
    department: 'Enterprise Application',
    members: [
      { name: 'Hemanth Lad', role: 'Head Enterprise Business', linkedin: '' },
      { name: 'Nippun Gupta', role: 'SAP Practice Head', linkedin: '' },
      { name: 'Shree Bhagwan', role: 'MS .Business Central', linkedin: '' },
      { name: 'Durga Devi', role: 'Team Leader', linkedin: '' },
      { name: 'Richa Tripathi', role: 'Developer – ASP, C#, XML', linkedin: '' }
    ]
  },
  {
    department: 'Digital',
    members: [
      { name: 'Narendra Singh', role: 'Developer', linkedin: '' },
      { name: 'Gurnoor Singh', role: 'Trainee', linkedin: '' }
    ]
  },
  {
    department: 'Sales and Support Organization',
    members: [
      { name: 'Sanya Chakarvarti', role: 'Business Development manager', linkedin: '' },
      { name: 'Amanpreet Kaur', role: 'HR Manager & Counselling Psychologist Consultant', linkedin: '' }
    ]
  }
];

// Helper to get initials for placeholder avatars
const getInitials = (name) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();
};

export default function OurTeam() {
  const styles = {
    pageWrapper: {
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
      padding: '60px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '60px',
    },
    badge: {
      display: 'inline-block',
      backgroundColor: '#eff6ff',
      color: '#2563eb',
      fontSize: '13px',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      padding: '6px 16px',
      borderRadius: '20px',
      marginBottom: '12px',
    },
    title: {
      fontSize: '38px',
      fontWeight: '800',
      color: '#0f172a',
      margin: '0',
      letterSpacing: '-0.5px',
    },
    deptSection: {
      marginBottom: '55px',
    },
    deptHeaderContainer: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    deptTitle: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#1e293b',
      margin: '0',
      display: 'inline-block',
      position: 'relative',
      paddingBottom: '8px',
    },
    deptUnderline: {
      content: '""',
      position: 'absolute',
      bottom: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '40px',
      height: '3px',
      backgroundColor: '#2563eb',
      borderRadius: '2px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 280px))',
      gap: '24px',
      justifyContent: 'center',
      justifyItems: 'center',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      padding: '30px 20px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: '280px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
      transition: 'all 0.3s ease',
      position: 'relative',
    },
    avatarPlaceholder: {
      width: '84px',
      height: '84px',
      borderRadius: '50%',
      backgroundColor: '#e0f2fe',
      color: '#0369a1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      fontWeight: '700',
      marginBottom: '18px',
      border: '2px solid #bae6fd',
    },
    linkedinBtn: {
      position: 'absolute',
      top: '16px',
      right: '16px',
      width: '32px',
      height: '32px',
      backgroundColor: '#f1f5f9',
      color: '#0a66c2',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '13px',
      fontWeight: 'bold',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
    },
    name: {
      fontSize: '17px',
      fontWeight: '700',
      color: '#0f172a',
      margin: '0 0 6px 0',
    },
    role: {
      fontSize: '13px',
      color: '#64748b',
      margin: '0',
      lineHeight: '1.4',
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        
        {/* Page Header */}
        <div style={styles.header}>
          <span style={styles.badge}>Our People</span>
          <h1 style={styles.title}>Meet Our Leadership & Experts</h1>
        </div>

        {/* Departments Loop */}
        {teamDepartments.map((dept, index) => (
          <div key={index} style={styles.deptSection}>
            <div style={styles.deptHeaderContainer}>
              <h2 style={styles.deptTitle}>
                {dept.department}
                <div style={styles.deptUnderline}></div>
              </h2>
            </div>
            
            <div style={styles.grid}>
              {dept.members.map((member, idx) => (
                <div 
                  key={idx} 
                  style={styles.card}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 12px 20px -3px rgba(0, 0, 0, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.02)';
                  }}
                >
                  {/* LinkedIn Badge */}
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={styles.linkedinBtn} 
                      title="LinkedIn Profile"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#0a66c2';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#f1f5f9';
                        e.currentTarget.style.color = '#0a66c2';
                      }}
                    >
                      in
                    </a>
                  )}

                  {/* Placeholder Avatar Space with Initials */}
                  <div style={styles.avatarPlaceholder}>
                    {getInitials(member.name)}
                  </div>

                  {/* Member Details */}
                  <h3 style={styles.name}>{member.name}</h3>
                  <p style={styles.role}>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}