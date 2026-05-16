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
        image: '/images/blogpic.webp',
        video: '/images/blogvid.webm',
        alt: 'Home page of blog',
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
        image: '/images/stockdiarypic.webp',
        video: 'images/stockdiaryvid.webm',
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
            'Ran an experiment testing the model on unseen Halifax Bomber plane footage, successfully identifying the aircraft using our trained dataset',
            'Built and managed the training dataset using a specialized annotation tool — labeling every plane for a 1000+ images',
            'Achieved roughly 20% gains in mAP50, precision and recall over two semesters work',
        ],
        image: '/images/plane1.webp',
        video: 'images/aircraftvid.webm',
        alt: 'Home page of blog,',
        github: 'https://github.com/coopscoop/AircraftIdentification',
        live: null,
        side: 'left'
    },
]