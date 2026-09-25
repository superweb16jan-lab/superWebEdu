import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { COURSES, getCourseById, getRelatedCourses } from "@/data/courses";
import CourseDetailPageClient from "@/components/CourseDetail/CourseDetailPageClient";

interface CoursePageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return COURSES.map((course) => ({
    id: course.id,
  }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { id } = await params;
  const course = getCourseById(id);

  if (!course) {
    return {
      title: "Course Not Found | superWebEdu",
      description: "The requested distance education course could not be found."
    };
  }

  const title = `${course.name} (${course.shortName}) - Distance Degree Admission, Syllabus & Fees | superWebEdu`;
  const description = `Apply for UGC-DEB approved Distance & Online ${course.name}. Duration: ${course.duration}. Avg Fees: ${course.avgFeesPerSem}. Eligibility: ${course.eligibilityShort}. Partner Universities: ${course.partnerUniversities.join(", ")}.`;

  return {
    title,
    description,
    keywords: [
      course.name,
      course.shortName,
      `Distance ${course.shortName}`,
      `Online ${course.shortName}`,
      `${course.shortName} syllabus`,
      `${course.shortName} fees`,
      `${course.shortName} eligibility`,
      "UGC-DEB approved distance degree",
      "distance education in India"
    ],
    openGraph: {
      title,
      description,
      images: [
        {
          url: course.image,
          width: 800,
          height: 600,
          alt: course.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [course.image],
    },
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = getCourseById(id);

  if (!course) {
    notFound();
  }

  const relatedCourses = getRelatedCourses(id, 3);

  return (
    <CourseDetailPageClient
      course={course}
      relatedCourses={relatedCourses}
    />
  );
}
