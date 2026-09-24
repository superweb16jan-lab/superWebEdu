"use client";

import React, { useState, useMemo } from "react";
import { Calculator, Sparkles, MessageSquareQuote, CheckCircle, IndianRupee, ShieldCheck } from "lucide-react";
import styles from "./FeeCalculator.module.css";
import { COURSES } from "@/data/courses";
import { getCourseWhatsAppLink, SITE_CONFIG } from "@/lib/constants";

export default function FeeCalculator() {
  const [stream, setStream] = useState("IT & Tech");
  const [qualification, setQualification] = useState("12th Pass (10+2)");
  const [targetDegree, setTargetDegree] = useState("bca");

  const filteredTargetCourses = useMemo(() => {
    return COURSES.filter((c) => {
      if (qualification === "12th Pass (10+2)") {
        return c.level.includes("UG") || c.level.includes("Diploma");
      }
      return true;
    });
  }, [qualification]);

  const selectedCourseObj = useMemo(() => {
    return (
      filteredTargetCourses.find((c) => c.id === targetDegree) ||
      filteredTargetCourses[0] ||
      COURSES[0]
    );
  }, [filteredTargetCourses, targetDegree]);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.calculatorCard}>
          <div className={styles.header}>
            <span className={styles.badge}>
              <Calculator size={14} /> Instant Semester Fee Estimator
            </span>
            <h2 className={styles.title}>Calculate Your Course Fee & Semester Breakdown</h2>
            <p className={styles.subtitle}>
              Select your qualification and stream to get transparent per-semester fee estimates with zero hidden costs.
            </p>
          </div>

          <div className={styles.calculatorGrid}>
            {/* Form Selector */}
            <div className={styles.formArea}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>1. Your Highest Qualification</label>
                <select
                  className={styles.select}
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                >
                  <option value="12th Pass (10+2)">12th Pass (10+2 - Arts/Science/Commerce)</option>
                  <option value="Graduation (BA/B.Com/BSc/BCA/B.Tech)">Graduate (Any Stream)</option>
                  <option value="Diploma Holder (Polytechnic/Others)">Diploma Holder (10+3)</option>
                  <option value="Post Graduate">Post Graduate / Working Professional</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>2. Select Desired Course</label>
                <select
                  className={styles.select}
                  value={selectedCourseObj.id}
                  onChange={(e) => setTargetDegree(e.target.value)}
                >
                  {filteredTargetCourses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.shortName} - {c.name.split("(")[0]} ({c.duration})
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>3. Payment Mode</label>
                <select className={styles.select}>
                  <option>Semester-wise Full Payment (Direct to University)</option>
                  <option>Annual Lump Sum Payment (Direct to University)</option>
                </select>
              </div>
            </div>

            {/* Live Result Box */}
            <div className={styles.resultBox}>
              <div className={styles.resultHeader}>
                <span className={styles.recLabel}>Calculated Plan</span>
                <span className={styles.matchTag}>100% Eligible</span>
              </div>

              <h3 className={styles.recCourseName}>{selectedCourseObj.name}</h3>

              <div className={styles.feeEstimatesRow}>
                <div className={styles.feeItem}>
                  <span className={styles.feeTitle}>Avg. Semester Fee</span>
                  <span className={styles.feeValue}>{selectedCourseObj.avgFeesPerSem}</span>
                </div>
                <div className={styles.feeItem}>
                  <span className={styles.feeTitle}>Total Est. Cost</span>
                  <span className={styles.feeValue}>{selectedCourseObj.totalFeeEstimate}</span>
                </div>
              </div>

              <div className={styles.emiBox}>
                <div className={styles.emiText}>
                  <span>💳 Payment Structure:</span>
                </div>
                <span className={styles.emiAmount}>{selectedCourseObj.avgFeesPerSem} / semester</span>
              </div>

              <a
                href={getCourseWhatsAppLink(selectedCourseObj.shortName)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.calcWhatsappBtn}
              >
                <MessageSquareQuote size={18} />
                <span>Get Exact University Fee Quote (8810336124)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
