"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  GraduationCap, 
  Search, 
  Menu, 
  X, 
  ChevronRight,
  Home,
  BookOpen,
  Building2,
  Award,
  Briefcase,
  Info,
  PhoneCall,
  MessageCircle
} from "lucide-react";
import styles from "./Navbar.module.css";
import { SITE_CONFIG, getWhatsAppLink } from "@/lib/constants";

interface NavbarProps {
  onOpenLeadModal?: (course?: string, university?: string) => void;
  onOpenSearch?: () => void;
}

export default function Navbar({ onOpenLeadModal, onOpenSearch }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const closeMobile = () => setMobileMenuOpen(false);

  // Monitor scroll for elevated shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background body and document scrolling when drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.documentElement.classList.add("nav-menu-open");
      document.body.classList.add("nav-menu-open");
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.classList.remove("nav-menu-open");
      document.body.classList.remove("nav-menu-open");
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.classList.remove("nav-menu-open");
      document.body.classList.remove("nav-menu-open");
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: "Home", href: "/", icon: <Home size={18} />, sub: "Main Portal" },
    { label: "Courses", href: "/courses", icon: <BookOpen size={18} />, sub: "BCA, MCA, MBA & more" },
    { label: "Universities", href: "/universities", icon: <Building2 size={18} />, sub: "UGC-DEB approved partners" },
    { label: "Admission", href: "/approvals", icon: <Award size={18} />, sub: "Process & UGC Guide" },
    { label: "For Professionals", href: "/#working-professionals", icon: <Briefcase size={18} />, sub: "Work & Study Balance" },
    { label: "About Us", href: "/about", icon: <Info size={18} />, sub: "Who we are" },
    { label: "Contact", href: "/contact", icon: <PhoneCall size={18} />, sub: "Direct counseling desk" },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        {/* Brand Logo */}
        <Link href="/" className={styles.brand} onClick={closeMobile}>
          <Image
            src="/images/logo-horizontal.png"
            alt="superWebEdu"
            width={210}
            height={40}
            priority
            className={styles.brandLogoImg}
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className={styles.navLinks}>
          <li>
            <Link 
              href="/" 
              className={`${styles.navLink} ${pathname === "/" ? styles.navLinkActive : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/courses" 
              className={`${styles.navLink} ${pathname === "/courses" ? styles.navLinkActive : ""}`}
            >
              Courses
            </Link>
          </li>
          <li>
            <Link 
              href="/universities" 
              className={`${styles.navLink} ${pathname === "/universities" ? styles.navLinkActive : ""}`}
            >
              Universities
            </Link>
          </li>
          <li>
            <Link 
              href="/approvals" 
              className={`${styles.navLink} ${pathname === "/approvals" ? styles.navLinkActive : ""}`}
            >
              Admissions
            </Link>
          </li>
          <li>
            <Link 
              href="/#working-professionals" 
              className={styles.navLink}
            >
              For Professionals
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`${styles.navLink} ${pathname === "/contact" ? styles.navLinkActive : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Right Action Group */}
        <div className={styles.actionGroup}>
          <button
            onClick={() => onOpenLeadModal?.()}
            className={styles.btnApply}
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Header Controls: Apply Now Button + Hamburger Toggle */}
        <div className={styles.mobileRightControls}>
          <button
            onClick={() => onOpenLeadModal?.()}
            className={styles.mobileBtnApply}
          >
            Apply Now
          </button>
          <button
            className={`${styles.mobileToggle} ${mobileMenuOpen ? styles.mobileToggleActive : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Backdrop Overlay */}
      <div 
        className={`${styles.backdrop} ${mobileMenuOpen ? styles.backdropOpen : ""}`}
        onClick={closeMobile}
        onTouchMove={(e) => {
          if (e.cancelable) e.preventDefault();
        }}
        aria-hidden="true"
      />

      {/* Modern Slide-In Drawer */}
      <aside 
        className={`${styles.drawer} ${mobileMenuOpen ? styles.drawerOpen : ""}`}
        aria-label="Mobile Navigation"
      >
        {/* Drawer Header */}
        <div className={styles.drawerHeader}>
          <Link href="/" className={styles.brand} onClick={closeMobile}>
            <Image
              src="/images/logo-horizontal.png"
              alt="superWebEdu"
              width={175}
              height={34}
              className={styles.drawerLogoImg}
            />
          </Link>
          <button 
            onClick={closeMobile} 
            className={styles.drawerCloseBtn}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Drawer Nav Items List */}
        <div className={styles.drawerBody}>
          <div className={styles.navGroupLabel}>Menu Navigation</div>
          <ul className={styles.drawerNavList}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`${styles.drawerNavItem} ${isActive ? styles.drawerNavItemActive : ""}`}
                    onClick={closeMobile}
                  >
                    <div className={styles.drawerItemIconWrap}>
                      {item.icon}
                    </div>
                    <div className={styles.drawerItemText}>
                      <span className={styles.drawerItemTitle}>{item.label}</span>
                      <span className={styles.drawerItemSub}>{item.sub}</span>
                    </div>
                    <ChevronRight size={16} className={styles.drawerItemChevron} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Drawer Action Footer */}
        <div className={styles.drawerFooter}>
          <button
            onClick={() => {
              closeMobile();
              onOpenLeadModal?.();
            }}
            className={styles.drawerApplyBtn}
          >
            Apply for Admission →
          </button>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.drawerWhatsAppBtn}
            onClick={closeMobile}
          >
            <MessageCircle size={18} />
            <span>WhatsApp Counseling</span>
          </a>

          <div className={styles.drawerHelpline}>
            <PhoneCall size={14} />
            <span>Direct Desk: <a href="tel:8810336124">+91 8810336124</a></span>
          </div>
        </div>
      </aside>
    </nav>
  );
}
