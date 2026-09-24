"use client";

import React, { useState } from "react";
import { ShieldCheck, CheckCircle2, Award, FileText, Scale } from "lucide-react";
import styles from "./approvals.module.css";
import TopBar from "@/components/TopBar/TopBar";
import Navbar from "@/components/Navbar/Navbar";
import DegreeValidity from "@/components/DegreeValidity/DegreeValidity";
import EnquirySection from "@/components/EnquirySection/EnquirySection";
import Footer from "@/components/Footer/Footer";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import LeadModal from "@/components/LeadModal/LeadModal";

export default function ApprovalsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main>
      <TopBar />
      <Navbar onOpenLeadModal={() => setModalOpen(true)} />

      <div className={styles.pageHero}>
        <div className="container">
          <span className={styles.heroTag}>
            <ShieldCheck size={18} /> Official Legal Approvals & Validity
          </span>
          <h1 className={styles.heroTitle}>
            UGC-DEB, AICTE & AIU <span className={styles.gradient}>Approvals Guide</span>
          </h1>
          <p className={styles.heroDesc}>
            Verify how distance learning degrees from Mangalayatan and Subharti universities are 100% genuine and legally authorized by the Government of India.
          </p>
        </div>
      </div>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.card}>
              <div style={{ color: "#38bdf8" }}>
                <ShieldCheck size={36} />
              </div>
              <h3 className={styles.cardTitle}>UGC-DEB Recognition</h3>
              <p className={styles.cardDesc}>
                The University Grants Commission (UGC) Distance Education Bureau (DEB) is the statutory apex body regulating higher distance education. All our partner universities maintain valid approval letters accessible on the UGC-DEB portal.
              </p>
            </div>

            <div className={styles.card}>
              <div style={{ color: "#34d399" }}>
                <Award size={36} />
              </div>
              <h3 className={styles.cardTitle}>AICTE Technical Approval</h3>
              <p className={styles.cardDesc}>
                Technical programs including BCA, MCA, and MBA adhere strictly to All India Council for Technical Education (AICTE) curriculum guidelines, faculty requirements, and laboratory practical norms.
              </p>
            </div>

            <div className={styles.card}>
              <div style={{ color: "#fbbf24" }}>
                <Scale size={36} />
              </div>
              <h3 className={styles.cardTitle}>AIU & WES Global Validity</h3>
              <p className={styles.cardDesc}>
                Member of the Association of Indian Universities (AIU) and evaluated by World Education Services (WES) for higher studies, jobs, and immigration in Canada, USA, UK, and Australia.
              </p>
            </div>
          </div>

          <DegreeValidity />

          <div className={styles.stepsBox}>
            <h2 className={styles.stepsTitle}>How to Verify University Approval on UGC Portal</h2>
            <div className={styles.stepsList}>
              <div className={styles.stepItem}>
                <span className={styles.stepNum}>1</span>
                <span>Visit the official website of the Distance Education Bureau at <strong>deb.ugc.ac.in</strong></span>
              </div>
              <div className={styles.stepItem}>
                <span className={styles.stepNum}>2</span>
                <span>Click on "Universities Recognized to offer Higher Education Programmes in ODL / Online mode".</span>
              </div>
              <div className={styles.stepItem}>
                <span className={styles.stepNum}>3</span>
                <span>Search for <strong>Mangalayatan University</strong> or <strong>Swami Vivekanand Subharti University</strong> to view sanctioned courses.</span>
              </div>
              <div className={styles.stepItem}>
                <span className={styles.stepNum}>4</span>
                <span>Our counseling team can also provide you the direct PDF circular for your chosen intake batch.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquirySection />
      <Footer />
      <FloatingActions onOpenEnquiry={() => setModalOpen(true)} />
      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
