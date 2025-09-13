import { Testimonial } from '@/types'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const rating = parseInt(testimonial.metadata?.rating?.key || '5')
  const clientPhoto = testimonial.metadata?.client_photo
  const relatedProject = testimonial.metadata?.related_project
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => {
      const filled = index < rating ? 'text-yellow-400' : 'text-secondary-300'
      return { filled, index }
    })
  }

  return (
    <div className="glass-card p-6 h-full flex flex-col">
      {/* Rating */}
      <div className="flex text-yellow-400 mb-4">
        {renderStars(rating).map(({ filled, index }) => (
          <Star
            key={index}
            className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-secondary-300'}`}
            fill="currentColor"
          />
        ))}
      </div>
      
      {/* Testimonial Text */}
      {testimonial.metadata?.testimonial && (
        <div 
          className="text-muted-foreground mb-6 flex-grow"
          dangerouslySetInnerHTML={{ 
            __html: testimonial.metadata.testimonial.replace(/<[^>]*>/g, '') 
          }}
        />
      )}
      
      {/* Client Info */}
      <div className="flex items-center space-x-4">
        {clientPhoto && (
          <img
            src={`${clientPhoto.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={testimonial.metadata?.client_name || 'Client'}
            width="48"
            height="48"
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        
        <div className="flex-grow">
          <div className="font-semibold">
            {testimonial.metadata?.client_name || 'Anonymous'}
          </div>
          
          {testimonial.metadata?.client_title && (
            <div className="text-sm text-muted-foreground">
              {testimonial.metadata.client_title}
              {testimonial.metadata?.company && (
                <span> at {testimonial.metadata.company}</span>
              )}
            </div>
          )}
          
          {/* Related Project */}
          {relatedProject && (
            <div className="text-xs text-primary mt-1">
              Project: {relatedProject.metadata?.name || relatedProject.title}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}