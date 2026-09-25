"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Users,
  ChevronRight,
  ArrowRight,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Headphones
} from "lucide-react";
import styles from "./Footer.module.css";
import { SITE_CONFIG, getWhatsAppLink } from "@/lib/constants";

// Crisp inline SVGs for social media icons
function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

interface FooterProps {
  onOpenLeadModal?: () => void;
}

export default function Footer({ onOpenLeadModal }: FooterProps) {
  const handleCounselorClick = () => {
    if (onOpenLeadModal) {
      onOpenLeadModal();
    } else {
      window.open(getWhatsAppLink(), "_blank", "noopener,noreferrer");
    }
  };

  return (
    <footer className={styles.footer}>
      {/* Decorative Organic Vector Wave Background */}
      <div className={styles.bgVectorWrap} aria-hidden="true">
        <svg
          className={styles.bgVectorSvg}
          viewBox="0 0 1440 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Subtle curved background flow */}
          <path
            d="M -100 450 L -100 320 C 180 360 360 270 600 320 C 840 370 1080 230 1340 250 C 1470 260 1560 300 1600 330 L 1600 450 Z"
            fill="#050e24"
            opacity="0.65"
          />
          {/* Right curved wave sweep rising behind Need Help column */}
          <path
            d="M 980 450 C 1060 310 1180 190 1400 205 C 1510 215 1590 260 1630 300 L 1630 450 Z"
            fill="#040a1b"
            opacity="0.85"
          />
        </svg>
      </div>

      <div className="container">
        {/* Main 4-Column Grid */}
        <div className={styles.grid}>
          {/* Column 1: Brand & Trust Badges */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoLink}>
              <Image
                src="/images/logo-dark-bg.png"
                alt="superWebEdu"
                width={195}
                height={40}
                className={styles.footerLogoImg}
                priority
              />
            </Link>

            <p className={styles.brandDesc}>
              Your trusted admission guidance platform for UGC-DEB approved online and distance degree programs from India&apos;s leading universities.
            </p>

            {/* Trust Badges */}
            <div className={styles.trustBadges}>
              <div className={styles.trustPill}>
                <ShieldCheck size={16} className={styles.trustIconGreen} />
                <span>UGC-DEB Approved</span>
              </div>
              <div className={styles.trustPill}>
                <Users size={16} className={styles.trustIconGreen} />
                <span>Free Counselling</span>
              </div>
            </div>

            {/* Social Media Circular Buttons */}
            <div className={styles.socialRow}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="YouTube"
              >
                <YoutubeIcon size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Facebook"
              >
                <FacebookIcon size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Explore Courses */}
          <div className={styles.linksCol}>
            <div className={styles.colHeader}>
              <h4 className={styles.colTitle}>Explore Courses</h4>
              <span className={styles.titleRedBar} />
            </div>

            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="/courses/bca">
                  <ChevronRight size={14} className={styles.linkChevron} />
                  <span>Distance BCA Degree</span>
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/courses/mca">
                  <ChevronRight size={14} className={styles.linkChevron} />
                  <span>Distance MCA Degree</span>
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/courses/mba">
                  <ChevronRight size={14} className={styles.linkChevron} />
                  <span>Distance MBA (12+ Specializations)</span>
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/courses/bba">
                  <ChevronRight size={14} className={styles.linkChevron} />
                  <span>Distance BBA Degree</span>
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/courses/bcom">
                  <ChevronRight size={14} className={styles.linkChevron} />
                  <span>Distance B.Com Degree</span>
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/courses/ba">
                  <ChevronRight size={14} className={styles.linkChevron} />
                  <span>Distance BA (UPSC Aspirants)</span>
                </Link>
              </li>
            </ul>

            <Link href="/courses" className={styles.viewAllCourses}>
              <span>View All Courses</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Column 3: Universities */}
          <div className={styles.linksCol}>
            <div className={styles.colHeader}>
              <h4 className={styles.colTitle}>Universities</h4>
              <span className={styles.titleRedBar} />
            </div>

            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="/universities">
                  <ChevronRight size={14} className={styles.linkChevron} />
                  <span>Partner Universities</span>
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/universities">
                  <ChevronRight size={14} className={styles.linkChevron} />
                  <span>Subharti University (DDE)</span>
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/universities">
                  <ChevronRight size={14} className={styles.linkChevron} />
                  <span>Suresh Gyan Vihar (SGVU)</span>
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/universities">
                  <ChevronRight size={14} className={styles.linkChevron} />
                  <span>Lovely Professional University</span>
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/approvals">
                  <ChevronRight size={14} className={styles.linkChevron} />
                  <span>UGC-DEB Approvals Check</span>
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/about">
                  <ChevronRight size={14} className={styles.linkChevron} />
                  <span>About superWebEdu</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Need Help? */}
          <div className={styles.helpCol}>
            <div className={styles.colHeader}>
              <h4 className={styles.colTitle}>Need Help?</h4>
              <span className={styles.titleRedBar} />
            </div>

            <div className={styles.contactList}>
              {/* Phone */}
              <div className={styles.contactItem}>
                <div className={styles.contactIconCircle}>
                  <Phone size={18} className={styles.iconBlue} />
                </div>
                <div className={styles.contactContent}>
                  <a href={`tel:${SITE_CONFIG.phone}`} className={styles.contactTitle}>
                    {SITE_CONFIG.formattedPhone}
                  </a>
                  <span className={styles.contactSubtitle}>Call for admission guidance</span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className={styles.contactItem}>
                <div className={styles.contactIconCircle}>
                  <MessageCircle size={19} className={styles.iconGreen} />
                </div>
                <div className={styles.contactContent}>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactTitleGreen}
                  >
                    {SITE_CONFIG.formattedPhone}
                  </a>
                  <span className={styles.contactSubtitle}>WhatsApp for quick support</span>
                </div>
              </div>

              {/* Email */}
              <div className={styles.contactItem}>
                <div className={styles.contactIconCircle}>
                  <Mail size={18} className={styles.iconBlue} />
                </div>
                <div className={styles.contactContent}>
                  <a href={`mailto:${SITE_CONFIG.email}`} className={styles.contactTitle}>
                    {SITE_CONFIG.email}
                  </a>
                  <span className={styles.contactSubtitle}>Email us anytime</span>
                </div>
              </div>

              {/* Working Hours */}
              <div className={styles.contactItem}>
                <div className={styles.contactIconCircle}>
                  <Clock size={18} className={styles.iconBlue} />
                </div>
                <div className={styles.contactContent}>
                  <span className={styles.contactHoursTitle}>
                    Mon - Sun: 9:00 AM - 9:00 PM (IST)
                  </span>
                  <span className={styles.contactSubtitle}>Our counsellors are available</span>
                </div>
              </div>
            </div>

            {/* Red Action CTA: Talk to a Counsellor */}
            <button
              type="button"
              onClick={handleCounselorClick}
              className={styles.counselorBtn}
            >
              <Headphones size={18} className={styles.btnIconLeft} />
              <span>Talk to a Counsellor</span>
              <ArrowRight size={17} className={styles.btnIconRight} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyrightText}>
            © {new Date().getFullYear()} superWebEdu. All rights reserved.
          </p>

          <div className={styles.bottomNav}>
            <Link href="/privacy" className={styles.bottomLink}>
              Privacy Policy
            </Link>
            <span className={styles.bottomDivider}>|</span>
            <Link href="/terms" className={styles.bottomLink}>
              Terms &amp; Conditions
            </Link>
            <span className={styles.bottomDivider}>|</span>
            <Link href="/disclaimer" className={styles.bottomLink}>
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
