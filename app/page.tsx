"use client";

import React, { useState } from "react";
import TopBar from "@/components/TopBar/TopBar";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import UniversityLogos from "@/components/UniversityLogos/UniversityLogos";
import WorkingProfessionals from "@/components/WorkingProfessionals/WorkingProfessionals";
import StudyProcess from "@/components/StudyProcess/StudyProcess";
import BottomStatsQuote from "@/components/BottomStatsQuote/BottomStatsQuote";
import PopularCourses from "@/components/PopularCourses/PopularCourses";
import FeeCalculator from "@/components/FeeCalculator/FeeCalculator";
import DegreeValidity from "@/components/DegreeValidity/DegreeValidity";
import WhyUs from "@/components/WhyUs/WhyUs";
import Testimonials from "@/components/Testimonials/Testimonials";
import CounselorSlider from "@/components/CounselorSlider/CounselorSlider";
import EnquirySection from "@/components/EnquirySection/EnquirySection";
import Footer from "@/components/Footer/Footer";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import LeadModal from "@/components/LeadModal/LeadModal";

export default function HomePage() {
  const [leadModalState, setLeadModalState] = useState<{
    isOpen: boolean;
    course?: string;
    university?: string;
  }>({
    isOpen: false
  });

  const handleOpenLeadModal = (course?: string, university?: string) => {
    setLeadModalState({
      isOpen: true,
      course,
      university
    });
  };

  const handleCloseLeadModal = () => {
    setLeadModalState({
      isOpen: false
    });
  };

  return (
    <main>
      {/* 1. Top Advisory Bar */}
      <TopBar />

      {/* 2. Main Navigation Bar */}
      <Navbar onOpenLeadModal={() => handleOpenLeadModal()} />

      {/* 3. Exact Reference Hero Section */}
      <Hero onOpenLeadModal={handleOpenLeadModal} />

      {/* 4. Verified Academic Counselors Auto-Slider */}
      <CounselorSlider onOpenLeadModal={handleOpenLeadModal} />

      {/* 5. Most In-Demand Popular Courses Section Matching Reference Mockup */}
      <PopularCourses onOpenEnquiry={(courseName) => handleOpenLeadModal(courseName)} />

      {/* 6. Why Distance Education is Ideal for Working Professionals */}
      <WorkingProfessionals onOpenLeadModal={handleOpenLeadModal} />

      {/* 7. Two-Column Feature: Study from Anywhere + How It Works */}
      <StudyProcess onOpenLeadModal={() => handleOpenLeadModal()} />

      {/* 8. Bottom Stats Strip & Nelson Mandela Quote Box */}
      <BottomStatsQuote />

      {/* 9. Top UGC & NAAC Approved Universities Row */}
      <UniversityLogos onSelectUniversity={(uni) => handleOpenLeadModal(undefined, uni)} />

      {/* 10. Interactive Course Fee & Semester Breakdown Calculator */}
      <FeeCalculator />

      {/* 12. UGC Gazette Degree Validity Equivalence */}
      <DegreeValidity />

      {/* 13. Why Choose SuperWebSiksha Advantages */}
      <WhyUs />

      {/* 14. Student Testimonials & Reviews */}
      <Testimonials />

      {/* 14. Full Admission Query Desk & Helpline (8810336124) */}
      <EnquirySection />

      {/* 15. Footer */}
      <Footer />

      {/* 17. Floating WhatsApp (8810336124) & Quick Query Widget */}
      <FloatingActions onOpenEnquiry={() => handleOpenLeadModal()} />

      {/* 18. Global Lead / Application Modal */}
      <LeadModal
        isOpen={leadModalState.isOpen}
        onClose={handleCloseLeadModal}
        preselectedCourse={leadModalState.course}
        preselectedUniversity={leadModalState.university}
      />
    </main>
  );
}
