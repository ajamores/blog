export const projects = [
  {
    id: 1,
    title: 'Personal Blog & Content Management System',
    description: 'A full-stack blog platform built from scratch with authentication, rich text editing, dark mode, and a drag-and-drop admin easter egg.',
    tech: ['JavaScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind'],
    bullets: [
      'JWT auth with httpOnly cookies and rate limiting',
      'Editor.js rich text editor with custom blocks',
      'Dark/light mode toggle with Catppuccin theme',
      'Drag-and-drop easter egg for the admin login',
    ],
    image: '/images/blogpic.png',
    alt: 'Home page of blog,',
    github: 'https://github.com/ajamores',
    live: '#',
    side: 'left'
  },
  {
    id: 2,
    title: 'Stock Diary App',
    description: 'Full stack investment tracking application. Record your stock purchases and watch your portfolio performance through various graphs.',
    tech: ['Python', 'Flask', 'JavaScript', 'MySQL', 'Bootstrap', 'Chart.js'],
    bullets: [
      'live stock data pulled and visualized with Chart.js',
      'full CRUD for recording and managing stock purchases',
      'deployed on PythonAnywhere',
    ],
    image: '/images/blogpic.png',
    alt: 'Home page of blog,',
    github: 'https://github.com/ajamores/stockdiary',
    live: 'https://stockdiaryapp.pythonanywhere.com/',
    side: 'right'
  },
  {
    id: 3,
    title: 'WWII Aircraft Identification',
    description: 'An applied research project in partnership with the Canadian Warplane Heritage Museum. Built a computer vision pipeline to identify WWII aircraft using YOLOv11.',
    tech: ['Python', 'YOLOv11', 'Roboflow', 'Machine Learning'],
    bullets: [
      'scraped and annotated 1000+ images by hand',
      'achieved roughly 20% gains in mAP50, precision and recall',
      'presented findings to museum stakeholders',
      'got a field trip to the museum and finally saw the planes in person',
    ],
    image: '/images/blogpic.png',
    alt: 'Home page of blog,',
    github: 'https://github.com/coopscoop/AircraftIdentification',
    live: null,
    side: 'left'
  },
]