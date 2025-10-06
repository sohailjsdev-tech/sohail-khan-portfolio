const About = () => {
  const skills = [
    { name: 'React', level: 50, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 50, color: 'bg-yellow-500' },
    { name: 'HTML/CSS', level: 70, color: 'bg-orange-500' },
    { name: 'Tailwind CSS', level: 70, color: 'bg-cyan-500' },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate frontend developer with a love for creating beautiful, functional, and user-friendly web experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Story */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I started my journey in web development with a curiosity about how websites work. 
                What began as a hobby quickly turned into a passion for creating digital experiences 
                that make a difference.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Over the years, I've honed my skills in modern frontend technologies, always staying 
                up-to-date with the latest trends and best practices. I believe in writing clean, 
                maintainable code and creating interfaces that users love.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                When I'm not coding, you can find me exploring new technologies.
              </p>
            </div>

            {/* Experience Timeline */}
            
          </div>

          {/* Right Column - Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Skills & Technologies
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
