"use client";

import React, { useState } from "react";
import { Phone, MessageSquareQuote, Mail, MapPin, Clock, Headphones } from "lucide-react";
import styles from "./contact.module.css";
import TopBar from "@/components/TopBar/TopBar";
import Navbar from "@/components/Navbar/Navbar";
import EnquirySection from "@/components/EnquirySection/EnquirySection";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import LeadModal from "@/components/LeadModal/LeadModal";
import { SITE_CONFIG, getWhatsAppLink } from "@/lib/constants";

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main>
      <TopBar />
      <Navbar onOpenLeadModal={() => setModalOpen(true)} />

      <div className={styles.pageHero}>
        <div className="container">
          <span className={styles.heroTag}>
            <Headphones size={18} /> Direct Counseling & Query Desk
          </span>
          <h1 className={styles.heroTitle}>
            Connect with <span className={styles.gradient}>SuperWebSiksha</span>
          </h1>
          <p className={styles.heroDesc}>
            Have a question regarding university fees, syllabus, or eligibility? Chat directly on WhatsApp or call our helpline.
          </p>

          <div className={styles.contactInfoGrid}>
            <a href={`tel:${SITE_CONFIG.phone}`} className={styles.infoCard}>
              <div className={styles.iconCircle}>
                <Phone size={24} />
              </div>
              <div className={styles.infoContent}>
                <span className={styles.infoTitle}>Call Helpline</span>
                <span className={styles.infoValue}>{SITE_CONFIG.formattedPhone}</span>
              </div>
            </a>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoCard}
              style={{ borderColor: "rgba(21, 128, 61, 0.4)" }}
            >
              <div className={styles.iconCircle} style={{ background: "rgba(21, 128, 61, 0.2)", borderColor: "#15803d", color: "#15803d" }}>
                <MessageSquareQuote size={24} />
              </div>
              <div className={styles.infoContent}>
                <span className={styles.infoTitle}>WhatsApp Helpline (24/7)</span>
                <span className={styles.infoValue}>+91 {SITE_CONFIG.phone}</span>
              </div>
            </a>

            <div className={styles.infoCard}>
              <div className={styles.iconCircle} style={{ background: "rgba(245, 158, 11, 0.2)", borderColor: "rgba(245, 158, 11, 0.4)", color: "#fbbf24" }}>
                <Clock size={24} />
              </div>
              <div className={styles.infoContent}>
                <span className={styles.infoTitle}>Office Hours</span>
                <span className={styles.infoValue}>9:00 AM - 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquirySection />
      <FAQ />
      <Footer />
      <FloatingActions onOpenEnquiry={() => setModalOpen(true)} />
      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
