import React from "react";
import Link from "next/link";
import { Phone, Clock, MessageSquareQuote, ShieldCheck } from "lucide-react";
import styles from "./TopBar.module.css";
import { SITE_CONFIG, getWhatsAppLink } from "@/lib/constants";

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.inner}>
        <div className={styles.leftGroup}>
          <span className={styles.badge}>
            <span className={styles.badgeDot}></span>
            <ShieldCheck size={14} />
            UGC-DEB & AICTE Approved Admissions Open 2025-26
          </span>
          <span className={styles.hours}>
            <Clock size={13} />
            {SITE_CONFIG.counselingHours}
          </span>
        </div>

        <div className={styles.rightGroup}>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className={styles.contactLink}
            title="Call Admission Helpline"
          >
            <Phone size={14} />
            <span>{SITE_CONFIG.formattedPhone}</span>
          </a>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappPill}
            title="Chat on WhatsApp"
          >
            <MessageSquareQuote size={14} />
            <span className={styles.desktopWhatsappText}>WhatsApp Us: {SITE_CONFIG.phone}</span>
            <span className={styles.mobileWhatsappText}>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
