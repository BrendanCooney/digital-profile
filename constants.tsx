import React from 'react';
import type { Experience, SkillCategory, Education } from './types';

export const IconGitHub = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" {...props}>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

export const IconLinkedIn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const IconMail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
  </svg>
);

export const IconLink = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 5.992c1.373.008 2.584.484 3.545 1.455l-1.414 1.414c-.586-.586-1.354-.879-2.131-.879-1.654 0-3 1.346-3 3s1.346 3 3 3c.777 0 1.545-.293 2.121-.879l1.414 1.414c-.96 1-2.18 1.464-3.535 1.453-2.761-.021-4.979-2.26-4.979-5.021s2.218-4.999 4.979-4.979zm8.979 6.029c.021 2.761-2.218 5.001-4.979 5.021-1.355-.011-2.575-.465-3.535-1.453l1.414-1.414c.577.586 1.343.879 2.121.879 1.654 0 3-1.346 3-3s-1.346-3-3-3c-.778 0-1.545.293-2.121.879l-1.414-1.414c.961-.971 2.172-1.447 3.545-1.455 2.761.021 4.979 2.26 4.979 5.021z"/>
  </svg>
);

export const IconPhone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.21-3.72-6.56-6.56l1.97-1.57c.27-.27.36-.66.24-1.01-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
  </svg>
);

export const IconDownload = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor" {...props}>
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
    </svg>
);


export const EXPERIENCES: Experience[] = [
  {
    role: "Purchasing and Customs Assistant",
    company: "Freudenberg Group - Carrick-On-Shannon, County Leitrim",
    period: "March 2025 - Present",
    description: [
      "Ordering and managing of materials required to support production.",
      "Overseeing the customs-imports/exports process.",
      "Identifying and reducing inventory reduction projects.",
      "Maintaining supplier performance reports and metrics.",
      "Assisting in the cost review and reduction process for all purchased items.",
      "Liaising with suppliers and internal departments.",
      "RFQ Process Management, Stock Take Collaboration, and Purchasing Approver.",
    ],
  },
  {
    role: "Process Assurance Operator",
    company: "Freudenberg Medical (Formerly VistaMed) - Carrick-On-Shannon, County Leitrim",
    period: "June 2024 - Present",
    description: [
      "Operation of process equipment and microscope inspection.",
      "Ensuring adherence to all work procedures and agreed specifications.",
      "Completing documentation in compliance with GMP.",
      "Packaging, shipping, and consistently meeting customer requirements and targets.",
      "Maintaining proper housekeeping and Health & Safety standards.",
    ],
  },
  {
    role: "Digital Sales & Marketing Manager",
    company: "W. C. O' Brien - Dublin, County Dublin",
    period: "March 2022 - March 2024",
    description: [
      "Established Digital Signage Sales and Marketing business unit.",
      "Designed, created and executed SaaS sales and marketing strategies.",
      "Implemented CRM for the business to manage sales campaigns.",
      "Won new logos and developed sustainable long-term customer relationships.",
      "Managed customer social media channels, email marketing campaigns, and WordPress website SEO.",
      "Set up and managed client advertising campaigns with Google Ads.",
    ],
  },
  {
    role: "Digital Marketing and Sales Manager",
    company: "Safety Solutions Ltd - Dublin, Dublin, IE",
    period: "November 2020 - February 2022",
    description: [
        "Developed and executed a digital marketing strategy that led to significant business growth.",
        "Achieved over 200% engagement in social media campaigns.",
        "Increased web traffic by 200% through keyword research and SEO optimisation.",
        "Managed email marketing with Active Campaign and evaluated Google Ads campaigns against ROI.",
        "Increased lead generation by 100% through PPC ad campaigns.",
    ],
  },
  {
    role: "Marketing Manager",
    company: "WebSavvy - Keshcarrigan, Leitrim, UK",
    period: "March 2020 - November 2020",
    description: [
      "Designed, developed, and delivered targeted Facebook and Google Ad campaigns.",
      "Managed marketing resources, planning, and activities.",
      "Developed impactful brand and style guides.",
      "Launched new products and expanded into new markets.",
      "Managed stakeholder prospect meetings to identify business challenges and developed solution proposals.",
    ],
  },
    {
    role: "Business Development Manager",
    company: "AVITOR - Dublin, County Dublin",
    period: "April 2019 - February 2020",
    description: [
      "Created new SaaS & Hardware sales pipeline in greenfield accounts.",
      "Managed sales opportunities through their lifecycles, closing complex deals.",
      "Built sustainable relationships with senior stakeholders with a consultative approach.",
    ],
  },
  {
    role: "Business Development Executive",
    company: "One Digital Media - Johannesburg, ZA",
    period: "June 2018 - March 2019",
    description: [
        "Developed a partner network to generate new business leads.",
        "Executed SaaS and Digital Hardware sales contracts.",
        "Forecasted projected sales and market trends to guide business strategy.",
        "Launched new products with exceptional campaign planning.",
    ],
  },
  {
    role: "Owner/Director (Head of Sales)",
    company: "Advicast Multimedia - Johannesburg, ZA",
    period: "October 2009 - June 2018",
    description: [
        "Initiated sales strategy & market research to establish strategic market positioning and KPIs.",
        "Set up budgets and developed supply chains for cost-effective solutions.",
        "Implemented finance, HR & CX systems to run the business.",
        "Managed operations for 850 digital signage displays.",
        "Grew and led business team, substantially growing customer base, product line, and sales volume.",
    ],
  }
];

export const SKILLS: SkillCategory[] = [
    {
        title: "Sales & Marketing",
        skills: ["Digital Marketing", "Business Development", "Sales Strategy & Execution", "Lead Generation", "Social Media Management", "PPC Advertising (Google & Facebook Ads)", "SEO", "Content Strategy"],
    },
    {
        title: "Business & Operations",
        skills: ["Account Management", "Procurement", "Supply Chain Management", "Project Management", "Team Leadership & Motivation", "Customer Relationship Management (CRM)"],
    },
    {
        title: "Software & Tools",
        skills: ["CRM Implementation", "Microsoft Office", "WordPress", "SaaS Platforms", "Active Campaign", "Web development", "html", "CSS", "javascript", "python"],
    }
];

export const EDUCATION: Education[] = [
    {
        degree: "Full Stack Web Development for E-Commerce (Higher Certificate)",
        institution: "Code Institute - Dublin, County Dublin",
        period: "January 2023 - Present",
    },
    {
        degree: "Bachelor of Journalism and Media Studies",
        institution: "Rhodes University - Grahamstown, South Africa",
        period: "February 1996 - December 1999",
    },
    {
        degree: "Matriculation Certificate",
        institution: "Parktown Boys' High School - Johannesburg, ZA",
        period: "December 1995",
    }
];
