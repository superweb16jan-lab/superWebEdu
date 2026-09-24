export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Approvals & Validity" | "Exams & LMS" | "Fees & Payment" | "Admission Process";
}

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Are distance degrees from Mangalayatan and Subharti UGC-DEB approved?",
    answer: "Yes, 100%! All programs offered through SuperWebSiksha are approved by the University Grants Commission - Distance Education Bureau (UGC-DEB) and respective statutory bodies like AICTE and AIU. The degrees carry the exact same legal validity as regular on-campus degrees under the UGC Open and Distance Learning Regulations Gazette Notification.",
    category: "Approvals & Validity"
  },
  {
    id: "faq-2",
    question: "Is a distance BCA, MCA, or MBA valid for Government Jobs and UPSC exams?",
    answer: "Absolutely. As per the Ministry of Education and UGC regulations, any distance or online degree obtained from a UGC-DEB recognized university is fully valid for all Central & State Government jobs, UPSC Civil Services, SSC CGL, Banking (IBPS/SBI), Railways (RRB), Defense services, and State Public Service Commissions.",
    category: "Approvals & Validity"
  },
  {
    id: "faq-3",
    question: "How will exams be conducted? Do I have to travel to campus?",
    answer: "You do NOT need to travel to the main university campus. Depending on the university chosen (e.g., Mangalayatan or Subharti), exams are conducted either via designated regional examination centers in major cities across India or through AI-proctored online exams that you can take right from your home laptop.",
    category: "Exams & LMS"
  },
  {
    id: "faq-4",
    question: "How do I enquire and talk to a counselor directly?",
    answer: "You can fill out the Quick Enquiry Form on this website or directly click any WhatsApp button to message our expert counseling team at +91 8810336124. Our senior academic counselors will explain course structures, fee breakdowns, and guide your document submission step-by-step with zero admission charges.",
    category: "Admission Process"
  },
  {
    id: "faq-5",
    question: "How are the course fees paid? Are semester-wise payments allowed?",
    answer: "Yes! Students pay their fees semester-by-semester directly to the university through net banking, UPI, or debit/credit cards. There are no mandatory loans or third-party EMI traps — you simply pay full semester fees directly before each term starts.",
    category: "Fees & Payment"
  },
  {
    id: "faq-6",
    question: "How do I receive study materials, books, and access to lectures?",
    answer: "Upon successful enrollment, you receive official student login credentials for the University Learning Management System (LMS) containing e-books, video lectures, and practice quizzes. In addition, printed Self-Instructional Material (SIM) books are shipped directly to your registered residential address.",
    category: "Exams & LMS"
  },
  {
    id: "faq-7",
    question: "Can I verify my enrollment directly on the University official portal?",
    answer: "Yes. Within 24-48 hours of completing your document submission and university registration fee, you will receive an official Enrollment Number / PRN (Permanent Registration Number) and Student ID Card that can be verified directly on the university's official .edu.in / .ac.in portal.",
    category: "Admission Process"
  },
  {
    id: "faq-8",
    question: "Can I pursue a distance or online degree while working in a full-time corporate or government job?",
    answer: "Yes, 100%! Under UGC guidelines, working professionals can legally pursue an online/distance degree alongside full-time employment without any NOC issues. Your employer cannot object since classes and exams are conducted after office hours or on weekends without conflicting with work timings.",
    category: "Approvals & Validity"
  },
  {
    id: "faq-9",
    question: "Will top MNCs and IT companies accept my distance MBA/MCA for internal promotions and appraisals?",
    answer: "Absolutely. All Fortune 500 companies, Indian IT giants (TCS, Infosys, Wipro, Accenture, Cognizant), and MNCs recognize UGC-DEB approved degrees. In corporate appraisals, the combination of 2+ years of hands-on workplace experience plus a recognized Master's degree gives you an immense edge over candidates with only theoretical degrees.",
    category: "Approvals & Validity"
  },
  {
    id: "faq-10",
    question: "How many hours per week does a working professional need to dedicate to studies?",
    answer: "Most working professionals easily manage their studies by dedicating 4 to 6 hours per week, typically over weekends or 45 minutes on weekday evenings. All lectures are recorded and accessible 24/7 on the mobile app, allowing you to learn during commutes, lunch breaks, or at your own leisure.",
    category: "Exams & LMS"
  }
];

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  university: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Rahul Verma",
    course: "Master of Computer Applications (MCA)",
    university: "Mangalayatan University",
    role: "Senior Software Engineer",
    company: "TCS",
    rating: 5,
    text: "I was working as a junior developer and needed a master's degree for promotion. SuperWebSiksha counselors guided me to Mangalayatan University's distance MCA. The online study portal and weekend flexibility allowed me to work and learn smoothly. Got promoted to Senior Engineer within a year!",
    avatar: "👨‍💻"
  },
  {
    id: "t2",
    name: "Pooja Sharma",
    course: "Master of Business Administration (MBA - HR)",
    university: "Swami Vivekanand Subharti University",
    role: "HR Assistant Manager",
    company: "Concentrix",
    rating: 5,
    text: "Subharti's distance MBA through SuperWebSiksha was the best decision of my career. The counselors at 8810336124 answered all my questions patiently on WhatsApp, helped with semester fee payments, and book dispatch. Highly recommended for working women and professionals.",
    avatar: "👩‍💼"
  },
  {
    id: "t3",
    name: "Amit Kumar Singh",
    course: "Bachelor of Computer Applications (BCA)",
    university: "Mangalayatan University",
    role: "Frontend Developer",
    company: "Wipro",
    rating: 5,
    text: "After 12th, I had financial constraints and couldn't attend a full-time college. SuperWebSiksha helped me enroll into Distance BCA with affordable fees. I learned programming online while doing freelance work. The degree is 100% verified and accepted everywhere.",
    avatar: "🧑‍💻"
  },
  {
    id: "t4",
    name: "Neha Gupta",
    course: "Bachelor of Arts (BA)",
    university: "Subharti University",
    role: "UPSC & State PCS Aspirant",
    company: "Civil Services Prep",
    rating: 5,
    text: "I needed a flexible UGC recognized graduation degree so I could dedicate all my daytime to UPSC preparation. Distance BA from Subharti gave me complete freedom, quality books, and no attendance hassle. SuperWebSiksha team is super supportive!",
    avatar: "👩‍🎓"
  }
];
