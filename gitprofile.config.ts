// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'justraven', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['justraven/LaTeX-Resume', 'justraven/justraven'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Fleet Management System',
          description:
            '',
          imageUrl:
            '',
          link: '',
        },
        {
          title: 'Data Center Monitoring',
          description:
            '',
          imageUrl:
            '',
          link: '',
        },
        {
          title: 'Green House Monitoring System',
          description:
            'Developed and implemented an Internet of Things (IoT) system specifically designed for monitoring and controlling greenhouse environments. This solution incorporates environmental sensors, actuators, and communication technologies to form a comprehensive platform that optimizes greenhouse conditions. By acquiring real-time data, our system continuously gathers information on essential environmental variables such as temperature, humidity, soil moisture, soil pH, and light levels. Furthermore, it provides remote monitoring and control capabilities, allowing users to access and manage the greenhouse environment from anywhere through an app.',
          imageUrl:
            '',
          link: '',
        },
        {
          title: 'Simple Flight Controller',
          description:
            'Developed a quadrotor flight controller utilizing two ATMega328P microcontroller chips. The first microcontroller is dedicated to the control and stabilization of the quadrotor, managing the essential flight parameters and ensuring stable flight performance. The second ATmega328P chip is specifically tasked with handling communication with a GPS module, facilitating precise navigation and position tracking. The flight controller PCB is developed using KiCAD utilizing single layer configuration. The goal of the project is to make a simple and affordable flight controller to use for studying quadrotor movement control.',
          imageUrl:
            '',
          link: '',
        },
        {
          title: 'BroilerX Ambient',
          description:
            '',
          imageUrl:
            '',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Alim Satria',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'alimsatria',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'alimsatria45@outlook.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PCB Design',
    'Embedded Hardware Design',
    'Electronics',
    'Hardware Programming',
    'CAD',
    'IoT Hardware',
  ],
  experiences: [
    {
      company: 'Synapsis ID',
      position: 'Electronics Engineer',
      from: 'February 2024',
      to: 'Present',
      companyLink: 'https://synapsis.id',
    },
    {
      company: 'BroilerX',
      position: 'Hardware Engineer',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://broilerx.com/en',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Universitas Gadjah Mada',
      degree: 'Bachelor of Applied Engineering',
      from: '2023',
      to: '2021',
    },
    {
      institution: 'Universitas Gadjah Mada',
      degree: 'Diploma',
      from: '2017',
      to: '2021',
    },
  ],
  publications: [
    {
      title: 'Sistem Monitoring Kualitas Udara Dan Suhu Dengan Internet Of Things Untuk Produksi Ayam Broiler',
      conferenceName: 'Seminar Nasional Perkumpulan Masyarakat Ilmu Perunggasan Indonesia',
      journalName: '',
      authors: 'Galuh Adi Insani, Nadhif Rahmawansyah, Alim Satria, and Muchamad Aldi Rohmawan',
      link: 'https://wpsaindonesia.id/publication/research_detail/penelitian-3',
      description: 'Penelitian ini mengevaluasi akurasi sensor IoT BroilerX dalam memantau kondisi lingkungan kandang ayam broiler di Fakultas Peternakan Universitas Gadjah Mada. Tujuan utama adalah menguji akurasi berbagai versi BroilerX (ambient 1.2 dan ambient 1.3) dalam mengukur suhu dan kadar ammonia di kandang. Hasil penelitian menunjukkan bahwa BroilerX ambient 1.2 lebih akurat dalam mengukur suhu dengan selisih data 1,23 ± 0,81 dibandingkan BroilerX ambient 1.3 yang memiliki selisih 1,76 ± 1,45. Sebaliknya, BroilerX ambient 1.3 lebih akurat dalam mengukur kadar ammonia dengan selisih data 1,02 ± 0,52 dibandingkan BroilerX ambient 1.2 yang memiliki selisih 25,23 ± 7,03. Penelitian ini menekankan perlunya pengembangan lebih lanjut untuk meningkatkan akurasi sensor pada versi BroilerX berikutnya.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'light',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
