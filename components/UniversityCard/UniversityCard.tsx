import React from "react";
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquareQuote, 
  ArrowUpRight 
} from "lucide-react";
import styles from "./UniversityCard.module.css";
import { University } from "@/data/universities";
import { getUniversityWhatsAppLink } from "@/lib/constants";

interface UniversityCardProps {
  university: University;
  onViewDetails: (uni: University) => void;
  onEnquire?: (uniName: string) => void;
}

export default function UniversityCard({ university, onViewDetails, onEnquire }: UniversityCardProps) {
  return (
    <div className={styles.card}>
      <div>
        <div className={styles.topRow}>
          <div className={styles.logoBadge} style={{ backgroundColor: university.color }}>
            {university.logoText}
          </div>
          <span className={styles.accreditationTag}>
            {university.naacGrade}
          </span>
        </div>

        <h3 className={styles.uniName}>{university.name}</h3>
        
        <div className={styles.location}>
          <MapPin size={14} />
          <span>{university.location} (Est. {university.established})</span>
        </div>

        {/* Approvals */}
        <div className={styles.approvalsRow}>
          {university.approvals.map((appr, idx) => (
            <span key={idx} className={styles.approvalPill}>
              {appr}
            </span>
          ))}
        </div>

        {/* Features Checklist */}
        <div className={styles.featuresList}>
          {university.features.slice(0, 3).map((feat, idx) => (
            <div key={idx} className={styles.featureItem}>
              <CheckCircle2 size={16} />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Popular Courses */}
        <div className={styles.coursesBox}>
          <span className={styles.coursesLabel}>Available Distance Courses:</span>
          <div className={styles.coursesWrap}>
            {university.popularCourses.slice(0, 6).map((course, idx) => (
              <span key={idx} className={styles.courseTag}>
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <button
          onClick={() => onViewDetails(university)}
          className={styles.btnDetails}
        >
          <span>University Details</span>
          <ArrowUpRight size={16} />
        </button>

        <a
          href={getUniversityWhatsAppLink(university.name)}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnWhatsapp}
          title="Enquire on WhatsApp"
        >
          <MessageSquareQuote size={16} />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
