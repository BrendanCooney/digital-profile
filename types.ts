
export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  skills?: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
}