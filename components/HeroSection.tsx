import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float animation-delay-300" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-balance">
              Building Digital
              <span className="block gradient-text">Experiences</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Full-stack developer specializing in modern web applications and desktop solutions. 
              Creating scalable, user-focused software that makes a difference.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-200">
            <Link 
              href="/projects" 
              className="button-primary group"
            >
              View My Work
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link 
              href="/about" 
              className="button-secondary"
            >
              About Me
            </Link>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-slide-up animation-delay-300">
            <a 
              href="#" 
              className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2" />
          </div>
        </div>
      </div>
    </section>
  )
}