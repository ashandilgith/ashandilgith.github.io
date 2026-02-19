const CONFIG = {
  github: {
    username: 'ashandilgith', // Your GitHub org/user name.
  },
  base: '/',
  projects: {
    github: {
      display: true, 
      header: 'GitHub Repositories',
      mode: 'automatic', 
      automatic: {
        sortBy: 'updated', 
        limit: 8, 
        exclude: {
          forks: true, 
          projects: [], 
        },
      },
      manual: {
        projects: [], 
      },
    },
    external: {
      header: '',
      projects: [], 
    },
  },
  seo: { title: 'Ashan - Machine Learning Engineer', description: 'Portfolio of Ashan, Machine Learning Engineer', imageURL: '' },
  social: {
    linkedin: '', 
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', 
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', 
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: '', 
  },
  resume: {
    fileUrl: '', 
  },
  skills: [
    'Python',
    'TensorFlow',
    'MLflow',
    'IBM RAG',
    'GitHub Actions',
    'CI/CD',
    'Time Series Analysis',
    'Audio Processing',
    'Git',
  ],
  experiences: [
    {
      company: 'Consultiquo',
      position: 'Machine Learning Engineer (Incoming / Applying)', 
      from: 'Present',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Various Agencies',
      position: 'Advertising & Digital Marketing Professional',
      from: '~2005', 
      to: '2025',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'TensorFlow Developer Certificate',
      body: 'DeepLearning.AI',
      year: '',
      link: '',
    },
    {
      name: 'MLOps Certification',
      body: '',
      year: '',
      link: '',
    },
    {
      name: 'RAG Certification',
      body: 'IBM',
      year: '',
      link: '',
    },
    {
      name: 'LLMOps Certification',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'IIC University of Technology, Cambodia (via ICBM Institute)',
      degree: 'BSc in Information Technology',
      from: '2025',
      to: 'Expected Dec 2026', // Updated end date
    },
    {
      institution: 'Asia University Malaysia', // Update with your actual institution if needed
      degree: 'Executive MSc in Digital Marketing',
      from: '',
      to: '',
    },
  ],
  publications: [], 
  blog: {
    source: '', 
    username: '', 
    limit: 2, 
  },
  googleAnalytics: {
    id: '', 
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'lofi',
      'black',
      'business',
    ],
  },
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
