import { Testimonial } from '@/types'
import TestimonialCard from '@/components/TestimonialCard'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section className="py-20" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What clients say about working with me.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}