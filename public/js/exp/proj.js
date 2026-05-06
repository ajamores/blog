export const projects = [
    {
        id: 1,
        title: 'Personal Blog & Content Management System',
        description: 'A full-stack blog platform I built from scratch to write about what I\'m building, learning, and anything else on my mind.',
        tech: ['JavaScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind'],
        bullets: [
            'JWT auth with httpOnly cookies and rate limiting',
            'Editor.js rich text editor with custom blocks',
            'MVC architecture with clean separation of concerns',
            'Custom admin dashboard for creating and managing posts',
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
        tech: ['Python', 'YOLOv11', 'AI', 'Computer Vision', 'Machine Learning'],
        bullets: [
            'Built and managed the training dataset using a specialized annotation tool — labeling every plane in 1000+ images so the model knew what to look for',
            'Upgraded from basic object detection to instance segmentation, improving on what the previous group built',
            'Achieved roughly 20% gains in mAP50, precision and recall',
        ],
        image: '/images/blogpic.png',
        alt: 'Home page of blog,',
        github: 'https://github.com/coopscoop/AircraftIdentification',
        live: null,
        side: 'left'
    },
]