"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  GraduationCap, 
  Clock, 
  IndianRupee, 
  BookOpen, 
  Briefcase, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquareQuote, 
  MessageCircle,
  ArrowRight,
  Send,
  Building2,
  Calendar,
  ChevronRight,
  ChevronDown,
  Download,
  PhoneCall,
  Check,
  Award,
  Sparkles,
  HelpCircle,
  FileText,
  UserCheck,
  TrendingUp,
  Share2
} from "lucide-react";
import styles from "./CourseDetailPageClient.module.css";
import { Course } from "@/data/courses";
import { UNIVERSITIES } from "@/data/universities";
import TopBar from "@/components/TopBar/TopBar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import LeadModal from "@/components/LeadModal/LeadModal";
import CourseCard from "@/components/CourseCard/CourseCard";
import { getCourseWhatsAppLink, SITE_CONFIG } from "@/lib/constants";
import confetti from "canvas-confetti";

interface CourseDetailPageClientProps {
  course: Course;
  relatedCourses: Course[];
}

export default function CourseDetailPageClient({ course, relatedCourses }: CourseDetailPageClientProps) {
  const [leadModalState, setLeadModalState] = useState<{
    isOpen: boolean;
    course?: string;
    university?: string;
  }>({
    isOpen: false,
    course: course.shortName
  });

  // Active semester tab for curriculum section
  const [activeSemIndex, setActiveSemIndex] = useState(0);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Quick Sidebar Form state
  const [sidebarForm, setSidebarForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    university: course.partnerUniversities[0] || "Mangalayatan University"
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleSidebarSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sidebarForm.name || !sidebarForm.phone) {
      alert("Please provide your name and phone number");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...sidebarForm,
          course: `${course.shortName} (${course.name})`,
          source: `Dedicated Course Detail Page - ${course.shortName}`
        })
      });

      if (res.ok) {
        setFormSubmitted(true);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        alert("Submission encountered an issue. Please connect with our counselors on WhatsApp directly.");
      }
    } catch {
      alert("Submission error. Please call or WhatsApp our counseling desk.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleShare = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // Matched partner universities data
  const matchedUniversities = UNIVERSITIES.filter(u => 
    course.partnerUniversities.some(pu => 
      u.name.toLowerCase().includes(pu.toLowerCase()) || 
      u.shortName.toLowerCase().includes(pu.toLowerCase())
    )
  );

  // Dynamic FAQs tailored to this course
  const faqs = [
    {
      q: `Is this Distance ${course.shortName} degree 100% valid for Central & State Government jobs?`,
      a: `Yes, absolutely. The ${course.name} offered by our partner universities is strictly approved by the UGC-DEB (Distance Education Bureau) and AICTE. As per the official Gazette notification issued by the Ministry of Education and UGC, distance degrees obtained from recognized universities are treated on par with regular degrees for all UPSC, SSC, Banking (IBPS/SBI), Defense, Railways, and State PSC examinations.`
    },
    {
      q: `What is the eligibility criteria to apply for distance ${course.shortName}?`,
      a: `For ${course.name}: ${course.eligibility}. There is no restrictive age limit, making it ideal for working professionals, job seekers, and students preparing simultaneously for competitive government exams.`
    },
    {
      q: `Can I pay the tuition fees in semester installments or monthly EMI?`,
      a: `Yes. You can pay your fees directly to the university portal semester-by-semester (${course.avgFeesPerSem}). In addition, superWebEdu assists students with zero-cost EMI payment facilities starting at just ₹1,500 - ₹2,500 per month with zero processing fee and no hidden charges.`
    },
    {
      q: `How are examinations conducted for the ${course.shortName} program?`,
      a: `Examinations are conducted twice a year (Semester-wise) either through secure online proctored examination portals or designated regional university exam centers across Delhi-NCR, Uttar Pradesh, Bihar, Rajasthan, and Pan-India. Flexible weekend slots are provided so working professionals can appear comfortably.`
    },
    {
      q: `Do I receive hard-copy books and digital study materials?`,
      a: `Yes! Upon admission and enrollment number generation, you receive full 24/7 access to the University's digital Learning Management System (LMS) with recorded video lectures, e-books, PPTs, and assignment guides. In addition, physical self-learning printed books (SLM) are dispatched to your communication address.`
    },
    {
      q: `What is the admission procedure and how soon is the enrollment verified?`,
      a: `The admission process is 100% transparent and digital: (1) Submit scanned copies of your academic marksheets and ID proof, (2) Receive provisional admission confirmation, (3) Pay semester fees directly on the official University payment gateway, and (4) Get your verified university enrollment number and LMS credentials within 48 to 72 hours.`
    }
  ];

  return (
    <main className={styles.mainWrapper}>
      {/* 1. Header Navigation */}
      <TopBar />
      <Navbar onOpenLeadModal={(c, u) => setLeadModalState({ isOpen: true, course: c || course.shortName, university: u })} />

      {/* 2. Breadcrumbs Bar */}
      <div className={styles.breadcrumbBar}>
        <div className="container">
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadLink}>Home</Link>
            <ChevronRight size={14} className={styles.breadSep} />
            <Link href="/courses" className={styles.breadLink}>Courses</Link>
            <ChevronRight size={14} className={styles.breadSep} />
            <span className={styles.breadCategory}>{course.category}</span>
            <ChevronRight size={14} className={styles.breadSep} />
            <span className={styles.breadCurrent}>{course.shortName}</span>
          </nav>
        </div>
      </div>

      {/* 3. Hero Section (Matching Home Page Hero Visual Design) */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          {/* Main Grid: Left Content + Right Student with Oval Backdrop */}
          <div className={styles.heroMainGrid}>
            {/* Left Column: Eyebrow, Heading, Desc, CTAs */}
            <div className={styles.heroLeft}>
              <p className={styles.heroEyebrow}>
                <span className={styles.eyebrowFull}>{course.badge || "UGC-DEB & AICTE APPROVED"}</span>
                <span className={styles.eyebrowMobile}>UGC-DEB APPROVED</span>
              </p>

              <h1 className={styles.heroTitle}>
                {course.name}{" "}
                <span className={styles.heroTitleHighlight}>({course.shortName})</span>
              </h1>

              <p className={styles.heroDesc}>
                <span className={styles.descFull}>{course.description}</span>
                <span className={styles.descMobile}>Online & Distance Degree • Govt. Recognized</span>
              </p>

              <div className={styles.heroActionRow}>
                <button
                  onClick={() => setLeadModalState({ isOpen: true, course: course.shortName })}
                  className={styles.heroBtnApply}
                  type="button"
                >
                  <span className={styles.btnTextFull}>Apply for Admission</span>
                  <span className={styles.btnTextMobile}>Apply Now</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  onClick={() => setLeadModalState({ isOpen: true, course: `${course.shortName} - Syllabus PDF` })}
                  className={styles.heroBtnSyllabus}
                  type="button"
                >
                  <Download size={15} />
                  <span className={styles.btnTextFull}>Syllabus PDF</span>
                  <span className={styles.btnTextMobile}>Syllabus</span>
                </button>

                <a
                  href={getCourseWhatsAppLink(course.shortName)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.heroLinkCounselor}
                >
                  <MessageCircle size={18} className={styles.heroWaIcon} />
                  <span className={styles.heroLinkText}>Talk to a Counsellor</span>
                </a>
              </div>
            </div>

            {/* Right Column: Architectural Arch Vector Backdrop & Student Cutout */}
            <div className={styles.heroRight}>
              <div className={styles.vectorBackdropWrap}>
                <svg
                  className={styles.vectorShapeSvg}
                  viewBox="0 0 420 520"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Subtle outer geometric dashed orbit ring */}
                  <circle cx="210" cy="270" r="195" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" />
                  
                  {/* Inner dynamic dual-tone ring */}
                  <circle cx="210" cy="270" r="165" stroke="url(#courseRingGrad)" strokeWidth="2.5" opacity="0.65" />
                  
                  {/* Modern Cathedral Arch / Portal vector backdrop */}
                  <path
                    d="M 65 520 L 65 210 A 145 145 0 0 1 355 210 L 355 520 Z"
                    fill="url(#courseArchGrad)"
                  />

                  {/* Concentric subtle decorative inner arc */}
                  <path
                    d="M 95 520 L 95 215 A 115 115 0 0 1 325 215 L 325 520"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    opacity="0.4"
                  />

                  <defs>
                    <linearGradient id="courseArchGrad" x1="65" y1="65" x2="355" y2="520" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#fef3c7" stopOpacity="0.95" />
                      <stop offset="0.45" stopColor="#fed7aa" stopOpacity="0.85" />
                      <stop offset="1" stopColor="#dbeafe" stopOpacity="0.95" />
                    </linearGradient>
                    <linearGradient id="courseRingGrad" x1="65" y1="105" x2="355" y2="435" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#e62b32" />
                      <stop offset="1" stopColor="#102957" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Floating decorative geometric accent dot */}
                <div className={styles.floatingVectorDot} />
              </div>

              <div className={styles.studentImgWrap}>
                <Image
                  src="/images/hero-student.png"
                  alt={`${course.name} Student with Laptop & Notes`}
                  width={460}
                  height={690}
                  priority
                  className={styles.studentImg}
                />
              </div>
            </div>
          </div>

          {/* Bottom 4-Feature Strip (Matching Home Page) */}
          <div className={styles.heroFeatureStrip}>
            <div className={styles.featureItem}>
              <Clock size={22} strokeWidth={1.8} className={styles.featureIcon} />
              <div className={styles.featureText}>
                <span>{course.duration.split("(")[0].trim()}</span>
                <span>{course.duration.includes("(") ? `(${course.duration.split("(")[1]}` : "Duration"}</span>
              </div>
            </div>

            <div className={styles.featureDivider} />

            <div className={styles.featureItem}>
              <IndianRupee size={22} strokeWidth={1.8} className={styles.featureIcon} />
              <div className={styles.featureText}>
                <span className={styles.feeHighlightText}>{course.avgFeesPerSem.split("/")[0].trim()}</span>
                <span>Per Semester</span>
              </div>
            </div>

            <div className={styles.featureDivider} />

            <div className={styles.featureItem}>
              <GraduationCap size={22} strokeWidth={1.8} className={styles.featureIcon} />
              <div className={styles.featureText}>
                <span>Eligibility</span>
                <span>{course.eligibilityShort}</span>
              </div>
            </div>

            <div className={styles.featureDivider} />

            <div className={styles.featureItem}>
              <Building2 size={22} strokeWidth={1.8} className={styles.featureIcon} />
              <div className={styles.featureText}>
                <span>UGC-DEB</span>
                <span>{course.mode}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. In-Page Sticky Section Anchor Navigation */}
      <div className={styles.stickyAnchorNav}>
        <div className="container">
          <ul className={styles.anchorList}>
            <li><a href="#overview" className={styles.anchorLink}>Overview</a></li>
            <li><a href="#syllabus" className={styles.anchorLink}>Curriculum &amp; Syllabus</a></li>
            <li><a href="#fees" className={styles.anchorLink}>Fee Structure &amp; EMI</a></li>
            <li><a href="#eligibility" className={styles.anchorLink}>Eligibility</a></li>
            <li><a href="#careers" className={styles.anchorLink}>Career Roles</a></li>
            <li><a href="#universities" className={styles.anchorLink}>Universities</a></li>
            <li><a href="#validity" className={styles.anchorLink}>Degree Validity</a></li>
            <li><a href="#faqs" className={styles.anchorLink}>FAQs</a></li>
          </ul>
        </div>
      </div>

      {/* 5. Main 2-Column Content Area */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.layoutColumns}>
            
            {/* Left Main Body Column */}
            <div className={styles.mainColumn}>
              
              {/* SECTION: Overview & Key Highlights */}
              <div className={styles.contentCard} id="overview">
                <div className={styles.cardHeader}>
                  <div className={styles.cardHeaderIcon}>
                    <BookOpen size={22} />
                  </div>
                  <div>
                    <h2 className={styles.cardHeaderTitle}>Program Overview &amp; Key Advantages</h2>
                    <p className={styles.cardHeaderSub}>Everything you need to know about pursuing distance {course.shortName}</p>
                  </div>
                </div>

                <div className={styles.overviewBody}>
                  {/* Course Visual Banner */}
                  {course.image && (
                    <div className={styles.courseVisualBanner}>
                      <Image
                        src={course.image}
                        alt={course.name}
                        width={720}
                        height={340}
                        className={styles.courseVisualImg}
                      />
                      <div className={styles.courseVisualOverlay}>
                        <span className={styles.visualBadge}>⚡ 100% UGC-DEB Recognized Degree</span>
                        <span className={styles.visualBadgeText}>Offered across {course.partnerUniversities.length}+ Accredited Universities</span>
                      </div>
                    </div>
                  )}

                  <p className={styles.overviewPara}>
                    The <strong>{course.name}</strong> is designed to offer contemporary academic knowledge combined with flexible digital study methodologies. Ideal for working professionals, self-starters, and students seeking career escalation without disturbing their current job commitments.
                  </p>

                  <div className={styles.highlightsContainer}>
                    <h3 className={styles.subHeading}>Why Choose Distance {course.shortName}?</h3>
                    <div className={styles.highlightsList}>
                      {course.keyHighlights.map((highlight, idx) => (
                        <div key={idx} className={styles.highlightRow}>
                          <div className={styles.checkCircle}>
                            <Check size={16} />
                          </div>
                          <span className={styles.highlightText}>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.bannerCallout}>
                    <ShieldCheck size={28} className={styles.calloutIcon} />
                    <div>
                      <h4 className={styles.calloutTitle}>100% University Direct Enrollment Assurance</h4>
                      <p className={styles.calloutText}>
                        Students receive a direct official enrollment number, identity card, and University LMS login credentials within 48 to 72 hours of admission submission.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION: Semester-Wise Detailed Curriculum */}
              <div className={styles.contentCard} id="syllabus">
                <div className={styles.cardHeader}>
                  <div className={styles.cardHeaderIcon}>
                    <Calendar size={22} />
                  </div>
                  <div>
                    <h2 className={styles.cardHeaderTitle}>Semester-Wise Curriculum &amp; Syllabus</h2>
                    <p className={styles.cardHeaderSub}>Industry-aligned modules crafted by leading academicians and corporate veterans</p>
                  </div>
                </div>

                <div className={styles.syllabusBody}>
                  {/* Semester Tab Buttons */}
                  <div className={styles.semesterTabs}>
                    {course.semesterHighlights.map((sem, sIdx) => (
                      <button
                        key={sIdx}
                        type="button"
                        className={`${styles.semTabBtn} ${activeSemIndex === sIdx ? styles.semTabBtnActive : ""}`}
                        onClick={() => setActiveSemIndex(sIdx)}
                      >
                        <span>{sem.sem}</span>
                      </button>
                    ))}
                  </div>

                  {/* Active Semester Subjects Display */}
                  {course.semesterHighlights[activeSemIndex] && (
                    <div className={styles.semSubjectsCard}>
                      <div className={styles.semSubjectsHeader}>
                        <h3 className={styles.activeSemTitle}>
                          {course.semesterHighlights[activeSemIndex].sem} Detailed Coursework
                        </h3>
                        <span className={styles.subjectCountBadge}>
                          {course.semesterHighlights[activeSemIndex].subjects.length} Core Subjects
                        </span>
                      </div>

                      <div className={styles.subjectsGrid}>
                        {course.semesterHighlights[activeSemIndex].subjects.map((sub, idx) => (
                          <div key={idx} className={styles.subjectCardItem}>
                            <span className={styles.subjectNum}>0{idx + 1}</span>
                            <div className={styles.subjectDetails}>
                              <span className={styles.subjectName}>{sub}</span>
                              <span className={styles.subjectTag}>Theory + Internal Assignment</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className={styles.semPracticalNote}>
                        <FileText size={16} />
                        <span>Includes assignments, self-paced LMS recorded modules, and periodic interactive doubt resolution.</span>
                      </div>
                    </div>
                  )}

                  {/* Syllabus Download Action */}
                  <div className={styles.downloadSyllabusBox}>
                    <div className={styles.downloadSyllabusLeft}>
                      <h4>Need the Comprehensive PDF Syllabus?</h4>
                      <p>Download the detailed module-wise curriculum booklet, marking schemes, and reference booklists.</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setLeadModalState({ isOpen: true, course: `${course.shortName} - Syllabus Booklet` })}
                      className={styles.btnDownloadBox}
                    >
                      <Download size={17} />
                      <span>Download Full Syllabus PDF</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* SECTION: Transparent Fee Structure & Zero Cost EMI */}
              <div className={styles.contentCard} id="fees">
                <div className={styles.cardHeader}>
                  <div className={styles.cardHeaderIcon}>
                    <IndianRupee size={22} />
                  </div>
                  <div>
                    <h2 className={styles.cardHeaderTitle}>Transparent Fee Structure &amp; EMI Options</h2>
                    <p className={styles.cardHeaderSub}>No hidden charges • 100% Direct University Payment</p>
                  </div>
                </div>

                <div className={styles.feesBody}>
                  <div className={styles.feeHighlightRow}>
                    <div className={styles.feeHighlightBox}>
                      <span className={styles.feeBoxLabel}>Average Semester Fee</span>
                      <strong className={styles.feeBoxAmount}>{course.avgFeesPerSem}</strong>
                      <span className={styles.feeBoxNote}>Payable per semester directly to University</span>
                    </div>

                    <div className={styles.feeHighlightBox}>
                      <span className={styles.feeBoxLabel}>Total Program Estimate</span>
                      <strong className={`${styles.feeBoxAmount} ${styles.greenAmount}`}>{course.totalFeeEstimate}</strong>
                      <span className={styles.feeBoxNote}>Complete degree duration estimate</span>
                    </div>

                    <div className={styles.feeHighlightBox}>
                      <span className={styles.feeBoxLabel}>Easy Monthly Installment</span>
                      <strong className={styles.feeBoxAmount}>0% Interest EMI</strong>
                      <span className={styles.feeBoxNote}>Starting from ₹1,800/month</span>
                    </div>
                  </div>

                  <div className={styles.feeGuarantees}>
                    <h3 className={styles.feeGuaranteeTitle}>Fee Payment Guarantees for Every Student</h3>
                    <div className={styles.guaranteeGrid}>
                      <div className={styles.guaranteeItem}>
                        <CheckCircle2 size={18} className={styles.guaranteeIcon} />
                        <div>
                          <strong>Direct University Receipts:</strong>
                          <span>Fees are credited directly to the university's designated payment gateway with official computer-generated receipt.</span>
                        </div>
                      </div>
                      <div className={styles.guaranteeItem}>
                        <CheckCircle2 size={18} className={styles.guaranteeIcon} />
                        <div>
                          <strong>Study Material Included:</strong>
                          <span>Course fee includes digital self-learning courseware (SLM), e-library access, and student portal accounts.</span>
                        </div>
                      </div>
                      <div className={styles.guaranteeItem}>
                        <CheckCircle2 size={18} className={styles.guaranteeIcon} />
                        <div>
                          <strong>Zero Middleman Brokerage:</strong>
                          <span>superWebEdu counseling is 100% free. No hidden service charges, processing markups, or agent commissions.</span>
                        </div>
                      </div>
                      <div className={styles.guaranteeItem}>
                        <CheckCircle2 size={18} className={styles.guaranteeIcon} />
                        <div>
                          <strong>Flexible Exam Fee Window:</strong>
                          <span>Exam fees are charged separately per semester directly by the university before hall ticket generation.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION: Eligibility & Admission Process */}
              <div className={styles.contentCard} id="eligibility">
                <div className={styles.cardHeader}>
                  <div className={styles.cardHeaderIcon}>
                    <UserCheck size={22} />
                  </div>
                  <div>
                    <h2 className={styles.cardHeaderTitle}>Eligibility Criteria &amp; Admission Roadmap</h2>
                    <p className={styles.cardHeaderSub}>Hassle-free admissions without cumbersome entrance testing</p>
                  </div>
                </div>

                <div className={styles.eligibilityBody}>
                  <div className={styles.eligibilityCallout}>
                    <span className={styles.eligibilityBadge}>Official Requirement</span>
                    <h3 className={styles.eligibilityTitle}>{course.eligibility}</h3>
                    <p className={styles.eligibilitySub}>
                      Students with equivalent certifications from authorized National/State education boards or recognized universities are welcome to apply.
                    </p>
                  </div>

                  {/* 4-Step Admission Roadmap */}
                  <h3 className={styles.roadmapHeading}>Step-by-Step Admission Process</h3>
                  <div className={styles.roadmapGrid}>
                    <div className={styles.roadmapCard}>
                      <div className={styles.stepBadge}>Step 1</div>
                      <h4>Free Profile Review</h4>
                      <p>Connect with a senior academic counselor to verify eligibility and select your preferred partner university.</p>
                    </div>

                    <div className={styles.roadmapCard}>
                      <div className={styles.stepBadge}>Step 2</div>
                      <h4>Document Submission</h4>
                      <p>Submit soft copies of your 10th, 12th / Graduation marksheets, Aadhaar card, and passport-size photograph.</p>
                    </div>

                    <div className={styles.roadmapCard}>
                      <div className={styles.stepBadge}>Step 3</div>
                      <h4>Direct Fee Payment</h4>
                      <p>Pay your semester tuition fee directly to the university's official banking portal and receive instant payment acknowledgment.</p>
                    </div>

                    <div className={styles.roadmapCard}>
                      <div className={styles.stepBadge}>Step 4</div>
                      <h4>Enrollment &amp; LMS Access</h4>
                      <p>Receive your permanent University Enrollment ID card and 24/7 access to online video lectures and e-books.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION: High-Paying Career Roles */}
              <div className={styles.contentCard} id="careers">
                <div className={styles.cardHeader}>
                  <div className={styles.cardHeaderIcon}>
                    <Briefcase size={22} />
                  </div>
                  <div>
                    <h2 className={styles.cardHeaderTitle}>Career Opportunities &amp; Job Profiles</h2>
                    <p className={styles.cardHeaderSub}>Accelerate your career in top MNCs, government bodies, and private sector enterprises</p>
                  </div>
                </div>

                <div className={styles.careersBody}>
                  <div className={styles.salaryIndicatorRow}>
                    <div className={styles.salaryStat}>
                      <TrendingUp size={24} style={{ color: "#e62b32" }} />
                      <div>
                        <span className={styles.salaryStatLabel}>Estimated Starting Package</span>
                        <strong className={styles.salaryStatVal}>₹3.5 LPA – ₹9.5 LPA</strong>
                      </div>
                    </div>
                    <div className={styles.salaryStat}>
                      <Building2 size={24} style={{ color: "#102957" }} />
                      <div>
                        <span className={styles.salaryStatLabel}>Top Recruiting Sectors</span>
                        <strong className={styles.salaryStatVal}>IT, BFSI, MNCs, Govt Services, Startups</strong>
                      </div>
                    </div>
                  </div>

                  <h3 className={styles.rolesHeading}>Key Career Designations</h3>
                  <div className={styles.rolesGrid}>
                    {course.careerRoles.map((role, idx) => (
                      <div key={idx} className={styles.roleCard}>
                        <CheckCircle2 size={17} className={styles.roleCardIcon} />
                        <span className={styles.roleName}>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* SECTION: Partner Universities */}
              <div className={styles.contentCard} id="universities">
                <div className={styles.cardHeader}>
                  <div className={styles.cardHeaderIcon}>
                    <Building2 size={22} />
                  </div>
                  <div>
                    <h2 className={styles.cardHeaderTitle}>Offered by Top UGC-DEB Partner Universities</h2>
                    <p className={styles.cardHeaderSub}>Choose from prestigious recognized institutions with Pan-India reputation</p>
                  </div>
                </div>

                <div className={styles.unisBody}>
                  <div className={styles.matchedUnisGrid}>
                    {matchedUniversities.map((uni) => (
                      <div key={uni.id} className={styles.uniDetailedCard}>
                        <div className={styles.uniCardHeader}>
                          <div className={styles.uniLogoBox}>
                            <span>{uni.logoText}</span>
                          </div>
                          <div>
                            <h3 className={styles.uniName}>{uni.name}</h3>
                            <span className={styles.uniLocation}>{uni.location}</span>
                          </div>
                        </div>

                        <div className={styles.uniBadges}>
                          <span className={styles.uniBadgePill}>{uni.naacGrade}</span>
                          <span className={styles.uniBadgePill}>UGC-DEB Approved</span>
                          <span className={styles.uniBadgePill}>{uni.examMode}</span>
                        </div>

                        <p className={styles.uniDescText}>
                          {uni.description.slice(0, 150)}...
                        </p>

                        <div className={styles.uniCardFooter}>
                          <button
                            type="button"
                            onClick={() => setLeadModalState({ isOpen: true, course: course.shortName, university: uni.name })}
                            className={styles.btnUniEnquire}
                          >
                            <span>Enquire for {uni.shortName}</span>
                            <ArrowRight size={15} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {matchedUniversities.length === 0 && (
                    <div className={styles.fallbackUnis}>
                      {course.partnerUniversities.map((uniName, idx) => (
                        <div key={idx} className={styles.fallbackUniItem}>
                          <Building2 size={20} className={styles.fallbackUniIcon} />
                          <strong>{uniName}</strong>
                          <span>UGC-DEB Accredited</span>
                          <button
                            type="button"
                            onClick={() => setLeadModalState({ isOpen: true, course: course.shortName, university: uniName })}
                            className={styles.fallbackUniBtn}
                          >
                            Enquire
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* SECTION: Degree Validity Guarantee */}
              <div className={styles.contentCard} id="validity">
                <div className={styles.cardHeader}>
                  <div className={styles.cardHeaderIcon}>
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h2 className={styles.cardHeaderTitle}>100% Degree Validity &amp; Legal Recognition</h2>
                    <p className={styles.cardHeaderSub}>Authorized by UGC, AICTE, AIU &amp; Ministry of Education, Govt. of India</p>
                  </div>
                </div>

                <div className={styles.validityBody}>
                  <div className={styles.gazetteQuote}>
                    <div className={styles.gazetteIconWrap}>
                      <Award size={32} />
                    </div>
                    <div>
                      <h4>Official UGC Gazette Notification (Public Notice No. 1-9/2018 DEB-I)</h4>
                      <p>
                        "Degrees/Diplomas/Certificates awarded for programmes conducted through Open and Distance Learning mode, and Online mode by Higher Educational Institutions recognised by UGC are to be treated as equivalent to the corresponding awards of the Degree/Diploma/Certificate offered through conventional mode."
                      </p>
                    </div>
                  </div>

                  <div className={styles.validityPillars}>
                    <div className={styles.pillarItem}>
                      <CheckCircle2 size={18} style={{ color: "#059669" }} />
                      <span><strong>UPSC &amp; State PSCs:</strong> 100% eligible for Civil Services, State PCS &amp; Defense exams.</span>
                    </div>
                    <div className={styles.pillarItem}>
                      <CheckCircle2 size={18} style={{ color: "#059669" }} />
                      <span><strong>Banking &amp; PSUs:</strong> Eligible for SBI PO, IBPS, SSC-CGL, Railways, and Public Sector Units.</span>
                    </div>
                    <div className={styles.pillarItem}>
                      <CheckCircle2 size={18} style={{ color: "#059669" }} />
                      <span><strong>Higher Studies:</strong> Valid for direct admission to Master's (MBA, MCA, M.Tech) and Ph.D doctoral programs.</span>
                    </div>
                    <div className={styles.pillarItem}>
                      <CheckCircle2 size={18} style={{ color: "#059669" }} />
                      <span><strong>Global WES Verification:</strong> Recognized for international work visas, Canada PR, and USA higher education evaluations.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION: Frequently Asked Questions */}
              <div className={styles.contentCard} id="faqs">
                <div className={styles.cardHeader}>
                  <div className={styles.cardHeaderIcon}>
                    <HelpCircle size={22} />
                  </div>
                  <div>
                    <h2 className={styles.cardHeaderTitle}>Frequently Asked Questions (FAQs)</h2>
                    <p className={styles.cardHeaderSub}>Get clear answers to all doubts regarding distance {course.shortName}</p>
                  </div>
                </div>

                <div className={styles.faqsBody}>
                  {faqs.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={idx} className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}>
                        <button
                          type="button"
                          className={styles.faqQuestionBtn}
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          aria-expanded={isOpen}
                        >
                          <span className={styles.faqQuestionText}>{faq.q}</span>
                          <ChevronDown size={18} className={`${styles.faqChevron} ${isOpen ? styles.faqChevronRotate : ""}`} />
                        </button>
                        {isOpen && (
                          <div className={styles.faqAnswer}>
                            <p>{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* SECTION: Related Programs */}
              {relatedCourses.length > 0 && (
                <div className={styles.relatedSection}>
                  <div className={styles.relatedHeader}>
                    <h2 className={styles.relatedTitle}>Compare with Similar Degree Programs</h2>
                    <Link href="/courses" className={styles.relatedViewAll}>
                      <span>Explore All Courses</span>
                      <ChevronRight size={15} />
                    </Link>
                  </div>

                  <div className={styles.relatedGrid}>
                    {relatedCourses.map((rCourse) => (
                      <CourseCard
                        key={rCourse.id}
                        course={rCourse}
                        onEnquire={(cName) => setLeadModalState({ isOpen: true, course: cName })}
                      />
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Sticky Helpdesk Column */}
            <aside className={styles.sidebarColumn}>
              <div className={styles.stickySidebarCard}>
                <div className={styles.sidebarHeader}>
                  <div className={styles.sidebarBadge}>
                    <Sparkles size={14} />
                    <span>Free Admission Counseling</span>
                  </div>
                  <h3 className={styles.sidebarTitle}>Enquire About Distance {course.shortName}</h3>
                  <p className={styles.sidebarSubtitle}>Get verified fee breakdown, syllabus PDF, and admission guidance in 15 minutes.</p>
                </div>

                {formSubmitted ? (
                  <div className={styles.successState}>
                    <div className={styles.successIcon}>
                      <Check size={32} />
                    </div>
                    <h4 className={styles.successTitle}>Application Received!</h4>
                    <p className={styles.successDesc}>
                      Our senior academic counselor will call you within 15 minutes to guide you on admission, fees &amp; scholarship.
                    </p>
                    <a
                      href={getCourseWhatsAppLink(course.shortName)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.btnWhatsappSuccess}
                    >
                      <MessageSquareQuote size={18} />
                      <span>Chat on WhatsApp Directly</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSidebarSubmit} className={styles.sidebarForm}>
                    <div className={styles.formGroup}>
                      <label htmlFor="sb-name">Your Full Name *</label>
                      <input
                        id="sb-name"
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        required
                        value={sidebarForm.name}
                        onChange={(e) => setSidebarForm({ ...sidebarForm, name: e.target.value })}
                        className={styles.sidebarInput}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="sb-phone">Mobile Number *</label>
                      <input
                        id="sb-phone"
                        type="tel"
                        placeholder="e.g. 9876543210"
                        required
                        value={sidebarForm.phone}
                        onChange={(e) => setSidebarForm({ ...sidebarForm, phone: e.target.value })}
                        className={styles.sidebarInput}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="sb-email">Email Address</label>
                      <input
                        id="sb-email"
                        type="email"
                        placeholder="e.g. rahul@gmail.com"
                        value={sidebarForm.email}
                        onChange={(e) => setSidebarForm({ ...sidebarForm, email: e.target.value })}
                        className={styles.sidebarInput}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="sb-city">City / State</label>
                      <input
                        id="sb-city"
                        type="text"
                        placeholder="e.g. Noida / Lucknow"
                        value={sidebarForm.city}
                        onChange={(e) => setSidebarForm({ ...sidebarForm, city: e.target.value })}
                        className={styles.sidebarInput}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="sb-uni">Preferred University</label>
                      <select
                        id="sb-uni"
                        value={sidebarForm.university}
                        onChange={(e) => setSidebarForm({ ...sidebarForm, university: e.target.value })}
                        className={styles.sidebarSelect}
                      >
                        {course.partnerUniversities.map((uni, idx) => (
                          <option key={idx} value={uni}>{uni}</option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={styles.btnSubmitSidebar}
                    >
                      {isSubmitting ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <Send size={17} />
                          <span>Request Admission Callback</span>
                        </>
                      )}
                    </button>

                    <p className={styles.privacyNote}>
                      🔒 100% Privacy. No spam. Direct university verification.
                    </p>
                  </form>
                )}

                {/* Direct Contact Links */}
                <div className={styles.directCounselorBox}>
                  <span className={styles.counselorBoxTitle}>Need Instant Answers?</span>
                  <div className={styles.counselorActions}>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className={styles.counselorBtnPhone}
                    >
                      <PhoneCall size={16} />
                      <span>Call: {SITE_CONFIG.phone}</span>
                    </a>

                    <a
                      href={getCourseWhatsAppLink(course.shortName)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.counselorBtnWa}
                    >
                      <MessageSquareQuote size={16} />
                      <span>WhatsApp Desk</span>
                    </a>
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* 6. Sticky Mobile Action Bar */}
      <div className={styles.mobileBottomBar}>
        <div className={styles.mobileBottomInner}>
          <div className={styles.mobileFeeSnippet}>
            <span className={styles.mobileFeeLabel}>Semester Fee</span>
            <strong className={styles.mobileFeeVal}>{course.avgFeesPerSem.split(" ")[0]}</strong>
          </div>

          <a
            href={getCourseWhatsAppLink(course.shortName)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnMobileWa}
          >
            <MessageSquareQuote size={18} />
            <span>WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setLeadModalState({ isOpen: true, course: course.shortName })}
            className={styles.btnMobileApply}
          >
            <Send size={16} />
            <span>Apply Now</span>
          </button>
        </div>
      </div>

      {/* 7. Footer & LeadModal */}
      <Footer />
      <FloatingActions onOpenEnquiry={() => setLeadModalState({ isOpen: true, course: course.shortName })} />
      <LeadModal
        isOpen={leadModalState.isOpen}
        onClose={() => setLeadModalState({ isOpen: false })}
        preselectedCourse={leadModalState.course}
        preselectedUniversity={leadModalState.university}
      />
    </main>
  );
}

