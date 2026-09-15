import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Mail, Linkedin, Facebook, Briefcase, FileText, Send, MessageCircle, X, Code, ExternalLink, Github, ImageIcon, Globe, Menu } from 'lucide-react';

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.502 0 .175 5.327.172 11.876c0 2.091.545 4.133 1.583 5.932L0 24l6.353-1.666a11.833 11.833 0 0 0 5.694 1.461h.005c6.545 0 11.873-5.328 11.876-11.878a11.802 11.802 0 0 0-3.468-8.411" />
  </svg>
);

import profileImg from './assets/profile.webp';
import petShopImg from './assets/pet-shop.webp';
import ayurvedaImg from './assets/ayurveda.webp';
import carRentalImg from './assets/car-rental.webp';
import virtualFittingImg from './assets/virtual-fitting.webp';
import workConnectImg from './assets/workconnect.webp';
import belloraImg from './assets/Bellora.webp';
import lumiereImg from './assets/Lumiere.webp';
import mamariImg from './assets/mamari.png';
import cvFile from './assets/Senal-Ridmila.pdf';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'bot', text: 'Hi! Kohomada? Senal gana ona deyak ahanna.' }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [convertingImg, setConvertingImg] = useState(false);
  const [convertingPdf, setConvertingPdf] = useState(false);

  useEffect(() => {
    const ping = () => fetch("https://my-portfolio-backend-mst1.onrender.com/").catch(() => { });
    ping();
    const interval = setInterval(ping, 240000);
    return () => clearInterval(interval);
  }, []);

  const personalInfo = {
    name: "Senal Ridmila",
    email: "senalridmila2@gmail.com",
    linkedin: "https://www.linkedin.com/in/senal-ridmila-98b996292",
    github: "https://github.com/SenalRidmila",
  };

  const projects = [
    {
      title: "MAMARI LK | Web Application",
      tech: "Next.js, Vercel",
      desc: "Responsive web application engineered with Next.js, featuring CI/CD deployment, Google Search Console analytics, and professional webmail routing.",
      image: mamariImg,
      github: null,
      live: "https://www.mamari.lk"
    },
    {
      title: "Bellora",
      tech: "Next.js, Prisma, AI",
      desc: "Advanced Generative AI powers the seamless clothing synthesis feature, backed by PostgreSQL and Prisma ORM.",
      image: belloraImg,
      github: "https://github.com/SenalRidmila/Bellora",
      live: "https://bellora.senalridmila.me"
    },
    {
      title: "Lumière Salon",
      tech: "Next.js 16, Tailwind v4",
      desc: "Luxury salon website featuring booking, portfolio, team, and elegant modern animations.",
      image: lumiereImg,
      github: "https://github.com/SenalRidmila/lumiere-salon",
      live: "https://l.senalridmila.me"
    },
    {
      title: "WorkConnect",
      tech: "MERN, Docker, Socket.io",
      desc: "Job marketplace deployed on AWS EC2 featuring real-time chat via Socket.io.",
      image: workConnectImg,
      github: "https://github.com/SenalRidmila/workconnect-lk",
      live: "https://workconnect.senalridmila.me"
    },
    {
      title: "Pet Toy Shop",
      tech: "Spring Boot, React",
      desc: "Full-stack e-commerce platform with deep DevOps integration and CI/CD pipelines.",
      image: petShopImg,
      github: "https://github.com/SenalRidmila/pet-toy-shop-devops",
      live: null
    },
    {
      title: "Ayurveda Wellness",
      tech: "React Native, Expo",
      desc: "Mobile app connecting patients with Ayurvedic doctors, featuring AI symptom checkers.",
      image: ayurvedaImg,
      github: "https://github.com/SenalRidmila/ayurveda-wellness",
      live: null
    },
    {
      title: "Virtual Fitting",
      tech: "Next.js, TypeScript",
      desc: "Sleek app offering real-time virtual try-on experiences and high-end UI components.",
      image: virtualFittingImg,
      github: "https://github.com/SenalRidmila/virtual-fitting",
      live: null
    }
  ];

  const handleImageToPdf = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setConvertingImg(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await fetch("https://my-portfolio-backend-mst1.onrender.com/tools/img-to-pdf", {
        method: "POST", body: formData,
      });
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = "converted_image.pdf";
        document.body.appendChild(a); a.click(); a.remove();
      } else alert("Conversion failed!");
    } catch (error) {
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
        method: "POST", body: formData,
      });
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = "converted_doc.docx";
        document.body.appendChild(a); a.click(); a.remove();
      } else alert("Conversion failed!");
    } catch (error) {
      alert("Error connecting to server. Is the backend running?");
    }
    setConvertingPdf(false);
  };

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

  // Shared animation variants for scrolling
  const slideUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen selection:bg-[#ff5500] selection:text-white pb-24 relative overflow-hidden">
      <Helmet>
        <title>Senal Ridmila | Dev</title>
      </Helmet>

      {/* Cinematic Page Load Animation */}
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#09090b]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, transitionEnd: { display: "none" } }}
        transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-black tracking-tighter text-white flex flex-col md:flex-row items-center gap-6"
        >
          {/* Using the high-res apple-touch-icon for better crispness */}
          <img src="/apple-touch-icon.png" alt="Logo" className="w-20 h-20 md:w-24 md:h-24 rounded-[1.25rem] shadow-[0_0_40px_rgba(255,85,0,0.4)]" />
          <span>SENAL<span className="text-[#ff5500]">.DEV</span></span>
        </motion.h1>
      </motion.div>

      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Senal Ridmila | Full Stack Developer</title>
        <meta name="description" content="Portfolio of Senal Ridmila - Full Stack Developer from Horizon Campus specializing in React, Spring Boot, and Cloud Technologies. Explore my projects and tools." />
        <meta name="keywords" content="Senal Ridmila, Web Developer Sri Lanka, Full Stack Developer, React Developer, Spring Boot, Software Engineer, Horizon Campus" />
        <meta name="author" content="Senal Ridmila" />

        {/* Open Graph / Facebook & LinkedIn */}
        <meta property="og:title" content="Senal Ridmila | Full Stack Developer" />
        <meta property="og:description" content="Check out my developer portfolio featuring AI integration and full-stack projects." />
        <meta property="og:image" content="https://senalridmila.me/assets/profile.webp" />
        <meta property="og:url" content="https://senalridmila.me" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Navbar */}
      <nav className={`glass-nav ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div onClick={() => scrollToSection('home')} className="text-xl font-bold flex items-center gap-2 cursor-pointer select-none">
            <span className="text-blue-500 text-2xl">⚡</span> <span>Senal.dev</span>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-zinc-400 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute top-16 left-0 w-full bg-[#09090b] border-b border-zinc-800 md:hidden flex flex-col p-4 shadow-xl">
              <a href="#experience" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-sm font-medium text-zinc-300 hover:bg-zinc-800 rounded-lg">Experience</a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-sm font-medium text-zinc-300 hover:bg-zinc-800 rounded-lg">Projects</a>
              <a href="#tools" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-sm font-medium text-zinc-300 hover:bg-zinc-800 rounded-lg">Tools</a>
              <a href={cvFile} download="Senal-Ridmila.pdf" onClick={() => setIsMenuOpen(false)} className="mt-2 text-sm font-semibold bg-[#ff5500] text-black px-4 py-3 rounded-lg text-center flex items-center justify-center gap-2">
                Download Resume <Download size={14} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 space-y-6">

        {/* Section 1: Hero Grid */}
        <motion.div id="home" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-mt-24" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>

          {/* Main Hero Intro */}
          <motion.div variants={slideUp} className="bento-card p-8 lg:p-12 lg:col-span-2 lg:row-span-2 flex flex-col justify-end min-h-[300px] md:min-h-[450px] relative group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ff5500] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
            <div className="z-10">
              <p className="text-zinc-400 font-medium mb-3 tracking-wide uppercase text-sm">Hello, I am</p>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-white">
                Senal Ridmila
              </h1>
              <p className="text-lg text-zinc-400 max-w-md leading-relaxed">
                A Full Stack Developer from Horizon Campus building exceptional, robust, and scalable digital experiences.
              </p>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div variants={slideUp} className="bento-card p-0 lg:col-span-1 lg:row-span-2 min-h-[300px] md:min-h-[450px] relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] to-transparent z-10 opacity-60"></div>
            <img src={profileImg} alt="Senal" loading="lazy" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition duration-700 group-hover:scale-105" />
          </motion.div>

          {/* Connect / Socials */}
          <motion.div variants={slideUp} className="bento-card p-8 lg:col-span-1 flex flex-col justify-between group">
            <h3 className="font-bold text-xl mb-6 text-white">Let's Connect</h3>
            {/* 3-Column Grid for LinkedIn, Email, WhatsApp */}
            <div className="grid grid-cols-3 gap-3">
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="w-full aspect-square rounded-2xl bg-zinc-800/50 flex flex-col items-center justify-center hover:bg-[#ff5500] hover:text-black transition-all text-zinc-400">
                <Linkedin size={22} className="mb-2" />
                <span className="text-[10px] sm:text-xs font-semibold">LinkedIn</span>
              </a>
              <a href={`mailto:${personalInfo.email}`} className="w-full aspect-square rounded-2xl bg-zinc-800/50 flex flex-col items-center justify-center hover:bg-[#ff5500] hover:text-black transition-all text-zinc-400">
                <Mail size={22} className="mb-2" />
                <span className="text-[10px] sm:text-xs font-semibold">Email</span>
              </a>
              <a href="https://wa.me/94771304930" target="_blank" rel="noreferrer" className="w-full aspect-square rounded-2xl bg-zinc-800/50 flex flex-col items-center justify-center hover:bg-[#ff5500] hover:text-black transition-all text-zinc-400">
                <WhatsAppIcon size={22} className="mb-2" />
                <span className="text-[10px] sm:text-xs font-semibold">Chat</span>
              </a>
            </div>
          </motion.div>

          {/* Location / Availability */}
          <motion.div variants={slideUp} className="bento-card p-8 lg:col-span-1 flex flex-col justify-center items-center text-center">
            <Globe className="text-[#ff5500] mb-3" size={28} />
            <p className="font-semibold text-lg text-white">Sri Lanka</p>
            <p className="text-sm text-zinc-400 mt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse"></span> Available for work
            </p>
          </motion.div>

        </motion.div>

        {/* Section 2: Experience & Skills Grid */}
        <motion.div id="experience" className="grid grid-cols-1 lg:grid-cols-3 gap-6 scroll-mt-24" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>

          {/* Work Experience */}
          <motion.div variants={slideUp} className="bento-card p-8 lg:p-10 lg:col-span-2">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white"><Briefcase className="text-[#ff5500]" /> Work Experience</h2>

            <div className="border-l-2 border-zinc-800 pl-6 relative ml-2 group">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 bg-[#ff5500] rounded-full shadow-[0_0_10px_#ff5500]"></span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-[#ff5500] transition">Software Engineering Intern</h3>
                <span className="text-sm font-mono text-zinc-500 bg-zinc-800/50 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">Apr 2025 – Oct 2025</span>
              </div>
              <p className="text-zinc-400 font-medium text-sm mb-6 uppercase tracking-widest">Sri Lanka Telecom</p>
              <ul className="space-y-4 text-zinc-300 text-[15px] leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-[#ff5500] mt-1">✦</span>
                  Developed a full-stack Tire Management System using React 18 (Material UI) and Spring Boot (Java 17) with MongoDB REST APIs.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff5500] mt-1">✦</span>
                  Implemented secure authentication integrating Azure AD Single Sign-On (SSO) alongside a custom MongoDB fallback.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff5500] mt-1">✦</span>
                  Built role-based dashboards with dynamic filtering and deployed the frontend on Vercel while managing the Render backend.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={slideUp} className="bento-card p-8 lg:p-10 lg:col-span-1 flex flex-col">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white"><Code className="text-[#ff5500]" /> Tech Stack</h2>
            <div className="flex flex-wrap gap-2.5 flex-grow content-start">
              {['React', 'Next.js', 'Spring Boot', 'Java', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Node.js', 'React Native'].map(t => (
                <span key={t} className="px-4 py-2 bg-zinc-900 rounded-xl text-sm font-medium text-zinc-300 border border-zinc-800 hover:border-[#ff5500] hover:text-white transition cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Section 3: Projects Grid */}
        <div id="projects" className="scroll-mt-24">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="pb-6">
            <h2 className="text-3xl font-extrabold text-white">Selected Works</h2>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
            {projects.map((project, index) => (
              <motion.div key={index} variants={slideUp} className="bento-card flex flex-col h-full group">
                <div className="h-56 overflow-hidden relative">
                  {project.image ? (
                    <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-80" />
                  ) : (
                    <div className="w-full h-full bg-zinc-800/50 flex items-center justify-center"><ImageIcon className="text-zinc-600" size={40} /></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-transparent to-transparent opacity-90"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow relative z-10 -mt-10">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#ff5500] transition text-white drop-shadow-md">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.split(',').map((tag, i) => (
                      <span key={i} className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400 bg-zinc-950/80 px-2 py-1 rounded">{tag.trim()}</span>
                    ))}
                  </div>
                  <p className="text-sm text-zinc-400 mb-8 flex-grow leading-relaxed">{project.desc}</p>
                  <div className="flex gap-3 mt-auto">
                    {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-xl text-sm transition"><Github size={16} /> Repo</a>}
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#ff5500] hover:bg-[#e64d00] text-black font-bold rounded-xl text-sm transition shadow-lg shadow-[#ff5500]/20"><ExternalLink size={16} /> Live</a>}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Section 4: Utilities */}
        <motion.div id="tools" className="grid grid-cols-1 md:grid-cols-2 gap-6 scroll-mt-24" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>

          <motion.div variants={slideUp} className="bento-card p-8 flex items-center gap-6 group hover:border-[#ff5500] transition">
            <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-[#ff5500] group-hover:text-black transition">
              <FileText size={28} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-xl mb-1 text-white">Image to PDF</h4>
              <p className="text-sm text-zinc-400 mb-3">Convert images to a PDF securely.</p>
              <label className="inline-block bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer transition text-white">
                {convertingImg ? "Converting..." : "Upload File"}
                <input type="file" accept="image/*" onChange={handleImageToPdf} className="hidden" disabled={convertingImg} />
              </label>
            </div>
          </motion.div>

          <motion.div variants={slideUp} className="bento-card p-8 flex items-center gap-6 group hover:border-[#ff5500] transition">
            <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-[#ff5500] group-hover:text-black transition">
              <FileText size={28} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-xl mb-1 text-white">PDF to Word</h4>
              <p className="text-sm text-zinc-400 mb-3">Extract text from PDF documents.</p>
              <label className="inline-block bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer transition text-white">
                {convertingPdf ? "Converting..." : "Upload File"}
                <input type="file" accept=".pdf" onChange={handlePdfToWord} className="hidden" disabled={convertingPdf} />
              </label>
            </div>
          </motion.div>

        </motion.div>

      </main>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button onClick={() => setIsChatOpen(!isChatOpen)} className="w-14 h-14 rounded-full bg-[#ff5500] hover:bg-[#e64d00] text-black shadow-[0_0_20px_rgba(255,85,0,0.3)] hover:scale-110 transition flex items-center justify-center">
          {isChatOpen ? <X size={26} /> : <MessageCircle size={26} />}
        </button>
      </div>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} className="fixed bottom-24 right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] rounded-3xl bento-card shadow-2xl flex flex-col border border-zinc-800">
            <div className="bg-zinc-900 border-b border-zinc-800 p-4 text-white font-bold flex justify-between items-center">
              <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse"></div> Senal's AI</span>
              <button onClick={() => setIsChatOpen(false)} className="hover:text-[#ff5500] transition"><X size={20} /></button>
            </div>
            <div className="h-[40vh] p-5 overflow-y-auto space-y-4 custom-scrollbar bg-[#09090b]">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`p-3.5 rounded-2xl max-w-[85%] text-[14px] leading-relaxed shadow-sm ${msg.role === 'user' ? 'bg-[#ff5500] text-black self-end ml-auto rounded-br-sm font-medium' : 'bg-zinc-800 text-white self-start rounded-tl-sm'}`}>
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div className="bg-zinc-800 p-4 rounded-2xl self-start rounded-tl-sm flex items-center gap-2 w-16">
                  <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              )}
            </div>
            <div className="p-3 border-t border-zinc-800 bg-zinc-900">
              <div className="flex gap-2">
                <input type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} placeholder="Ask something..." className="flex-1 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#ff5500] focus:ring-1 focus:ring-[#ff5500] bg-zinc-950 border border-zinc-800 text-white transition-all" />
                <button onClick={handleSendMessage} className="bg-zinc-800 hover:bg-[#ff5500] hover:text-black text-white p-3 rounded-xl transition shadow-md"><Send size={18} /></button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;
