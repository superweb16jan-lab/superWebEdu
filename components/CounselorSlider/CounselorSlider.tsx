"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight,
  ShieldCheck,
  Briefcase
} from "lucide-react";
import styles from "./CounselorSlider.module.css";
import { COUNSELORS, Counselor } from "@/data/counselors";
import { SITE_CONFIG } from "@/lib/constants";

interface CounselorSliderProps {
  onOpenLeadModal?: (course?: string, university?: string) => void;
}

export default function CounselorSlider({ onOpenLeadModal }: CounselorSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive visible cards count: 2.25 cards on mobile (<640px)
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

  const maxIndex = Math.max(0, COUNSELORS.length - Math.floor(visibleCount));

  // Next Slide function
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  // Prev Slide function
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-slide effect (every 3.2 seconds)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3200);

    return () => clearInterval(timer);
  }, [handleNext, isPaused]);

  // Swipe handling for touch devices
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

  const handleReachNow = (counselor: Counselor, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const message = encodeURIComponent(
      `Hello SuperWebEdu! I would like to reach academic counselor ${counselor.name} for admission guidance.`
    );
    const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section 
      className={styles.section}
      aria-label="Academic Counselors Slider"
    >
      <div className="container">
        {/* Section Header with Title on Left & Carousel Controls on Right */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <div className={styles.tagline}>
              <ShieldCheck size={16} /> Verified Admission Advisors
            </div>
            <h2 className={styles.title}>
              Connect With Our <span className={styles.accentText}>Academic Counselors</span>
            </h2>
            <p className={styles.subtitle}>
              Get 1-on-1 counseling from verified admission experts to choose the right university and course.
            </p>
          </div>

          {/* Carousel Arrows on Top-Right matching Popular Courses */}
          <div className={styles.navControls}>
            <button
              type="button"
              className={`${styles.navBtn} ${styles.prevBtn} ${currentIndex === 0 ? styles.navBtnDisabled : ""}`}
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous Counselor"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className={`${styles.navBtn} ${styles.nextBtn} ${currentIndex >= maxIndex ? styles.navBtnDisabled : ""}`}
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Next Counselor"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className={styles.sliderWrapper}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slider Window */}
          <div className={styles.sliderWindow}>
            <div 
              className={styles.sliderTrack}
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                transition: "transform 0.5s ease-in-out"
              }}
            >
              {COUNSELORS.map((counselor) => (
                <div 
                  key={counselor.id} 
                  className={styles.slideItem}
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div 
                    className={styles.counselorCard}
                    onClick={() => handleReachNow(counselor)}
                  >
                    {/* Counselor Image */}
                    <div className={styles.imageWrapper}>
                      <Image
                        src={counselor.image}
                        alt={counselor.name}
                        width={360}
                        height={260}
                        className={styles.counselorImg}
                        priority={true}
                      />

                      {/* Overlay on Image: Name, Experience and Reach Now Button */}
                      <div className={styles.imageOverlay}>
                        <div className={styles.counselorInfo}>
                          <h3 className={styles.counselorName}>{counselor.name}</h3>
                          <span className={styles.counselorExp}>
                            <Briefcase size={12} />
                            {counselor.experience} Experience
                          </span>
                        </div>
                        <button
                          type="button"
                          className={styles.reachNowBtn}
                          onClick={(e) => handleReachNow(counselor, e)}
                          aria-label={`Reach ${counselor.name} now`}
                        >
                          <span>Reach Now</span>
                          <ArrowUpRight size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Indicator Dots */}
        <div className={styles.mobileDots}>
          {[0, 1, 2].map((dotIdx) => {
            const activeDot = Math.min(2, Math.floor(currentIndex / (maxIndex / 2 || 1)));
            return (
              <button
                key={dotIdx}
                type="button"
                className={`${styles.mobileDot} ${activeDot === dotIdx ? styles.mobileDotActive : ""}`}
                onClick={() => setCurrentIndex(Math.min(maxIndex, Math.round(dotIdx * (maxIndex / 2))))}
                aria-label={`Go to counselor group ${dotIdx + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
