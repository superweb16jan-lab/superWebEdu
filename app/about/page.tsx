"use client";

import React, { useState } from "react";
import { GraduationCap, Target, Eye, ShieldCheck, Users, HeartHandshake } from "lucide-react";
import styles from "./about.module.css";
import TopBar from "@/components/TopBar/TopBar";
import Navbar from "@/components/Navbar/Navbar";
import WhyUs from "@/components/WhyUs/WhyUs";
import Testimonials from "@/components/Testimonials/Testimonials";
import EnquirySection from "@/components/EnquirySection/EnquirySection";
import Footer from "@/components/Footer/Footer";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import LeadModal from "@/components/LeadModal/LeadModal";
import { SITE_CONFIG } from "@/lib/constants";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main>
      <TopBar />
      <Navbar onOpenLeadModal={() => setModalOpen(true)} />

      <div className={styles.pageHero}>
        <div className="container">
          <span className={styles.heroTag}>
            <GraduationCap size={18} /> Empowering Dreams Through Flexible Learning
          </span>
          <h1 className={styles.heroTitle}>
            About <span className={styles.gradient}>superWebEdu</span>
          </h1>
          <p className={styles.heroDesc}>
            We bridge the gap between ambitious students, working professionals, and India's top UGC-DEB recognized universities.
          </p>
        </div>
      </div>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.textBlock}>
              <h2 className={styles.subHeading}>Our Mission & Commitment</h2>
              <p className={styles.paragraph}>
                At <strong>superWebEdu</strong>, we believe that education should never be constrained by geographical boundaries, daily commute routines, or prohibitive tuition fees. Every learner deserves access to premier higher education that is officially recognized for government and private employment.
              </p>
              <p className={styles.paragraph}>
                Over the past decade, our senior counseling panel has guided over <strong>50,000+ students</strong> into top programs like BCA, MCA, MBA, BBA, B.Com, and BA from accredited institutions like <strong>Mangalayatan University</strong>, <strong>Swami Vivekanand Subharti University</strong>, and more.
              </p>
            </div>

            <div className={styles.missionCard}>
              <div className={styles.missionItem}>
                <Target size={28} style={{ color: "#60a5fa", flexShrink: 0 }} />
                <div>
                  <h4>100% Free Transparent Counseling</h4>
                  <p>We provide authentic syllabus comparisons and direct semester-wise payment structures with complete honesty.</p>
                </div>
              </div>

              <div className={styles.missionItem}>
                <Eye size={28} style={{ color: "#34d399", flexShrink: 0 }} />
                <div>
                  <h4>Genuine University PRN Verification</h4>
                  <p>Direct enrollment into the university portal ensures your marksheet and degree are 100% verifiable.</p>
                </div>
              </div>

              <div className={styles.missionItem}>
                <HeartHandshake size={28} style={{ color: "#fbbf24", flexShrink: 0 }} />
                <div>
                  <h4>Continuous End-to-End Support</h4>
                  <p>From initial document upload to examination registration and marksheet dispatch, we stay with you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyUs />
      <Testimonials />
      <EnquirySection />
      <Footer />
      <FloatingActions onOpenEnquiry={() => setModalOpen(true)} />
      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
