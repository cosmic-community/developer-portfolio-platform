import { Project } from '@/types'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const featuredImage = project.metadata?.featured_image
  const technologies = project.metadata?.technologies?.split(',').map(tech => tech.trim()) || []
  const projectType = project.metadata?.project_type?.value || 'Project'

  return (
    <div className="glass-card p-6 group hover:scale-105 transition-all duration-300">
      {/* Project Image */}
      {featuredImage && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            src={`${featuredImage.imgix_url}?w=600&h=300&fit=crop&auto=format,compress`}
            alt={project.metadata?.name || project.title}
            width="300"
            height="150"
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      
      {/* Project Info */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="skill-badge">{projectType}</span>
          {project.metadata?.featured && (
            <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded">
              Featured
            </span>
          )}
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
            {project.metadata?.name || project.title}
          </h3>
          
          {project.metadata?.description && (
            <div 
              className="text-muted-foreground text-sm line-clamp-3"
              dangerouslySetInnerHTML={{ 
                __html: project.metadata.description.replace(/<[^>]*>/g, '').substring(0, 120) + '...' 
              }}
            />
          )}
        </div>
        
        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {technologies.slice(0, 4).map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-secondary text-xs rounded text-muted-foreground"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="px-2 py-1 bg-secondary text-xs rounded text-muted-foreground">
                +{technologies.length - 4}
              </span>
            )}
          </div>
        )}
        
        {/* Project Links */}
        <div className="flex items-center gap-3 pt-2">
          {project.metadata?.live_url && (
            <a
              href={project.metadata.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
          
          {project.metadata?.github_url && (
            <a
              href={project.metadata.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm">Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}