import './App.css'

const profileData = {
  name: "Andre P",
  title: "Senior Full-Stack Web Developer",
  location: "Brazil (UTC-3)",
  timezone: "America/Sao_Paulo",
  workingHours: "6:00 AM - 10:00 PM",
  verifiedDate: "December 3, 2024",
  projectsDone: 1,
  hoursWorked: 518,
  directHire: "Possible",
  rate: "$65/hour",
  maxRate: "$75/hour",
  languages: [
    { name: "Portuguese", level: "Advanced" },
    { name: "English", level: "Advanced" },
  ],
  summary:
    "Andre is a Full-Stack Software Engineer specializing in React and Node. Additionally, the candidate is vastly familiar with AWS and has a basic acquaintance with Azure and GCP. Andre\u2019s prior leadership experience and communication skills, showcased in his interaction with Lemon.io\u2019s interviewers, show potential for leading projects with ease. He is open to new challenges, especially those related to the education and healthcare industries!",
  commercialExperience:
    "8 years commercial experience across management, productivity, recruiting, sales, B2B/B2C, direct sales, freemium, no-code software, platforms, and SaaS web development.",
  mainSkills: [
    { name: "AWS", years: "3.5" },
    { name: "React", years: "6.5" },
    { name: "Typescript", years: "6.5" },
    { name: "Node.js", years: "6" },
    { name: "Next.js", years: "4" },
  ],
  additionalSkills: [
    "Tailwind CSS", "Amazon RDS", "DynamoDB", "Prisma", "Redis",
    "Amazon ECS", "PostgreSQL", "Nest.js", "GraphQL", "Vercel",
    "Terraform", "Amazon EC2", "Lambda", "CloudWatch", "Express.js",
    "Twilio API", "Docker", "AWS CloudFormation", "Firebase", "MongoDB",
    "CI/CD", "Monorepo",
  ],
  experience: [
    {
      title: "Senior Full-Stack Developer",
      project: "Domain Marketplace",
      dateRange: "May 2024 - January 2025",
      duration: "8 months",
      description:
        "A marketplace for buying and selling domains with ease. Users can manage thousands of domains with top-notch customizations for pricing and appearance. The platform also allows users to manage leads and negotiate directly with their clients or assign a broker to do it at a fee. Multiple dashboards have been developed to serve sellers, brokers, and users.",
      responsibilities: [
        "Rebuilt checkout system with sales funneling, A/B tests, new designs",
        "Delivered mission-critical deployments targeting 25,000+ domains",
        "Developed complex domain search SQL mechanisms for optimized filtering/sorting",
        "Built infinite scroll table using TanStack Table for thousands of items",
        "Contributed to code quality improvements through refactoring and bug fixes",
        "Took ownership of features, working directly with client",
        "Implemented redesigned application",
      ],
      techStack: [
        "React", "Next.js", "Node.js", "AWS", "Prisma", "Tailwind CSS",
        "Mixpanel", "Sentry", "Amazon RDS", "AWS Lambda", "DynamoDB",
        "Redis", "Bull", "Typescript", "Docker", "Docker Compose",
      ],
    },
    {
      title: "Senior Full-Stack Developer",
      project: "Time-Tracking Tool",
      dateRange: "October 2023 - June 2024",
      duration: "8 months",
      description:
        "A business-focused time-tracking management tool. It allows users to invite employees, set their billable or internal rates, set availability, set group entries per client, and export what they should charge the client and employee payment during a period.",
      responsibilities: [
        "Took ownership as individual contributor, delivered MVP meeting tight deadline",
        "Led team of 3 developers (2 junior, 1 mid-level)",
        "Denormalized multi-currency NoSQL structure (70% cost reduction, 50% performance increase)",
        "Performed pull request reviews",
      ],
      techStack: [
        "React", "Next.js", "Node.js", "Cloud Firestore", "Tailwind CSS",
        "Amplify", "Amazon ECS", "Docker Compose", "Firebase", "Firestore",
      ],
    },
    {
      title: "Senior Full-Stack Developer",
      project: "Piercer Management Software",
      dateRange: "November 2023 - May 2024",
      duration: "6 months",
      description:
        "A software solution designed specifically for piercers, enabling seamless client and booking management. It allows piercers to take deposits, organize their agendas with highly customizable configurations, and optimize workflows to enhance efficiency and the client experience.",
      responsibilities: [
        "Created front-end architecture, authentication, backend integrations using Next.js app router",
        "Built calendar with multiple views for piercer agendas",
        "Architected drawer system handling 30+ drawers on single page",
        "Implemented pixel-perfect application following industry best standards",
      ],
      techStack: [
        "React", "Next.js", "Node.js", "Prisma", "PostgreSQL", "Redis",
        "Bull", "Tailwind CSS", "shadcn", "Docker", "Docker Compose",
      ],
    },
    {
      title: "Full-Stack Developer",
      project: "Venture Studio",
      dateRange: "August 2022 - October 2023",
      duration: "1 year, 2 months",
      description:
        "A venture studio, a fractional CTO and Technology partner specializing in AI and B2B SaaS.",
      responsibilities: [
        "Contributed to multiple projects in various configurations",
        "Developed backends and frontends across finance and healthcare domains",
        "Worked with data scientist on FHIR resource integration for patient data",
        "Led code improvement initiatives company-wide",
      ],
      techStack: [
        "React", "Next.js", "Node.js", "Typescript", "Nest.js", "Prisma",
        "AWS", "Tailwind CSS", "Redis", "Docker", "Docker Compose",
        "Cloud Firestore", "DynamoDB", "PostgreSQL",
      ],
    },
    {
      title: "Senior Full-Stack Developer",
      project: "No-Code Platform",
      dateRange: "May 2020 - June 2022",
      duration: "2 years",
      description:
        "A no-code platform for creating highly customizable applications, offering features like data fetching, theming, and GraphQL API deployment with data source integration and built-in deployment capabilities.",
      responsibilities: [
        "Led entire application development as primary developer",
        "Built no-code editor with 30+ customizable components",
        "Re-engineered backend deployer for AWS resources using AWS CDK",
        "Designed and provisioned infrastructure on AWS using Terraform",
        "Implemented all backend management routes using Next.js API routes",
      ],
      techStack: [
        "React", "Next.js", "Typescript", "Node.js", "AWS", "Amplify",
        "Terraform", "ChakraUI", "Design system", "JavaScript", "GraphQL",
        "Vercel",
      ],
    },
  ],
}

