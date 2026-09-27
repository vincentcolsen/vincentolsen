import avatar from '@/assets/vincent-olsen.webp'

export const profile = {
  name: 'Vincent C. Olsen',
  title: 'Senior Platform Engineer',
  avatar,
  avatarAlt: 'Photo of Vincent C. Olsen',
}

export const about = {
  title: 'About',
  description: 'Hello, I\'m Vincent. I enjoy building projects from start to finish, exploring every aspect of an application. From creating the frontend, programming the backend, to setting up the platform and infrastructure. And of course, I think about security at every step. Some may call this DevSecOps.',
}

export const jobs = [
  {
    period: '2026 - present',
    title: 'Senior Platform Engineer – Nimtech',
    description: 'Working with cloud platforms, Kubernetes environments and DevSecOps practices across client projects. Focus on building scalable and secure platform solutions using Kubernetes, Azure and modern CI/CD pipelines.',
    technologies: ['Kubernetes', 'Azure', 'DevSecOps', 'Terraform', 'GitHub Actions'],
  },
  {
    period: '2022 - 2026',
    title: 'Senior Consultant – Netcompany',
    description: 'Platform engineer in Oslo municipality working on the OpenShift platform Marvin. Responsible for operations, development and observability for a platform hosting around 240 applications. Implemented CI/CD pipelines with GitHub Actions, Terraform and ArgoCD and built monitoring solutions using Prometheus, Grafana and Elastic Stack.',
    technologies: ['Kubernetes', 'OpenShift', 'Terraform', 'Ansible', 'ArgoCD', 'GitHub Actions', 'Prometheus', 'Grafana', 'Elastic Stack', 'Spring Boot', 'Vue', 'Python', 'Java'],
  },
  {
    period: 'Summer 2021',
    title: 'Summer Internship | Big Data & Analytics – Orkla',
    description: 'In-house consultant focusing on machine learning, analytics, and data integration. Analyzed a large amount of data using Gradient Boosting to determine what drove the sales of Orkla Health and Care.',
    technologies: ['Azure Synapse', 'Azure Databricks', 'Web-APIs', 'Python', 'PowerBI'],
  },
  {
    period: '2018 - 2022',
    title: 'Service Consultant – Norwegian Information Security Forum',
    description: 'Responsible for the preparation and hosting of member meetings held quarterly and an annual large-scale conference. Assisted the board with various tasks, including supplier and participant coordination, administrative work, order processing, design, and member management.',
    technologies: ['Adobe Illustrator', 'Squarespace'],
  },
  {
    period: '2017 - 2018',
    title: 'System Consultant – Norconsult',
    description: 'Collaborated with the HR department in rolling out the new Workday HR system across the organization. Actively involved in the implementation and integration of the system.',
    technologies: [],
  },
]

export const certifications = {
  summary: 'Kubestronaut: all five CNCF Kubernetes certifications.',
  items: [
    { short: 'CKA', name: 'Certified Kubernetes Administrator' },
    { short: 'CKS', name: 'Certified Kubernetes Security Specialist' },
    { short: 'CKAD', name: 'Certified Kubernetes Application Developer' },
    { short: 'KCSA', name: 'Kubernetes and Cloud Native Security Associate' },
    { short: 'KCNA', name: 'Kubernetes and Cloud Native Associate' },
  ],
}

export const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vincentolsen/', text: '@vincentolsen' },
  { label: 'GitHub', href: 'https://github.com/vincent-olsen/', text: '@vincent-olsen' },
  { label: 'Credly', href: 'https://www.credly.com/users/vincent-olsen', text: '@vincent-olsen' },
]
