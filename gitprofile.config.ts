const CONFIG = {
  github: {
    username: 'ashandilgith', 
  },
  base: '/',
  projects: {
    github: {
      display: true, 
      header: 'Public Machine Learning Repositories',
      mode: 'manual', 
      automatic: {
        sortBy: 'updated', 
        limit: 8, 
        exclude: {
          forks: true, 
          projects: [], 
        },
      },
      manual: {
        // Explicitly pulling your best public ML/Python repos
        projects: [
          'ashandilgith/engine_vibration',
          'ashandilgith/migraine_prediction',
          'ashandilgith/predictivemaintenance-',
          'ashandilgith/fetal_health',
          'ashandilgith/brainstroke_prediction',
          'ashandilgith/chestcancerdetect',
          'ashandilgith/whalesightings',
          'ashandilgith/bikerental'
        ], 
      },
    },
    external: {
      header: 'Proprietary & Private ML Models',
      projects: [
        {
          title: 'Deep Learning Acoustics',
          description:
            'A private diagnostic pipeline utilizing audio spectrogram analysis and machine learning to classify engine faults from sound data.',
          imageUrl:
            'https://img.freepik.com/free-vector/gradient-ai-logo-template_23-2150330656.jpg', 
          link: 'https://github.com/ashandilgith', // Safe fallback link prevents the blank white page error
        },
        {
          title: 'Engine Vibrations ML on Cloud',
          description:
            'A private predictive maintenance model forecasting mechanical failures on marine engines using time-series data analysis and lagging features.',
          imageUrl:
            'https://img.freepik.com/free-vector/gradient-ai-logo-template_23-2150330656.jpg',
          link: 'https://github.com/ashandilgith',
        },
        {
          title: 'Arisi Rice Disease Classification',
          description:
            'A private computer vision classification model built to accurately detect and categorize various rice plant diseases from image data.',
          imageUrl:
            'https://img.freepik.com/free-vector/gradient-ai-logo-template_23-2150330656.jpg',
          link: 'https://github.com/ashandilgith',
        },
        {
          title: 'Text Summarizer Pipeline',
          description:
            'A proprietary natural language processing pipeline built in Python for automated text summarization.',
          imageUrl:
            'https://img.freepik.com/free-vector/gradient-ai-logo-template_23-2150330656.jpg',
          link: 'https://github.com/ashandilgith',
        }
      ],
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
      institution: 'IIC University of Technology, Cambodia',
      degree: 'BSc in Information Technology',
      from: '2025',
      to: 'Expected Dec 2026', 
    },
    {
      institution: 'Asia eUniversity, Malaysia', 
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
