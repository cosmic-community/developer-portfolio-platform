import { Skill, SkillCategory } from '@/types'
import SkillCard from '@/components/SkillCard'

interface SkillsSectionProps {
  skills: Skill[]
}

const categoryOrder: SkillCategory[] = ['languages', 'frameworks', 'databases', 'tools']
const categoryLabels = {
  languages: 'Programming Languages',
  frameworks: 'Frameworks & Libraries',
  databases: 'Databases',
  tools: 'Tools & Software'
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  if (!skills || skills.length === 0) {
    return (
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
            <p className="text-muted-foreground">No skills found</p>
          </div>
        </div>
      </section>
    )
  }

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = skill.metadata?.category?.key as SkillCategory || 'tools'
    if (!acc[category]) acc[category] = []
    acc[category].push(skill)
    return acc
  }, {} as Record<SkillCategory, Skill[]>)

  return (
    <section className="py-20 bg-secondary/20" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>
        
        <div className="space-y-12">
          {categoryOrder
            .filter(categoryKey => {
              const skillsInCategory = skillsByCategory[categoryKey]
              return skillsInCategory && skillsInCategory.length > 0
            })
            .map((categoryKey) => {
              const skillsInCategory = skillsByCategory[categoryKey]
              
              // Early return safety check
              if (!skillsInCategory || skillsInCategory.length === 0) {
                return null
              }
              
              return (
                <div key={categoryKey} className="animate-fade-in">
                  <h3 className="text-2xl font-semibold mb-6 text-center">
                    {categoryLabels[categoryKey]}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {skillsInCategory.map((skill, index) => (
                      <div
                        key={skill.id}
                        className="animate-slide-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <SkillCard skill={skill} />
                      </div>
                    ))}
                  </div>
                </div>
              )
            })
            .filter(Boolean)}
        </div>
      </div>
    </section>
  )
}