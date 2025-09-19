export interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  experience: number
  social: Array<{
    platform: string
    icon: string
    url: string
  }>
}

export const teamMembers: TeamMember[] = [
  {
    name: 'John Mwangi',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    bio: 'With over 20 years in construction management, John leads our team with vision and expertise in delivering complex projects.',
    experience: 20,
    social: [
      { platform: 'linkedin', icon: 'heroicons:user', url: '#' },
      { platform: 'twitter', icon: 'heroicons:at-symbol', url: '#' }
    ]
  },
  {
    name: 'Sarah Wanjiku',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    bio: 'Sarah specializes in project coordination and client relations, ensuring smooth execution from start to finish.',
    experience: 15,
    social: [
      { platform: 'linkedin', icon: 'heroicons:user', url: '#' },
      { platform: 'twitter', icon: 'heroicons:at-symbol', url: '#' }
    ]
  },
  {
    name: 'David Kimani',
    role: 'Lead Engineer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    bio: 'David brings technical excellence and innovation to every project, ensuring structural integrity and quality.',
    experience: 18,
    social: [
      { platform: 'linkedin', icon: 'heroicons:user', url: '#' },
      { platform: 'twitter', icon: 'heroicons:at-symbol', url: '#' }
    ]
  },
  {
    name: 'Grace Akinyi',
    role: 'Design Specialist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    bio: 'Grace combines creativity with functionality, creating designs that are both beautiful and practical.',
    experience: 12,
    social: [
      { platform: 'linkedin', icon: 'heroicons:user', url: '#' },
      { platform: 'twitter', icon: 'heroicons:at-symbol', url: '#' }
    ]
  },
  {
    name: 'Peter Otieno',
    role: 'Site Supervisor',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    bio: 'Peter ensures quality control and safety standards are maintained on every construction site.',
    experience: 16,
    social: [
      { platform: 'linkedin', icon: 'heroicons:user', url: '#' },
      { platform: 'twitter', icon: 'heroicons:at-symbol', url: '#' }
    ]
  },
  {
    name: 'Mary Njeri',
    role: 'Quality Assurance Manager',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    bio: 'Mary oversees quality control processes, ensuring every project meets our high standards.',
    experience: 14,
    social: [
      { platform: 'linkedin', icon: 'heroicons:user', url: '#' },
      { platform: 'twitter', icon: 'heroicons:at-symbol', url: '#' }
    ]
  }
]
