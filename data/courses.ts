export interface Course {
  id: string;
  name: string;
  shortName: string;
  category: "IT & Tech" | "Management" | "Commerce & Finance" | "Arts & Humanities" | "Science" | "Diplomas";
  level: "Undergraduate (UG)" | "Postgraduate (PG)" | "Diploma & Cert" | "Executive";
  duration: string;
  eligibility: string;
  eligibilityShort: string;
  avgFeesPerSem: string;
  totalFeeEstimate: string;
  mode: "Distance Learning" | "Online / Distance" | "Hybrid";
  approvedBy: string[];
  partnerUniversities: string[];
  universitiesCount: string;
  badge?: string;
  highlightTag?: string;
  visualType?: "bca" | "mca" | "mba" | "bba" | "bcom" | "mcom" | "ba" | "ma" | "msc" | "diploma";
  image: string;
  description: string;
  careerRoles: string[];
  keyHighlights: string[];
  semesterHighlights: {
    sem: string;
    subjects: string[];
  }[];
  isPopular?: boolean;
  isHighSalary?: boolean;
  isLowFee?: boolean;
  isShortDuration?: boolean;
  hasPlacement?: boolean;
}

export const COURSES: Course[] = [
  {
    id: "bca",
    name: "Bachelor of Computer Applications (BCA)",
    shortName: "BCA",
    category: "IT & Tech",
    level: "Undergraduate (UG)",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 with minimum 45% (Any stream, Maths/CS preferred)",
    eligibilityShort: "10+2 Min. 45%",
    avgFeesPerSem: "₹9,500 - ₹14,000 / Sem",
    totalFeeEstimate: "₹57,000 - ₹84,000",
    mode: "Distance Learning",
    approvedBy: ["UGC-DEB", "AICTE"],
    partnerUniversities: [
      "Mangalayatan",
      "Subharti",
      "SGVU",
      "Manipal",
      "Amity"
    ],
    universitiesCount: "50+ Universities",
    image: "/images/courses/course_bca.jpg",
    badge: "Most Popular IT Degree",
    highlightTag: "🔥 Most Popular",
    visualType: "bca",
    isPopular: true,
    isHighSalary: true,
    isLowFee: true,
    isShortDuration: false,
    hasPlacement: true,
    description: "Launch your career in IT and Software Engineering with a UGC-DEB recognized Distance BCA. Master programming, cloud computing & web technologies.",
    careerRoles: [
      "Software Developer",
      "Full Stack Web Developer",
      "Database Administrator",
      "System Analyst",
      "Network Administrator",
      "Technical Support Engineer"
    ],
    keyHighlights: [
      "100% UGC-DEB recognized degree valid for all Govt. & MNC jobs",
      "Updated syllabus with Python, React, Java, and SQL",
      "Self-paced digital LMS with e-books, recorded sessions & assignment support",
      "Flexible semester examination windows (Online / Regional Centers)",
      "Transparent semester-wise direct university fee payments"
    ],
    semesterHighlights: [
      { sem: "Semester 1", subjects: ["Programming in C", "Digital Electronics", "Mathematical Foundation", "Communication Skills"] },
      { sem: "Semester 2", subjects: ["Data Structures using C++", "Database Management Systems (DBMS)", "Operating Systems", "Environmental Studies"] },
      { sem: "Semester 3", subjects: ["Object-Oriented Programming with Java", "Computer Networks", "Web Technologies (HTML/CSS/JS)", "Discrete Mathematics"] },
      { sem: "Semester 4", subjects: ["Python Programming", "Software Engineering & Agile", "Relational Database & SQL", "Cloud Computing Basics"] },
      { sem: "Semester 5", subjects: ["Cyber Security Essentials", "Mobile App Development", "Advanced Java / .NET", "Elective Specialization"] },
      { sem: "Semester 6", subjects: ["Artificial Intelligence & ML Basics", "Capstone Major Project", "Industry Case Studies", "Viva-Voce"] }
    ]
  },
  {
    id: "mca",
    name: "Master of Computer Applications (MCA)",
    shortName: "MCA",
    category: "IT & Tech",
    level: "Postgraduate (PG)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Graduation (BCA/B.Sc IT/B.Tech or Any Graduate with Maths at 10+2/Grad level)",
    eligibilityShort: "Graduation Any stream",
    avgFeesPerSem: "₹12,500 - ₹18,000 / Sem",
    totalFeeEstimate: "₹50,000 - ₹72,000",
    mode: "Online / Distance",
    approvedBy: ["UGC-DEB", "AICTE"],
    partnerUniversities: [
      "Manipal",
      "Uttaranchal",
      "Swami Subharti",
      "Amity",
      "Mangalayatan"
    ],
    universitiesCount: "40+ Universities",
    image: "/images/courses/course_mca.jpg",
    badge: "High Salary Growth",
    highlightTag: "📈 High Salary Growth",
    visualType: "mca",
    isPopular: true,
    isHighSalary: true,
    isLowFee: false,
    isShortDuration: true,
    hasPlacement: true,
    description: "Accelerate to senior IT roles, architecture, and technology leadership with a UGC-DEB MCA.",
    careerRoles: [
      "Senior Software Engineer",
      "Cloud Architect",
      "Data Scientist / AI Engineer",
      "DevOps Specialist",
      "IT Project Manager",
      "Cybersecurity Consultant"
    ],
    keyHighlights: [
      "AICTE compliant 2-year modern postgraduate curriculum",
      "Advanced modules in AI, Machine Learning, Cloud Services & Microservices",
      "Equivalence to Regular B.Tech/M.Tech for MNC & PSU recruitment",
      "Dedicated live doubt-clearing sessions and hands-on project mentoring",
      "Guaranteed university enrollment verification number on day one"
    ],
    semesterHighlights: [
      { sem: "Semester 1", subjects: ["Advanced Data Structures & Algorithms", "Advanced Computer Architecture", "Enterprise Java & Spring Boot", "Relational & NoSQL Databases"] },
      { sem: "Semester 2", subjects: ["Full Stack Development (MERN/MEAN)", "Cloud Infrastructure (AWS/Azure)", "Software Testing & QA", "Information Security & Cryptography"] },
      { sem: "Semester 3", subjects: ["Artificial Intelligence & Deep Learning", "Big Data Analytics & Spark", "DevOps & CI/CD Pipelines", "Elective Specialization"] },
      { sem: "Semester 4", subjects: ["Enterprise Capstone Project", "Research Paper / Technical Publication", "Industry Internship Assessment", "Comprehensive Viva"] }
    ]
  },
  {
    id: "mba",
    name: "Master of Business Administration (MBA)",
    shortName: "MBA",
    category: "Management",
    level: "Postgraduate (PG)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Graduation in any discipline from a recognized University (Min 45-50%)",
    eligibilityShort: "Graduation Any discipline",
    avgFeesPerSem: "₹13,500 - ₹22,000 / Sem",
    totalFeeEstimate: "₹54,000 - ₹88,000",
    mode: "Distance Learning",
    approvedBy: ["UGC-DEB", "AICTE"],
    partnerUniversities: [
      "IGNOU",
      "Manipal",
      "Suresh Gyan Vihar",
      "Chandigarh",
      "Subharti"
    ],
    universitiesCount: "60+ Universities",
    image: "/images/courses/course_mba.jpg",
    badge: "#1 Career Booster",
    highlightTag: "👑 #1 Career Booster",
    visualType: "mba",
    isPopular: true,
    isHighSalary: true,
    isLowFee: false,
    isShortDuration: true,
    hasPlacement: true,
    description: "Master modern leadership, financial analysis, strategic marketing & HR with a UGC-DEB MBA.",
    careerRoles: [
      "Business Development Manager",
      "Operations & Supply Chain Lead",
      "Marketing Director / Brand Manager",
      "Financial Analyst & Consultant",
      "HR Business Partner (HRBP)",
      "Product & Strategy Manager"
    ],
    keyHighlights: [
      "Specializations: Marketing, Finance, HR, IT, Operations, Healthcare, Digital Marketing",
      "Case-study based learning directly aligned with Harvard & IIM frameworks",
      "Eligible for Government promotions, PSU recruitment, and international visas (WES approved)",
      "No mandatory classroom attendance; learn anywhere, anytime",
      "Special corporate executive discount schemes & semester-wise fee payments"
    ],
    semesterHighlights: [
      { sem: "Semester 1", subjects: ["Principles of Management", "Managerial Economics", "Financial Accounting & Reporting", "Organizational Behavior", "Business Statistics"] },
      { sem: "Semester 2", subjects: ["Marketing Management", "Human Resource Management", "Corporate Finance", "Operations & Supply Chain", "Business Research Methods"] },
      { sem: "Semester 3", subjects: ["Strategic Management", "International Business", "Specialization Subject 1", "Specialization Subject 2", "Specialization Subject 3"] },
      { sem: "Semester 4", subjects: ["Entrepreneurship & Innovation", "Business Ethics & Corporate Governance", "Major Specialization Project", "Comprehensive Viva"] }
    ]
  },
  {
    id: "bba",
    name: "Bachelor of Business Administration (BBA)",
    shortName: "BBA",
    category: "Management",
    level: "Undergraduate (UG)",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 passed from any recognized education board",
    eligibilityShort: "10+2 Any stream",
    avgFeesPerSem: "₹8,500 - ₹12,000 / Sem",
    totalFeeEstimate: "₹51,000 - ₹72,000",
    mode: "Distance Learning",
    approvedBy: ["UGC-DEB", "AIU"],
    partnerUniversities: [
      "Mangalayatan",
      "Subharti",
      "Suresh Gyan Vihar",
      "Amity"
    ],
    universitiesCount: "45+ Universities",
    image: "/images/courses/course_bba.jpg",
    badge: "Foundation for Leadership",
    highlightTag: "💼 Leadership Foundation",
    visualType: "bba",
    isPopular: true,
    isHighSalary: false,
    isLowFee: true,
    isShortDuration: false,
    hasPlacement: true,
    description: "Build a solid foundation in corporate business principles, accounting, marketing dynamics & management.",
    careerRoles: [
      "Business Associate",
      "Executive Trainee",
      "Sales & Marketing Executive",
      "Relationship Manager",
      "Client Relations Lead",
      "Operations Coordinator"
    ],
    keyHighlights: [
      "Comprehensive grounding in business communication & management fundamentals",
      "Ideal for young aspirants preparing simultaneously for competitive exams (UPSC/Banking)",
      "Affordable fees with study material delivered to your doorstep",
      "Easy transition into premier MBA programs globally"
    ],
    semesterHighlights: [
      { sem: "Semester 1", subjects: ["Management Concepts", "Financial Accounting", "Business Economics", "Business Communication"] },
      { sem: "Semester 2", subjects: ["Marketing Principles", "Human Resource Basics", "Business Mathematics", "Computer Fundamentals in Business"] },
      { sem: "Semester 3", subjects: ["Cost Accounting", "Business Law", "Organizational Behaviour", "Production & Materials Management"] },
      { sem: "Semester 4", subjects: ["Management Information Systems", "Financial Management", "Consumer Behavior", "Research Methodology"] },
      { sem: "Semester 5", subjects: ["Advertising & Sales Promotion", "Banking & Insurance", "International Business", "Taxation Laws"] },
      { sem: "Semester 6", subjects: ["Project Management", "Strategic Management", "E-Commerce & Digital Trends", "Final Project & Viva"] }
    ]
  },
  {
    id: "bcom",
    name: "Bachelor of Commerce (B.Com)",
    shortName: "B.Com",
    category: "Commerce & Finance",
    level: "Undergraduate (UG)",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 with Commerce / Science / Arts (Maths preferred)",
    eligibilityShort: "10+2 Passed",
    avgFeesPerSem: "₹8,500 - ₹12,000 / Sem",
    totalFeeEstimate: "₹51,000 - ₹72,000",
    mode: "Distance Learning",
    approvedBy: ["UGC-DEB", "AIU"],
    partnerUniversities: [
      "Mangalayatan",
      "Subharti",
      "SGVU",
      "IGNOU"
    ],
    universitiesCount: "40+ Universities",
    image: "/images/courses/course_bcom.jpg",
    badge: "Foundation in Finance",
    highlightTag: "📊 Finance & Accounts",
    visualType: "bcom",
    isPopular: true,
    isHighSalary: false,
    isLowFee: true,
    isShortDuration: false,
    hasPlacement: true,
    description: "Build financial acumen, corporate accounting skills, and taxation knowledge with UGC-DEB recognized B.Com.",
    careerRoles: [
      "Accountant & Tax Consultant",
      "Financial Analyst",
      "Banking Officer",
      "Auditor",
      "Accounts Executive"
    ],
    keyHighlights: [
      "Covers Corporate Accounting, GST, Income Tax & Auditing",
      "100% valid for Bank PO, SSC-CGL and corporate accounts jobs",
      "Self-paced learning with recorded video lectures and e-books"
    ],
    semesterHighlights: [
      { sem: "Semester 1", subjects: ["Financial Accounting", "Business Law", "Business Communication", "Environmental Studies"] },
      { sem: "Semester 2", subjects: ["Corporate Accounting", "Business Economics", "Business Mathematics & Statistics", "Banking Operations"] },
      { sem: "Semester 3", subjects: ["Income Tax Law", "Company Law", "Cost Accounting", "Computer Applications in Business"] },
      { sem: "Semester 4", subjects: ["Auditing Principles", "GST & Indirect Taxes", "Management Accounting", "Financial Markets"] },
      { sem: "Semester 5", subjects: ["Financial Management", "Corporate Governance & Ethics", "Entrepreneurship", "Elective Paper 1"] },
      { sem: "Semester 6", subjects: ["International Business", "Operations Management", "Major Project", "Comprehensive Viva"] }
    ]
  },
  {
    id: "mcom",
    name: "Master of Commerce (M.Com)",
    shortName: "M.Com",
    category: "Commerce & Finance",
    level: "Postgraduate (PG)",
    duration: "2 Years (4 Semesters)",
    eligibility: "B.Com / BBA / Allied degree from recognized University",
    eligibilityShort: "Graduation in Commerce",
    avgFeesPerSem: "₹7,500 - ₹11,000 / Sem",
    totalFeeEstimate: "₹30,000 - ₹44,000",
    mode: "Distance Learning",
    approvedBy: ["UGC-DEB", "AIU"],
    partnerUniversities: [
      "Mangalayatan",
      "Subharti",
      "SGVU",
      "IGNOU"
    ],
    universitiesCount: "35+ Universities",
    image: "/images/courses/course_mcom.jpg",
    badge: "Commerce Specialist",
    highlightTag: "⭐ Commerce Specialist",
    visualType: "mcom",
    isPopular: false,
    isHighSalary: false,
    isLowFee: true,
    isShortDuration: true,
    hasPlacement: true,
    description: "Deepen your expertise in corporate accounting, taxation, auditing, and financial markets.",
    careerRoles: [
      "Chief Financial Officer (Path)",
      "Tax Consultant & Advisor",
      "Investment Analyst",
      "Internal Auditor",
      "Commerce Lecturer / Academician",
      "Accounts Manager"
    ],
    keyHighlights: [
      "UGC-DEB valid for UGC-NET, JRF, and Assistant Professor eligibility",
      "Comprehensive coverage of GST, Income Tax, International Finance & Auditing",
      "High return on investment with minimal fee structure",
      "Recognized by all state and central government recruitment boards"
    ],
    semesterHighlights: [
      { sem: "Semester 1", subjects: ["Advanced Financial Accounting", "Managerial Economics", "Statistical Analysis", "Business Environment"] },
      { sem: "Semester 2", subjects: ["Corporate Tax Planning & Law", "Advanced Cost & Management Accounting", "Financial Institutions & Markets", "Corporate Legal Framework"] },
      { sem: "Semester 3", subjects: ["Security Analysis & Portfolio Management", "International Accounting", "Direct & Indirect Taxes (GST)", "Research Methodology in Commerce"] },
      { sem: "Semester 4", subjects: ["Strategic Financial Management", "Auditing & Corporate Governance", "Project Dissertation", "Viva-Voce"] }
    ]

  },
  {
    id: "ba",
    name: "Bachelor of Arts (BA General / Honors)",
    shortName: "BA",
    category: "Arts & Humanities",
    level: "Undergraduate (UG)",
    duration: "3 Years (6 Semesters / Annual)",
    eligibility: "10+2 passed from any recognized board",
    eligibilityShort: "10+2 Any stream",
    avgFeesPerSem: "₹5,000 - ₹8,000 / Sem",
    totalFeeEstimate: "₹30,000 - ₹48,000",
    mode: "Distance Learning",
    approvedBy: ["UGC-DEB", "AIU"],
    partnerUniversities: [
      "Mangalayatan",
      "Subharti",
      "IGNOU"
    ],
    universitiesCount: "40+ Universities",
    image: "/images/courses/course_ba.jpg",
    badge: "Ideal for Govt Jobs / UPSC",
    highlightTag: "🏛️ Govt Jobs & UPSC",
    visualType: "ba",
    isPopular: true,
    isHighSalary: false,
    isLowFee: true,
    isShortDuration: false,
    hasPlacement: false,
    description: "The ultimate flexible graduation degree for students targeting UPSC, SSC, State PCS & Defense services.",
    careerRoles: [
      "Civil Services Aspirant (UPSC/PCS)",
      "Content Writer & Journalist",
      "Public Relations Officer",
      "Social Work & NGO Coordinator",
      "Administrative Officer"
    ],
    keyHighlights: [
      "Freedom to select subjects: History, Political Science, Sociology, English, Hindi, Economics",
      "Complete syllabus flexibility without mandatory class attendance",
      "100% eligible for all Union & State Public Service Commission exams",
      "Fast-track documentation and seamless admission confirmation"
    ],
    semesterHighlights: [
      { sem: "Year 1 / Sems 1-2", subjects: ["Compulsory Language (English/Hindi)", "History of India", "Political Theory", "Sociological Concepts"] },
      { sem: "Year 2 / Sems 3-4", subjects: ["Indian Government & Politics", "Modern World History", "Social Problems in India", "Public Administration Basics"] },
      { sem: "Year 3 / Sems 5-6", subjects: ["International Relations", "Contemporary Indian Society", "Indian Economic Development", "Elective Special Subject"] }
    ]
  },
  {
    id: "ma",
    name: "Master of Arts (MA English / Pol Sci / History)",
    shortName: "MA",
    category: "Arts & Humanities",
    level: "Postgraduate (PG)",
    duration: "2 Years (4 Semesters / Annual)",
    eligibility: "Bachelor's Degree in any discipline",
    eligibilityShort: "Graduation in Any Stream",
    avgFeesPerSem: "₹6,500 - ₹10,000 / Sem",
    totalFeeEstimate: "₹26,000 - ₹40,000",
    mode: "Distance Learning",
    approvedBy: ["UGC-DEB", "AIU"],
    partnerUniversities: [
      "Mangalayatan",
      "Subharti",
      "IGNOU"
    ],
    universitiesCount: "35+ Universities",
    image: "/images/courses/course_ma.jpg",
    badge: "Academic Excellence",
    highlightTag: "📚 Teaching & NET Qualified",
    visualType: "ma",
    isPopular: false,
    isHighSalary: false,
    isLowFee: true,
    isShortDuration: true,
    hasPlacement: false,
    description: "Pursue higher scholarship, qualify for UGC-NET / SET for professorship, and elevate research acumen.",
    careerRoles: [
      "School / College Lecturer (Post UGC NET/TGT/PGT)",
      "Policy Analyst",
      "Senior Copywriter / Editor",
      "Research Associate",
      "Cultural & Heritage Consultant"
    ],
    keyHighlights: [
      "Specializations available: English Literature, Political Science, History, Sociology, Hindi",
      "Approved for B.Ed / Teaching eligibility exams (CTET / State TET / KVS / NVS)",
      "Affordable comprehensive courseware provided in soft & hard copies",
      "Exam centers across Uttar Pradesh, Delhi-NCR, Bihar, Rajasthan, and Pan-India"
    ],
    semesterHighlights: [
      { sem: "Semester 1", subjects: ["Core Subject Foundations I", "Research & Literary / Historical Methods", "Classical Theories", "Indian Perspectives"] },
      { sem: "Semester 2", subjects: ["Core Subject Foundations II", "Modern Thinkers & Movements", "Comparative Studies", "Socio-Political Analysis"] },
      { sem: "Semester 3", subjects: ["Advanced Thematic Specialization I", "Global Perspectives", "Elective Area Paper I", "Seminar Presentation"] },
      { sem: "Semester 4", subjects: ["Advanced Thematic Specialization II", "Contemporary Issues", "Master's Dissertation / Research Essay", "Viva-Voce"] }
    ]
  },
  {
    id: "msc-it",
    name: "Master of Science in Information Technology (M.Sc IT / CS)",
    shortName: "M.Sc IT",
    category: "Science",
    level: "Postgraduate (PG)",
    duration: "2 Years (4 Semesters)",
    eligibility: "B.Sc (IT/CS), BCA, or Graduate with Mathematics",
    eligibilityShort: "B.Sc / BCA / Math Graduate",
    avgFeesPerSem: "₹11,000 - ₹16,000 / Sem",
    totalFeeEstimate: "₹44,000 - ₹64,000",
    mode: "Online / Distance",
    approvedBy: ["UGC-DEB", "AICTE"],
    partnerUniversities: [
      "Mangalayatan",
      "Subharti",
      "Suresh Gyan Vihar"
    ],
    universitiesCount: "30+ Universities",
    image: "/images/courses/course_msc.jpg",
    badge: "Tech Research & Dev",
    highlightTag: "🔬 Tech R&D",
    visualType: "msc",
    isPopular: false,
    isHighSalary: true,
    isLowFee: false,
    isShortDuration: true,
    hasPlacement: true,
    description: "Deep dive into algorithms, cybersecurity, network architecture & cloud computing for tech careers.",
    careerRoles: [
      "IT Systems Architect",
      "Cyber Defense Analyst",
      "Database Engineer",
      "Technical Specialist",
      "Data Scientist"
    ],
    keyHighlights: [
      "Focus on practical lab simulations and modern software toolkits",
      "UGC-DEB valid for doctoral (Ph.D) entrance and R&D roles",
      "Blended model with recorded video lectures and digital e-library access"
    ],
    semesterHighlights: [
      { sem: "Semester 1", subjects: ["Advanced Computer Architecture", "Object Oriented Design with Java", "Data Structures & Algorithm Analysis", "Advanced Operating Systems"] },
      { sem: "Semester 2", subjects: ["Database Administration & NoSQL", "Computer Networks & Protocols", "Web Technologies & REST APIs", "Software Testing"] },
      { sem: "Semester 3", subjects: ["Cloud Computing & Virtualization", "Machine Learning Techniques", "Network Security & Cryptography", "Elective Specialization"] },
      { sem: "Semester 4", subjects: ["Major Research Dissertation", "Application Development Capstone", "Technical Viva"] }
    ]
  },
  {
    id: "diploma-tech",
    name: "Diploma & PG Diploma in Computer Applications / Management",
    shortName: "PGDCA / PGDIM",
    category: "Diplomas",
    level: "Diploma & Cert",
    duration: "1 Year (2 Semesters)",
    eligibility: "10+2 for Diploma / Graduation for PG Diploma",
    eligibilityShort: "10+2 / Graduation",
    avgFeesPerSem: "₹8,000 - ₹12,000 / Sem",
    totalFeeEstimate: "₹16,000 - ₹24,000",
    mode: "Distance Learning",
    approvedBy: ["UGC-DEB", "State Approved"],
    partnerUniversities: [
      "Mangalayatan",
      "Subharti",
      "SGVU"
    ],
    universitiesCount: "25+ Universities",
    image: "/images/courses/course_diploma.jpg",
    badge: "1-Year Fast Track",
    highlightTag: "⚡ 1-Year Fast Track",
    visualType: "diploma",
    isPopular: true,
    isHighSalary: false,
    isLowFee: true,
    isShortDuration: true,
    hasPlacement: true,
    description: "Get quick professional certification in high-demand domains like PGDCA & Management within 12 months.",
    careerRoles: [
      "IT Operations Specialist",
      "Database Operator",
      "Administrative Coordinator",
      "Operations Executive"
    ],
    keyHighlights: [
      "Complete in just 1 Year (2 Semesters)",
      "High value in government computer operator jobs and bank certifications",
      "Direct credit transfer options available for higher degrees"
    ],
    semesterHighlights: [
      { sem: "Semester 1", subjects: ["Fundamentals of Computers & OS", "Office Automation & Database Tools", "Programming with C / Python", "Business Communication"] },
      { sem: "Semester 2", subjects: ["Web Development Basics", "Database Management with SQL", "Mini Project & Practical Lab", "Viva"] }
    ]
  }
];

export const COURSE_CATEGORIES = [
  "All Courses",
  "IT & Tech",
  "Management",
  "Commerce & Finance",
  "Arts & Humanities",
  "Science",
  "Diplomas"
] as const;

export const DEGREE_LEVELS = [
  "All Levels",
  "Undergraduate (UG)",
  "Postgraduate (PG)",
  "Diploma & Cert"
] as const;

export function getCourseById(id: string): Course | undefined {
  if (!id) return undefined;
  const cleanId = id.trim().toLowerCase();
  return COURSES.find(
    (c) => c.id.toLowerCase() === cleanId || c.shortName.toLowerCase() === cleanId
  );
}

export function getRelatedCourses(currentId: string, limit: number = 3): Course[] {
  const current = getCourseById(currentId);
  if (!current) return COURSES.slice(0, limit);

  const sameCategory = COURSES.filter(
    (c) => c.id !== current.id && c.category === current.category
  );
  const otherCourses = COURSES.filter(
    (c) => c.id !== current.id && c.category !== current.category
  );

  return [...sameCategory, ...otherCourses].slice(0, limit);
}

