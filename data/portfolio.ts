export interface Project {
  title: string
  category: string
  image: string
  description: string
  contractValue: string
  duration: string
  status: string
}

export const projects: Project[] = [
  {
    title: 'Luxury Residential Complex',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop&auto=format&q=80',
    description: 'Modern luxury residential complex with 50 units, featuring contemporary design and sustainable building practices.',
    contractValue: 'KSh 250M',
    duration: '18 months',
    status: 'Completed'
  },
  {
    title: 'Corporate Office Tower',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&auto=format&q=80',
    description: '15-story corporate office building with state-of-the-art facilities and energy-efficient systems.',
    contractValue: 'KSh 500M',
    duration: '24 months',
    status: 'Completed'
  },
  {
    title: 'Manufacturing Plant',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&auto=format&q=80',
    description: 'Large-scale manufacturing facility with specialized equipment and safety systems.',
    contractValue: 'KSh 800M',
    duration: '30 months',
    status: 'In Progress'
  },
  {
    title: 'Medical Center',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&auto=format&q=80',
    description: 'Comprehensive medical facility with specialized departments and modern equipment.',
    contractValue: 'KSh 350M',
    duration: '20 months',
    status: 'Completed'
  },
  {
    title: 'Shopping Mall',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1555529902-1c7b4b0b0b0b?w=600&h=400&fit=crop&auto=format&q=80',
    description: 'Multi-level shopping complex with retail spaces, restaurants, and entertainment facilities.',
    contractValue: 'KSh 600M',
    duration: '28 months',
    status: 'Completed'
  },
  {
    title: 'Educational Campus',
    category: 'Special Projects',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop&auto=format&q=80',
    description: 'Modern educational campus with classrooms, laboratories, and recreational facilities.',
    contractValue: 'KSh 400M',
    duration: '22 months',
    status: 'Completed'
  },
  {
    title: 'Apartment Complex',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&auto=format&q=80',
    description: 'Affordable housing project with 100 units, focusing on sustainability and community design.',
    contractValue: 'KSh 300M',
    duration: '16 months',
    status: 'Completed'
  },
  {
    title: 'Warehouse Facility',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&auto=format&q=80',
    description: 'Large warehouse and distribution center with advanced logistics systems.',
    contractValue: 'KSh 200M',
    duration: '12 months',
    status: 'Completed'
  },
  {
    title: 'Hospital Extension',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&auto=format&q=80',
    description: 'Hospital expansion project adding new departments and patient care facilities.',
    contractValue: 'KSh 450M',
    duration: '26 months',
    status: 'In Progress'
  }
]

export const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Healthcare', 'Special Projects']
