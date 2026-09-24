"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { GraduationCap } from "lucide-react";
import styles from "./courses.module.css";
import TopBar from "@/components/TopBar/TopBar";
import Navbar from "@/components/Navbar/Navbar";
import CourseSection from "@/components/CourseSection/CourseSection";
import EnquirySection from "@/components/EnquirySection/EnquirySection";
import Footer from "@/components/Footer/Footer";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import LeadModal from "@/components/LeadModal/LeadModal";

function CoursesContent() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const [modalState, setModalState] = useState<{ isOpen: boolean; course?: string; university?: string }>({
    isOpen: false
  });

  return (
    <>
      <div className={styles.pageHero}>
        <div className="container">
          <span className={styles.heroTag}>
            <GraduationCap size={18} /> Official Course Catalog 2025-26
          </span>
          <h1 className={styles.heroTitle}>
            All Distance & Online <span className={styles.gradient}>Degree Programs</span>
          </h1>
          <p className={styles.heroDesc}>
            Discover verified Bachelor's, Master's, and Diploma programs across IT, Management, Commerce, Arts, and Sciences with UGC-DEB accreditation.
          </p>
        </div>
      </div>

      <CourseSection
        initialSearch={search}
        onOpenEnquiry={(courseName) => setModalState({ isOpen: true, course: courseName })}
      />

      <EnquirySection defaultCourse={modalState.course} />

      <LeadModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false })}
        preselectedCourse={modalState.course}
        preselectedUniversity={modalState.university}
      />
    </>
  );
}

export default function CoursesPage() {
  const [leadModalOpen, setLeadModalOpen] = useState(false);

  return (
    <main>
      <TopBar />
      <Navbar onOpenLeadModal={() => setLeadModalOpen(true)} />
      <Suspense fallback={<div style={{ padding: "80px", textAlign: "center", color: "#fff" }}>Loading Courses Catalog...</div>}>
        <CoursesContent />
      </Suspense>
      <Footer />
      <FloatingActions onOpenEnquiry={() => setLeadModalOpen(true)} />
      <LeadModal isOpen={leadModalOpen} onClose={() => setLeadModalOpen(false)} />
    </main>
  );
}
