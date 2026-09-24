import React from "react";
import { MessageSquare, UploadCloud, CheckCheck, CreditCard, Award, ArrowRight } from "lucide-react";
import styles from "./AdmissionProcess.module.css";

export default function AdmissionProcess() {
  const steps = [
    {
      num: 1,
      icon: <MessageSquare size={28} />,
      title: "1. Free Counseling",
      desc: "Connect on WhatsApp/Phone with our counselor to match your career goals with the best university program."
    },
    {
      num: 2,
      icon: <UploadCloud size={28} />,
      title: "2. Document Upload",
      desc: "Submit scanned copies of your 10th/12th marksheets, Aadhaar card, and photos via WhatsApp or our secure portal."
    },
    {
      num: 3,
      icon: <CheckCheck size={28} />,
      title: "3. University Verification",
      desc: "The University Admission Directorate validates your eligibility criteria and approves your enrollment."
    },
    {
      num: 4,
      icon: <CreditCard size={28} />,
      title: "4. Easy Fee Payment",
      desc: "Pay your official semester fee directly through secure university payment gateways."
    },
    {
      num: 5,
      icon: <Award size={28} />,
      title: "5. ID Card & LMS Login",
      desc: "Receive your University Permanent Registration Number (PRN), digital ID card, and start studying."
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.tagline}>Seamless 5-Step Journey</span>
          <h2 className={styles.title}>
            Simple & Transparent <span className={styles.gradient}>Admission Process</span>
          </h2>
          <p className={styles.subtitle}>
            From initial query to receiving your student ID card, our dedicated team handles every step seamlessly.
          </p>
        </div>

        <div className={styles.timeline}>
          {steps.map((s) => (
            <div key={s.num} className={styles.stepCard}>
              <div className={styles.stepNumber}>{s.num}</div>
              <div className={styles.iconWrap}>{s.icon}</div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
