import React from "react";
import { Scale, CheckCircle2, XCircle, ShieldCheck } from "lucide-react";
import styles from "./DegreeValidity.module.css";

export default function DegreeValidity() {
  const comparisonRows = [
    {
      feature: "UGC-DEB Legal Validity",
      distance: "100% Equal & Valid (UGC Gazette Notification)",
      regular: "100% Valid"
    },
    {
      feature: "Government Job / UPSC Eligibility",
      distance: "Fully Eligible for UPSC, SSC, Banking, PCS, Railways",
      regular: "Fully Eligible"
    },
    {
      feature: "Private MNC & Corporate Acceptance",
      distance: "100% Accepted across Top IT & Corporate Firms",
      regular: "Accepted"
    },
    {
      feature: "Total Fee & Living Expense",
      distance: "Up to 70% Cheaper (Save ₹2 Lakh - ₹5 Lakh)",
      regular: "Very High (Tuition + Hostel + Travel)"
    },
    {
      feature: "Attendance Flexibility",
      distance: "Zero Mandatory Attendance (Study on Weekends)",
      regular: "Strict 75% Daily Attendance required"
    },
    {
      feature: "Study While Working",
      distance: "Yes, continue your job & earn 2-3 years work experience",
      regular: "No, requires full-time on-campus presence"
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.tagline}>
            <Scale size={16} /> Legal Equivalence & Comparison
          </span>
          <h2 className={styles.title}>
            Distance Degree vs <span className={styles.gradient}>Regular Degree</span>
          </h2>
          <p className={styles.subtitle}>
            As declared in the UGC Gazette, degrees obtained through Distance and Online modes are treated at par with regular degrees.
          </p>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th>Key Criterion</th>
                <th className={styles.highlightColumn}>SuperWebSiksha Distance Degrees</th>
                <th>Traditional Regular Degrees</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr key={idx}>
                  <td className={styles.featureName}>{row.feature}</td>
                  <td className={styles.highlightColumn}>
                    <span className={styles.greenCheck}>
                      <CheckCircle2 size={16} className={styles.checkIcon} />
                      {row.distance}
                    </span>
                  </td>
                  <td>{row.regular}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.lawBadge}>
          <ShieldCheck size={36} style={{ color: "#102957", flexShrink: 0 }} />
          <p className={styles.lawText}>
            <strong>UGC ODL Regulations (Gazette of India):</strong> "Degrees / Diplomas / Certificates awarded for programmes conducted by Open and Distance Learning (ODL) institutions, recognized by the UGC, shall be treated as <strong>equivalent</strong> to corresponding awards of the traditional universities/institutions in the country."
          </p>
        </div>
      </div>
    </section>
  );
}
