"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import styles from "./UniversityLogos.module.css";

interface UniversityLogosProps {
  onSelectUniversity?: (uniName: string) => void;
}

export const UNIVERSITY_PARTNERS = [
  {
    id: "mangalayatan",
    name: "Mangalayatan University",
    tag: "NAAC A+ Accredited",
    badge: "UGC-DEB",
    logo: "/images/universities/mangalayatan.webp",
    alt: "Mangalayatan University Official Logo"
  },
  {
    id: "subharti",
    name: "Swami Vivekanand Subharti",
    tag: "NAAC 'A' Grade DDE",
    badge: "UGC-DEB",
    logo: "/images/universities/subharti.png",
    alt: "Subharti University Official Logo"
  },
  {
    id: "lpu",
    name: "Lovely Professional University",
    tag: "NAAC A++ (Highest Grade)",
    badge: "NIRF Top 30",
    logo: "/images/universities/lpu.svg",
    alt: "LPU Official Logo"
  },
  {
    id: "amity",
    name: "Amity University Online",
    tag: "Ranked #1 Online Programs",
    badge: "NAAC A+",
    logo: "/images/universities/amity.svg",
    alt: "Amity University Online Logo"
  },
  {
    id: "du",
    name: "Delhi University (DU SOL)",
    tag: "Premier Central University",
    badge: "Est. 1922",
    logo: "/images/universities/du.png",
    alt: "University of Delhi Official Logo"
  },
  {
    id: "ignou",
    name: "IGNOU",
    tag: "The People's University",
    badge: "NAAC A++",
    logo: "/images/universities/ignou.png",
    alt: "IGNOU Official Logo"
  },
  {
    id: "manipal",
    name: "Manipal Academy (MAHE)",
    tag: "Institute of Eminence",
    badge: "NAAC A++",
    logo: "/images/universities/manipal.png",
    alt: "Manipal University Official Logo"
  },
  {
    id: "sgvu",
    name: "Suresh Gyan Vihar University",
    tag: "NAAC 'A+' Grade DDE",
    badge: "AICTE",
    logo: "/images/universities/sgvu.png",
    alt: "SGVU Official Logo"
  },
  {
    id: "chandigarh",
    name: "Chandigarh University",
    tag: "NAAC A+ Accredited",
    badge: "QS Ranked",
    logo: "/images/universities/chandigarh.png",
    alt: "Chandigarh University Official Logo"
  },
  {
    id: "jmi",
    name: "Jamia Millia Islamia",
    tag: "Central University DDE",
    badge: "NAAC A++",
    logo: "/images/universities/jmi.svg",
    alt: "Jamia Millia Islamia Official Logo"
  }
];

export default function UniversityLogos({ onSelectUniversity }: UniversityLogosProps) {
  // Duplicate list once to create an infinite seamless loop without any gap or jump
  const marqueeList = [...UNIVERSITY_PARTNERS, ...UNIVERSITY_PARTNERS];

  return (
    <section className={styles.section} aria-label="Partner Universities Carousel">
      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.tagline}>
            <CheckCircle2 size={15} className={styles.checkIcon} />
            <span>100% GOVT. & UGC-DEB RECOGNIZED DEGREES</span>
          </div>

          <div className={styles.titleRow}>
            <h2 className={styles.sectionTitle}>
              Top UGC &amp; NAAC <span className={styles.blueHighlight}>Approved Universities</span>
            </h2>
            <Link href="/universities" className={styles.viewAllLink}>
              <span>View All 50+ Universities</span>
              <ArrowRight size={15} />
            </Link>
          </div>
          <p className={styles.subtitle}>
            Direct admissions into India&apos;s premier distance &amp; online universities with verified enrollment, flexible exams, and genuine degrees.
          </p>
        </div>

        {/* Infinite Auto Slider Marquee Container - Within Main Container */}
        <div className={styles.marqueeOuter}>
          <div className={styles.marqueeTrack}>
            {marqueeList.map((uni, idx) => (
              <Link
                key={`${uni.id}-${idx}`}
                href="/universities"
                className={styles.uniCard}
                onClick={() => onSelectUniversity?.(uni.name)}
                title={uni.name}
                aria-label={uni.name}
              >
                {/* Large Official University Logo */}
                <div className={styles.logoWrap}>
                  <Image
                    src={uni.logo}
                    alt={uni.alt}
                    width={150}
                    height={64}
                    className={styles.logoImg}
                    loading={idx < 10 ? "eager" : "lazy"}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
