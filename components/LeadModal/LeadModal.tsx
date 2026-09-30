"use client";

import React, { useState, useEffect } from "react";
import { X, Send, MessageSquareQuote, CheckCircle, GraduationCap, Building2, User, Phone } from "lucide-react";
import styles from "./LeadModal.module.css";
import { COURSES } from "@/data/courses";
import { UNIVERSITIES } from "@/data/universities";
import { SITE_CONFIG, getWhatsAppLink } from "@/lib/constants";
import confetti from "canvas-confetti";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourse?: string;
  preselectedUniversity?: string;
}

export default function LeadModal({
  isOpen,
  onClose,
  preselectedCourse,
  preselectedUniversity
}: LeadModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: preselectedCourse || "BCA",
    university: preselectedUniversity || "Mangalayatan University",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFormData((prev) => ({
      ...prev,
      ...(preselectedCourse ? { course: preselectedCourse } : {}),
      ...(preselectedUniversity ? { university: preselectedUniversity } : {})
    }));
  }, [preselectedCourse, preselectedUniversity]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    // Disable background scrolling when modal is open
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.classList.add("modal-open");
    document.documentElement.classList.add("modal-open");
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("modal-open");
      document.documentElement.classList.remove("modal-open");
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your name and phone number");
      return;
    }

    setIsSubmitting(true);

    try {
      // Trigger Email and Telegram notification via API route
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Quick Admission Modal",
        }),
      });
    } catch (err) {
      console.error("Lead submission error:", err);
    } finally {
      setIsSubmitting(false);
    }

    try {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    } catch {}

    setSubmitted(true);

    setTimeout(() => {
      const text = `Hello superWebEdu! I submitted an admission query.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Course:* ${formData.course}%0A*University:* ${formData.university}%0A%0APlease share admission and fee details.`;
      window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, "_blank");
    }, 1000);
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        {submitted ? (
          <div className={styles.successState}>
            <div style={{ width: "54px", height: "54px", borderRadius: "50%", background: "rgba(16, 185, 129, 0.2)", border: "2px solid #10b981", color: "#10b981", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <CheckCircle size={32} />
            </div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff" }}>
              Enquiry Submitted!
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              Thank you <strong>{formData.name}</strong>. Redirecting you to our official counselor on WhatsApp...
            </p>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello SuperWebSiksha! I submitted an enquiry for ${formData.course} at ${formData.university}. Please guide me.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappAltBtn}
              style={{ width: "100%" }}
            >
              <MessageSquareQuote size={18} />
              <span>Open WhatsApp Chat Directly</span>
            </a>
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <h2 className={styles.title}>Quick Admission Enquiry</h2>
              <p className={styles.subtitle}>
                Get syllabus, university fee structures & semester payment breakdown for UGC-approved courses
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  className={styles.input}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Mobile / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  className={styles.input}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Course *</label>
                <select
                  className={styles.select}
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                >
                  {COURSES.map((c) => (
                    <option key={c.id} value={c.shortName}>
                      {c.shortName} - {c.name.split("(")[0]}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Preferred University</label>
                <select
                  className={styles.select}
                  value={formData.university}
                  onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                >
                  {UNIVERSITIES.map((u) => (
                    <option key={u.id} value={u.name}>
                      {u.name}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                <Send size={18} />
                <span>{isSubmitting ? "Submitting..." : "Submit Query Form"}</span>
              </button>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappAltBtn}
              >
                <MessageSquareQuote size={18} />
                <span>Chat on WhatsApp: 8810336124</span>
              </a>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
