import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, GraduationCap, ArrowRight } from "lucide-react";
import styles from "./CourseCard.module.css";
import { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
  onViewDetails?: (course: Course) => void;
  onEnquire?: (courseName: string) => void;
  layoutMode?: "grid" | "list";
}

export default function CourseCard({ 
  course, 
  onViewDetails, 
  layoutMode = "grid" 
}: CourseCardProps) {
  // Parse duration & semesters: e.g. "3 Years (6 Semesters)"
  let years = course.duration;
  let sems = "";
  if (course.duration.includes("(")) {
    const parts = course.duration.replace(")", "").split("(");
    years = parts[0].trim();
    sems = parts[1].trim();
  }

  // Category pill style
  const getCategoryClass = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes("tech") || cat.includes("it") || cat.includes("science")) {
      return styles.badgeTech;
    }
    if (cat.includes("management") || cat.includes("business")) {
      return styles.badgeManagement;
    }
    if (cat.includes("commerce") || cat.includes("finance")) {
      return styles.badgeCommerce;
    }
    return styles.badgeDefault;
  };

  const displayCategory = course.category.replace(" & Finance", "");

  return (
    <div className={`${styles.card} ${layoutMode === "list" ? styles.listCard : ""}`}>
      {/* Course Image Header */}
      <div className={styles.imageWrapper}>
        <Link 
          href={`/courses/${course.id}`} 
          className={styles.imageLink}
          aria-label={`View ${course.name} details`}
        >
          <Image
            src={course.image}
            alt={course.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={styles.courseImage}
          />
        </Link>
        
        {/* Category Pill Tag overlapping bottom-left */}
        <span className={`${styles.categoryBadge} ${getCategoryClass(course.category)}`}>
          {displayCategory}
        </span>
      </div>

      <div className={styles.cardMain}>
        {/* Course Title */}
        <h3 className={styles.courseTitle} title={course.name}>
          <Link 
            href={`/courses/${course.id}`}
            className={styles.titleLink}
          >
            {course.name}
          </Link>
        </h3>

        {/* Metadata Row: Duration & Semesters */}
        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <Clock size={15} className={styles.metaIcon} />
            <span>{years}</span>
          </div>
          {sems && (
            <>
              <div className={styles.metaDivider} />
              <div className={styles.metaItem}>
                <GraduationCap size={16} className={styles.metaIcon} />
                <span>{sems}</span>
              </div>
            </>
          )}
        </div>

        {/* Program Accreditations & Mode */}
        <div className={styles.badgeRow}>
          <span className={styles.featureBadge}>UGC-DEB Approved</span>
          <span className={styles.featureBadge}>{course.mode}</span>
        </div>

        {/* Know More Action Link -> Dedicated Course Page */}
        <div className={styles.actions}>
          <Link
            href={`/courses/${course.id}`}
            className={styles.btnKnowMore}
            aria-label={`Know more about ${course.name}`}
          >
            <span>Know More</span>
            <ArrowRight size={16} className={styles.arrowIcon} />
          </Link>
        </div>
      </div>
    </div>
  );
}
