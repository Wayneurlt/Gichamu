export interface Service {
  icon: string
  title: string
  shortDescription: string
  features: string[]
}

export const services: Service[] = [
  {
    icon: 'heroicons:home-modern',
    title: 'Design & Build',
    shortDescription: 'Complete design and construction services from concept to completion.',
    features: [
      'Architectural design',
      '3D visualization',
      'Material selection',
      'Construction management',
      'Quality control',
      'Project delivery'
    ]
  },
  {
    icon: 'heroicons:clipboard-document-list',
    title: 'Project Management',
    shortDescription: 'Professional project coordination and management services.',
    features: [
      'Timeline management',
      'Budget control',
      'Resource allocation',
      'Risk assessment',
      'Progress monitoring',
      'Stakeholder communication'
    ]
  },
  {
    icon: 'heroicons:computer-desktop',
    title: 'Remote Projects Control',
    shortDescription: 'Advanced monitoring and control systems for remote project oversight.',
    features: [
      'Real-time monitoring',
      'Digital dashboards',
      'Progress tracking',
      'Quality assurance',
      'Remote supervision',
      'Data analytics'
    ]
  },
  {
    icon: 'heroicons:building-office',
    title: 'Development Management',
    shortDescription: 'Comprehensive development management for large-scale projects.',
    features: [
      'Strategic planning',
      'Feasibility studies',
      'Regulatory compliance',
      'Stakeholder management',
      'Financial planning',
      'Risk mitigation'
    ]
  },
  {
    icon: 'heroicons:paint-brush',
    title: 'Interior Design',
    shortDescription: 'Creative interior design solutions that enhance functionality and aesthetics.',
    features: [
      'Space planning',
      'Color schemes',
      'Furniture selection',
      'Lighting design',
      'Material specification',
      '3D renderings'
    ]
  },
  {
    icon: 'heroicons:document-magnifying-glass',
    title: 'Feasibility Studies',
    shortDescription: 'Comprehensive analysis and evaluation of project viability.',
    features: [
      'Market analysis',
      'Financial assessment',
      'Technical evaluation',
      'Risk analysis',
      'Regulatory review',
      'Recommendations'
    ]
  }
]
