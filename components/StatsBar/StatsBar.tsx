import React from "react";
import { Users, Building, ShieldCheck, CreditCard } from "lucide-react";
import styles from "./StatsBar.module.css";
import { SITE_CONFIG } from "@/lib/constants";

export default function StatsBar() {
  const stats = [
    {
      icon: <Users size={24} />,
      number: "50,000+",
      label: "Enrolled & Counselled Students"
    },
    {
      icon: <Building size={24} />,
      number: "15+ UGC-DEB",
      label: "Approved Universities"
    },
    {
      icon: <ShieldCheck size={24} />,
      number: "100% Genuine",
      label: "Govt & MNC Valid Degrees"
    },
    {
      icon: <CreditCard size={24} />,
      number: "100% Direct",
      label: "Semester-wise Full Payments"
    }
  ];

  return (
    <div className={styles.statsBar}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statItem}>
              <div className={styles.iconWrap}>{stat.icon}</div>
              <div className={styles.statInfo}>
                <span className={styles.number}>{stat.number}</span>
                <span className={styles.label}>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
