import { createBucketClient } from '@cosmicjs/sdk'
import { Project, Skill, WorkExperience, Testimonial, CosmicResponse } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Projects
export async function getAllProjects(): Promise<Project[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'projects' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const projects = response.objects as Project[];
    
    // Sort by featured first, then by creation date
    return projects.sort((a, b) => {
      if (a.metadata?.featured && !b.metadata?.featured) return -1;
      if (!a.metadata?.featured && b.metadata?.featured) return 1;
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch projects');
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'projects',
      slug
    }).depth(1);
    
    const project = response.object as Project;
    
    if (!project || !project.metadata) {
      return null;
    }
    
    return project;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch project');
  }
}

// Skills
export async function getAllSkills(): Promise<Skill[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'skills' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Skill[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch skills');
  }
}

// Work Experience
export async function getAllWorkExperience(): Promise<WorkExperience[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'work-experience' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const workExperience = response.objects as WorkExperience[];
    
    // Sort by start date (newest first)
    return workExperience.sort((a, b) => {
      const dateA = new Date(a.metadata?.start_date || '').getTime();
      const dateB = new Date(b.metadata?.start_date || '').getTime();
      return dateB - dateA;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch work experience');
  }
}

// Testimonials
export async function getAllTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const testimonials = response.objects as Testimonial[];
    
    // Sort by featured first, then by date
    return testimonials.sort((a, b) => {
      if (a.metadata?.featured && !b.metadata?.featured) return -1;
      if (!a.metadata?.featured && b.metadata?.featured) return 1;
      
      const dateA = new Date(a.metadata?.date || '').getTime();
      const dateB = new Date(b.metadata?.date || '').getTime();
      return dateB - dateA;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch testimonials');
  }
}

// Get featured testimonials
export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  const allTestimonials = await getAllTestimonials();
  return allTestimonials.filter(testimonial => testimonial.metadata?.featured === true);
}

// Get featured projects
export async function getFeaturedProjects(): Promise<Project[]> {
  const allProjects = await getAllProjects();
  return allProjects.filter(project => project.metadata?.featured === true);
}