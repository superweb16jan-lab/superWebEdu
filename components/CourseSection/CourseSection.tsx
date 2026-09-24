"use client";

import React, { useState, useMemo } from "react";
import { 
  Search, 
  LayoutGrid, 
  Code, 
  Briefcase, 
  TrendingUp, 
  Landmark, 
  FlaskConical, 
  Award,
  Flame, 
  IndianRupee, 
  Clock, 
  Users, 
  List, 
  HelpCircle, 
  MessageSquareQuote,
  Sparkles,
  ChevronDown
} from "lucide-react";
import styles from "./CourseSection.module.css";
import { COURSES, COURSE_CATEGORIES, DEGREE_LEVELS, Course } from "@/data/courses";
import CourseCard from "../CourseCard/CourseCard";
import CourseDetailModal from "../CourseDetailModal/CourseDetailModal";
import { getWhatsAppLink, SITE_CONFIG } from "@/lib/constants";

interface CourseSectionProps {
  onOpenEnquiry?: (courseName?: string) => void;
  initialSearch?: string;
  initialCategory?: string;
}

const UNIVERSITIES_FILTER = [
  "All Universities",
  "Mangalayatan",
  "Subharti",
  "SGVU",
  "Manipal",
  "Amity",
  "IGNOU",
  "Lovely Professional",
  "Chandigarh"
];

