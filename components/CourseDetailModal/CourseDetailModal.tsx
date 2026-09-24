"use client";

import React, { useEffect } from "react";
import { 
  X, 
  GraduationCap, 
  Clock, 
  IndianRupee, 
  BookOpen, 
  Briefcase, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquareQuote, 
  Send,
  Building2,
  Calendar
} from "lucide-react";
import styles from "./CourseDetailModal.module.css";
import { Course } from "@/data/courses";
import { getCourseWhatsAppLink, SITE_CONFIG } from "@/lib/constants";

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onOpenEnquiry: (courseName: string) => void;
}

export default function CourseDetailModal({ course, onClose, onOpenEnquiry }: CourseDetailModalProps) {
  useEffect(() => {
    if (!course) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    // Disable background scrolling when modal is open
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.classList.add("modal-open");
    document.documentElement.classList.add("modal-open");
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("modal-open");
      document.documentElement.classList.remove("modal-open");
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [course, onClose]);

  if (!course) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <div className={styles.badgeRow}>
              <span className={styles.categoryTag}>{course.category}</span>
              <span className={styles.categoryTag} style={{ color: "#34d399", borderColor: "rgba(52, 211, 153, 0.3)", background: "rgba(52, 211, 153, 0.1)" }}>
                {course.level}
              </span>
              {course.approvedBy.map((appr, i) => (
                <span key={i} className={styles.categoryTag} style={{ color: "#fbbf24", borderColor: "rgba(251, 191, 36, 0.3)", background: "rgba(251, 191, 36, 0.1)" }}>
                  {appr}
                </span>
              ))}
            </div>
            <h2 className={styles.modalTitle}>{course.name}</h2>
          </div>

          <button className={styles.closeBtn} onClick={onClose} aria-label="Close Modal">
            <X size={20} />
          </button>
        </div>

        {/* Body Content */}
        <div className={styles.body}>
          {/* Modal Course Image Banner */}
          {course.image && (
            <div className={styles.modalImageWrapper}>
              <img
                src={course.image}
                alt={course.name}
                className={styles.modalImage}
              />
            </div>
          )}

          {/* Quick Summary Grid */}
          <div className={styles.quickSummaryGrid}>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>Duration</span>
              <span className={styles.summaryValue}>{course.duration}</span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>Avg. Semester Fee</span>
              <span className={`${styles.summaryValue} ${styles.greenText}`}>{course.avgFeesPerSem}</span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>Total Est. Fee</span>
              <span className={`${styles.summaryValue} ${styles.greenText}`}>{course.totalFeeEstimate}</span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>Learning Mode</span>
              <span className={styles.summaryValue}>{course.mode}</span>
            </div>
          </div>

          {/* Dedicated Transparent Fee Structure */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionTitle}>
              <IndianRupee size={20} /> University Fee &amp; Payment Structure
            </h3>
            <div className={styles.feeCardsRow}>
              <div className={styles.feeHighlightCard}>
                <span className={styles.feeCardLabel}>Average Semester Fee</span>
                <span className={styles.feeCardAmount}>{course.avgFeesPerSem}</span>
                <span className={styles.feeCardNote}>Direct university semester installment</span>
              </div>
              <div className={styles.feeHighlightCard}>
                <span className={styles.feeCardLabel}>Total Program Estimate</span>
                <span className={styles.feeCardAmount}>{course.totalFeeEstimate}</span>
                <span className={styles.feeCardNote}>Includes registration &amp; study material</span>
              </div>
              <div className={styles.feeHighlightCard}>
                <span className={styles.feeCardLabel}>Flexible Payment</span>
                <span className={styles.feeCardAmount} style={{ color: "#0e3f8c" }}>Zero-Cost EMI</span>
                <span className={styles.feeCardNote}>Easy monthly installment plans available</span>
              </div>
            </div>
          </div>

          {/* Description & Eligibility */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionTitle}>
              <BookOpen size={20} /> Course Overview
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.94rem", lineHeight: "1.6" }}>
              {course.description}
            </p>
            <div style={{ background: "rgba(37, 99, 235, 0.1)", border: "1px solid rgba(59, 130, 246, 0.25)", padding: "12px 16px", borderRadius: "var(--radius-md)" }}>
              <span style={{ fontWeight: 700, color: "#93c5fd", fontSize: "0.85rem" }}>Eligibility Criteria: </span>
              <span style={{ color: "#ffffff", fontSize: "0.88rem" }}>{course.eligibility}</span>
            </div>
          </div>

          {/* Key Highlights */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionTitle}>
              <ShieldCheck size={20} /> Key Program Advantages
            </h3>
            <div className={styles.highlightsList}>
              {course.keyHighlights.map((h, idx) => (
                <div key={idx} className={styles.highlightItem}>
                  <CheckCircle2 size={18} />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Semester-Wise Syllabus Highlight */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionTitle}>
              <Calendar size={20} /> Semester-Wise Curriculum Structure
            </h3>
            <div className={styles.semesterGrid}>
              {course.semesterHighlights.map((sem, idx) => (
                <div key={idx} className={styles.semCard}>
                  <div className={styles.semTitle}>{sem.sem}</div>
                  <ul className={styles.subjectList}>
                    {sem.subjects.map((sub, sIdx) => (
                      <li key={sIdx} className={styles.subjectItem}>
                        <span className={styles.subjectDot}></span>
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Career Prospects */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionTitle}>
              <Briefcase size={20} /> Potential Career Roles
            </h3>
            <div className={styles.careerTags}>
              {course.careerRoles.map((role, idx) => (
                <span key={idx} className={styles.careerTag}>
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Partner Universities */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionTitle}>
              <Building2 size={20} /> Offered By UGC-DEB Approved Universities
            </h3>
            <div className={styles.uniGrid}>
              {course.partnerUniversities.map((uni, idx) => (
                <div key={idx} className={styles.uniCardMini}>
                  <Building2 size={18} style={{ color: "#60a5fa" }} />
                  <span>{uni}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className={styles.footer}>
          <div className={styles.footerActions}>
            <a
              href={getCourseWhatsAppLink(course.shortName)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.modalWhatsappBtn}
            >
              <MessageSquareQuote size={18} />
              <span>WhatsApp Enquire: 8810336124</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenEnquiry(course.shortName);
              }}
              className={styles.modalEnquireBtn}
            >
              <Send size={18} />
              <span>Get Free Admission Brochure</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
