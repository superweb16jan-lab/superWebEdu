export interface Counselor {
  id: string;
  name: string;
  role: string;
  experience: string;
  studentsGuided: string;
  specialization: string[];
  rating: number;
  reviewsCount: number;
  languages: string[];
  image: string;
  availability: string;
  whatsappMessage: string;
}

export const COUNSELORS: Counselor[] = [
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "Senior Academic Counselor",
    experience: "9+ Years",
    studentsGuided: "15,000+",
    specialization: ["MBA & Management", "Career Mapping", "UGC University Match"],
    rating: 4.95,
    reviewsCount: 1420,
    languages: ["English", "Hindi"],
    image: "/images/counselors/priya-sharma.jpg",
    availability: "Available Now",
    whatsappMessage: "Hello Priya ma'am! I would like free 1-on-1 counseling regarding online & distance MBA/degree courses."
  },
  {
    id: "rajesh-verma",
    name: "Rajesh Verma",
    role: "Head of IT & Tech Admissions",
    experience: "8+ Years",
    studentsGuided: "12,500+",
    specialization: ["MCA / BCA Degrees", "Lateral Entry", "Software Roles Guidance"],
    rating: 4.92,
    reviewsCount: 1180,
    languages: ["English", "Hindi"],
    image: "/images/counselors/rajesh-verma.jpg",
    availability: "Online Today",
    whatsappMessage: "Hello Rajesh sir! I want advice on BCA/MCA distance degree programs and tech career roadmaps."
  },
  {
    id: "meera-sharma",
    name: "Meera Sharma",
    role: "Executive & Working Professional Advisor",
    experience: "7+ Years",
    studentsGuided: "9,800+",
    specialization: ["Working Professionals", "BBA / B.Com", "Flexible Exam Support"],
    rating: 4.91,
    reviewsCount: 890,
    languages: ["English", "Hindi"],
    image: "/images/counselors/meera-sharma.jpg",
    availability: "Available Now",
    whatsappMessage: "Hello Meera ma'am! I am a working professional seeking guidance on flexible online degree options."
  },
  {
    id: "dr-vikram-malhotra",
    name: "Dr. Vikram Malhotra",
    role: "Director of Admissions & UGC Compliance",
    experience: "14+ Years",
    studentsGuided: "24,000+",
    specialization: ["UGC-DEB Regulations", "Govt Job Equivalence", "Top Universities"],
    rating: 4.98,
    reviewsCount: 2340,
    languages: ["English", "Hindi", "Punjabi"],
    image: "/images/counselors/vikram-malhotra.jpg",
    availability: "Admissions Desk",
    whatsappMessage: "Hello Dr. Vikram! I want expert verification of UGC-DEB approved university distance programs."
  },
  {
    id: "sunita-nair",
    name: "Sunita Nair",
    role: "Undergraduate & Fast-Track Enrollment Specialist",
    experience: "6+ Years",
    studentsGuided: "8,500+",
    specialization: ["Fast-Track Document Check", "Fee Installments", "Course Selection"],
    rating: 4.89,
    reviewsCount: 760,
    languages: ["English", "Hindi"],
    image: "/images/counselors/sunita-nair.jpg",
    availability: "Online Today",
    whatsappMessage: "Hello Sunita ma'am! Please assist me with course eligibility, document verification, and admission steps."
  }
];