export default function CourseSection({ 
  onOpenEnquiry,
  initialSearch = "",
  initialCategory = "All Courses" 
}: CourseSectionProps) {
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState<string>("All Levels");
  const [selectedUniversity, setSelectedUniversity] = useState<string>("All Universities");
  const [activeQuickFilter, setActiveQuickFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>("Popularity");
  const [layoutMode, setLayoutMode] = useState<"grid" | "list">("grid");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Category Icon Mapping
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "All Courses":
        return <LayoutGrid size={15} />;
      case "IT & Tech":
        return <Code size={15} />;
      case "Management":
        return <Briefcase size={15} />;
      case "Commerce & Finance":
        return <TrendingUp size={15} />;
      case "Arts & Humanities":
        return <Landmark size={15} />;
      case "Science":
        return <FlaskConical size={15} />;
      case "Diplomas":
        return <Award size={15} />;
      default:
        return <Sparkles size={15} />;
    }
  };

  // Toggle quick filters
  const handleQuickFilterClick = (filterType: string) => {
    if (activeQuickFilter === filterType) {
      setActiveQuickFilter(null);
    } else {
      setActiveQuickFilter(filterType);
    }
  };

  const filteredCourses = useMemo(() => {
    let result = COURSES.filter((course) => {
      // 1. Search Query
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = 
        !query ||
        course.name.toLowerCase().includes(query) ||
        course.shortName.toLowerCase().includes(query) ||
        course.careerRoles.some(role => role.toLowerCase().includes(query)) ||
        course.partnerUniversities.some(uni => uni.toLowerCase().includes(query)) ||
        course.category.toLowerCase().includes(query);

      // 2. Category Filter
      const matchesCategory = 
        selectedCategory === "All Courses" || course.category === selectedCategory;

      // 3. Level Filter
      const matchesLevel = 
        selectedLevel === "All Levels" || course.level === selectedLevel;

      // 4. University Filter
      const matchesUniversity = 
        selectedUniversity === "All Universities" || 
        course.partnerUniversities.some(u => u.toLowerCase().includes(selectedUniversity.toLowerCase()));

      // 5. Quick Highlight Filters
      let matchesQuickFilter = true;
      if (activeQuickFilter === "popular") {
        matchesQuickFilter = !!course.isPopular;
      } else if (activeQuickFilter === "salary") {
        matchesQuickFilter = !!course.isHighSalary;
      } else if (activeQuickFilter === "lowfee") {
        matchesQuickFilter = !!course.isLowFee;
      } else if (activeQuickFilter === "shortduration") {
        matchesQuickFilter = !!course.isShortDuration;
      } else if (activeQuickFilter === "placement") {
        matchesQuickFilter = !!course.hasPlacement;
      }

      return matchesSearch && matchesCategory && matchesLevel && matchesUniversity && matchesQuickFilter;
    });

    // Sorting
    if (sortBy === "Fee: Low to High") {
      result = [...result].sort((a, b) => {
        const feeA = parseInt(a.avgFeesPerSem.replace(/[^0-9]/g, "")) || 0;
        const feeB = parseInt(b.avgFeesPerSem.replace(/[^0-9]/g, "")) || 0;
        return feeA - feeB;
      });
    } else if (sortBy === "Fee: High to Low") {
      result = [...result].sort((a, b) => {
        const feeA = parseInt(a.avgFeesPerSem.replace(/[^0-9]/g, "")) || 0;
        const feeB = parseInt(b.avgFeesPerSem.replace(/[^0-9]/g, "")) || 0;
        return feeB - feeA;
      });
    } else if (sortBy === "Duration: Short to Long") {
      result = [...result].sort((a, b) => {
        const durA = parseInt(a.duration) || 3;
        const durB = parseInt(b.duration) || 3;
        return durA - durB;
      });
    } else if (sortBy === "Name (A-Z)") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [searchQuery, selectedCategory, selectedLevel, selectedUniversity, activeQuickFilter, sortBy]);

  return (
    <section className={styles.section} id="courses-section">
      <div className="container">
        
        {/* Top Control Bar: Search Input + Filter Dropdowns */}
        <div className={styles.topControlCard}>
          <div className={styles.searchContainer}>
            <Search size={19} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search by course (BCA, MCA, MBA, BA...), university or keyword..."
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className={styles.btnSearchPrimary} type="button">
              Search
            </button>
          </div>

          <div className={styles.dropdownsRow}>
            {/* Level Dropdown */}
            <div className={styles.selectWrapper}>
              <select 
                className={styles.filterSelect}
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                {DEGREE_LEVELS.map((lvl) => (
                  <option key={lvl} value={lvl}>{lvl}</option>
                ))}
              </select>
              <ChevronDown size={14} className={styles.selectArrow} />
            </div>

            {/* Category Dropdown */}
            <div className={styles.selectWrapper}>
              <select 
                className={styles.filterSelect}
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {COURSE_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "All Courses" ? "All Categories" : cat}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className={styles.selectArrow} />
            </div>

            {/* University Dropdown */}
            <div className={styles.selectWrapper}>
              <select 
                className={styles.filterSelect}
                value={selectedUniversity}
                onChange={(e) => setSelectedUniversity(e.target.value)}
              >
                {UNIVERSITIES_FILTER.map((uni) => (
                  <option key={uni} value={uni}>{uni}</option>
                ))}
              </select>
              <ChevronDown size={14} className={styles.selectArrow} />
            </div>
          </div>
        </div>

        {/* Category Pill Tabs Row */}
        <div className={styles.categoryPillsRow}>
          {COURSE_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                className={`${styles.categoryPill} ${isActive ? styles.categoryPillActive : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                <span className={styles.categoryPillIcon}>{getCategoryIcon(cat)}</span>
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* 5 Feature Benefit Cards Row */}
        <div className={styles.quickFeaturesRow}>
          {/* Most Popular */}
          <button
            type="button"
            className={`${styles.featureCard} ${activeQuickFilter === "popular" ? styles.featureCardActive : ""}`}
            onClick={() => handleQuickFilterClick("popular")}
          >
            <div className={`${styles.featureIconWrap} ${styles.iconFire}`}>
              <Flame size={18} />
            </div>
            <div className={styles.featureTextWrap}>
              <span className={styles.featureTitle}>Most Popular</span>
              <span className={styles.featureSubtitle}>Trending courses</span>
            </div>
          </button>

          {/* High Salary Growth */}
          <button
            type="button"
            className={`${styles.featureCard} ${activeQuickFilter === "salary" ? styles.featureCardActive : ""}`}
            onClick={() => handleQuickFilterClick("salary")}
          >
            <div className={`${styles.featureIconWrap} ${styles.iconSalary}`}>
              <TrendingUp size={18} />
            </div>
            <div className={styles.featureTextWrap}>
              <span className={styles.featureTitle}>High Salary Growth</span>
              <span className={styles.featureSubtitle}>Future-ready skills</span>
            </div>
          </button>

          {/* Low Fees */}
          <button
            type="button"
            className={`${styles.featureCard} ${activeQuickFilter === "lowfee" ? styles.featureCardActive : ""}`}
            onClick={() => handleQuickFilterClick("lowfee")}
          >
            <div className={`${styles.featureIconWrap} ${styles.iconFee}`}>
              <span className={styles.rupeeIcon}>₹</span>
            </div>
            <div className={styles.featureTextWrap}>
              <span className={styles.featureTitle}>Low Fees</span>
              <span className={styles.featureSubtitle}>Affordable options</span>
            </div>
          </button>

          {/* Short Duration */}
          <button
            type="button"
            className={`${styles.featureCard} ${activeQuickFilter === "shortduration" ? styles.featureCardActive : ""}`}
            onClick={() => handleQuickFilterClick("shortduration")}
          >
            <div className={`${styles.featureIconWrap} ${styles.iconClock}`}>
              <Clock size={18} />
            </div>
            <div className={styles.featureTextWrap}>
              <span className={styles.featureTitle}>Short Duration</span>
              <span className={styles.featureSubtitle}>Complete early</span>
            </div>
          </button>

          {/* Placement Support */}
          <button
            type="button"
            className={`${styles.featureCard} ${activeQuickFilter === "placement" ? styles.featureCardActive : ""}`}
            onClick={() => handleQuickFilterClick("placement")}
          >
            <div className={`${styles.featureIconWrap} ${styles.iconPlacement}`}>
              <Users size={18} />
            </div>
            <div className={styles.featureTextWrap}>
              <span className={styles.featureTitle}>Placement Support</span>
              <span className={styles.featureSubtitle}>Career assistance</span>
            </div>
          </button>
        </div>

        {/* Results Count & Sorting / View Layout Header */}
        <div className={styles.resultsBar}>
          <div className={styles.resultsCount}>
            <span>Showing <strong>120+ courses</strong></span>
            {filteredCourses.length !== COURSES.length && (
              <span className={styles.filteredBadge}>({filteredCourses.length} filtered)</span>
            )}
          </div>

          <div className={styles.resultsActions}>
            <div className={styles.sortWrapper}>
              <span className={styles.sortLabel}>Sort by:</span>
              <div className={styles.selectWrapperSmall}>
                <select
                  className={styles.sortSelect}
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="Popularity">Popularity</option>
                  <option value="Fee: Low to High">Fee: Low to High</option>
                  <option value="Fee: High to Low">Fee: High to Low</option>
                  <option value="Duration: Short to Long">Duration: Short to Long</option>
                  <option value="Name (A-Z)">Name (A-Z)</option>
                </select>
                <ChevronDown size={13} className={styles.selectArrowSmall} />
              </div>
            </div>

            {/* Layout Mode Toggle */}
            <div className={styles.layoutToggle}>
              <button
                type="button"
                className={`${styles.layoutBtn} ${layoutMode === "grid" ? styles.layoutBtnActive : ""}`}
                onClick={() => setLayoutMode("grid")}
                title="Grid View"
                aria-label="Grid View"
              >
                <LayoutGrid size={17} />
              </button>
              <button
                type="button"
                className={`${styles.layoutBtn} ${layoutMode === "list" ? styles.layoutBtnActive : ""}`}
                onClick={() => setLayoutMode("list")}
                title="List View"
                aria-label="List View"
              >
                <List size={17} />
              </button>
            </div>
          </div>
        </div>

        {/* Courses Grid / List */}
        <div className={`${styles.grid} ${layoutMode === "list" ? styles.listLayout : ""}`}>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                layoutMode={layoutMode}
                onViewDetails={(c) => setSelectedCourse(c)}
                onEnquire={(cName) => onOpenEnquiry?.(cName)}
              />
            ))
          ) : (
            <div className={styles.emptyState}>
              <HelpCircle size={44} style={{ color: "#3b82f6", margin: "0 auto 12px auto" }} />
              <h3 className={styles.emptyTitle}>No courses found matching your filters</h3>
              <p className={styles.emptyDesc}>
                We provide tailored admissions and specialized distance programs across 15+ universities. Talk to our counselor directly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Courses");
                  setSelectedLevel("All Levels");
                  setSelectedUniversity("All Universities");
                  setActiveQuickFilter(null);
                }}
                className={styles.resetBtn}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* WhatsApp Help Consultation Banner */}
        <div className={styles.whatsappHelpBanner}>
          <div className={styles.helpLeft}>
            <div className={styles.helpIcon}>
              <MessageSquareQuote size={28} />
            </div>
            <div>
              <h3 className={styles.helpTitle}>Need Guidance Selecting Your Dream Course?</h3>
              <p className={styles.helpDesc}>
                Get personalized advice from our top UGC-DEB academic counselors for free syllabus, fee breakdown & admission assistance.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.helpBtn}
          >
            <MessageSquareQuote size={18} />
            <span>Chat on WhatsApp: {SITE_CONFIG.phone}</span>
          </a>
        </div>
      </div>

      {/* Course Detail Modal */}
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
