"use client";

import React, { useState } from "react";
import { Building2 } from "lucide-react";
import styles from "./universities.module.css";
import TopBar from "@/components/TopBar/TopBar";
import Navbar from "@/components/Navbar/Navbar";
import UniversitySection from "@/components/UniversitySection/UniversitySection";
import DegreeValidity from "@/components/DegreeValidity/DegreeValidity";
import EnquirySection from "@/components/EnquirySection/EnquirySection";
import Footer from "@/components/Footer/Footer";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import LeadModal from "@/components/LeadModal/LeadModal";

export default function UniversitiesPage() {
  const [modalState, setModalState] = useState<{ isOpen: boolean; course?: string; university?: string }>({
    isOpen: false
  });

  return (
    <main>
      <TopBar />
      <Navbar onOpenLeadModal={() => setModalState({ isOpen: true })} />

      <div className={styles.pageHero}>
        <div className="container">
          <span className={styles.heroTag}>
            <Building2 size={18} /> Directorate of Distance Education
          </span>
          <h1 className={styles.heroTitle}>
            UGC-DEB Approved <span className={styles.gradient}>Partner Universities</span>
          </h1>
          <p className={styles.heroDesc}>
            Explore recognized institutions including Mangalayatan University, Swami Vivekanand Subharti University, Suresh Gyan Vihar, and more.
          </p>
        </div>
      </div>

      <UniversitySection
        hideHeader={true}
        onOpenEnquiry={(uniName) => setModalState({ isOpen: true, university: uniName })}
      />

      <DegreeValidity />

      <EnquirySection defaultUniversity={modalState.university} />

      <Footer />
      <FloatingActions onOpenEnquiry={() => setModalState({ isOpen: true })} />
      <LeadModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false })}
        preselectedCourse={modalState.course}
        preselectedUniversity={modalState.university}
      />
    </main>
  );
}
