import { Skill } from '@/types'

interface SkillCardProps {
  skill: Skill
}

const proficiencyColors = {
  beginner: 'bg-yellow-500/20 text-yellow-400',
  intermediate: 'bg-blue-500/20 text-blue-400',
  advanced: 'bg-green-500/20 text-green-400',
  expert: 'bg-purple-500/20 text-purple-400'
}

export default function SkillCard({ skill }: SkillCardProps) {
  const proficiency = skill.metadata?.proficiency?.key as keyof typeof proficiencyColors || 'intermediate'
  const yearsExperience = skill.metadata?.years_experience
  const skillIcon = skill.metadata?.icon

  return (
    <div className="glass-card p-4 text-center group hover:scale-105 transition-all duration-300">
      {/* Skill Icon */}
      {skillIcon && (
        <div className="mb-3 flex justify-center">
          <img
            src={`${skillIcon.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={skill.metadata?.name || skill.title}
            width="48"
            height="48"
            className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      
      {/* Skill Name */}
      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
        {skill.metadata?.name || skill.title}
      </h4>
      
      {/* Proficiency Badge */}
      <div className="space-y-2">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${proficiencyColors[proficiency]}`}>
          {skill.metadata?.proficiency?.value || 'Intermediate'}
        </span>
        
        {/* Years of Experience */}
        {yearsExperience && (
          <p className="text-xs text-muted-foreground">
            {yearsExperience} {yearsExperience === 1 ? 'year' : 'years'} experience
          </p>
        )}
      </div>
    </div>
  )
}