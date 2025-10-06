import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    // React Projects
    {
      id: 1,
      title: 'Posts Management CRUD',
      description: 'A comprehensive posts management application built with React and Tailwind CSS. Features full CRUD operations using JSON Placeholder API, with create, read, update, and delete functionality for blog posts.',
      image: 'https://media.licdn.com/dms/image/v2/D4D12AQF-mvpb7_L9rA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1655907856657?e=2147483647&v=beta&t=z2DfyyPZ0dbgxBxUJUd4TCmdLqYGwviBNNWhnoXDG50',
      technologies: ['React', 'JSON Placeholder API', 'Tailwind CSS', 'CRUD Operations'],
      github: 'https://github.com/sohailjsdev-tech/posts-management-react',
      featured: true,
      category: 'react',
    },
    {
      id: 2,
      title: 'Vehicle Management System',
      description: 'A complete vehicle management application with authentication system and full CRUD functionality. Built with React and Tailwind CSS, featuring vehicle management capabilities.',
      image: 'https://www.notion.com/_next/image?url=https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fpublic.notion-static.com%2Ftemplate%2F09b371ff-2a32-4a41-89c1-59896aad897d%2F1724426298729%2Fdesktop.jpg&w=3840&q=75',
      technologies: ['React', 'Authentication', 'Tailwind CSS', 'CRUD Operations'],
      github: 'https://github.com/sohailjsdev-tech/vehicle-management-react',
      featured: true,
      category: 'react',
    },
    {
      id: 3,
      title: 'E-commerce Template',
      description: 'A modern and responsive e-commerce website template designed with React and Tailwind CSS. Features product catalog, shopping cart, checkout process, and responsive design for all devices.',
      image: 'https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg',
      technologies: ['React', 'Tailwind CSS', 'Responsive Design', 'E-commerce UI'],
      github: 'https://github.com/sohailjsdev-tech/e-commerce-template-react',
      featured: true,
      category: 'react',
    },
    // JavaScript Projects
    {
      id: 4,
      title: 'Tic Tac Toe Game',
      description: 'A classic two-player game built with vanilla JavaScript. Features interactive game board, win detection, and score tracking. Perfect for demonstrating DOM manipulation and game logic.',
      image: 'https://play-lh.googleusercontent.com/zPxLgj5nvl20ahJV7aFC6S5mD8kii5CEEDj25j1P9CYAfXL9sdDuO-8eES0r4DhJHrU',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'DOM Manipulation'],
      github: 'https://github.com/sohailjsdev-tech/tic-tac-teo-game',
      featured: false,
      category: 'javascript',
    },
    {
      id: 5,
      title: 'Todo App',
      description: 'A full-featured task management application with localStorage persistence. Users can add, delete, and mark tasks as complete. Data persists between browser sessions for seamless experience.',
      image: 'https://foolishdeveloper.com/wp-content/uploads/2021/11/todo-list-javascript.jpg',
      technologies: ['JavaScript', 'LocalStorage', 'CSS3', 'DOM Events'],
      github: 'https://github.com/sohailjsdev-tech/todo-app',
      featured: false,
      category: 'javascript',
    },
    {
      id: 6,
      title: 'Typing Master',
      description: 'A speed typing game where users type random words within 10 seconds. Features word generation, timer countdown, and performance tracking to improve typing skills.',
      image: 'https://cdn.mos.cms.futurecdn.net/3kQCtpnfHoUq5cBsLqKTFk-1200-80.jpg',
      technologies: ['JavaScript', 'Timer API', 'Math.random()', 'Event Handling'],
      github: 'https://github.com/sohailjsdev-tech/typing-master',
      featured: false,
      category: 'javascript',
    },
    {
      id: 7,
      title: 'Quiz App',
      description: 'An interactive quiz application with multiple-choice questions. Tracks correct and wrong answers, displays final results, and provides immediate feedback for better learning.',
      image: 'https://img.freepik.com/premium-vector/quiz-logo-with-speech-bubble-icon_149152-811.jpg',
      technologies: ['JavaScript', 'JSON', 'DOM Events', 'Score Tracking'],
      github: 'https://github.com/sohailjsdev-tech/quiz-app',
      featured: false,
      category: 'javascript',
    },
    {
      id: 8,
      title: 'Music Player',
      description: 'A feature-rich music player with playlist management, play/pause controls, and audio visualization. Supports multiple audio formats and provides an intuitive user interface.',
      image: 'https://aboutmurals.ca/wp-content/uploads/2017/10/Musical-Wall-Mural-About-Murals.jpg',
      technologies: ['JavaScript', 'HTML5 Audio', 'CSS3', 'Playlist Management'],
      github: 'https://github.com/sohailjsdev-tech/music-app',
      featured: false,
      category: 'javascript',
    },
    {
      id: 9,
      title: 'Notepad App',
      description: 'A digital notepad application with localStorage integration. Users can create, edit, and delete notes with automatic saving. Clean interface for efficient note-taking.',
      image: 'https://media.sciencephoto.com/image/f0270799/800wm',
      technologies: ['JavaScript', 'LocalStorage', 'CRUD Operations', 'Text Editor'],
      github: 'https://github.com/sohailjsdev-tech/note-pade-app',
      featured: false,
      category: 'javascript',
    },
    {
      id: 10,
      title: 'Kids Math App',
      description: 'An educational math application designed for children to practice basic arithmetic. Features addition, subtraction, and multiplication problems with colorful UI, instant feedback, and progress tracking to make learning fun and engaging.',
      image: 'https://t3.ftcdn.net/jpg/01/34/55/32/360_F_134553262_ZvMReHZjOt1IieyFiaYHLuH0kgxDpwFE.jpg',
      technologies: ['JavaScript', 'Math Operations', 'Child-friendly UI', 'Progress Tracking'],
      github: 'https://github.com/sohailjsdev-tech/kids-math',
      featured: false,
      category: 'javascript',
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'javascript', label: 'JavaScript Projects', count: projects.filter(p => p.category === 'javascript').length },
    { key: 'react', label: 'React Projects', count: projects.filter(p => p.category === 'react').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Here are some of my recent projects that showcase my skills and passion for web development.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter.key
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>

      

        {/* All Projects Grid */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            {activeFilter === 'all' ? 'All Projects' : 
             activeFilter === 'react' ? 'React Projects' : 'JavaScript Projects'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.category === 'react' 
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                        : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                    }`}>
                      {project.category === 'react' ? '⚛️ React' : '🟨 JavaScript'}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-3 items-center">
                    <a
                      target="_blank"
                      href={project.github}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 flex space-x-3 items-center"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-400 font-medium text-sm">Source Code</span>
                    </a>
                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
