import React, { useState, useEffect } from 'react';

const PortfolioWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">Portfolio</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-foreground transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-foreground opacity-100 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-foreground transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left py-2 font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <img
                src="https://placeholder-image-service.onrender.com/image/200x200?prompt=Professional%20headshot%20of%20a%20software%20developer%20with%20friendly%20smile%20and%20clean%20background&id=hero-profile-01"
                alt="Professional headshot of a software developer with friendly smile and clean background"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-primary shadow-lg"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Hi, I'm <span className="text-primary">Alex Johnson</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Full Stack Developer & UI/UX Designer
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              I create beautiful, functional web applications that deliver exceptional user experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://placeholder-image-service.onrender.com/image/500x400?prompt=Developer%20working%20on%20laptop%20in%20modern%20office%20with%20plants%20and%20natural%20lighting&id=about-section-01"
                alt="Developer working on laptop in modern office with plants and natural lighting"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Passionate about creating digital experiences</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over 5 years of experience in web development, I specialize in creating modern, responsive websites
                and applications that not only look great but also provide seamless user experiences.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                My expertise spans both frontend and backend technologies, allowing me to deliver complete solutions
                from concept to deployment. I'm always excited to take on new challenges and learn cutting-edge technologies.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-background rounded-lg border border-border">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border border-border">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Exp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Frontend',
                skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
                color: 'text-blue-600'
              },
              {
                title: 'Backend',
                skills: ['Node.js', 'Python', 'Express', 'PostgreSQL', 'MongoDB'],
                color: 'text-green-600'
              },
              {
                title: 'Design',
                skills: ['Figma', 'Adobe XD', 'UI/UX Design', 'Prototyping', 'Wireframing'],
                color: 'text-purple-600'
              },
              {
                title: 'Tools',
                skills: ['Git', 'Docker', 'AWS', 'VS Code', 'Jest'],
                color: 'text-orange-600'
              }
            ].map((category, index) => (
              <div key={index} className="bg-muted/50 p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full ${category.color} mr-3`}></div>
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-background rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow">
              <img
                src="https://placeholder-image-service.onrender.com/image/400x250?prompt=E-commerce%20website%20dashboard%20with%20product%20cards%2C%20shopping%20cart%2C%20and%20clean%20modern%20design&id=project-ecommerce-01"
                alt="E-commerce website dashboard with product cards, shopping cart, and clean modern design"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">E-Commerce Platform</h3>
                <p className="text-muted-foreground mb-4">
                  A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">React</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Node.js</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">MongoDB</span>
                </div>
                <div className="flex space-x-4">
                  <button className="text-sm text-primary hover:underline">Live Demo</button>
                  <button className="text-sm text-primary hover:underline">Code</button>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-background rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow">
              <img
                src="https://placeholder-image-service.onrender.com/image/400x250?prompt=Task%20management%20application%20with%20kanban%20board%2C%20drag%20and%20drop%20interface%2C%20and%20team%20collaboration%20features&id=project-taskmanager-01"
                alt="Task management application with kanban board, drag and drop interface, and team collaboration features"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Task Management App</h3>
                <p className="text-muted-foreground mb-4">
                  Collaborative project management tool with real-time updates, file sharing, and team communication.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Vue.js</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Firebase</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Tailwind</span>
                </div>
                <div className="flex space-x-4">
                  <button className="text-sm text-primary hover:underline">Live Demo</button>
                  <button className="text-sm text-primary hover:underline">Code</button>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-background rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow">
              <img
                src="https://placeholder-image-service.onrender.com/image/400x250?prompt=Weather%20application%20interface%20showing%20current%20conditions%2C%20forecast%20charts%2C%20and%20location%20search%20functionality&id=project-weather-01"
                alt="Weather application interface showing current conditions, forecast charts, and location search functionality"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Weather Dashboard</h3>
                <p className="text-muted-foreground mb-4">
                  Real-time weather application with location-based forecasts, interactive maps, and weather alerts.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Next.js</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">OpenWeather</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Chart.js</span>
                </div>
                <div className="flex space-x-4">
                  <button className="text-sm text-primary hover:underline">Live Demo</button>
                  <button className="text-sm text-primary hover:underline">Code</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="text-center p-6 bg-muted/50 rounded-lg border border-border">
                <div className="text-2xl mb-2 text-primary">Email</div>
                <div className="text-muted-foreground">alex@example.com</div>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg border border-border">
                <div className="text-2xl mb-2 text-primary">Location</div>
                <div className="text-muted-foreground">San Francisco, CA</div>
              </div>
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            {['LinkedIn', 'GitHub', 'Twitter', 'Dribbble'].map((social) => (
              <button
                key={social}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {social}
              </button>
            ))}
          </div>
          <p className="text-muted-foreground">
            © 2024 Alex Johnson. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;
