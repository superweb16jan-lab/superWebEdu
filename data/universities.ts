export interface University {
  id: string;
  name: string;
  shortName: string;
  location: string;
  established: string;
  naacGrade: string;
  approvals: string[];
  features: string[];
  popularCourses: string[];
  examMode: string;
  lmsAvailable: boolean;
  degreeValidity: string;
  logoText: string;
  badge: string;
  color: string;
  description: string;
  stats: {
    students: string;
    placementPartners: string;
    approvalStatus: string;
  };
}

export const UNIVERSITIES: University[] = [
  {
    id: "mangalayatan",
    name: "Mangalayatan University",
    shortName: "Mangalayatan DDE",
    location: "Aligarh, Uttar Pradesh",
    established: "2006",
    naacGrade: "NAAC A+ Accredited",
    approvals: ["UGC-DEB", "AICTE", "AIU", "PCI", "BCI Approved"],
    features: [
      "100% UGC-DEB Recognized Distance & Online Programs",
      "Interactive Learning Management System (LMS) with 24/7 Mobile App",
      "PAN-India examination centers & flexible weekend slots",
      "Quick document verification and speedy original marksheet dispatch",
      "Recognized by UPSC, SSC, Banking, Railways & State PSCs"
    ],
    popularCourses: ["BCA", "MCA", "MBA", "BBA", "B.Com", "M.Com", "BA", "MA", "M.Sc IT", "PGDCA"],
    examMode: "Hybrid / Center-Based & Online Proctored",
    lmsAvailable: true,
    degreeValidity: "Fully equivalent to on-campus regular degree as per UGC Gazette 2018/2020",
    logoText: "MU",
    badge: "UGC-DEB & NAAC A+",
    color: "#1E3A8A",
    description: "Mangalayatan University is a premier institution known for academic rigor, ethical values, and cutting-edge distance education courses crafted for working executives, aspiring civil servants, and tech enthusiasts.",
    stats: {
      students: "35,000+ Enrolled",
      placementPartners: "200+ Recruiters",
      approvalStatus: "100% Verified UGC-DEB"
    }
  },
  {
    id: "subharti",
    name: "Swami Vivekanand Subharti University",
    shortName: "Subharti DDE",
    location: "Meerut, Delhi-NCR, Uttar Pradesh",
    established: "2008",
    naacGrade: "NAAC 'A' Grade",
    approvals: ["UGC-DEB Approved", "Member of AIU", "DEB Recognized"],
    features: [
      "One of India's most trusted and budget-friendly Distance Education Directorates",
      "Self-Instructional Material (SIM) delivered directly to student postal address",
      "Wide network of regional study centers across Northern & Eastern India",
      "Zero attendance mandatory; ideal for government job aspirants & homemakers",
      "Transparent fee structure with no hidden exam charges"
    ],
    popularCourses: ["BA", "B.Com", "BBA", "BCA", "MA (English/Pol Sci/History)", "M.Com", "MBA", "MCA", "BLIS", "MLIS"],
    examMode: "Designated Examination Centers (Pan-India)",
    lmsAvailable: true,
    degreeValidity: "Accepted across Central Govt, State Govts, and Private Corporates",
    logoText: "SVSU",
    badge: "Most Affordable & Trusted",
    color: "#0F766E",
    description: "Swami Vivekanand Subharti University (DDE) has empowered hundreds of thousands of students across India to achieve their higher education dreams through affordable, top-quality distance learning programs.",
    stats: {
      students: "65,000+ Alumni",
      placementPartners: "Pan-India Centers",
      approvalStatus: "UGC-DEB Distance Board"
    }
  },
  {
    id: "sgvu",
    name: "Suresh Gyan Vihar University",
    shortName: "SGVU Distance",
    location: "Jaipur, Rajasthan",
    established: "2008",
    naacGrade: "NAAC 'A+' Grade",
    approvals: ["UGC-DEB", "AICTE", "NIRF Ranked", "AIU Member"],
    features: [
      "Modern curriculum aligned with tech industry standards and corporate needs",
      "State-of-the-art Edusphere LMS with live weekend webinars and recorded video vault",
      "Specialized MBA in 15+ emerging industry domains (FinTech, Business Analytics, AI)",
      "Dedicated placement cell with mock interview preparation and resume reviews",
      "Global alumni network across Fortune 500 corporations"
    ],
    popularCourses: ["MBA (Dual Specialization)", "BBA", "BCA", "MCA", "B.Com", "M.Com"],
    examMode: "100% Online Proctored Semester Examinations",
    lmsAvailable: true,
    degreeValidity: "WES Evaluated & Recognized globally for higher studies and PR visas",
    logoText: "SGVU",
    badge: "NAAC A+ & Tech Enabled",
    color: "#7C3AED",
    description: "SGVU Distance is celebrated for its cutting-edge technological delivery, dynamic syllabus updates, and dedicated career assistance for career transitioners.",
    stats: {
      students: "40,000+ Students",
      placementPartners: "300+ Companies",
      approvalStatus: "Top Tier UGC-DEB"
    }
  },
  {
    id: "lpu-distance",
    name: "Lovely Professional University",
    shortName: "LPU Distance",
    location: "Phagwara, Punjab",
    established: "2005",
    naacGrade: "NAAC A++ Grade",
    approvals: ["UGC-DEB", "AICTE", "NIRF Top 30", "WES Approved"],
    features: [
      "Highest NAAC Accreditation (A++) with outstanding national ranking",
      "LPU e-Connect portal with personalized student dashboard and mobile app",
      "Industry-focused masterclasses conducted by senior tech executives and CXOs",
      "Flexible examination scheduling across international and national locations"
    ],
    popularCourses: ["MBA", "MCA", "BCA", "BBA", "B.Sc IT", "M.Sc IT", "BA", "MA"],
    examMode: "Online Proctored / Center Based",
    lmsAvailable: true,
    degreeValidity: "Globally accepted across US, UK, Canada, Australia & India",
    logoText: "LPU",
    badge: "NAAC A++ (Highest Grade)",
    color: "#B45309",
    description: "LPU Distance & Online brings India's largest private university infrastructure to your laptop and mobile phone, giving you high-prestige credentials.",
    stats: {
      students: "100,000+ Enrolled",
      placementPartners: "500+ MNCs",
      approvalStatus: "Top NIRF Ranked"
    }
  },
  {
    id: "amity-online",
    name: "Amity University Online",
    shortName: "Amity Online",
    location: "Noida, Delhi-NCR",
    established: "2005",
    naacGrade: "NAAC A+ Grade",
    approvals: ["UGC-DEB", "AICTE", "WASC (USA)", "QAA (UK)"],
    features: [
      "Ranked #1 for Online MBA & MCA by top international ranking forums",
      "Globally recognized accreditations from USA and UK quality assurance bodies",
      "Virtual job fairs and hiring drives with top multinational corporations",
      "Personal academic mentors and career transition coaches"
    ],
    popularCourses: ["MBA", "MCA", "BCA", "BBA", "B.Com", "M.Com", "MA Journalism"],
    examMode: "AI-Proctored Remote Exams",
    lmsAvailable: true,
    degreeValidity: "Worldwide equivalence for global employment & immigration",
    logoText: "AMITY",
    badge: "Global Accreditations",
    color: "#0369A1",
    description: "Amity Online provides prestigious management and computing degrees recognized by Fortune 500 recruiters around the globe.",
    stats: {
      students: "75,000+ Alumni",
      placementPartners: "600+ Global Partners",
      approvalStatus: "UGC & International"
    }
  }
];
