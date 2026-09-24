import React from "react";
import styles from "./CourseCardVisual.module.css";

interface CourseCardVisualProps {
  type?: "bca" | "mca" | "mba" | "bba" | "bcom" | "mcom" | "ba" | "ma" | "msc" | "diploma";
}

export default function CourseCardVisual({ type = "bca" }: CourseCardVisualProps) {
  if (type === "mca") {
    return (
      <div className={styles.visualContainer} aria-hidden="true">
        <div className={styles.glowBg} />
        {/* Floating tech pill badges */}
        <div className={`${styles.techTag} ${styles.tagPython}`}>Python</div>
        <div className={`${styles.techTag} ${styles.tagJava}`}>Java</div>
        <div className={`${styles.techTag} ${styles.tagAi}`}>AI/ML</div>
        
        {/* Laptop Illustration */}
        <svg className={styles.laptopSvg} viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Laptop Screen Body */}
          <rect x="30" y="16" width="100" height="66" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
          <rect x="35" y="21" width="90" height="56" rx="4" fill="url(#mcaGrad)" />
          {/* Code lines */}
          <rect x="42" y="30" width="34" height="4" rx="2" fill="#38bdf8" fillOpacity="0.9" />
          <rect x="42" y="38" width="55" height="4" rx="2" fill="#93c5fd" fillOpacity="0.7" />
          <rect x="42" y="46" width="46" height="4" rx="2" fill="#fbbf24" fillOpacity="0.8" />
          <rect x="42" y="54" width="60" height="4" rx="2" fill="#34d399" fillOpacity="0.8" />
          <rect x="42" y="62" width="28" height="4" rx="2" fill="#60a5fa" fillOpacity="0.9" />
          {/* Glowing Cursor / Tag */}
          <circle cx="98" cy="64" r="5" fill="#38bdf8" />
          {/* Laptop Base */}
          <path d="M14 84C14 82.8954 14.8954 82 16 82H144C145.105 82 146 82.8954 146 84V87C146 90.3137 143.314 93 140 93H20C16.6863 93 14 90.3137 14 87V84Z" fill="#94a3b8" />
          <rect x="68" y="82" width="24" height="3" rx="1.5" fill="#64748b" />
          <defs>
            <linearGradient id="mcaGrad" x1="35" y1="21" x2="125" y2="77" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0f172a" />
              <stop offset="1" stopColor="#1e3a8a" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (type === "mba" || type === "bba") {
    return (
      <div className={styles.visualContainer} aria-hidden="true">
        <div className={`${styles.glowBg} ${styles.glowPurple}`} />
        <svg className={styles.laptopSvg} viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Upward Growth Bars */}
          <rect x="36" y="68" width="14" height="22" rx="3" fill="#93c5fd" />
          <rect x="56" y="52" width="14" height="38" rx="3" fill="#60a5fa" />
          <rect x="76" y="36" width="14" height="54" rx="3" fill="#3b82f6" />
          <rect x="96" y="20" width="14" height="70" rx="3" fill="#183985" />
          
          {/* Upward Trend Arrow */}
          <path d="M42 58L72 32L98 22L124 10" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M110 10H124V24" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Chess Strategy / Crown Element */}
          <g transform="translate(116, 42) scale(0.9)">
            <circle cx="16" cy="14" r="7" fill="#1e3a8a" />
            <path d="M8 24C8 20 24 20 24 24L26 42H6L8 24Z" fill="#1e3a8a" />
            <path d="M4 42H28V46H4V42Z" fill="#3b82f6" rx="2" />
            <path d="M12 10L16 6L20 10" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    );
  }

  if (type === "bcom" || type === "mcom") {
    return (
      <div className={styles.visualContainer} aria-hidden="true">
        <div className={`${styles.glowBg} ${styles.glowGreen}`} />
        <svg className={styles.laptopSvg} viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ledger / Finance Card */}
          <rect x="28" y="24" width="84" height="56" rx="6" fill="#f0fdf4" stroke="#86efac" strokeWidth="2" />
          <rect x="36" y="34" width="30" height="4" rx="2" fill="#16a34a" />
          <rect x="36" y="44" width="50" height="3" rx="1.5" fill="#86efac" />
          <rect x="36" y="52" width="40" height="3" rx="1.5" fill="#86efac" />
          <rect x="36" y="60" width="25" height="3" rx="1.5" fill="#86efac" />
          {/* Gold Coin with Rupee */}
          <circle cx="118" cy="52" r="22" fill="#fef08a" stroke="#eab308" strokeWidth="3" />
          <circle cx="118" cy="52" r="17" fill="#facc15" />
          <text x="118" y="58" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#854d0e">₹</text>
          {/* Mini Growth Curve */}
          <path d="M34 72C50 68 70 56 94 40" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  if (type === "ba" || type === "ma") {
    return (
      <div className={styles.visualContainer} aria-hidden="true">
        <div className={`${styles.glowBg} ${styles.glowAmber}`} />
        <svg className={styles.laptopSvg} viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Classical Pillar / Academy */}
          <path d="M30 30L60 14L90 30H30Z" fill="#3b82f6" />
          <rect x="36" y="34" width="8" height="42" rx="2" fill="#93c5fd" />
          <rect x="56" y="34" width="8" height="42" rx="2" fill="#60a5fa" />
          <rect x="76" y="34" width="8" height="42" rx="2" fill="#93c5fd" />
          <rect x="28" y="76" width="64" height="8" rx="2" fill="#183985" />
          
          {/* Quill / Book Stack */}
          <rect x="98" y="60" width="42" height="10" rx="2" fill="#f59e0b" />
          <rect x="94" y="70" width="48" height="12" rx="2" fill="#d97706" />
          <path d="M124 16C124 16 138 32 130 52L126 60L122 56L124 16Z" fill="#60a5fa" />
        </svg>
      </div>
    );
  }

  if (type === "msc") {
    return (
      <div className={styles.visualContainer} aria-hidden="true">
        <div className={`${styles.glowBg} ${styles.glowCyan}`} />
        <svg className={styles.laptopSvg} viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Flask / Atom structure */}
          <path d="M60 22V38L42 70C39 75 43 82 50 82H86C93 82 97 75 94 70L76 38V22H60Z" fill="#ecfeff" stroke="#06b6d4" strokeWidth="2.5" />
          <path d="M48 68L88 68C84 76 78 80 68 80C58 80 52 76 48 68Z" fill="#06b6d4" fillOpacity="0.5" />
          <circle cx="64" cy="62" r="3" fill="#ffffff" />
          <circle cx="72" cy="54" r="2.5" fill="#ffffff" />
          {/* Orbital Atom Rings */}
          <ellipse cx="118" cy="50" rx="24" ry="10" transform="rotate(-30 118 50)" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
          <ellipse cx="118" cy="50" rx="24" ry="10" transform="rotate(30 118 50)" stroke="#818cf8" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="118" cy="50" r="6" fill="#0284c7" />
        </svg>
      </div>
    );
  }

  if (type === "diploma") {
    return (
      <div className={styles.visualContainer} aria-hidden="true">
        <div className={`${styles.glowBg} ${styles.glowYellow}`} />
        <svg className={styles.laptopSvg} viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Diploma Scroll / Certificate */}
          <rect x="36" y="24" width="76" height="54" rx="4" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
          <rect x="46" y="34" width="36" height="4" rx="2" fill="#d97706" />
          <rect x="46" y="44" width="56" height="3" rx="1.5" fill="#fcd34d" />
          <rect x="46" y="52" width="48" height="3" rx="1.5" fill="#fcd34d" />
          <circle cx="96" cy="64" r="9" fill="#ef4444" />
          {/* Ribbon */}
          <path d="M92 71L88 86L96 82L104 86L100 71" fill="#dc2626" />
          {/* Fast-track Lightning */}
          <path d="M128 20L116 44H128L122 70L142 42H130L138 20H128Z" fill="#f59e0b" />
        </svg>
      </div>
    );
  }

  // Default: BCA (Laptop with </> coding illustration)
  return (
    <div className={styles.visualContainer} aria-hidden="true">
      <div className={styles.glowBg} />
      {/* Code Badge Floating */}
      <div className={`${styles.techTag} ${styles.tagCode}`}>&lt;/&gt;</div>
      <div className={`${styles.techTag} ${styles.tagDot}`} />
      
      {/* Laptop Illustration */}
      <svg className={styles.laptopSvg} viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Screen Bezel */}
        <rect x="28" y="14" width="104" height="68" rx="7" fill="#0f172a" stroke="#60a5fa" strokeWidth="2" />
        <rect x="34" y="20" width="92" height="56" rx="4" fill="url(#bcaGrad)" />
        
        {/* Large </> Glowing Symbol on Screen */}
        <path d="M68 36L56 48L68 60" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M92 36L104 48L92 60" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M84 32L76 64" stroke="#60a5fa" strokeWidth="3.5" strokeLinecap="round" />
        
        {/* Laptop Bottom Base with Trackpad */}
        <path d="M12 84C12 82.8954 12.8954 82 14 82H146C147.105 82 148 82.8954 148 84V87C148 90.3137 145.314 93 142 93H18C14.6863 93 12 90.3137 12 87V84Z" fill="#94a3b8" />
        <rect x="66" y="82" width="28" height="3" rx="1.5" fill="#64748b" />
        
        <defs>
          <linearGradient id="bcaGrad" x1="34" y1="20" x2="126" y2="76" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1e3a8a" />
            <stop offset="1" stopColor="#0284c7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
