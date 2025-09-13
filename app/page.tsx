import { getAllProjects, getAllSkills, getFeaturedTestimonials } from '@/lib/cosmic'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import TestimonialsSection from '@/components/TestimonialsSection'

export default async function HomePage() {
  // Fetch data in parallel
  const [projects, skills, testimonials] = await Promise.all([
    getAllProjects(),
    getAllSkills(),
    getFeaturedTestimonials(),
  ])

  return (
    <div className="space-y-20">
      <HeroSection />
      
      <ProjectsSection 
        projects={projects.slice(0, 6)} 
        showViewAll={projects.length > 6}
      />
      
      <SkillsSection skills={skills} />
      
      {testimonials.length > 0 && (
        <TestimonialsSection testimonials={testimonials} />
      )}
    </div>
  )
}