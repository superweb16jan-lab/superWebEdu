export const SITE_CONFIG = {
  name: "superWebEdu",
  tagline: "India's Premier UGC-DEB Approved Distance Education Portal",
  phone: "8810336124",
  formattedPhone: "+91 8810336124",
  whatsappNumber: "918810336124",
  email: "admissions@superwebedu.com",
  secondaryEmail: "info@superwebedu.com",
  officeAddress: "Sector 62, Electronic City, Noida, Delhi-NCR & Regional Support Across India",
  counselingHours: "Mon - Sun: 9:00 AM - 9:00 PM (IST)",
  experienceYears: "10+ Years of Academic Counseling",
  totalStudentsHelped: "50,000+",
  partnerUniversitiesCount: "15+ UGC Approved Universities",
  rating: "4.9/5 (1,840+ Student Reviews)"
};

export function getWhatsAppLink(customMessage?: string): string {
  const defaultText = "Hello superWebEdu! I want to enquire about UGC-approved distance education courses (BCA/MCA/MBA/BBA/BA/B.Com) and university admissions. Please guide me.";
  const message = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${message}`;
}

export function getCourseWhatsAppLink(courseName: string, universityName?: string): string {
  let text = `Hello superWebEdu! I am interested in admission for *${courseName}*`;
  if (universityName) {
    text += ` from *${universityName}*`;
  }
  text += `. Please share complete fee details, syllabus, eligibility, and admission process.`;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function getUniversityWhatsAppLink(universityName: string): string {
  const text = `Hello superWebEdu! I want to enquire about UGC-DEB approved courses offered by *${universityName}*. Please share available programs, fee structures, and examination details.`;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
