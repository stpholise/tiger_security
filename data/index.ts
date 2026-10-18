import { QuickLink, Contact, SecurityService } from "@/types";
import { FaPhone, FaClock, FaMapPin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import {
  ShieldCheckIcon,
  UsersIcon,
  ClockIcon,
  BadgeCheckIcon,
  EyeIcon,
  TargetIcon,
} from "@animateicons/react/lucide";

import { LuShieldCheck, LuAward, LuUserCheck, LuClock } from "react-icons/lu";

export const navigations: QuickLink[] = [
  { title: "Home", url: "/" },
  {
    title: "About Us",
    url: "/about",
  },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export const contact: Contact[] = [
  {
    text: "EverGuard Security UK Limited",
  },
  {
    icon: IoMdMail,
    text: "nfo@everguardsecurity.uk",
  },
  {
    icon: FaPhone,
    text: "+44 (0) 123 456 7890",
  },
  {
    icon: FaClock,
    text: "24/7 Emergency Line",
  },
];

export const services = [
  {
    image:
      "https://images.unsplash.com/photo-1761064392859-2bfa734e9f3f?auto=format&fit=crop&w=1080&q=80",
    title: "Manned Guarding",
    description:
      "Professional security officers providing visible deterrence, access control, and reliable protection for your people, property, and assets.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1723107638858-331404b1a09a?auto=format&fit=crop&w=1080&q=80",
    title: "Construction Site Security",
    description:
      "Specialized security solutions for construction sites, helping prevent unauthorized access, theft, and disruption to development projects.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1778162153200-d6e7d16827c7?auto=format&fit=crop&w=1080&q=80",
    title: "Mobile Patrol",
    description:
      "Scheduled mobile patrols and site inspections to deter suspicious activity and help maintain security across your premises.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?auto=format&fit=crop&w=1080&q=80",
    title: "Key Holding & Alarm Response",
    description:
      "Secure key management and responsive alarm attendance to help protect your premises when you cannot be there.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1080&q=80",
    title: "Video Surveillance",
    description:
      "Surveillance solutions that support real-time monitoring, incident detection, and improved visibility across your property.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1080&q=80",
    title: "Basic & Tactical Security Training",
    description:
      "Practical training designed to strengthen security awareness, emergency preparedness, communication, and professional response skills.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1080&q=80",
    title: "VIP & Executive Protection",
    description:
      "Discreet, tailored protection services for executives, VIPs, and other clients requiring enhanced personal security.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1080&q=80",
    title: "Event Security",
    description:
      "Professional event security, crowd management, and access control to help create a safe environment for guests and organizers.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1080&q=80",
    title: "Security Consulting & Advisory",
    description:
      "Security assessments, risk identification, and practical recommendations to help organizations strengthen their security strategies.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1080&q=80",
    title: "Polygraph Testing",
    description:
      "Professional polygraph testing services to support authorized investigations and screening processes, subject to applicable laws and consent requirements.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?auto=format&fit=crop&w=1080&q=80",
    title: "Private Investigations",
    description:
      "Discreet investigative services to help individuals and businesses establish facts, investigate suspected misconduct, and gather relevant information professionally and confidentially.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1080&q=80",
    title: "Private Driving & Chauffeur Services",
    description:
      "Reliable private driving services with professional drivers for executives, VIPs, business travel, and personal transportation, prioritizing discretion, comfort, and safety.",
  },
];

export const qualities = [
  {
    icon: ShieldCheckIcon,
    title: "Reliable Protection",
    description:
      "We deliver dependable security solutions tailored to protect your people, property, and valuable assets.",
  },
  {
    icon: UsersIcon,
    title: "Experienced Professionals",
    description:
      "Our security personnel are trained to maintain professionalism, vigilance, and a strong sense of responsibility.",
  },
  {
    icon: ClockIcon,
    title: "24/7 Availability",
    description:
      "We provide security support and monitoring options designed to meet your needs whenever protection is required.",
  },
  {
    icon: BadgeCheckIcon,
    title: "Professional Standards",
    description:
      "We prioritize integrity, accountability, and consistent service quality in every security assignment.",
  },
  {
    icon: EyeIcon,
    title: "Proactive Security",
    description:
      "We focus on identifying potential risks early and implementing appropriate measures to help prevent incidents.",
  },
  {
    icon: TargetIcon,
    title: "Tailored Solutions",
    description:
      "From personal protection to business security, we develop solutions around your specific risks and requirements.",
  },
];

export const credentials = [
  {
    title: "NSCDC Licensed Private Guard Company",
    description:
      "Fully licensed by the Nigeria Security and Civil Defence Corps (NSCDC) and approved by the Minister of Interior, as required under the Private Guard Companies Act.",
  },
  {
    title: "CAC Registered & Grade A Licensed",
    description:
      "Registered with the Corporate Affairs Commission (CAC) with a minimum share capital of ₦100 million for Grade A national coverage licence[citation:1].",
  },
  {
    title: "Fully Insured & Certified Security Provider",
    description:
      "Comprehensive insurance coverage and certification for all security operations nationwide.",
  },
  {
    title: "All Officers Vetted & Background Checked",
    description:
      "Every guard undergoes thorough background screening and personal history verification in compliance with NSCDC requirements[citation:18].",
  },
  {
    title: "Mandatory Training & Development Programs",
    description:
      "Structured training curriculum approved by NSCDC, with mandatory courses for career progression and professional development[citation:1].",
  },
  {
    title: "ICoCA Nigeria Chapter Member",
    description:
      "Aligned with the International Code of Conduct Association (ICoCA) framework for human rights compliance and accountability in private security operations[citation:5].",
  },
  {
    title: "Wholly Nigerian-Owned",
    description:
      "100% indigenous ownership as mandated by Nigerian law — foreign entities are prohibited from operating private guard companies[citation:7][citation:13].",
  },
];

export const values = [
  {
    icon: LuShieldCheck,
    title: "Reliability",
    description:
      "We provide consistent, dependable security services you can count on.",
    accent: { bg: "bg-emerald-100", text: "text-emerald-600" },
  },
  {
    icon: LuAward,
    title: "Excellence",
    description:
      "We maintain the highest standards in all aspects of our security operations.",
    accent: { bg: "bg-amber-100", text: "text-amber-600" },
  },
  {
    icon: LuUserCheck,
    title: "Professionalism",
    description:
      "Our team is fully trained, vetted, and committed to exceptional service.",
    accent: { bg: "bg-sky-100", text: "text-sky-600" },
  },
  {
    icon: LuClock,
    title: "Availability",
    description:
      "24/7 response and support whenever you need us, day or night.",
    accent: { bg: "bg-violet-100", text: "text-violet-600" },
  },
];

export const reasonsToChooseUs = [
  {
    title: "Experienced Team",
    description:
      "Our security professionals bring years of experience and undergo rigorous training to ensure the highest service standards.",
  },
  {
    title: "Tailored Solutions",
    description:
      "We understand that every client is unique, so we customize our security services to match your specific needs and requirements.",
  },
  {
    title: "Rapid Response",
    description:
      "Our 24/7 emergency response team ensures immediate action when security situations arise, day or night.",
  },
  {
    title: "Competitive Pricing",
    description:
      "We offer transparent, competitive pricing without compromising on the quality of our security services.",
  },
];



export const securityService: SecurityService[] = [
  {
    id: 1,
    title: "Manned Guarding",
    description:
      "Professional security officers providing physical presence and protection for your premises.",
    image:
      "https://images.unsplash.com/photo-1761064392859-2bfa734e9f3f?auto=format&fit=crop&w=1080&q=80",
    features: [
      "Uniformed SIA licensed officers",
      "Visible deterrent to crime and vandalism",
      "Access control and visitor management",
      "Incident reporting and documentation",
      "Customer service and assistance",
      "24/7 availability",
    ],
  },
  {
    id: 2,
    title: "Construction Site Security",
    description:
      "Specialized security solutions designed specifically for construction sites and development projects.",
    image:
      "https://images.unsplash.com/photo-1723107638858-331404b1a09a?auto=format&fit=crop&w=1080&q=80",
    features: [
      "Site protection during and after hours",
      "Prevention of theft and vandalism",
      "Equipment and material security",
      "Contractor and visitor access control",
      "Health and safety compliance support",
      "Regular patrol and monitoring",
    ],
  },
  {
    id: 3,
    title: "Mobile Patrol",
    description:
      "Regular patrol services providing comprehensive coverage and rapid response across multiple sites.",
    image:
      "https://images.unsplash.com/photo-1778162153200-d6e7d16827c7?auto=format&fit=crop&w=1080&q=80",
    features: [
      "Scheduled and random patrol visits",
      "Multiple site coverage",
      "Alarm response services",
      "Lock-up and unlock services",
      "Detailed visit reports",
      "GPS tracked vehicles",
    ],
  },
  {
    id: 4,
    title: "Key Holding",
    description:
      "Secure key holding and alarm response services available around the clock.",
    image:
      "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?auto=format&fit=crop&w=1080&q=80",
    features: [
      "Secure key storage and management",
      "24/7 alarm response",
      "Emergency callout service",
      "Site inspection and securing",
      "Police liaison when required",
      "Detailed incident reports",
    ],
  },
];


export const getInTouch= [
 
  {
    icon: FaPhone,
    title: "phone",
    text: "+44 (0) 123 456 7890",
    description:"24/7 Emergency Line"
  },
  {
    icon: IoMdMail,
    title: "Email",
    text: "nfo@everguardsecurity.uk",
    description:"We'll respond within 24 hours"
  },
  {
    icon: FaMapPin,
    title: "Service Area",
    text: "Nigeria",
    description:"Nationwide coverage"
  },
  {
    icon: FaClock,
    title: "Availability",
    text: "24/7 Security Services",
    description: "Office Hours: Mon-Fri 9am-6pm"
  },
];