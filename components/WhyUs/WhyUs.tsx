import React from "react";
import { 
  ShieldCheck, 
  BookOpenCheck, 
  CreditCard, 
  Headphones, 
  Award, 
  FileCheck2, 
  Sparkles 
} from "lucide-react";
import styles from "./WhyUs.module.css";

export default function WhyUs() {
  const benefits = [
    {
      icon: <ShieldCheck size={28} />,
      title: "100% UGC-DEB Recognized",
      desc: "All degrees are issued by UGC, AICTE & AIU approved universities, carrying identical legal validity to on-campus degrees for all jobs & promotions."
    },
    {
      icon: <CreditCard size={28} />,
      title: "Direct Semester-Wise Payments",
      desc: "Affordable fee structures with transparent semester-wise full payments directly to the university. No hidden charges or loan commitments."
    },
    {
      icon: <Headphones size={28} />,
      title: "1-on-1 Dedicated Counselor",
      desc: "Personal academic counselors to assist you from day one until degree completion — admission, verification, LMS login, and exam scheduling."
    },
    {
      icon: <BookOpenCheck size={28} />,
      title: "Doorstep Books & LMS Access",
      desc: "Get physical self-learning printed books shipped to your home along with 24/7 access to recorded lectures, e-libraries, and quizzes."
    },
    {
      icon: <FileCheck2 size={28} />,
      title: "Direct University PRN / Enrollment",
      desc: "Receive your official University Permanent Registration Number (PRN) and digital student ID card verifiable directly on the university portal."
    },
    {
      icon: <Award size={28} />,
      title: "Valid for UPSC & Govt. Exams",
      desc: "Eligible for Civil Services (UPSC), State PSCs, SSC CGL, Banking Exams, Railways, Defense, and higher Ph.D. admissions."
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.tagline}>
            <Sparkles size={16} /> Why superWebEdu
          </span>
          <h2 className={styles.title}>
            The Trusted Gateway to <span className={styles.gradient}>Higher Education</span>
          </h2>
          <p className={styles.subtitle}>
            We simplify distance & online education so you can upgrade your credentials while continuing your career and life commitments.
          </p>
        </div>

        <div className={styles.grid}>
          {benefits.map((b, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconWrap}>{b.icon}</div>
              <h3 className={styles.cardTitle}>{b.title}</h3>
              <p className={styles.cardDesc}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
