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
  Sparkles,
  FileCheck2
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
      value: "45%+",
      label: "Average Salary Hike",
      desc: "Post degree completion & promotion",
      icon: <TrendingUp size={22} className={styles.statIcon} />
    },
    {
      value: "24/7",
      label: "Flexible LMS Access",
      desc: "Recorded lectures & weekend live classes",
      icon: <Clock size={22} className={styles.statIcon} />
    },
    {
      value: "100%",
      label: "Legal Equivalence",
      desc: "UGC Gazette recognized for MNCs & Govt",
      icon: <ShieldCheck size={22} className={styles.statIcon} />
    }
  ];

  const advantages = [
    {
      icon: <Briefcase size={28} />,
      title: "Earn While You Learn (Zero Income Loss)",
      desc: "You never have to quit your job or take an unpaid sabbatical. Keep drawing your monthly paycheck while stacking a UGC-DEB recognized degree onto your resume.",
      highlight: "Continuous Salary & Experience"
    },
    {
      icon: <Clock size={28} />,
      title: "100% Flexible Self-Paced Schedule",
      desc: "Say goodbye to rigid 9-to-5 college attendance. Watch high-definition recorded lectures after office hours or on weekends, with digital e-books accessible on mobile anytime.",
      highlight: "Study at Night or Weekends"
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Fast-Track Corporate Promotions",
      desc: "Corporate MNCs, IT majors, and PSUs require formal Bachelor's or Master's degrees (BBA, MBA, BCA, MCA) for managerial promotions and higher salary bands.",
      highlight: "Climb the Leadership Ladder"
    },
    {
      icon: <Laptop size={28} />,
      title: "Immediate Workplace Application",
      desc: "Unlike fresh students, working professionals can apply strategic management, business analytics, or software principles directly to live work projects the very next morning.",
      highlight: "Learn Today, Apply Tomorrow"
    },
    {
      icon: <Wallet size={28} />,
      title: "60-70% Lower Cost + Direct Semester Fees",
      desc: "Distance degrees cost a fraction of on-campus executive programs. Save on relocation, daily commuting, and hostel fees, with transparent full payments per semester.",
      highlight: "High ROI & Direct Semester Fees"
    },
    {
      icon: <Award size={28} />,
      title: "Equal Legal Validity for Govt & Global Jobs",
      desc: "Degrees issued by our partner universities (UGC, AICTE, AIU recognized) carry identical legal equivalence to regular degrees for UPSC, SSC, Banking, and WES foreign evaluation.",
      highlight: "100% UGC Gazette Compliant"
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
            Designed for Working Professionals
          </span>
          <h2 className={styles.title}>
            Why Distance Education is the <span className={styles.gradient}>Smartest Career Move</span>
          </h2>
          <p className={styles.subtitle}>
            Don&apos;t pause your career to earn your degree. Get a 100% UGC-DEB recognized Bachelor&apos;s or Master&apos;s degree while keeping your job, your monthly income, and your peace of mind.
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

        {/* The 6 Core Advantages Grid */}
        <div className={styles.advantagesContainer}>
          <div className={styles.advHeader}>
            <h3 className={styles.advTitle}>6 Unbeatable Advantages for Working Executives</h3>
            <p className={styles.advSubtitle}>
              Tailored specifically to remove the obstacles busy professionals face when looking to upskill.
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

        {/* Who is this ideal for? (Persona Selector) */}
        <div className={styles.personaSection}>
          <div className={styles.personaHeader}>
            <h3 className={styles.personaTitle}>Tailored Career Paths for Your Role</h3>
            <p className={styles.personaSubtitle}>
              Select your career profile to see how a flexible distance degree elevates your trajectory:
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
