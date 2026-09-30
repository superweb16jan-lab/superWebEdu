"use client";

import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MessageSquareQuote, 
  Send, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Headphones,
  CheckCircle
} from "lucide-react";
import styles from "./EnquirySection.module.css";
import { COURSES } from "@/data/courses";
import { UNIVERSITIES } from "@/data/universities";
import { SITE_CONFIG, getWhatsAppLink } from "@/lib/constants";
import confetti from "canvas-confetti";

interface EnquirySectionProps {
  defaultCourse?: string;
  defaultUniversity?: string;
}

export default function EnquirySection({ defaultCourse, defaultUniversity }: EnquirySectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: defaultCourse || "BCA",
    university: defaultUniversity || "Mangalayatan University",
    city: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your name and phone number");
      return;
    }

    setIsSubmitting(true);

    try {
      // Send lead to /api/enquiry for Telegram and Email notifications
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Main Admission Helpdesk Form",
        }),
      });

      if (!res.ok) {
        console.warn("API response status:", res.status);
      }
    } catch (err) {
      console.error("Enquiry submission error:", err);
    } finally {
      setIsSubmitting(false);
    }

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    setSubmitted(true);

    // Trigger WhatsApp link
    setTimeout(() => {
      const text = `Hello superWebEdu! I submitted an admission enquiry.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email || "N/A"}%0A*Course:* ${formData.course}%0A*University:* ${formData.university}%0A*City:* ${formData.city || "N/A"}%0A*Query:* ${formData.message || "Please provide syllabus and admission process"}`;
      window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, "_blank");
    }, 1200);
  };

  return (
    <section className={styles.section} id="enquiry-section">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.grid}>
            {/* Left Info Column */}
            <div className={styles.infoCol}>
              <span className={styles.tagline}>
                <Headphones size={16} /> Admission Helpdesk & Guidance
              </span>
              <h2 className={styles.title}>
                Have Questions? Talk to Our <span className={styles.gradient}>Academic Counselors</span>
              </h2>
              <p className={styles.desc}>
                Get personalized counseling, compare syllabus structure, and discover the best UGC-DEB approved university for your career and budget.
              </p>

              <div className={styles.contactDetails}>
                <a href={`tel:${SITE_CONFIG.phone}`} className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <Phone size={20} />
                  </div>
                  <div className={styles.contactText}>
                    <span className={styles.contactLabel}>Direct Helpline</span>
                    <span className={styles.contactValue}>{SITE_CONFIG.formattedPhone}</span>
                  </div>
                </a>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactItem}
                >
                  <div className={styles.contactIcon} style={{ background: "rgba(21, 128, 61, 0.2)", borderColor: "#15803d", color: "#15803d" }}>
                    <MessageSquareQuote size={20} />
                  </div>
                  <div className={styles.contactText}>
                    <span className={styles.contactLabel}>WhatsApp Support (24/7)</span>
                    <span className={styles.contactValue}>+91 {SITE_CONFIG.phone}</span>
                  </div>
                </a>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon} style={{ color: "#fbbf24", background: "rgba(245, 158, 11, 0.2)", borderColor: "rgba(245, 158, 11, 0.4)" }}>
                    <Clock size={20} />
                  </div>
                  <div className={styles.contactText}>
                    <span className={styles.contactLabel}>Counseling Working Hours</span>
                    <span className={styles.contactValue}>{SITE_CONFIG.counselingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className={styles.formCol}>
              {submitted ? (
                <div className={styles.successState}>
                  <div className={styles.successIcon}>
                    <CheckCircle size={32} />
                  </div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff" }}>
                    Query Submitted Successfully!
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                    Thank you <strong>{formData.name}</strong>. Our counselor has received your details for <strong>{formData.course} ({formData.university})</strong>.
                  </p>
                  <p style={{ color: "#102957", fontSize: "0.85rem", fontWeight: 600 }}>
                    Connecting to our dedicated WhatsApp helpline...
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
                  <button
                    onClick={() => setSubmitted(false)}
                    style={{ color: "#102957", fontSize: "0.85rem", textDecoration: "underline", marginTop: "8px", background: "none", border: "none", cursor: "pointer" }}
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <h3 className={styles.formTitle}>
                    Official Admission Query Form
                  </h3>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        className={styles.input}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Mobile / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit number"
                        className={styles.input}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Email Address</label>
                      <input
                        type="email"
                        placeholder="you@email.com"
                        className={styles.input}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Your City / State</label>
                      <input
                        type="text"
                        placeholder="e.g. Delhi, Lucknow, Patna"
                        className={styles.input}
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Course Interested In *</label>
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
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Any Specific Questions / Remarks?</label>
                    <textarea
                      placeholder="e.g. Please share semester fee details, exam centers near me, or syllabus..."
                      className={styles.textarea}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                    <Send size={18} />
                    <span>{isSubmitting ? "Submitting Query..." : "Submit & Talk to Counselor"}</span>
                  </button>

                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappAltBtn}
                  >
                    <MessageSquareQuote size={18} />
                    <span>Quick WhatsApp Query: 8810336124</span>
                  </a>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
