import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquareQuote, 
  ShieldCheck, 
  Clock, 
  ChevronRight 
} from "lucide-react";
import styles from "./Footer.module.css";
import { SITE_CONFIG, getWhatsAppLink } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Col */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <Image 
                src="/images/logo-dark-bg.png" 
                alt="superWebEdu" 
                width={200} 
                height={38} 
                className={styles.footerLogoImg} 
              />
            </Link>
            <p className={styles.brandDesc}>
              India's premier admission guidance & counseling portal for UGC-DEB approved Distance & Online Degree courses from prestigious universities.
            </p>
            <div className={styles.trustBadges}>
              <span className={styles.trustPill}>✓ UGC-DEB Approved</span>
              <span className={styles.trustPill}>✓ AICTE & AIU Equivalent</span>
              <span className={styles.trustPill}>✓ 100% Free Counseling</span>
            </div>
          </div>

          {/* Top Courses */}
          <div>
            <h4 className={styles.colTitle}>Popular Distance Courses</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="/courses?search=BCA"><ChevronRight size={14} /> Distance BCA Degree</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/courses?search=MCA"><ChevronRight size={14} /> Distance MCA Degree</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/courses?search=MBA"><ChevronRight size={14} /> Distance MBA (12+ Specializations)</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/courses?search=BBA"><ChevronRight size={14} /> Distance BBA Degree</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/courses?search=B.Com"><ChevronRight size={14} /> Distance B.Com / M.Com</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/courses?search=BA"><ChevronRight size={14} /> Distance BA (UPSC Aspirants)</Link>
              </li>
            </ul>
          </div>

          {/* Partner Universities */}
          <div>
            <h4 className={styles.colTitle}>Partner Universities</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="/universities"><ChevronRight size={14} /> Mangalayatan University (DDE)</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/universities"><ChevronRight size={14} /> Subharti University (DDE)</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/universities"><ChevronRight size={14} /> Suresh Gyan Vihar (SGVU)</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/universities"><ChevronRight size={14} /> Lovely Professional University</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/approvals"><ChevronRight size={14} /> UGC-DEB Approvals Check</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/about"><ChevronRight size={14} /> About superWebEdu</Link>
              </li>
            </ul>
          </div>

          {/* Contact Helpline */}
          <div>
            <h4 className={styles.colTitle}>Direct Helpline</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactRow}>
                <Phone size={18} />
                <div>
                  <span>Call Helpline: </span>
                  <a href={`tel:${SITE_CONFIG.phone}`}>{SITE_CONFIG.formattedPhone}</a>
                </div>
              </li>
              <li className={styles.contactRow}>
                <MessageSquareQuote size={18} style={{ color: "#25d366" }} />
                <div>
                  <span>WhatsApp 24/7: </span>
                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" style={{ color: "#25d366" }}>
                    +91 {SITE_CONFIG.phone}
                  </a>
                </div>
              </li>
              <li className={styles.contactRow}>
                <Mail size={18} />
                <div>
                  <span>Email: </span>
                  <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
                </div>
              </li>
              <li className={styles.contactRow}>
                <Clock size={18} />
                <span>{SITE_CONFIG.counselingHours}</span>
              </li>
              <li className={styles.contactRow}>
                <MapPin size={18} />
                <span>{SITE_CONFIG.officeAddress}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className={styles.bottomBar}>
          <div>
            <p>© {new Date().getFullYear()} superWebEdu. All rights reserved.</p>
            <p className={styles.disclaimerText}>
              Disclaimer: superWebEdu provides free academic guidance, admission counseling, and student support for UGC-DEB recognized universities. All university trademarks, names, and logos belong to their respective statutory institutions.
            </p>
          </div>
          <div>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" style={{ color: "#25d366", fontWeight: 700 }}>
              Need Help? WhatsApp: 8810336124
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
