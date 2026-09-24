"use client";

import React, { useState } from "react";
import { Building2, Award, ShieldCheck } from "lucide-react";
import styles from "./UniversitySection.module.css";
import { UNIVERSITIES, University } from "@/data/universities";
import UniversityCard from "../UniversityCard/UniversityCard";
import UniversityDetailModal from "../UniversityDetailModal/UniversityDetailModal";

interface UniversitySectionProps {
  onOpenEnquiry?: (uniName?: string) => void;
  hideHeader?: boolean;
}

export default function UniversitySection({ onOpenEnquiry, hideHeader = false }: UniversitySectionProps) {
  const [selectedUni, setSelectedUni] = useState<University | null>(null);

  return (
    <section className={`${styles.section} ${hideHeader ? styles.noHeaderSection : ""}`} id="universities-section">
      <div className="container">
        {/* Header - only displayed when not preceded by dedicated pageHero */}
        {!hideHeader && (
          <div className={styles.header}>
            <span className={styles.tagline}>
              <Building2 size={16} /> Accredited Partner Institutions
            </span>
            <h2 className={styles.title}>
              Top <span className={styles.gradient}>UGC-DEB Approved</span> Universities
            </h2>
            <p className={styles.subtitle}>
              Explore recognized distance and online universities with high NAAC grades, AICTE approval, and comprehensive student LMS support.
            </p>
          </div>
        )}

        {/* Universities Grid */}
        <div className={styles.grid}>
          {UNIVERSITIES.map((uni) => (
            <UniversityCard
              key={uni.id}
              university={uni}
              onViewDetails={(u) => setSelectedUni(u)}
              onEnquire={(uName) => onOpenEnquiry?.(uName)}
            />
          ))}
        </div>
      </div>

      {/* University Detail Modal */}
      {selectedUni && (
        <UniversityDetailModal
          university={selectedUni}
          onClose={() => setSelectedUni(null)}
          onOpenEnquiry={(uName) => {
            setSelectedUni(null);
            onOpenEnquiry?.(uName);
          }}
        />
      )}
    </section>
  );
}
