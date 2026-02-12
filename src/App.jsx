import React, { useState, useEffect } from 'react';

import profileImg from './assets/profile.webp';
import petShopImg from './assets/pet-shop.webp';
import sltTireImg from './assets/slt-tire.webp';
import ayurvedaImg from './assets/ayurveda.webp';
import carRentalImg from './assets/car-rental.webp';
import virtualFittingImg from './assets/virtual-fitting.webp';
import workConnectImg from './assets/workconnect.webp'; 

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Chat State
  const [chatMessages, setChatMessages] = useState([
    { role: 'bot', text: 'Hi! Kohomada? Senal gana ona deyak ahanna.' }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Tools State
  const [convertingImg, setConvertingImg] = useState(false);
  const [convertingPdf, setConvertingPdf] = useState(false);

  // Dark Mode Logic
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // --- Personal Data ---
  const personalInfo = {
    name: "Senal Ridmila",
    title: "BSc (Hons) in Network and Mobile Computing Undergraduate",
    email: "senalridmila2@gmail.com",
    phones: ["+94 77 130 4930", "+94 78 130 4930"],
    linkedin: "https://www.linkedin.com/in/senal-ridmila-98b996292",
    github: "https://github.com/SenalRidmila",
    facebook: "https://www.facebook.com/share/1DJRPP89oN/?mibextid=wwXIfr",
  };

  // --- Projects Data ---
  const projects = [
    { 
      title: "WorkConnect Job Marketplace", 
      tech: "MERN Stack, AWS EC2, Docker, Socket.io", 
      desc: "Built and deployed a MERN stack job marketplace on AWS EC2 using Docker, featuring real-time chat (Socket.io) and production-level security configurations.", 
      image: workConnectImg, 
      github: "https://github.com/SenalRidmila/workconnect-lk", 
      live: "http://51.20.95.56.nip.io:5173/" 
    },
    { 
      title: "Pet Toy Shop", 
      tech: "Spring Boot, React, MongoDB, Docker", 
      desc: "A robust full-stack e-commerce platform with DevOps integration and CI/CD pipelines.", 
      image: petShopImg, 
      github: "https://github.com/SenalRidmila/pet-toy-shop-devops", 
      live: null 
    },
    { 
      title: "Ayurveda Wellness App", 
      tech: "React Native, Firebase, Expo", 
      desc: "Mobile app connecting patients with Ayurvedic doctors, featuring AI symptom checkers.", 
      image: ayurvedaImg, 
      github: "https://github.com/SenalRidmila/ayurveda-wellness", 
      live: null 
    },
    { 
      title: "SLT Tire Management", 
      tech: "React, Spring Boot, Docker", 
      desc: "Interactive tire request system with a Java-powered backend managing request handling.", 
      image: sltTireImg, 
      github: null, 
      live: "https://tire-slt.vercel.app/login" 
    },
    { 
      title: "Car Rental System", 
      tech: "Java Swing, MySQL, JDBC", 
      desc: "MVC architecture system for managing car rentals, user login, and customer management.", 
      image: carRentalImg, 
      github: "https://github.com/SenalRidmila/Car-Rental-Management-System", 
      live: null 
    },
    { 
      title: "Virtual Fitting App", 
      tech: "Next.js, Tailwind CSS, TypeScript", 
      desc: "A sleek virtual-fitting app offering real-time UI components and virtual try-on experiences.", 
      image: virtualFittingImg, 
      github: "https://github.com/SenalRidmila/virtual-fitting", 
      live: null 
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // --- Tools Functions ---
  const handleImageToPdf = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setConvertingImg(true);
    
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://my-portfolio-backend-mst1.onrender.com/tools/img-to-pdf", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "converted_image.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        alert("Conversion failed!");
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to server. Is the backend running?");
    }
    setConvertingImg(false);
  };

  const handlePdfToWord = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setConvertingPdf(true);
    
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://my-portfolio-backend-mst1.onrender.com/tools/pdf-to-word", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "converted_doc.docx";
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        alert("Conversion failed!");
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to server. Is the backend running?");
    }
    setConvertingPdf(false);
  };

  // --- Chat Functions ---
  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;
    
    const newMessages = [...chatMessages, { role: 'user', text: chatInput }];
    setChatMessages(newMessages);
    setChatInput("");
    setIsTyping(true);

    try {
      const response = await fetch("https://my-portfolio-backend-mst1.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: chatInput }),
      });
      const data = await response.json();
      setChatMessages([...newMessages, { role: 'bot', text: data.reply }]);
    } catch (error) {
      setChatMessages([...newMessages, { role: 'bot', text: "Sorry, I can't connect to the server right now." }]);
    }
    setIsTyping(false);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${isDarkMode ? 'bg-dark text-white' : 'bg-gray-50 text-gray-900'}`}>
      
      <nav className={`glass-nav ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div onClick={() => scrollToSection('home')} className="text-xl font-bold flex items-center gap-2 cursor-pointer select-none">
            <span className="text-blue-500 text-2xl">⚡</span> <span>Senal.dev</span>
          </div>
          <ul className={`hidden md:flex gap-8 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {['Home', 'About', 'Projects', 'Tools', 'Contact'].map((item) => (
              <li key={item} onClick={() => scrollToSection(item.toLowerCase())} className={`cursor-pointer hover:text-blue-500 transition relative group`}>
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-2 rounded-full shadow-lg transition transform hover:scale-110 ${isDarkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-800'}`}>
              {isDarkMode ? '☀' : '🌙'}
            </button>
            <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? '✕' : '☰'}</button>
          </div>
        </div>
        {isMenuOpen && (
          <div className={`md:hidden p-4 absolute w-full border-b shadow-xl ${isDarkMode ? 'bg-dark border-gray-700' : 'bg-white border-gray-200'}`}>
            <ul className="flex flex-col gap-4 text-center">
              {['Home', 'About', 'Projects', 'Tools', 'Contact'].map((item) => (
                <li key={item} onClick={() => scrollToSection(item.toLowerCase())} className="cursor-pointer hover:text-blue-500 font-medium py-2">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left order-2 md:order-1">
            <h2 className="text-blue-500 font-bold tracking-wide uppercase">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">{personalInfo.name}</h1>
            <h3 className={`text-2xl md:text-3xl font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Full Stack Developer</h3>
            <p className={`text-lg max-w-lg mx-auto md:mx-0 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
               {personalInfo.title} at Horizon Campus. Expert in building scalable web solutions with Java, React, and Cloud Technologies.
            </p>
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <button onClick={() => scrollToSection('tools')} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg">Try My Tools</button>
              <button onClick={() => scrollToSection('contact')} className={`px-8 py-3 rounded-lg font-bold border transition ${isDarkMode ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'}`}>Contact Me</button>
            </div>
          </div>
          <div className="flex justify-center order-1 md:order-2">
             <div className="relative w-72 h-72 md:w-96 md:h-96 group">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img src={profileImg} alt="Senal Ridmila - Full Stack Developer" loading="lazy" className="relative w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-2xl" />
             </div>
          </div>
        </div>
      </section>

      {/* Detailed About Section */}
      <section id="about" className={`py-24 px-6 relative overflow-hidden ${isDarkMode ? 'bg-dark' : 'bg-gray-50'}`}>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 inline-block pb-2">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-2"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`p-8 rounded-3xl border backdrop-blur-sm shadow-xl ${isDarkMode ? 'bg-gray-800/40 border-gray-700' : 'bg-white/60 border-gray-200'}`}>
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Who am I?
              </h3>
              <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I am a <strong>Full Stack Developer</strong> and a final year undergraduate at Horizon Campus, driven by a passion for building scalable and robust web solutions.
              </p>
              <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                My expertise lies in bridging the gap between complex backend logic using <strong>Spring Boot & Java</strong> and creating interactive frontend experiences with <strong>React & Next.js</strong>. I thrive in challenging environments and constantly seek to master new technologies like DevOps and Cloud Computing.
              </p>
              <div className="flex gap-6 mt-8">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-blue-500">5+</span>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Projects Completed</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-purple-500">2+</span>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Years Coding</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className={`text-2xl font-bold mb-4 text-center lg:text-left ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Technical Arsenal
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className={`p-5 rounded-2xl border transition hover:-translate-y-1 ${isDarkMode ? 'bg-gray-800/60 border-gray-700 hover:border-blue-500' : 'bg-white border-gray-200 hover:border-blue-500 shadow-sm'}`}>
                  <div className="text-blue-500 text-xl mb-2">💻 Frontend</div>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'Tailwind', 'React Native'].map(s => (
                      <span key={s} className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-50 text-blue-700'}`}>{s}</span>
                    ))}
                  </div>
                </div>
                <div className={`p-5 rounded-2xl border transition hover:-translate-y-1 ${isDarkMode ? 'bg-gray-800/60 border-gray-700 hover:border-purple-500' : 'bg-white border-gray-200 hover:border-purple-500 shadow-sm'}`}>
                  <div className="text-purple-500 text-xl mb-2">⚙️ Backend</div>
                  <div className="flex flex-wrap gap-2">
                    {['Spring Boot', 'Java', 'Node.js', 'PHP'].map(s => (
                      <span key={s} className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-50 text-purple-700'}`}>{s}</span>
                    ))}
                  </div>
                </div>
                <div className={`p-5 rounded-2xl border transition hover:-translate-y-1 ${isDarkMode ? 'bg-gray-800/60 border-gray-700 hover:border-green-500' : 'bg-white border-gray-200 hover:border-green-500 shadow-sm'}`}>
                  <div className="text-green-500 text-xl mb-2">🗄️ Data & Cloud</div>
                  <div className="flex flex-wrap gap-2">
                    {['MongoDB', 'MySQL', 'Docker', 'Firebase'].map(s => (
                      <span key={s} className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-50 text-green-700'}`}>{s}</span>
                    ))}
                  </div>
                </div>
                <div className={`p-5 rounded-2xl border transition hover:-translate-y-1 ${isDarkMode ? 'bg-gray-800/60 border-gray-700 hover:border-yellow-500' : 'bg-white border-gray-200 hover:border-yellow-500 shadow-sm'}`}>
                  <div className="text-yellow-500 text-xl mb-2">🧠 Soft Skills</div>
                  <div className="flex flex-wrap gap-2">
                    {['Leadership', 'Teamwork', 'Critical Thinking'].map(s => (
                      <span key={s} className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-yellow-900/30 text-yellow-300' : 'bg-yellow-50 text-yellow-700'}`}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center"><span className="border-b-4 border-blue-500 pb-2">Featured Projects</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`group flex flex-col rounded-2xl overflow-hidden transition duration-300 hover:-translate-y-2 border ${isDarkMode ? 'bg-card border-gray-700 hover:border-blue-500' : 'bg-white border-gray-200 hover:border-blue-500 shadow-lg'}`}>
              <div className="h-48 w-full overflow-hidden bg-gray-800 relative">
                {project.image ? (
                  <img src={project.image} alt={`${project.title} - Portfolio Project`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 bg-gray-900">
                    <span className="text-4xl mb-2">📂</span>
                    <span className="text-sm">No Image</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition">{project.title}</h3>
                <p className={`mb-4 text-sm flex-grow leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.split(',').map((tag, i) => (
                      <span key={i} className={`text-xs px-2 py-1 rounded border font-mono ${isDarkMode ? 'bg-gray-800 border-gray-600 text-blue-300' : 'bg-blue-50 border-blue-100 text-blue-600'}`}>
                        {tag.trim()}
                      </span>
                    ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold border transition ${isDarkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'}`}>
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition shadow-md">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className={`py-24 px-6 ${isDarkMode ? 'bg-gray-900' : 'bg-blue-50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🚀 Developer Tools</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-8 rounded-2xl border text-center transition hover:-translate-y-2 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-xl'}`}>
              <div className="text-5xl mb-4">🖼️ ➔ 📄</div>
              <h3 className="text-2xl font-bold mb-2">Image to PDF</h3>
              <p className="text-sm text-gray-500 mb-6">Convert your JPG/PNG images into a PDF document instantly.</p>
              <label className={`block w-full cursor-pointer py-3 rounded-lg border-2 border-dashed ${isDarkMode ? 'border-gray-600 hover:border-blue-500' : 'border-gray-300 hover:border-blue-500'}`}>
                <span className="text-sm font-semibold">{convertingImg ? "Converting..." : "Upload Image"}</span>
                <input type="file" accept="image/*" onChange={handleImageToPdf} className="hidden" disabled={convertingImg} />
              </label>
            </div>
            <div className={`p-8 rounded-2xl border text-center transition hover:-translate-y-2 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-xl'}`}>
              <div className="text-5xl mb-4">📄 ➔ 📝</div>
              <h3 className="text-2xl font-bold mb-2">PDF to Word</h3>
              <p className="text-sm text-gray-500 mb-6">Extract text from PDF and save as editable Word (Docx) file.</p>
              <label className={`block w-full cursor-pointer py-3 rounded-lg border-2 border-dashed ${isDarkMode ? 'border-gray-600 hover:border-blue-500' : 'border-gray-300 hover:border-blue-500'}`}>
                <span className="text-sm font-semibold">{convertingPdf ? "Converting..." : "Upload PDF"}</span>
                <input type="file" accept=".pdf" onChange={handlePdfToWord} className="hidden" disabled={convertingPdf} />
              </label>
            </div>
            <div className={`p-8 rounded-2xl border text-center transition hover:-translate-y-2 cursor-pointer ${isDarkMode ? 'bg-gradient-to-br from-blue-900 to-gray-800 border-blue-700' : 'bg-gradient-to-br from-blue-100 to-white border-blue-200 shadow-xl'}`} onClick={() => setIsChatOpen(true)}>
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-2">AI Assistant</h3>
              <p className="text-sm opacity-80 mb-6">Ask questions about my projects, skills, or download my resume via AI.</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow-lg">Chat Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-24 px-6 text-center ${isDarkMode ? 'bg-gray-800/30' : 'bg-blue-50'}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Connect</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex flex-col items-center gap-6 mt-8">
            <a href={`mailto:${personalInfo.email}`} className="w-full md:w-auto bg-blue-600 text-white px-10 py-4 rounded-full hover:bg-blue-700 transition font-bold text-lg shadow-lg hover:shadow-blue-500/40">
              ✉ {personalInfo.email}
            </a>
            <div className="flex flex-wrap justify-center gap-4">
              {personalInfo.phones.map((phone, i) => (
                <a key={i} href={`tel:${phone}`} className={`px-8 py-3 rounded-full border font-medium transition ${isDarkMode ? 'border-gray-600 hover:bg-gray-700 bg-gray-800/50' : 'border-gray-300 hover:bg-white bg-white'}`}>
                  📞 {phone}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={`px-8 py-3 rounded-full border font-medium transition flex items-center gap-2 ${isDarkMode ? 'border-blue-500 text-blue-400 hover:bg-blue-900/20' : 'border-blue-600 text-blue-700 hover:bg-blue-50'}`}>
                LinkedIn
              </a>
              <a href={personalInfo.facebook} target="_blank" rel="noreferrer" className={`px-8 py-3 rounded-full border font-medium transition flex items-center gap-2 ${isDarkMode ? 'border-blue-500 text-blue-400 hover:bg-blue-900/20' : 'border-blue-600 text-blue-700 hover:bg-blue-50'}`}>
                Facebook
              </a>
            </div>
          </div>
          <div className={`mt-16 pt-8 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
             <p className="text-sm opacity-50">© 2026 Senal Ridmila. </p>
          </div>
        </div>
      </section>

      {/* Floating Chatbot Widget */}
      <div className="fixed bottom-8 right-8 z-50">
        {isChatOpen && (
          <div className={`mb-4 w-80 md:w-96 rounded-2xl shadow-2xl overflow-hidden flex flex-col border ${isDarkMode ? 'bg-card border-gray-700' : 'bg-white border-gray-200'}`}>
            <div className="bg-blue-600 p-4 text-white font-bold flex justify-between items-center">
              <span>🤖 Senal's AI</span>
              <button onClick={() => setIsChatOpen(false)}>✕</button>
            </div>
            <div className={`h-80 p-4 overflow-y-auto space-y-3 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
              {chatMessages.map((msg, i) => (
                <div key={i} className={`p-3 rounded-lg max-w-[85%] text-sm ${msg.role === 'user' ? 'bg-blue-600 text-white self-end ml-auto rounded-br-none' : 'bg-gray-700 text-gray-200 self-start rounded-tl-none'}`}>
                  {msg.text}
                </div>
              ))}
              {isTyping && <div className="text-xs text-gray-500 animate-pulse">AI is typing...</div>}
            </div>
            <div className="p-3 border-t border-gray-700">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask something..." 
                  className={`flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 ${isDarkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                />
                <button onClick={handleSendMessage} className="bg-blue-600 text-white p-2 rounded-lg">➤</button>
              </div>
            </div>
          </div>
        )}
        <button onClick={() => setIsChatOpen(!isChatOpen)} className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center w-14 h-14 text-2xl">
          {isChatOpen ? '✕' : '💬'}
        </button>
      </div>
    </div>
  );
}

export default App;