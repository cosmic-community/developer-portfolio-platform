// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Project interface
export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    name?: string;
    description?: string;
    technologies?: string;
    project_type?: {
      key: string;
      value: string;
    };
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    live_url?: string;
    github_url?: string;
    duration?: string;
    featured?: boolean;
  };
}

// Skill interface
export interface Skill extends CosmicObject {
  type: 'skills';
  metadata: {
    name?: string;
    category?: {
      key: string;
      value: string;
    };
    proficiency?: {
      key: string;
      value: string;
    };
    years_experience?: number;
    icon?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Work Experience interface
export interface WorkExperience extends CosmicObject {
  type: 'work-experience';
  metadata: {
    title?: string;
    company?: string;
    company_url?: string;
    start_date?: string;
    end_date?: string;
    current_position?: boolean;
    location?: string;
    employment_type?: {
      key: string;
      value: string;
    };
    description?: string;
    technologies?: string;
    company_logo?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Testimonial interface
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name?: string;
    client_title?: string;
    company?: string;
    testimonial?: string;
    rating?: {
      key: string;
      value: string;
    };
    related_project?: Project;
    client_photo?: {
      url: string;
      imgix_url: string;
    };
    date?: string;
    featured?: boolean;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards
export function isProject(obj: CosmicObject): obj is Project {
  return obj.type === 'projects';
}

export function isSkill(obj: CosmicObject): obj is Skill {
  return obj.type === 'skills';
}

export function isWorkExperience(obj: CosmicObject): obj is WorkExperience {
  return obj.type === 'work-experience';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}

// Utility types
export type ProjectCategory = 'web' | 'desktop' | 'mobile' | 'website';
export type SkillCategory = 'languages' | 'frameworks' | 'tools' | 'databases';
export type ProficiencyLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type EmploymentType = 'full-time' | 'part-time' | 'contract' | 'freelance';