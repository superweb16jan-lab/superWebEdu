"use client";

import React, { useState } from "react";
import { MessageSquareQuote, Send, X } from "lucide-react";
import styles from "./FloatingActions.module.css";
import { getWhatsAppLink, SITE_CONFIG } from "@/lib/constants";

interface FloatingActionsProps {
  onOpenEnquiry?: () => void;
}

export default function FloatingActions({ onOpenEnquiry }: FloatingActionsProps) {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className={styles.floatingContainer}>
      {/* WhatsApp Button + Tooltip */}
      <div className={styles.whatsappWrapper}>
        {showTooltip && (
          <div className={styles.tooltip}>
            <span className={styles.onlineBadge}></span>
            <span>Online Counselor • 8810336124</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              style={{ color: "var(--text-muted)", marginLeft: "4px", display: "flex" }}
              aria-label="Close tooltip"
            >
              <X size={12} />
            </button>
          </div>
        )}

        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappBtn}
          title="Direct WhatsApp Chat (8810336124)"
          aria-label="WhatsApp Us"
        >
          <MessageSquareQuote size={30} />
        </a>
      </div>

      {/* Quick Enquiry Pill */}
      {onOpenEnquiry && (
        <button
          onClick={onOpenEnquiry}
          className={styles.quickEnquiryPill}
          title="Open Query Form"
        >
          <Send size={15} />
          <span>Quick Query</span>
        </button>
      )}
    </div>
  );
}
