"use client";

import React from "react";
import Image from "next/image";
import { 
  Check, 
  ArrowRight, 
  Compass, 
  UserCheck, 
  FileCheck2, 
  GraduationCap 
} from "lucide-react";
import styles from "./StudyProcess.module.css";
import { getWhatsAppLink } from "@/lib/constants";

interface StudyProcessProps {
  onOpenLeadModal?: () => void;
}

export default function StudyProcess({ onOpenLeadModal }: StudyProcessProps) {
  const steps = [
    {
      num: 1,
      icon: <Compass size={22} />,
      title: "Choose a Course",
      text: "Select your preferred program"
    },
    {
      num: 2,
      icon: <UserCheck size={22} />,
      title: "Check Eligibility",
      text: "Review admission criteria"
    },
    {
      num: 3,
      icon: <FileCheck2 size={22} />,
      title: "Apply Online",
      text: "Fill the application form"
    },
    {
      num: 4,
      icon: <GraduationCap size={22} />,
      title: "Start Learning",
      text: "Get admission & access study material"
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Navy Card: Study from Anywhere */}
          <div className={styles.studyCard}>
            <div className={styles.studentImgWrap}>
              <Image
                src="/images/study-anywhere-student.jpg"
                alt="Student studying on laptop"
                width={360}
                height={360}
                className={styles.studentImg}
              />
            </div>

            <div className={styles.studyContent}>
              <h3 className={styles.studyTitle}>
                Study from Anywhere <br />
                Build a Brighter Tomorrow
              </h3>

              <div className={styles.checkList}>
                <div className={styles.checkItem}>
                  <Check size={16} className={styles.checkIcon} />
                  <span>Flexible Learning Schedule</span>
                </div>
                <div className={styles.checkItem}>
                  <Check size={16} className={styles.checkIcon} />
                  <span>Learn at Your Own Pace</span>
                </div>
                <div className={styles.checkItem}>
                  <Check size={16} className={styles.checkIcon} />
                  <span>Access to Study Material Online</span>
                </div>
                <div className={styles.checkItem}>
                  <Check size={16} className={styles.checkIcon} />
                  <span>Support from Expert Counselors</span>
                </div>
              </div>

              <button
                onClick={() => onOpenLeadModal?.()}
                className={styles.btnJourney}
              >
                <span>Start Your Journey Today</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Right Column: How It Works? */}
          <div className={styles.processCol}>
            <div className={styles.processHeader}>
              <h2 className={styles.processTitle}>How It Works?</h2>
              <p className={styles.processSubtitle}>
                A simple process to enroll in your desired course.
              </p>
            </div>

            <div className={styles.stepsGrid}>
              {steps.map((step) => (
                <div key={step.num} className={styles.stepCard}>
                  <span className={styles.stepNumber}>{step.num}</span>
                  <div className={styles.stepIcon}>{step.icon}</div>
                  <h4 className={styles.stepName}>{step.title}</h4>
                  <p className={styles.stepText}>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
