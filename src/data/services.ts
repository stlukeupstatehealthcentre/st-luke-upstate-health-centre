import childCareImg from "@/assets/services_child_care.jpeg";
import consultationImg from "@/assets/services_consultation.jpeg";
import dentalImg from "@/assets/services_dental_care.jpeg";
import familyPlanningImg from "@/assets/services_family_planning_care.jpeg";
import labImg from "@/assets/services_lab.jpeg";
import pregnancyCareImg from "@/assets/services_pregnancy_care.jpeg";
import ultrasoundImg from "@/assets/ultrasound.jpeg";
import happyBoyImg from "@/assets/happy-boy.jpeg";
import reproductiveHealthImg from "@/assets/reproductive-helath-clinic.jpeg";
import outreachImg from "@/assets/outreach.jpeg";
import minorProcedureImg from "@/assets/minor-medical-procedure.jpeg";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "svc-1",
    slug: "general-outpatient",
    title: "General Outpatient",
    description:
      "Routine consultations, diagnosis and treatment for everyday health concerns.",
    icon: "Stethoscope",
    image: consultationImg,
    featured: true,
    details: {
      overview:
        "Our general outpatient department provides accessible, same-day consultations for a wide range of acute and chronic conditions. Our experienced clinicians take time to listen, diagnose accurately, and recommend the most appropriate treatment plan.",
      whatToExpect: [
        "Medical history review and consultation",
        "Physical examination",
        "Diagnostic tests if required",
        "Prescription and treatment plan",
        "Follow-up scheduling if needed",
      ],
    },
  },
  {
    id: "svc-2",
    slug: "antenatal-clinics",
    title: "Antenatal Clinics",
    description:
      "Comprehensive maternity care throughout pregnancy for mother and baby.",
    icon: "Baby",
    image: pregnancyCareImg,
    featured: false,
    details: {
      overview:
        "Our antenatal clinic provides scheduled monitoring and care throughout your pregnancy, ensuring both mother and baby are healthy at every stage. We offer routine check-ups, screening tests, nutritional guidance, and birth preparation.",
      whatToExpect: [
        "Initial booking appointment and health assessment",
        "Regular blood pressure, weight and urine checks",
        "Foetal growth monitoring and ultrasound scans",
        "Nutritional and lifestyle counselling",
        "Birth plan discussion and delivery preparation",
      ],
    },
  },
  {
    id: "svc-3",
    slug: "family-planning",
    title: "Family Planning",
    description:
      "Confidential counselling and a full range of family planning options.",
    icon: "Users",
    image: familyPlanningImg,
    featured: false,
    details: {
      overview:
        "We provide confidential, non-judgmental family planning services to individuals and couples. Our trained counsellors help you understand all available options so you can make informed choices about your reproductive health.",
      whatToExpect: [
        "Private one-on-one counselling session",
        "Full range of contraceptive options discussed",
        "Safe provision of chosen method",
        "Follow-up and ongoing support",
      ],
    },
  },
  {
    id: "svc-4",
    slug: "minor-surgical-procedures",
    title: "Minor Surgical Procedures",
    description:
      "Safe, sterile minor surgeries performed by experienced clinicians.",
    icon: "Syringe",
    image: minorProcedureImg,
    featured: false,
    details: {
      overview:
        "Our clinical team performs a range of minor surgical procedures under sterile conditions. All procedures are carried out by experienced clinicians with appropriate anaesthesia for patient comfort.",
      whatToExpect: [
        "Pre-procedure assessment and consent",
        "Local anaesthesia where appropriate",
        "Sterile surgical environment",
        "Post-procedure care instructions",
        "Follow-up appointment as needed",
      ],
      conditions: [
        "Wound debridement and dressing",
        "Abscess incision and drainage",
        "Skin lesion removal",
        "Suturing and wound closure",
        "Keloid treatment",
      ],
    },
  },
  {
    id: "svc-5",
    slug: "laboratory",
    title: "Laboratory Services",
    description:
      "Accurate, timely diagnostic tests with fast turnaround times.",
    icon: "FlaskConical",
    image: labImg,
    featured: true,
    details: {
      overview:
        "Our modern laboratory offers a comprehensive range of diagnostic tests with fast, accurate results. We operate 24 hours a day, 7 days a week.",
      whatToExpect: [
        "Walk-in sample collection",
        "Fast turnaround times",
        "Results communicated promptly",
        "Specialist referral guidance if needed",
      ],
    },
  },
  {
    id: "svc-6",
    slug: "emergency-maternity",
    title: "Emergency Maternity Services",
    description:
      "Round-the-clock emergency maternity care when you need it most.",
    icon: "Ambulance",
    image: pregnancyCareImg,
    featured: false,
    details: {
      overview:
        "Our emergency maternity unit is available around the clock for obstetric emergencies and urgent maternity care. Skilled midwives and clinicians are on hand 24/7 to ensure the safety of both mother and baby.",
      whatToExpect: [
        "Immediate triage and assessment on arrival",
        "Continuous foetal and maternal monitoring",
        "Emergency obstetric interventions if required",
        "Post-delivery care and support",
      ],
    },
  },
  {
    id: "svc-7",
    slug: "outreach-services",
    title: "Outreach Services",
    description: "Bringing essential healthcare services into the community.",
    icon: "MapPin",
    image: outreachImg,
    featured: false,
    details: {
      overview:
        "Our outreach programme brings essential healthcare services directly to underserved communities. Through mobile clinics and community partnerships, we deliver screenings, vaccinations, and health education where they are needed most.",
      whatToExpect: [
        "Community health screenings and assessments",
        "Vaccination and immunisation drives",
        "Health education and awareness sessions",
        "Referral to facility-based care when needed",
      ],
    },
  },
  {
    id: "svc-8",
    slug: "child-welfare",
    title: "Child Welfare Clinic",
    description:
      "Immunisation, growth monitoring and wellness for young children.",
    icon: "HeartPulse",
    image: childCareImg,
    featured: false,
    details: {
      overview:
        "Our child welfare clinic provides comprehensive care for infants and children, from birth through adolescence. We focus on growth monitoring, immunisation, nutrition, and early detection of developmental concerns.",
      whatToExpect: [
        "Weight, height and developmental milestone checks",
        "Immunisation according to the national schedule",
        "Nutritional assessment and guidance",
        "Screening for common childhood illnesses",
        "Referral for specialist care if needed",
      ],
    },
  },
  {
    id: "svc-9",
    slug: "reproductive-health",
    title: "Reproductive Health Clinic",
    description: "Discreet, expert reproductive and sexual health services.",
    icon: "HeartHandshake",
    image: reproductiveHealthImg,
    featured: false,
    details: {
      overview:
        "Our reproductive health clinic offers discreet, professional care for a wide range of reproductive and sexual health concerns. We provide a safe, confidential space for all patients.",
      whatToExpect: [
        "Confidential consultation with a trained clinician",
        "STI screening and treatment",
        "Cervical and prostate cancer screening",
        "Fertility and hormonal health assessment",
        "Referral and follow-up support",
      ],
    },
  },
  {
    id: "svc-10",
    slug: "ultrasound-scan",
    title: "Ultrasound/Scan Services",
    description: "Advanced imaging including our 5D Ultrasound Machine.",
    icon: "ScanLine",
    image: ultrasoundImg,
    featured: true,
    details: {
      overview:
        "Our facility is equipped with a state-of-the-art 5D Ultrasound Machine, delivering highly detailed imaging for accurate diagnostics. Our trained sonographers provide clear, compassionate scan experiences.",
      whatToExpect: [
        "Preparation instructions provided in advance",
        "Comfortable, private scan room",
        "Real-time imaging explained during the scan",
        "Report provided to your referring clinician",
        "Follow-up consultation if needed",
      ],
    },
  },
  {
    id: "svc-11",
    slug: "dental",
    title: "Dental Care Services",
    description: "Comprehensive dental treatment with all-digital instruments.",
    icon: "Smile",
    image: dentalImg,
    featured: true,
    details: {
      overview:
        "Our dental department provides comprehensive oral healthcare using all-digital instruments. From routine check-ups to cosmetic and restorative procedures, we deliver gentle, professional dental care.",
      whatToExpect: [
        "Full dental examination",
        "Digital X-rays if required",
        "Personalised treatment plan",
        "Gentle, pain-managed procedures",
        "Oral hygiene guidance",
      ],
    },
  },
  {
    id: "svc-12",
    slug: "male-circumcision",
    title: "Male Circumcision",
    description:
      "Safe, quick and confidential male circumcision for adults and boys.",
    icon: "ShieldCheck",
    image: happyBoyImg,
    featured: false,
    details: {
      overview:
        "We perform safe, hygienic male circumcision procedures for adults and boys in a clinical environment. Our experienced medical team ensures patient comfort, safety and complete aftercare guidance.",
      whatToExpect: [
        "Pre-procedure consultation and consent",
        "Local anaesthesia for comfort",
        "Sterile, professional procedure",
        "Aftercare instructions and wound management",
        "Follow-up appointment included",
      ],
    },
  },
];
