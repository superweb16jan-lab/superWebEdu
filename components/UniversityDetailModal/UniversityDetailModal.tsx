"use client";

import React, { useEffect } from "react";
import { 
  X, 
  Building2, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquareQuote, 
  Send, 
  Award, 
  GraduationCap 
} from "lucide-react";
import styles from "./UniversityDetailModal.module.css";
import { University } from "@/data/universities";
import { getUniversityWhatsAppLink } from "@/lib/constants";

interface UniversityDetailModalProps {
  university: University | null;
  onClose: () => void;
  onOpenEnquiry: (uniName: string) => void;
}

export default function UniversityDetailModal({
  university,
  onClose,
  onOpenEnquiry
}: UniversityDetailModalProps) {
  useEffect(() => {
    if (!university) return;

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
  }, [university, onClose]);

  if (!university) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <div
              className={styles.logoBadgeLarge}
              style={{
                backgroundColor: university.color
              }}
            >
              {university.logoText}
            </div>
            <div>
              <h2 className={styles.modalTitle}>{university.name}</h2>
              <p className={styles.modalSubtitle}>
                <MapPin size={13} style={{ display: "inline", marginRight: "4px" }} />
                {university.location} • Established in {university.established} • {university.naacGrade}
              </p>
            </div>
          </div>

          <button className={styles.closeBtn} onClick={onClose} aria-label="Close Modal">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className={styles.body}>
          {/* Stats Bar */}
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Enrollment Base</span>
              <span className={styles.statValue}>{university.stats.students}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Accreditation & Approval</span>
              <span className={styles.statValue}>{university.stats.approvalStatus}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Recruiter Network</span>
              <span className={styles.statValue}>{university.stats.placementPartners}</span>
            </div>
          </div>

          {/* About */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionTitle}>
              <Building2 size={18} /> About Directorate of Distance Education
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: "1.6" }}>
              {university.description}
            </p>
          </div>

          {/* Legal Approvals */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionTitle}>
              <ShieldCheck size={18} /> Approvals & Accreditations
            </h3>
            <div className={styles.approvalsBadges}>
              {university.approvals.map((appr, idx) => (
                <span key={idx} className={styles.approvalBadge}>
                  {appr}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionTitle}>
              <Award size={18} /> Distinct Benefits for Students
            </h3>
            <div className={styles.featureList}>
              {university.features.map((feat, idx) => (
                <div key={idx} className={styles.featureRow}>
                  <CheckCircle2 size={16} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Degree Validity */}
          <div className={styles.sectionBlock}>
            <div style={{ background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.3)", padding: "14px 18px", borderRadius: "var(--radius-md)" }}>
              <span style={{ fontWeight: 700, color: "#34d399", display: "block", marginBottom: "4px" }}>
                ✓ Official Degree Equivalence:
              </span>
              <span style={{ color: "#e2e8f0", fontSize: "0.88rem" }}>
                {university.degreeValidity}
              </span>
            </div>
          </div>

          {/* Available Programs */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionTitle}>
              <GraduationCap size={18} /> Available Distance Programs
            </h3>
            <div className={styles.courseBadges}>
              {university.popularCourses.map((c, idx) => (
                <span key={idx} className={styles.coursePill}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className={styles.footerActions}>
          <a
            href={getUniversityWhatsAppLink(university.name)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.modalWhatsappBtn}
          >
            <MessageSquareQuote size={18} />
            <span>Enquire on WhatsApp (8810336124)</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onOpenEnquiry(university.name);
            }}
            className={styles.modalEnquireBtn}
          >
            <Send size={18} />
            <span>Apply to {university.shortName}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
