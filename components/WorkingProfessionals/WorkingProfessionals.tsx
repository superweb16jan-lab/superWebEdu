"use client";

import React, { useState } from "react";
import { 
  Briefcase, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  Wallet, 
  Laptop, 
  Award, 
  ArrowRight, 
  MessageSquareQuote,
  CheckCircle2,
  XCircle,
  FileCheck2,
  Globe2,
  GraduationCap
} from "lucide-react";
import styles from "./WorkingProfessionals.module.css";
import { getWhatsAppLink, SITE_CONFIG } from "@/lib/constants";

interface WorkingProfessionalsProps {
  onOpenLeadModal?: (course?: string, university?: string) => void;
}

export default function WorkingProfessionals({ onOpenLeadModal }: WorkingProfessionalsProps) {
  const [activePersona, setActivePersona] = useState<number>(0);

  const stats = [
    {
      value: "0 Days",
      label: "Career Break",
      desc: "Retain 100% of your job, salary & seniority",
      icon: <Briefcase size={22} className={styles.statIcon} />
    },
    {
      value: "2x",
      label: "Resume Advantage",
      desc: "Degree + years of continuous industry experience",
      icon: <TrendingUp size={22} className={styles.statIcon} />
    },
    {
      value: "70%",
      label: "Cost Savings",
      desc: "Zero relocation, PG rent or daily commute costs",
      icon: <Wallet size={22} className={styles.statIcon} />
    },
    {
      value: "100%",
      label: "Legal Equivalence",
      desc: "UGC Gazette recognized for MNCs, Govt & WES",
      icon: <ShieldCheck size={22} className={styles.statIcon} />
    }
  ];

  const advantages = [
    {
      icon: <Briefcase size={28} />,
      title: "Earn While You Learn (Zero Income Loss)",
      desc: "Never pause your career or forfeit monthly paychecks. Draw your continuous salary and accumulate tenure while earning a UGC-DEB recognized degree.",
      highlight: "Uninterrupted Monthly Income"
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Fast-Track Corporate Promotions & Appraisals",
      desc: "MNCs, IT majors, and enterprises mandate formal Bachelor's or Master's degrees (BBA, MBA, BCA, MCA) for Team Lead, Managerial, and VP promotions.",
      highlight: "Break Career Plateaus"
    },
    {
      icon: <Laptop size={28} />,
      title: "Immediate Workplace Application",
      desc: "Unlike campus students learning abstract theory, working professionals immediately apply business strategy, data analytics, and tech architectures to live projects.",
      highlight: "Learn Today, Apply Tomorrow"
    },
    {
      icon: <Clock size={28} />,
      title: "24/7 Digital LMS & Self-Paced Schedule",
      desc: "Zero mandatory 9-to-5 attendance. Access recorded HD lectures, mobile e-books, and interactive weekend live masterclasses that fit around your office shifts.",
      highlight: "Zero Attendance Stress"
    },
    {
      icon: <Wallet size={28} />,
      title: "High ROI with Transparent Semester Payments",
      desc: "Distance degrees cost a fraction of on-campus executive programs. Save lakhs on tuition, hostel, and travel, with easy semester-wise payment plans.",
      highlight: "High ROI & Low Financial Risk"
    },
    {
      icon: <Award size={28} />,
      title: "Equal Legal Validity for Govt & Global Visas",
      desc: "Approved under UGC Gazette Regulations. Fully recognized for UPSC, SSC, Banking, State Govt promotions, and international WES credential evaluations.",
      highlight: "100% Legal Parity"
    }
  ];

  const comparisonRows = [
    {
      feature: "Monthly Income & Earnings",
      distance: "100% Continuous monthly salary & bonuses (Zero financial loss)",
      regular: "Complete loss of 2–3 years of salary (₹8L–₹25L opportunity cost)",
      distancePositive: true
    },
    {
      feature: "Work Experience on Resume",
      distance: "Adds 2–3 years of active industry tenure & promotions",
      regular: "Leaves an awkward 2–3 year career gap on your resume",
      distancePositive: true
    },
    {
      feature: "Study Schedule & Flexibility",
      distance: "100% Flexible — Learn at night, weekends, or commute on mobile",
      regular: "Mandatory 75% daily daytime classroom attendance required",
      distancePositive: true
    },
    {
      feature: "Living & Relocation Costs",
      distance: "₹0 Relocation — Study from home in any city without moving",
      regular: "₹2 Lakh – ₹5 Lakh in hostel rents, PG food & city travel",
      distancePositive: true
    },
    {
      feature: "Employer Preference for Senior Roles",
      distance: "Highly preferred: Formal Degree + Proven Workplace Experience",
      regular: "Graduates with theoretical knowledge but zero recent context",
      distancePositive: true
    },
    {
      feature: "UGC Gazette Legal Status",
      distance: "100% Equivalent & Valid for MNCs, UPSC, State Govt & WES",
      regular: "100% Equivalent & Valid",
      distancePositive: true
    }
  ];

  const overallBenefits = [
    {
      icon: <ShieldCheck size={26} />,
      title: "UGC-DEB Legal Equivalence",
      desc: "Under UGC Gazette Notification, degrees from recognized distance universities carry identical legal value to on-campus degrees for all govt and private jobs."
    },
    {
      icon: <Wallet size={26} />,
      title: "60%–70% Lower Tuition Fees",
      desc: "Significantly lower tuition fees paired with zero accommodation or daily commute costs makes distance education the most financially sound higher education option."
    },
    {
      icon: <Globe2 size={26} />,
      title: "Top Universities from Anywhere",
      desc: "Enroll in NAAC A+ and NIRF ranked universities nationwide without relocating your family or leaving your hometown."
    },
    {
      icon: <GraduationCap size={26} />,
      title: "Self-Paced Career Advancement",
      desc: "Build specialized expertise in high-demand fields like Management, Computer Applications, Commerce, and Arts while maintaining complete work-life balance."
    }
  ];

  const personas = [
    {
      title: "IT & Tech Professionals",
      tag: "BCA / MCA / B.Sc IT / Data Science",
      challenge: "Stuck in developer roles without higher technical degree for Team Lead / Architect positions.",
      solution: "Earn an MCA or BCA through weekend learning while mastering cloud, full-stack, or AI on the job.",
      badge: "Tech Growth"
    },
    {
      title: "Corporate & Sales Executives",
      tag: "Online MBA / BBA / B.Com",
      challenge: "Glass ceiling for managerial or VP roles due to lack of a recognized business management degree.",
      solution: "Gain an accredited Online MBA with specializations in Marketing, HR, Finance, or Operations with flexible exams.",
      badge: "Executive Path"
    },
    {
      title: "Govt & PSU Employees",
      tag: "BA / MA / M.Com / B.Com",
      challenge: "Need an approved degree for departmental exams, promotions, and pay scale elevation.",
      solution: "Enroll in UGC-DEB recognized programs fully valid for central/state departmental promotions.",
      badge: "Govt Promotion"
    },
    {
      title: "Career Switchers & Returners",
      tag: "Any Undergraduate / Postgraduate",
      challenge: "Want to transition to high-growth fields or resume career after a gap.",
      solution: "Learn high-demand industry skills at your own pace with 1-on-1 counselor and placement support.",
      badge: "Skill Upgrade"
    }
  ];

  return (
    <section className={styles.section} id="working-professionals">
      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.tagline}>
            Tailored for Working Professionals
          </span>
          <h2 className={styles.title}>
            Why Distance Education is the <span className={styles.gradient}>Smartest Career Move</span>
          </h2>
          <p className={styles.subtitle}>
            Don&apos;t pause your career to earn your degree. Get a 100% UGC-DEB recognized Bachelor&apos;s or Master&apos;s degree while keeping your job, your monthly income, and your career momentum.
          </p>
        </div>

        {/* Top Key Metrics Banner */}
        <div className={styles.statsStrip}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statCard}>
              <div className={styles.statHeader}>
                <span className={styles.statValue}>{stat.value}</span>
                {stat.icon}
              </div>
              <h4 className={styles.statTitle}>{stat.label}</h4>
              <p className={styles.statDesc}>{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* The 6 Core Advantages Grid for Working Adults */}
        <div className={styles.advantagesContainer}>
          <div className={styles.advHeader}>
            <h3 className={styles.advTitle}>6 Proven Reasons Working Executives Choose Distance Learning</h3>
            <p className={styles.advSubtitle}>
              Specifically designed to remove every hurdle busy professionals face when looking to upgrade their qualifications.
            </p>
          </div>

          <div className={styles.advGrid}>
            {advantages.map((adv, idx) => (
              <div key={idx} className={styles.advCard}>
                <div className={styles.advTopRow}>
                  <div className={styles.advIconWrap}>{adv.icon}</div>
                  <span className={styles.advBadge}>{adv.highlight}</span>
                </div>
                <h4 className={styles.cardHeading}>{adv.title}</h4>
                <p className={styles.cardDesc}>{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Side-by-Side Comparison: Distance vs Traditional for Working Adults */}
        <div className={styles.comparisonSection}>
          <div className={styles.comparisonHeader}>
            <span className={styles.subTag}>Real-World Comparison</span>
            <h3 className={styles.comparisonTitle}>
              Distance Degree as a Working Adult vs Leaving Your Job for Campus
            </h3>
            <p className={styles.comparisonSubtitle}>
              See why continuing your employment while pursuing a distance degree delivers an unbeatable career and financial advantage:
            </p>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.compTable}>
              <thead>
                <tr>
                  <th className={styles.colFeature}>Key Decision Factor</th>
                  <th className={styles.colDistance}>
                    <span className={styles.badgeRecommended}>Smart Choice</span>
                    <div>Working Professional (Distance Degree)</div>
                  </th>
                  <th className={styles.colRegular}>Leaving Job (Traditional Campus)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 1 ? styles.rowEven : ""}>
                    <td className={styles.tdAspect}>{row.feature}</td>
                    <td className={styles.tdDistance}>
                      <div className={styles.cellContent}>
                        <CheckCircle2 size={18} className={styles.iconCheck} />
                        <span>{row.distance}</span>
                      </div>
                    </td>
                    <td className={styles.tdRegular}>
                      <div className={styles.cellContent}>
                        <XCircle size={18} className={styles.iconCross} />
                        <span>{row.regular}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Overall Universal Benefits of Distance Education */}
        <div className={styles.overallBenefitsSection}>
          <div className={styles.overallHeader}>
            <span className={styles.subTag}>Universal Advantages</span>
            <h3 className={styles.overallTitle}>Overall Benefits of Distance Education</h3>
            <p className={styles.overallSubtitle}>
              Whether you are looking to enter the corporate workforce, qualify for government exams, or seek promotions, distance education provides unmatched value:
            </p>
          </div>

          <div className={styles.overallGrid}>
            {overallBenefits.map((item, idx) => (
              <div key={idx} className={styles.overallCard}>
                <div className={styles.overallIconWrap}>{item.icon}</div>
                <h4 className={styles.overallCardTitle}>{item.title}</h4>
                <p className={styles.overallCardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who is this ideal for? (Persona Selector) */}
        <div className={styles.personaSection}>
          <div className={styles.personaHeader}>
            <span className={styles.subTag}>Career Alignment</span>
            <h3 className={styles.personaTitle}>Tailored Career Paths for Your Role</h3>
            <p className={styles.personaSubtitle}>
              Select your current professional profile to see how a flexible distance degree elevates your trajectory:
            </p>
          </div>

          <div className={styles.personaTabs}>
            {personas.map((p, idx) => (
              <button
                key={idx}
                className={`${styles.personaTab} ${activePersona === idx ? styles.personaTabActive : ""}`}
                onClick={() => setActivePersona(idx)}
              >
                <span>{p.title}</span>
              </button>
            ))}
          </div>

          <div className={styles.personaContentCard}>
            <div className={styles.personaBadge}>{personas[activePersona].badge}</div>
            <h4 className={styles.personaActiveTitle}>{personas[activePersona].title}</h4>
            <div className={styles.personaTagLine}>
              <strong>Recommended Degrees:</strong> {personas[activePersona].tag}
            </div>
            
            <div className={styles.personaDetailsGrid}>
              <div className={styles.challengeBox}>
                <span className={styles.boxLabel}>The Common Challenge:</span>
                <p>{personas[activePersona].challenge}</p>
              </div>
              <div className={styles.solutionBox}>
                <span className={styles.boxLabel}>The Distance Degree Solution:</span>
                <p>{personas[activePersona].solution}</p>
              </div>
            </div>

            <div className={styles.personaActionRow}>
              <button
                onClick={() => onOpenLeadModal?.(personas[activePersona].tag.split("/")[0].trim())}
                className={styles.personaBtnApply}
              >
                <span>Check Eligibility & Fee Structure</span>
                <ArrowRight size={16} />
              </button>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.personaBtnWhatsApp}
              >
                <MessageSquareQuote size={16} />
                <span>Ask Counselor on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Dedicated Counselor Consultation Banner */}
        <div className={styles.counselorCta}>
          <div className={styles.ctaLeft}>
            <div className={styles.ctaIconWrap}>
              <FileCheck2 size={32} />
            </div>
            <div>
              <h3 className={styles.ctaTitle}>Confused About Which Degree Fits Your Career Goals?</h3>
              <p className={styles.ctaDesc}>
                Speak with our senior executive education counselors. We analyze your work experience and help you choose the best UGC-DEB approved university with transparent semester payment schedules.
              </p>
            </div>
          </div>

          <div className={styles.ctaRight}>
            <button
              onClick={() => onOpenLeadModal?.("Working Professional Counseling")}
              className={styles.btnCtaPrimary}
            >
              <span>Get Free Career Assessment</span>
              <ArrowRight size={17} />
            </button>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnCtaWhatsApp}
            >
              <MessageSquareQuote size={17} />
              <span>WhatsApp: {SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
