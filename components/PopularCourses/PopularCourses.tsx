"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import styles from "./PopularCourses.module.css";
import { COURSES, Course } from "@/data/courses";
import CourseCard from "../CourseCard/CourseCard";
import CourseDetailModal from "../CourseDetailModal/CourseDetailModal";

interface PopularCoursesProps {
  onOpenEnquiry?: (courseName?: string) => void;
}

export default function PopularCourses({ onOpenEnquiry }: PopularCoursesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Filter or prioritize the popular courses matching the reference (BCA, MCA, MBA, B.Com first)
  const popularCourses = React.useMemo(() => {
    const priorityOrder = ["bca", "mca", "mba", "bcom", "bba", "mcom", "msc-it", "diploma-tech"];
    const sorted = [...COURSES].sort((a, b) => {
      const idxA = priorityOrder.indexOf(a.id);
      const idxB = priorityOrder.indexOf(b.id);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return 0;
    });
    return sorted;
  }, []);

  // Update visible cards count on resize: 2.25 cards on mobile (<640px) matching screenshot
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(2.25);
      } else if (width < 992) {
        setVisibleCount(3);
      } else if (width < 1200) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, popularCourses.length - Math.floor(visibleCount));

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // Touch Swipe Handling for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className={styles.section} aria-label="Most In-Demand Courses">
      <div className="container">
        {/* Header with Title and Top-Right Navigation Controls */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>POPULAR COURSES</span>
            <div className={styles.titleWrapMobile}>
              <h2 className={styles.title}>
                Explore Our <span className={styles.titleHighlight}>In-Demand Courses</span>
              </h2>
              <Link href="/courses" className={styles.mobileViewAllLink}>
                <span>View All</span>
                <ArrowRight size={14} />
              </Link>
            </div>
            <p className={styles.subtitle}>
              Upgrade your skills with industry-relevant programs and get a better future.
            </p>
          </div>

          {/* Carousel Arrows on Top-Right (Desktop) */}
          <div className={styles.navControls}>
            <button
              type="button"
              className={`${styles.navBtn} ${styles.prevBtn} ${currentIndex === 0 ? styles.navBtnDisabled : ""}`}
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous courses"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className={`${styles.navBtn} ${styles.nextBtn} ${currentIndex >= maxIndex ? styles.navBtnDisabled : ""}`}
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Next courses"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Slider Window */}
        <div 
          className={styles.sliderWindow}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className={styles.sliderTrack}
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          >
            {popularCourses.map((course, idx) => (
              <div 
                key={`${course.id}-${idx}`} 
                className={styles.slideItem}
                style={{ width: `${100 / visibleCount}%` }}
              >
                <CourseCard
                  course={course}
                  onViewDetails={(c) => setSelectedCourse(c)}
                  onEnquire={onOpenEnquiry}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Indicator Dots (matching screenshot) */}
        <div className={styles.mobileDots}>
          {[0, 1, 2].map((dotIdx) => {
            const activeDot = Math.min(2, Math.floor(currentIndex / (maxIndex / 2 || 1)));
            return (
              <button
                key={dotIdx}
                type="button"
                className={`${styles.mobileDot} ${activeDot === dotIdx ? styles.mobileDotActive : ""}`}
                onClick={() => setCurrentIndex(Math.min(maxIndex, Math.round(dotIdx * (maxIndex / 2))))}
                aria-label={`Go to slide group ${dotIdx + 1}`}
              />
            );
          })}
        </div>

        {/* Center Bottom View All Courses CTA (Desktop) */}
        <div className={styles.bottomCtaRow}>
          <Link href="/courses" className={styles.btnViewAll}>
            <span>View All Courses</span>
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>

      {/* Course Detail Modal for syllabus & details */}
      {selectedCourse && (
        <CourseDetailModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onOpenEnquiry={(courseName) => {
            setSelectedCourse(null);
            onOpenEnquiry?.(courseName);
          }}
        />
      )}
    </section>
  );
}
