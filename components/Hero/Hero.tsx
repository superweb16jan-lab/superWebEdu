"use client";

import React from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  MessageCircle, 
  GraduationCap, 
  BookOpen, 
  Users 
} from "lucide-react";
import styles from "./Hero.module.css";
import { getWhatsAppLink } from "@/lib/constants";

interface HeroProps {
  onOpenLeadModal?: (course?: string, university?: string) => void;
}

export default function Hero({ onOpenLeadModal }: HeroProps) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        {/* Main Grid: Left Content + Right Student with Backdrop */}
        <div className={styles.heroMainGrid}>
          {/* Left Column: Eyebrow, Heading, Desc, CTAs */}
          <div className={styles.heroLeft}>
            <p className={styles.heroEyebrow}>UGC-DEB &amp; AICTE APPROVED</p>

            <h1 className={styles.heroTitle}>
              Build Your Career With{" "}
              <span className={styles.heroTitleHighlight}>UGC-Approved Degrees</span>
            </h1>

            <p className={styles.heroDesc}>
              <span className={styles.descFull}>
                Choose from recognized online and distance programs from leading universities, with expert guidance from admission to enrollment.
              </span>
              <span className={styles.descShort}>
                UGC-recognized online degrees from leading universities.
              </span>
            </p>

            <div className={styles.heroActionRow}>
              <button
                onClick={() => onOpenLeadModal?.()}
                className={styles.heroBtnExplore}
                type="button"
              >
                <span>Explore Courses</span>
                <ArrowRight size={17} />
              </button>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroLinkCounselor}
              >
                <MessageCircle size={18} className={styles.heroWaIcon} />
                <span className={styles.heroLinkText}>Talk to a Counsellor</span>
              </a>
            </div>
          </div>

          {/* Right Column: Oval Backdrop & Student Cutout */}
          <div className={styles.heroRight}>
            <div className={styles.ovalBackdrop} />
            <div className={styles.studentImgWrap}>
              <Image
                src="/images/hero-student-female.png"
                alt="Indian Student with Backpack and Books"
                width={494}
                height={680}
                priority
                className={styles.studentImg}
              />
            </div>
          </div>
        </div>

        {/* Bottom 3-Feature Strip */}
        <div className={styles.heroFeatureStrip}>
          <div className={styles.featureItem}>
            <GraduationCap size={22} strokeWidth={1.8} className={styles.featureIcon} />
            <div className={styles.featureText}>
              <span>UGC-DEB</span>
              <span>Approved</span>
            </div>
          </div>

          <div className={styles.featureDivider} />

          <div className={styles.featureItem}>
            <BookOpen size={22} strokeWidth={1.8} className={styles.featureIcon} />
            <div className={styles.featureText}>
              <span>Flexible</span>
              <span>Learning</span>
            </div>
          </div>

          <div className={styles.featureDivider} />

          <div className={styles.featureItem}>
            <Users size={22} strokeWidth={1.8} className={styles.featureIcon} />
            <div className={styles.featureText}>
              <span>Admission</span>
              <span>Assistance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
