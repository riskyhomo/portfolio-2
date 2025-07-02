import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FloatingAtoms } from './FloatingAtoms';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'education', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      const scrollY = window.scrollY;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  const projects = [
    {
      title: "Material Discovery using GANs & VAEs",
      description: "Generated stable materials inspired by GNoME using deep generative models.",
      tools: "Python, PyTorch, NumPy",
      github: "https://github.com/riskyhomo",
      category: "Materials & Metallurgy"
    },
    {
      title: "Steel Defect Detection – ResUNet-a",
      description: "Built advanced defect detection model on 12,568 Severstal images.",
      tools: "TensorFlow, Computer Vision",
      github: "https://github.com/riskyhomo",
      category: "Materials & Metallurgy"
    },
    {
      title: "UPI Transaction Dashboard",
      description: "Comprehensive trend visualization with KPIs and financial metrics.",
      tools: "Tableau, Excel, Analytics",
      github: "https://github.com/riskyhomo",
      category: "Data Science"
    },
    {
      title: "Image Retrieval with CLIP",
      description: "Semantic image search system using vector similarity and modern ML.",
      tools: "CLIP, VectorDB, Firestore",
      github: "https://github.com/riskyhomo",
      category: "Software Projects"
    },
    {
      title: "Hostel Management System",
      description: "Centralized hostel administration system with full CRUD operations.",
      tools: "Java, MySQL, Backend",
      github: "https://github.com/riskyhomo",
      category: "Software Projects"
    }
  ];

  const skills = {
    "Languages": ["Python", "C++", "SQL", "JavaScript"],
    "Tools": ["Git", "Jupyter", "Hugging Face", "Flask"],
    "ML/AI": ["PyTorch", "TensorFlow", "CatBoost", "PyCaret"],
    "Databases": ["MySQL", "Firestore", "BigQuery"],
    "Visualization": ["Tableau", "Origin Pro", "VMD", "OVITO"],
    "Interests": ["Computational Metallurgy", "AI for Science"]
  };

  const GitHubIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  const EmailIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819L11.18 14.71c-.316-.266-.784-.266-1.1 0L2.727 20.002H2.456c-.904 0-1.636-.732-1.636-1.636V5.457c0-.904.732-1.636 1.636-1.636h19.908c.904 0 1.636.732 1.636 1.636zm-1.636-1.636H1.636L12 14.71l10.364-10.889z"/>
    </svg>
  );

  return (
    <div className="min-h-screen scientific-grid">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link geometric-font text-sm font-medium ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-4xl">
          <div className="glow-primary rounded-2xl p-8 mb-8">
            <h1 className="pixel-font text-5xl md:text-7xl mb-6 text-primary">
              Akkaldevi Saivinayak
            </h1>
            <p className="geometric-font text-xl md:text-2xl mb-8 text-accent">
              AI-Driven Material Scientist | Data-Centric Developer | Future-Ready Engineer
            </p>
            <p className="geometric-font text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
              4th-year B.Tech student at NIT Warangal passionate about computational metallurgy, 
              machine learning, and material discovery.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/riskyhomo" className="retro-button rounded-lg flex items-center space-x-2">
                <GitHubIcon />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/vinayak121/" className="retro-button rounded-lg flex items-center space-x-2">
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:akkaldevisaivinayak@gmail.com" className="retro-button rounded-lg flex items-center space-x-2">
                <EmailIcon />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="pixel-font text-4xl mb-12 text-center text-primary">🎓 Education</h2>
          <div className="space-y-6">
            <Card className="portfolio-card glow-accent">
              <CardHeader>
                <CardTitle className="pixel-font text-2xl text-primary">NIT Warangal</CardTitle>
                <CardDescription className="geometric-font text-lg">B.Tech Metallurgy & Materials Engineering (2021–2025)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="geometric-font text-accent font-semibold">CGPA: 7.42</p>
              </CardContent>
            </Card>
            <Card className="portfolio-card glow-accent">
              <CardHeader>
                <CardTitle className="pixel-font text-2xl text-primary">Pothani Rajesh Bhoomaiah Memorial College</CardTitle>
                <CardDescription className="geometric-font text-lg">Intermediate (2019–2021)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="geometric-font text-accent font-semibold">CGPA: 93.8%</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="pixel-font text-4xl mb-12 text-center text-primary">💼 Experience</h2>
          <div className="space-y-8">
            <Card className="portfolio-card glow-primary">
              <CardHeader>
                <CardTitle className="pixel-font text-2xl text-primary">IIT Dharwad – Research Intern</CardTitle>
                <CardDescription className="geometric-font text-lg">May–July 2024</CardDescription>
              </CardHeader>
              <CardContent className="geometric-font">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Simulated droplet–surface interactions using LAMMPS (Hautman–Klein)</li>
                  <li>Visualized with VMD and OVITO</li>
                  <li>Focus: Self-cleaning coatings</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="portfolio-card glow-primary">
              <CardHeader>
                <CardTitle className="pixel-font text-2xl text-primary">BARC – Project Trainee</CardTitle>
                <CardDescription className="geometric-font text-lg">April–July 2025</CardDescription>
              </CardHeader>
              <CardContent className="geometric-font">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>High-temp strain-rate tests on Zr-alloys</li>
                  <li>EBSD microstructure analysis</li>
                  <li>Developed ML models (CatBoost + SHAP) to predict embrittlement</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="portfolio-card glow-primary">
              <CardHeader>
                <CardTitle className="pixel-font text-2xl text-primary">IISc Bengaluru – Project Intern</CardTitle>
                <CardDescription className="geometric-font text-lg">July–Aug 2022</CardDescription>
              </CardHeader>
              <CardContent className="geometric-font">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Built ML automation tools with Flask</li>
                  <li>Integrated UI for end-to-end ML deployment</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="pixel-font text-4xl mb-12 text-center text-primary">🚀 Projects</h2>
          <div className="pinterest-grid">
            {projects.map((project, index) => (
              <Card key={index} className="portfolio-card glow-accent">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="pixel-font text-xl text-primary">{project.title}</CardTitle>
                    <a href={project.github} className="text-accent hover:text-primary transition-colors">
                      <GitHubIcon />
                    </a>
                  </div>
                  <CardDescription className="geometric-font text-sm text-accent font-semibold">
                    {project.category}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="geometric-font text-muted-foreground mb-4">{project.description}</p>
                  <p className="geometric-font text-sm text-accent font-semibold">
                    Tools: {project.tools}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="pixel-font text-4xl mb-12 text-center text-primary">🛠️ Skills & Tech Stack</h2>
          <div className="pinterest-grid">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="portfolio-card glow-primary">
                <CardHeader>
                  <CardTitle className="pixel-font text-xl text-primary">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, index) => (
                      <span key={index} className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm geometric-font font-semibold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="pixel-font text-4xl mb-12 text-center text-primary">🏆 Achievements</h2>
          <div className="space-y-6">
            <Card className="portfolio-card glow-accent">
              <CardContent className="pt-6">
                <p className="geometric-font text-lg text-center text-muted-foreground">
                  <span className="text-primary font-bold">AIR 322</span> – GATE MT 2025
                </p>
              </CardContent>
            </Card>
            <Card className="portfolio-card glow-accent">
              <CardContent className="pt-6">
                <p className="geometric-font text-lg text-center text-muted-foreground">
                  <span className="text-primary font-bold">Kaggle Global Rank 493</span> (2023)
                </p>
              </CardContent>
            </Card>
            <Card className="portfolio-card glow-accent">
              <CardContent className="pt-6">
                <p className="geometric-font text-lg text-center text-muted-foreground">
                  <span className="text-primary font-bold">INSPIRE Awardee</span> (2019)
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12">
            <h3 className="pixel-font text-2xl mb-6 text-center text-primary">🧠 Positions of Responsibility</h3>
            <div className="space-y-4">
              <Card className="portfolio-card glow-primary">
                <CardContent className="pt-6">
                  <p className="geometric-font text-lg text-center text-muted-foreground">
                    <span className="text-primary font-bold">Additional Secretary</span> – EA & HAM Club (2025–Present)
                  </p>
                </CardContent>
              </Card>
              <Card className="portfolio-card glow-primary">
                <CardContent className="pt-6">
                  <p className="geometric-font text-lg text-center text-muted-foreground">
                    <span className="text-primary font-bold">NSS Executive</span> – NIT Warangal (2023–2024)
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="pixel-font text-4xl mb-12 text-center text-primary">📫 Contact</h2>
          <Card className="portfolio-card glow-primary">
            <CardHeader>
              <CardTitle className="pixel-font text-2xl text-center text-primary">Let's Connect!</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center space-y-4">
                  <p className="geometric-font text-lg text-muted-foreground">
                    <span className="text-primary font-bold">Email:</span> akkaldevisaivinayak@gmail.com
                  </p>
                  <div className="flex justify-center space-x-6">
                    <a href="https://github.com/riskyhomo" className="retro-button rounded-lg flex items-center space-x-2">
                      <GitHubIcon />
                      <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/vinayak121/" className="retro-button rounded-lg flex items-center space-x-2">
                      <LinkedInIcon />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
                
                <div className="mt-8">
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg geometric-font focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg geometric-font focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg geometric-font focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <Button className="retro-button w-full rounded-lg">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Floating Atoms Footer */}
      <FloatingAtoms />
    </div>
  );
};

export default Portfolio;