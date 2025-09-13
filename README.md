# Developer Portfolio Platform

![Portfolio Preview](https://imgix.cosmicjs.com/16870ab0-908e-11f0-bcbd-9176d0adbb08-photo-1460925895917-afdab827c52f-1757760037568.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive developer portfolio platform built with Next.js and powered by Cosmic. Showcase your projects, skills, work experience, and client testimonials with a professional, engaging interface.

## ✨ Features

- **Dynamic Project Portfolio** - Interactive project showcase with filtering and detailed views
- **Skills Dashboard** - Organized skill categories with proficiency indicators
- **Work Experience Timeline** - Professional experience display with company details
- **Client Testimonials** - Star-rated testimonials with client connections
- **Responsive Design** - Mobile-first approach with smooth animations
- **SEO Optimized** - Meta tags and structured data for better visibility
- **Performance Optimized** - Fast loading with optimized images and code splitting
- **Dark Theme** - Modern dark design with glassmorphism effects

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68c547a30a2eeaef39f42b8d&clone_repository=68c54bfe0a2eeaef39f42bb7)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a web developer portfolio with projects, skills, work experience, and testimonials about web and desktop developer"

### Code Generation Prompt

> Based on the content model I created for "Create a content model for a web developer portfolio with projects, skills, work experience, and testimonials about web and desktop developer", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🚀 Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict type checking
- **Styling**: Tailwind CSS with custom design system
- **Content Management**: Cosmic CMS with SDK v1.5+
- **Deployment**: Vercel-optimized with static generation
- **Performance**: Image optimization with imgix integration

## 📋 Prerequisites

- Node.js 18+ or Bun runtime
- Cosmic account with your portfolio content
- Git for version control

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd developer-portfolio-platform
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Cosmic credentials:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. **Run the development server**
   ```bash
   bun run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Cosmic SDK Examples

### Fetching Projects with Related Data
```typescript
import { cosmic } from '@/lib/cosmic'

// Get projects with full metadata
const response = await cosmic.objects
  .find({ type: 'projects' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const projects = response.objects.sort((a, b) => {
  return a.metadata?.featured === true ? -1 : 1
})
```

### Querying Skills by Category
```typescript
// Get skills organized by category
const response = await cosmic.objects
  .find({ type: 'skills' })
  .props(['id', 'title', 'metadata'])
  .depth(1)

const skillsByCategory = response.objects.reduce((acc, skill) => {
  const category = skill.metadata?.category?.key || 'other'
  if (!acc[category]) acc[category] = []
  acc[category].push(skill)
  return acc
}, {})
```

## 🌐 Cosmic CMS Integration

This application integrates with the following Cosmic object types:

- **Projects** (`projects`) - Portfolio projects with technologies, images, and links
- **Skills** (`skills`) - Technical skills with categories and proficiency levels
- **Work Experience** (`work-experience`) - Professional experience with company details
- **Testimonials** (`testimonials`) - Client testimonials with ratings and project links

### Content Structure
- All content is dynamically fetched from your Cosmic bucket
- Images are optimized using imgix for performance
- Related objects (like project connections in testimonials) are resolved automatically
- Content updates in Cosmic reflect immediately in the application

## 🚀 Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on every push

### Netlify
1. Connect repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `out`
4. Add environment variables in Netlify dashboard

### Manual Deployment
```bash
bun run build
bun run start
```

## 📱 Responsive Design

The application is built mobile-first and includes:
- Responsive navigation with mobile menu
- Adaptive grid layouts for all screen sizes
- Touch-friendly interactive elements
- Optimized images for different device densities
- Progressive enhancement for better performance

<!-- README_END -->