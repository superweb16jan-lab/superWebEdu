import React from "react";
import { Star, MessageSquareQuote, Quote } from "lucide-react";
import styles from "./Testimonials.module.css";
import { TESTIMONIALS } from "@/data/faqs";

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.tagline}>
            <Star size={16} /> Student Success Stories
          </span>
          <h2 className={styles.title}>
            Hear From Our <span className={styles.gradient}>Alumni & Graduates</span>
          </h2>
          <p className={styles.subtitle}>
            Read how distance education degrees from Mangalayatan, Subharti, and partner universities helped working professionals achieve career breakthroughs.
          </p>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className={styles.card}>
              <div>
                <div className={styles.starsRow}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#fbbf24" stroke="none" />
                  ))}
                </div>
                <p className={styles.quoteText}>&ldquo;{t.text}&rdquo;</p>
              </div>

              <div className={styles.userRow}>
                <div className={styles.avatar}>{t.avatar}</div>
                <div className={styles.userInfo}>
                  <span className={styles.userName}>{t.name}</span>
                  <span className={styles.userCourse}>
                    {t.course} • {t.university}
                  </span>
                  <span className={styles.userPlacement}>
                    Role: {t.role} @ {t.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