function CheckIcon() {
  return (
    <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

function BriefcaseIcon() {
  return (
    <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg className="info-alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function ClockSmallIcon() {
  return (
    <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile-header">
        <div className="lemon-logo">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <polygon points="20,2 38,14 32,36 8,36 2,14" fill="none" stroke="#212121" strokeWidth="2"/>
            <circle cx="20" cy="20" r="8" fill="#C6FF00" stroke="#212121" strokeWidth="2"/>
            <circle cx="20" cy="20" r="4" fill="#212121"/>
          </svg>
        </div>
        <div className="avatar">AP</div>
        <div className="name-row">
          <h1 className="profile-name">Andre</h1>
          <button className="share-btn" aria-label="Share">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"/>
              <circle cx="6" cy="12" r="3"/>
              <circle cx="18" cy="19" r="3"/>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
            </svg>
          </button>
        </div>
        <p className="profile-from">From Brazil (UTC-3) <span className="flag">{"🇧🇷"}</span></p>
      </div>

      <div className="profile-role">
        <span className="role-text">FULL-STACK WEB DEVELOPER</span>
        <span className="role-divider">|</span>
        <span className="role-level">SENIOR</span>
      </div>

      <div className="lemon-stats">
        <h3 className="lemon-stats-title">Lemon.io stats</h3>
        <div className="stats-row">
          <div className="stat-block">
            <span className="stat-number">{profileData.projectsDone}</span>
            <span className="stat-label">projects done</span>
          </div>
          <div className="stat-block">
            <span className="stat-number">{profileData.hoursWorked}</span>
            <span className="stat-label">hours worked</span>
          </div>
        </div>
      </div>

      <div className="verified-badge">
        <svg className="verified-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#0288D1"/>
          <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="verified-text">Skills and seniority verified on Dec 3, 2024</span>
      </div>
    </aside>
  )
}

function MainContent() {
  const experienceAreas = [
    "Management", "Productivity", "Recruiting", "Sales", "B2B",
    "B2C", "Direct sales", "Freemium", "No-code software",
    "Platforms", "SaaS", "Web development",
  ]

  const experiences = [
    {
      title: "SENIOR FULL-STACK DEVELOPER",
      dateRange: "MAY 2024 - JAN 2025",
      duration: "8 MONTHS",
      overview: "A marketplace for buying and selling domains with ease. Users can manage thousands of domains with top-notch customizations for pricing and appearance. The platform also allows users to manage leads and negotiate directly with their clients or assign a broker to do it at a fee. Multiple dashboards have been developed to serve sellers, brokers, and users.",
      categories: ["Sales", "Platforms", "SaaS"],
      responsibilities: [
        "Rebuilt the checkout system, introducing sales funneling, A/B tests, and new designs;",
        "Delivered successfully mission-critical deployments that target +25.000 domains;",
        "Developed a set of complex domain search SQL mechanisms, allowing the optimized search of highly customizable filters and sorts;",
        "Built an infinite scroll table using TanStack Table, which allows thousands of items to be fetched with ease. Highly customizable, auto-sizable, mobile-friendly, sortable, and with complex selection mechanisms;",
        "Contributed massively to code quality improvements, with multiple refactors, bug fixing, revamps, increasing type safety, and adding monitoring.",
        "Took ownership of many features, dealing directly with the client;",
        "Implemented the redesigned application.",
      ],
      techStack: [
        "React", "Next.js", "Node.js", "AWS", "Prisma", "Tailwind CSS",
        "Mixpanel", "Sentry", "Amazon RDS", "AWS Lambda", "DynamoDB",
        "Redis", "Bull", "Typescript", "Docker", "Docker Compose",
      ],
    },
    {
      title: "SENIOR FULL-STACK DEVELOPER",
      dateRange: "OCT 2023 - JUN 2024",
      duration: "8 MONTHS",
      overview: "A business-focused time-tracking management tool. It allows users to invite employees, set their billable or internal rates, set availability, set group entries per client, and export what they should charge the client and employee payment during a period.",
      categories: ["Management", "Freemium", "SaaS"],
      responsibilities: [
        "Took ownership initially as an individual contributor and successfully delivered an MVP within a tight deadline, which started being used internally, cutting 50% of the company's fixed costs;",
        "Led a team of 3 developers (two junior, one mid-level), achieving precious deliveries while having the team part-time;",
        "Denormalized a multi-currency NoSQL data structure, achieving a 70% cost reduction and a 50% increase in performance;",
        "Performed many pull request reviews.",
      ],
      techStack: [
        "React", "Next.js", "Node.js", "Cloud Firestore", "Tailwind CSS",
        "Amplify", "Amazon ECS", "Docker Compose", "Firebase", "Firestore",
      ],
    },
    {
      title: "SENIOR FULL-STACK DEVELOPER",
      dateRange: "NOV 2023 - MAY 2024",
      duration: "6 MONTHS",
      overview: "A software solution designed specifically for piercers, enabling seamless client and booking management. It allows piercers to take deposits, organize their agendas with highly customizable configurations, and optimize workflows to enhance efficiency and the client experience.",
      categories: ["Productivity", "B2C", "Direct sales", "SaaS"],
      responsibilities: [
        "Created the front-end architecture, authentication, and integrations with the backend and components using the Next.js app router;",
        "Built a calendar with multiple views that is used as the agenda for the piercers;",
        "Architectured a drawer system that handled more than 30 drawers in a single page. The system is used as the pattern throughout the application while maintaining a top-notch DX;",
        "Implemented a pixel-perfect application using shadcn while following the industry's best standards.",
      ],
      techStack: [
        "React", "Next.js", "Node.js", "Prisma", "PostgreSQL", "Redis",
        "Bull", "Tailwind CSS", "shadcn", "Docker", "Docker Compose",
      ],
    },
    {
      title: "FULL-STACK DEVELOPER",
      dateRange: "AUG 2022 - OCT 2023",
      duration: "1 YEAR 2 MONTHS",
      overview: "A venture studio, a fractional CTO and Technology partner specializing in AI and B2B SaaS.",
      categories: ["Recruiting", "B2B", "Platforms", "Web development"],
      responsibilities: [
        "Contributed to multiple projects across diverse configurations, including as an individual contributor, in staff augmentation roles, and as a lead overseeing an additional developer;",
        "Developed many back-ends and front-ends, ranging from finance to healthcare;",
        "Worked with a data scientist to learn high-valuable information through an FHIR resource integration for patient data and building a dashboard;",
        "Spearheaded code improvement initiatives across the whole company.",
      ],
      techStack: [
        "React", "Next.js", "Node.js", "Typescript", "Nest.js", "Prisma",
        "AWS", "Tailwind CSS", "Redis", "Docker", "Docker Compose",
        "Cloud Firestore", "DynamoDB", "PostgreSQL",
      ],
    },
    {
      title: "SENIOR FULL-STACK DEVELOPER",
      dateRange: "MAY 2020 - JUN 2022",
      duration: "2 YEARS",
      overview: "A no-code platform for creating highly customizable applications, offering features like data fetching, theming, and GraphQL API deployment with data source integration and built-in deployment capabilities.",
      categories: ["No-code software", "SaaS"],
      responsibilities: [
        "Led the development of the entire application, serving as the primary developer responsible for the codebase;",
        "Built advanced front-end features, including a no-code editor with over 30 highly customizable components, supporting theming, GraphQL introspection-based data-fetching, and auto-completion capabilities derived from the introspection schema;",
        "Re-engineered the backend deployer to streamline deployments of AWS resources, including AppSync, Lambda, and DynamoDB, using AWS CDK;",
        "Designed and provisioned the application infrastructure on AWS using Terraform, including creating and managing GraphQL APIs;",
        "Implemented all backend management routes using Next.js API routes.",
      ],
      techStack: [
        "React", "Next.js", "Typescript", "Node.js", "AWS", "Amplify",
        "Terraform", "ChakraUI", "Design system", "JavaScript", "GraphQL",
        "Vercel",
      ],
    },
  ]

  return (
    <main className="main-content">
      <div className="section">
        <h3 className="section-heading">Summary</h3>
        <p className="summary-text">{profileData.summary}</p>
      </div>

      <div className="section">
        <div className="experience-years">
          <span className="experience-years-text">8 years of commercial experience in</span>
          <div className="area-tags">
            {experienceAreas.map((area) => (
              <span key={area} className="area-tag">{area}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h3 className="section-heading">Main technologies</h3>
        <div className="skills-main">
          {profileData.mainSkills.map((skill) => (
            <div key={skill.name} className="skill-tag">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-years">{skill.years} years</span>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h3 className="section-heading">Additional skills</h3>
        <div className="skills-additional">
          {profileData.additionalSkills.map((skill) => (
            <span key={skill} className="skill-extra">{skill}</span>
          ))}
        </div>
      </div>

      <div className="avail-hire-row">
        <div className="avail-hire-col">
          <h3 className="avail-hire-title">Availability</h3>
          <span className="avail-hire-value">to be verified</span>
        </div>
        <div className="avail-hire-col">
          <h3 className="avail-hire-title">Direct hire</h3>
          <span className="avail-hire-value">Possible</span>
        </div>
      </div>

      <div className="section">
        <h3 className="exp-highlights-title"><em>Experience Highlights</em></h3>
        {experiences.map((exp, idx) => (
          <div key={idx} className="experience-item">
            <div className="exp-header">
              <div className="timeline-dot"></div>
              <div className="exp-header-content">
                <h4 className="exp-title">{exp.title}</h4>
                <div className="exp-meta">
                  <span className="exp-date">{exp.dateRange}</span>
                  <span className="exp-duration">{exp.duration}</span>
                </div>
              </div>
            </div>

            <div className="exp-body">
              <div className="exp-overview">
                <h5 className="exp-overview-title">Project Overview</h5>
                <p className="exp-overview-text">{exp.overview}</p>
              </div>

              <div className="exp-categories">
                {exp.categories.map((cat) => (
                  <span key={cat} className="category-tag">
                    <svg className="hash-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="4" y1="9" x2="20" y2="9"/>
                      <line x1="4" y1="15" x2="20" y2="15"/>
                      <line x1="10" y1="3" x2="8" y2="21"/>
                      <line x1="16" y1="3" x2="14" y2="21"/>
                    </svg>
                    {cat}
                  </span>
                ))}
              </div>

              <div className="exp-resp">
                <h5 className="exp-resp-title">Responsibilities:</h5>
                <ul className="exp-responsibilities">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div className="exp-stack">
                <h5 className="exp-stack-title">Project Tech stack:</h5>
                <div className="exp-tech">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

function App() {
  return (
    <div className="page-wrapper">
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
