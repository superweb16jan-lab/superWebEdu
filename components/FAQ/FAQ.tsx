"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, MessageSquareQuote } from "lucide-react";
import styles from "./FAQ.module.css";
import { FAQS } from "@/data/faqs";
import { getWhatsAppLink, SITE_CONFIG } from "@/lib/constants";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.section} id="faq-section">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.tagline}>
            <HelpCircle size={16} /> Got Questions?
          </span>
          <h2 className={styles.title}>
            Frequently Asked <span className={styles.gradient}>Questions</span>
          </h2>
          <p className={styles.subtitle}>
            Everything you need to know about UGC-DEB recognition, examinations, LMS portal, fee payments, and degree equivalence.
          </p>
        </div>

        <div className={styles.accordionList}>
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
              >
                <button
                  className={styles.questionBtn}
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`${styles.toggleIcon} ${isOpen ? styles.toggleIconRotated : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className={styles.answerBox}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className={styles.moreHelp}>
          <span>Have a specific query not covered here?</span>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappInlineLink}
          >
            Chat with our counselor on WhatsApp ({SITE_CONFIG.phone})
          </a>
        </div>
      </div>
    </section>
  );
}
