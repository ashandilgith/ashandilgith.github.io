const CONFIG = {
  github: {
    username: 'ashandilgith', // Your GitHub org/user name.
  },
  base: '/',
  projects: {
    github: {
      display: true, // This ensures your other repos (whale watching, etc.) are pulled automatically
      header: 'GitHub Repositories',
      mode: 'automatic', 
      automatic: {
        sortBy: 'updated', // Changed to 'updated' so your most recent code always shows first
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
      header: 'Featured Machine Learning Models',
      projects: [
        {
          title: 'TopTrip AI Core',
          description:
            'A diagnostic pipeline utilizing audio spectrogram analysis and machine learning to classify engine faults from sound data.',
          imageUrl:
            'https://img.freepik.com/free-vector/gradient-ai-logo-template_23-2150330656.jpg', 
          link: '',
        },
        {
          title: 'Piranaware Predictive Engine',
          description:
            'A predictive maintenance model forecasting mechanical failures using time-series data analysis and lagging features.',
          imageUrl:
            'https://img.freepik.com/free-vector/gradient-ai-logo-template_23-2150330656.jpg',
          link: '',
        },
        {
          title: 'Eskwela Grader',
          description:
            'An AI-powered educational pipeline designed for automated evaluation and grading of student submissions.',
          imageUrl:
            'https://img.freepik.com/free-vector/gradient-ai-logo-template_23-2150330656.jpg',
          link: '',
        },
        {
          title: 'Arisi CV Classifier',
          description:
            'A computer vision classification model built to accurately detect and categorize various rice plant diseases from image data.',
          imageUrl:
            'https://img.freepik.com/free-vector/gradient-ai-logo-template_23-2150330656.jpg',
          link: '',
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
    'Clojure',
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
      institution: 'IIC University of Technology (via ICBM Institute)',
      degree: 'BSc in Information Technology',
      from: '2023',
      to: 'Present',
    },
    {
      institution: 'Unknown', 
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
