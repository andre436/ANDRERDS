export interface Skill {
  name: string;
  level: number;
  category: 'programming' | 'tools' | 'soft-skills';
  icon?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  tags: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}