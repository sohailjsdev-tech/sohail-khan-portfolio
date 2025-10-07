import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const texts = [
    'Frontend Developer',
    'React Developer and Explorer',
    'UI/UX Enthusiast',
    'Problem Solver',
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[textIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        
        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      } else {
        setCurrentText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        
        if (charIndex === current.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium mb-4 lg:mt-0 mt-4">
                Hello, I'm
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Sohail Khan
              </h1>
              <div className="text-2xl md:text-4xl font-semibold text-primary-600 dark:text-primary-400 mb-6">
                <span className="inline-block min-h-[2.5rem]">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              I create beautiful, responsive, and user-friendly web applications using modern technologies. 
              Passionate about clean code and exceptional user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                target="_blank"
                href="https://github.com/sohailjsdev-tech"
                className="btn-primary inline-flex items-center justify-center px-6 py-3"
              >
                View My Work
                
              </a>
              <a
                href="#contact"
                className="btn-secondary inline-flex items-center justify-center px-6 py-3"
              >
                Get In Touch
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-20 animate-pulse"></div>
              
              {/* Main circle */}
              <div className="relative w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <img src={"https://avatars.githubusercontent.com/u/235371227?v=4"} alt="Sohail Khan" className="w-full h-full object-cover rounded-full" />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl animate-bounce">
                ⚛️
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-xl animate-bounce" style={{ animationDelay: '0.5s' }}>
                🎨
              </div>
              <div className="absolute top-1/2 -left-8 w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center text-lg animate-bounce" style={{ animationDelay: '1s' }}>
                🚀
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
