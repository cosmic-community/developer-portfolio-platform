import { Project } from '@/types'
import ProjectCard from '@/components/ProjectCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ProjectsSectionProps {
  projects: Project[]
  showViewAll?: boolean
}

export default function ProjectsSection({ projects, showViewAll = false }: ProjectsSectionProps) {
  if (!projects || projects.length === 0) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">No projects found</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing various technologies and approaches to problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        {showViewAll && (
          <div className="text-center">
            <Link 
              href="/projects"
              className="button-primary group"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}