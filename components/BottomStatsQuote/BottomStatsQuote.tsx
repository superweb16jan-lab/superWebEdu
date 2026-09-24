import React from "react";
import { GraduationCap, Building2, Users, ThumbsUp, Briefcase } from "lucide-react";
import styles from "./BottomStatsQuote.module.css";

export default function BottomStatsQuote() {
  return (
    <div className={styles.strip}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left: 5 Stats */}
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <GraduationCap size={26} className={styles.iconWrap} />
              <div className={styles.statText}>
                <span className={styles.statNumber}>100+</span>
                <span className={styles.statLabel}>Recognized Programs</span>
              </div>
            </div>

            <div className={styles.statItem}>
              <Building2 size={26} className={styles.iconWrap} />
              <div className={styles.statText}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Partner Universities</span>
              </div>
            </div>

            <div className={styles.statItem}>
              <Users size={26} className={styles.iconWrap} />
              <div className={styles.statText}>
                <span className={styles.statNumber}>1 Lakh+</span>
                <span className={styles.statLabel}>Students Empowered</span>
              </div>
            </div>

            <div className={styles.statItem}>
              <ThumbsUp size={24} className={styles.iconWrap} />
              <div className={styles.statText}>
                <span className={styles.statNumber}>95%</span>
                <span className={styles.statLabel}>Student Satisfaction</span>
              </div>
            </div>

            <div className={styles.statItem}>
              <Briefcase size={24} className={styles.iconWrap} />
              <div className={styles.statText}>
                <span className={styles.statNumber}>Career Support</span>
                <span className={styles.statLabel}>Guidance & Resources</span>
              </div>
            </div>
          </div>

          {/* Right: Quote */}
          <div className={styles.quoteBox}>
            <p className={styles.quoteText}>
              "Education is the most powerful weapon which you can use to change the world."
            </p>
            <span className={styles.quoteAuthor}>— Nelson Mandela</span>
          </div>
        </div>
      </div>
    </div>
  );
}
