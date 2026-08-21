export interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  category: string;
  tech: string[];
  demo_url: string | null;
  github_url: string | null;
  year: string;
  featured: boolean;
  sort_order: number;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  level: number;
  sort_order: number;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  sort_order: number;
}

export interface Stat {
  id: number;
  value: number;
  suffix: string;
  label: string;
}
