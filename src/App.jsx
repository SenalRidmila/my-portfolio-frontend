import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async'; // ✅ SEO Import
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Mail, Phone, Linkedin, Facebook, Cloud, ArrowUp } from 'lucide-react';

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.502 0 .175 5.327.172 11.876c0 2.091.545 4.133 1.583 5.932L0 24l6.353-1.666a11.833 11.833 0 0 0 5.694 1.461h.005c6.545 0 11.873-5.328 11.876-11.878a11.802 11.802 0 0 0-3.468-8.411" />
  </svg>
);

import profileImg from './assets/profile.webp';
import petShopImg from './assets/pet-shop.webp';
import sltTireImg from './assets/slt-tire.webp';
import ayurvedaImg from './assets/ayurveda.webp';
import carRentalImg from './assets/car-rental.webp';
import virtualFittingImg from './assets/virtual-fitting.webp';
import workConnectImg from './assets/workconnect.webp';
import belloraImg from './assets/Bellora.webp';
import lumiereImg from './assets/Lumiere.webp';

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

  // Scroll to Top State
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Dark Mode Logic
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Cookies Logic
  const [showCookies, setShowCookies] = useState(false);
  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookiesAccepted');
    if (!hasAccepted) {
      // Delay showing banner so user can see the page first
      const timer = setTimeout(() => setShowCookies(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowCookies(false);
  };

  // Keep-Alive Ping – prevents Render free tier cold start
  useEffect(() => {
    const ping = () => fetch("https://my-portfolio-backend-mst1.onrender.com/").catch(() => { });
    ping(); // ping immediately on load
    const interval = setInterval(ping, 240000); // every 4 minutes
    return () => clearInterval(interval);
  }, []);

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
      title: "Bellora",
      tech: "Next.js, PostgreSQL, Prisma ORM, Generative AI, Vercel",
      desc: "Built using Next.js for a dynamic frontend, backed by PostgreSQL and Prisma ORM for robust data management. Advanced Generative AI powers the seamless clothing synthesis feature, deployed via Vercel.",
      image: belloraImg,
      github: "https://github.com/SenalRidmila/Bellora",
      live: "https://bellora.senalridmila.me"
    },
    {
      title: "Lumière Salon",
      tech: "Next.js 16, React 19, TypeScript, Tailwind CSS v4",
      desc: "Lumière Modern Salon is a luxury salon website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4, featuring booking, portfolio, team, and services sections with elegant animations.",
      image: lumiereImg,
      github: "https://github.com/SenalRidmila/lumiere-salon",
      live: "https://l.senalridmila.me"
    },
    {
      title: "WorkConnect Job Marketplace",
      tech: "MERN Stack, AWS EC2, Docker, Socket.io",
      desc: "Built and deployed a MERN stack job marketplace on AWS EC2 using Docker, featuring real-time chat (Socket.io) and production-level security configurations.",
      image: workConnectImg,
      github: "https://github.com/SenalRidmila/workconnect-lk",
      live: "https://workconnect.senalridmila.me"
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${isDarkMode ? 'bg-dark text-white' : 'bg-gray-50 text-gray-900'}`}>

      {/* Floating Clouds Page Load Animation */}
      <motion.div
        className={`fixed inset-0 z-[100] pointer-events-none flex items-center justify-center overflow-hidden ${isDarkMode ? 'bg-dark' : 'bg-gray-50'}`}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, transitionEnd: { display: "none" } }}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute top-[10%] left-[10%] text-gray-200 dark:text-gray-800"
          initial={{ x: 0, opacity: 1, scale: 1 }}
          animate={{ x: "-50vw", opacity: 0, scale: 1.5 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        >
          <Cloud size={250} fill="currentColor" />
        </motion.div>

        <motion.div
          className="absolute top-[40%] right-[10%] text-blue-100 dark:text-gray-700"
          initial={{ x: 0, opacity: 1, scale: 1 }}
          animate={{ x: "50vw", opacity: 0, scale: 1.5 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <Cloud size={350} fill="currentColor" />
        </motion.div>

        <motion.div
          className="absolute bottom-[20%] left-[30%] text-purple-100 dark:text-gray-800"
          initial={{ x: 0, opacity: 1, scale: 1 }}
          animate={{ x: "-30vw", y: "20vh", opacity: 0, scale: 1.5 }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        >
          <Cloud size={200} fill="currentColor" />
        </motion.div>
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
          <ul className={`hidden md:flex gap-8 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {['Home', 'About', 'Projects', 'Tools', 'Contact'].map((item) => (
              <li key={item} onClick={() => scrollToSection(item.toLowerCase())} className={`cursor-pointer hover:text-blue-500 transition relative group`}>
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            {/* ✅ Added aria-label for Accessibility */}
            <button
              aria-label="Toggle Dark Mode"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full shadow-lg transition transform hover:scale-110 ${isDarkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-800'}`}
            >
              {isDarkMode ? '☀' : '🌙'}
            </button>
            {/* ✅ Added aria-label for Accessibility */}
            <button
              aria-label="Toggle Mobile Menu"
              className="md:hidden text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
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
            <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.5 }} className="text-blue-500 font-bold tracking-wide uppercase">Hello, I'm</motion.h2>
            <motion.h1 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl md:text-7xl font-extrabold leading-tight">{personalInfo.name}</motion.h1>
            <motion.h3 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.2 }} className={`text-2xl md:text-3xl font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Full Stack Developer from Horizon Campus</motion.h3>
            <div className={`text-lg max-w-lg mx-auto md:mx-0 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.03 }
                  }
                }}
              >
                {Array.from("Senal Ridmila is a BSc (Hons) in Network and Mobile Computing Undergraduate at Horizon Campus Sri Lanka. Expert Full Stack Developer specializing in building scalable web solutions with Java, React, Spring Boot, Next.js, and Cloud Technologies.").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            <motion.div
              className="flex gap-4 justify-center md:justify-start pt-4 flex-wrap"
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.3 }
                }
              }}
            >
              <motion.a variants={{ hidden: { opacity: 0, y: -20 }, show: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/Senal_Ridmila_CV.pdf" download className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition shadow-lg flex items-center gap-2">
                <span>📄</span> Download CV
              </motion.a>
              <motion.button variants={{ hidden: { opacity: 0, y: -20 }, show: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => scrollToSection('tools')} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg">Try My Tools</motion.button>
              <motion.button variants={{ hidden: { opacity: 0, y: -20 }, show: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => scrollToSection('contact')} className={`px-8 py-3 rounded-lg font-bold border transition ${isDarkMode ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'}`}>Contact Me</motion.button>
            </motion.div>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative w-72 h-72 md:w-96 md:h-96 group">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img src={profileImg} alt="Senal Ridmila - Full Stack Developer from Horizon Campus Sri Lanka" loading="lazy" className="relative w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-2xl" />
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

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.4 } } }} className={`p-8 rounded-3xl border backdrop-blur-sm shadow-xl ${isDarkMode ? 'bg-gray-800/40 border-gray-700' : 'bg-white/60 border-gray-200'}`}>
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Who am I?
              </h3>
              <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I am <strong>Senal Ridmila</strong>, a <strong>Full Stack Developer</strong> and final year undergraduate at <strong>Horizon Campus Sri Lanka</strong>, driven by a passion for building scalable and robust web solutions. As a Horizon Campus student, I specialize in modern web development technologies.
              </p>
              <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                My expertise as <strong>Senal Ridmila</strong> lies in bridging the gap between complex backend logic using <strong>Spring Boot & Java</strong> and creating interactive frontend experiences with <strong>React & Next.js</strong>. I thrive in challenging environments and constantly seek to master new technologies like DevOps and Cloud Computing.
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
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, x: 50 }, show: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.4 } } }} className="space-y-6">
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 inline-block pb-2">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-2"></div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.4 } }
              }}
              className={`group flex flex-col rounded-2xl overflow-hidden transition-colors duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)] border ${isDarkMode ? 'bg-card border-gray-700 hover:border-blue-500' : 'bg-white border-gray-200 hover:border-blue-500 shadow-lg'}`}
            >
              <div className="h-52 w-full overflow-hidden bg-gray-900 relative">
                {project.image ? (
                  <img src={project.image} alt={`${project.title} - Portfolio Project`} loading="lazy" className="w-full h-full object-contain transition duration-500 group-hover:scale-105" />
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
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Tools Section */}
      <section id="tools" className={`py-24 px-6 ${isDarkMode ? 'bg-gray-900/50' : 'bg-blue-50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 inline-block pb-2">
              Developer Tools
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-2"></div>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 50, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.4 } } }} className={`p-8 rounded-2xl border text-center transition hover:-translate-y-2 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-xl'}`}>
              <div className="text-5xl mb-4">🖼️ ➔ 📄</div>
              <h3 className="text-2xl font-bold mb-2">Image to PDF</h3>
              <p className="text-sm text-gray-500 mb-6">Convert your JPG/PNG images into a PDF document instantly.</p>
              <label className={`block w-full cursor-pointer py-3 rounded-lg border-2 border-dashed ${isDarkMode ? 'border-gray-600 hover:border-blue-500' : 'border-gray-300 hover:border-blue-500'}`}>
                <span className="text-sm font-semibold">{convertingImg ? "Converting..." : "Upload Image"}</span>
                <input type="file" accept="image/*" onChange={handleImageToPdf} className="hidden" disabled={convertingImg} />
              </label>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 50, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.4 } } }} className={`p-8 rounded-2xl border text-center transition hover:-translate-y-2 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-xl'}`}>
              <div className="text-5xl mb-4">📄 ➔ 📝</div>
              <h3 className="text-2xl font-bold mb-2">PDF to Word</h3>
              <p className="text-sm text-gray-500 mb-6">Extract text from PDF and save as editable Word (Docx) file.</p>
              <label className={`block w-full cursor-pointer py-3 rounded-lg border-2 border-dashed ${isDarkMode ? 'border-gray-600 hover:border-blue-500' : 'border-gray-300 hover:border-blue-500'}`}>
                <span className="text-sm font-semibold">{convertingPdf ? "Converting..." : "Upload PDF"}</span>
                <input type="file" accept=".pdf" onChange={handlePdfToWord} className="hidden" disabled={convertingPdf} />
              </label>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 50, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.4 } } }} className={`p-8 rounded-2xl border text-center transition hover:-translate-y-2 cursor-pointer ${isDarkMode ? 'bg-gradient-to-br from-blue-900 to-gray-800 border-blue-700' : 'bg-gradient-to-br from-blue-100 to-white border-blue-200 shadow-xl'}`} onClick={() => setIsChatOpen(true)}>
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-2">AI Assistant</h3>
              <p className="text-sm opacity-80 mb-6">Ask questions about my projects, skills, or download my resume via AI.</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow-lg">Chat Now</button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Premium Contact Section */}
      <section id="contact" className={`py-32 px-6 relative overflow-hidden ${isDarkMode ? 'bg-dark' : 'bg-gray-50'}`}>
        {/* Background Decorative Blur */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse animation-delay-2000"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 pb-2">
              Let's Create Together
            </h2>
            <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Ready to turn your vision into reality? I'm currently available for new projects and exciting opportunities. Let's build something extraordinary.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`p-8 md:p-12 rounded-[2.5rem] border backdrop-blur-xl shadow-2xl relative overflow-hidden ${isDarkMode ? 'bg-gray-900/40 border-gray-700/50 shadow-blue-900/20' : 'bg-white/60 border-gray-200 shadow-blue-500/10'
              }`}
          >
            {/* Inner Glow */}
            <div className={`absolute inset-0 bg-gradient-to-b ${isDarkMode ? 'from-white/5 to-transparent' : 'from-black/5 to-transparent'} pointer-events-none`}></div>

            <div className="flex flex-col items-center gap-8 relative z-10">

              {/* Primary Action - CV Download */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/SenalRidmila.pdf"
                download
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-10 py-5 rounded-full font-bold text-lg shadow-[0_0_40px_rgba(59,130,246,0.4)] flex items-center justify-center gap-3 transition-all ring-2 ring-white/20"
              >
                <Download size={24} />
                Download Full Resume
              </motion.a>

              {/* Contact Grid layout for Email and WhatsApp */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">

                {/* Email Box */}
                <motion.a
                  whileHover={{ y: -5 }}
                  href={`mailto:${personalInfo.email}`}
                  className={`flex items-center justify-center sm:justify-start gap-4 p-5 rounded-3xl border transition-all ${isDarkMode ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500/50 hover:bg-gray-800' : 'bg-white border-gray-200 hover:border-blue-400 hover:shadow-lg'
                    }`}
                >
                  <div className="min-w-[48px] h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <Mail size={24} />
                  </div>
                  <div className="text-left overflow-hidden">
                    <div className="text-sm text-gray-400 font-medium">Email Me At</div>
                    <div className={`font-semibold truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{personalInfo.email}</div>
                  </div>
                </motion.a>

                {/* WhatsApp Box (+94771304930) */}
                <motion.a
                  whileHover={{ y: -5 }}
                  href="https://wa.me/94771304930"
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-center sm:justify-start gap-4 p-5 rounded-3xl border transition-all ${isDarkMode ? 'bg-gray-800/50 border-gray-700 hover:border-green-500/50 hover:bg-gray-800' : 'bg-white border-gray-200 hover:border-green-400 hover:shadow-lg'
                    }`}
                >
                  <div className="min-w-[48px] h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                    <WhatsAppIcon size={24} />
                  </div>
                  <div className="text-left overflow-hidden">
                    <div className="text-sm text-gray-400 font-medium">Chat on WhatsApp</div>
                    <div className={`font-semibold truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>+94 77 130 4930</div>
                  </div>
                </motion.a>

              </div>

              {/* Other Socials/Phones Container */}
              <div className={`w-full pt-8 mt-4 border-t flex flex-wrap items-center justify-center gap-4 ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200'}`}>

                {/* Fallback Phone Call */}
                <a href="tel:+94781304930" className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors ${isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' : 'bg-white border text-gray-700 hover:bg-gray-50 hover:text-black'
                  }`}>
                  <Phone size={16} /> +94 78 130 4930
                </a>

                {/* LinkedIn */}
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors ${isDarkMode ? 'bg-blue-900/40 text-blue-400 hover:bg-blue-900/60 hover:text-white' : 'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700'
                  }`}>
                  <Linkedin size={16} /> LinkedIn
                </a>

                {/* Facebook */}
                <a href={personalInfo.facebook} target="_blank" rel="noreferrer" className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors ${isDarkMode ? 'bg-blue-900/40 text-blue-400 hover:bg-blue-900/60 hover:text-white' : 'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700'
                  }`}>
                  <Facebook size={16} /> Facebook
                </a>

              </div>
            </div>
          </motion.div>

          <div className="mt-16 text-center">
            <p className={`font-medium ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              © 2026 Senal Ridmila. All rights reserved.
            </p>
          </div>
        </div>
      </section>

      {/* Floating Chatbot Widget */}
      <div className="fixed bottom-20 right-4 md:bottom-24 md:right-8 z-50 max-w-[calc(100vw-2rem)]">
        {isChatOpen && (
          <div className={`mb-4 w-full sm:w-80 md:w-96 rounded-2xl shadow-2xl overflow-hidden flex flex-col border ${isDarkMode ? 'bg-card border-gray-700' : 'bg-white border-gray-200'}`}>
            <div className="bg-blue-600 p-4 text-white font-bold flex justify-between items-center">
              <span>🤖 Senal's AI</span>
              {/* ✅ Added aria-label for Accessibility */}
              <button aria-label="Close Chat" onClick={() => setIsChatOpen(false)}>✕</button>
            </div>
            <div className={`h-[50vh] sm:h-80 p-4 overflow-y-auto space-y-3 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
              {chatMessages.map((msg, i) => (
                <div key={i} className={`p-3 rounded-lg max-w-[85%] text-sm ${msg.role === 'user' ? 'bg-blue-600 text-white self-end ml-auto rounded-br-none' : 'bg-gray-700 text-gray-200 self-start rounded-tl-none'}`}>
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div className="p-3 rounded-lg max-w-[85%] bg-gray-700 text-gray-200 self-start rounded-tl-none flex items-center gap-2">
                  <span className="text-sm">AI is typing</span>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              )}
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
                {/* ✅ Added aria-label for Accessibility */}
                <button aria-label="Send Message" onClick={handleSendMessage} className="bg-blue-600 text-white p-2 rounded-lg">➤</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className={`fixed bottom-6 right-4 md:bottom-8 md:right-8 z-50 p-2 md:p-3 rounded-full cursor-pointer shadow-xl border backdrop-blur-md transition-colors ${isDarkMode
              ? 'bg-blue-600/80 border-blue-500/50 text-white hover:bg-blue-600 shadow-blue-500/30'
              : 'bg-white border-gray-200 text-blue-600 hover:bg-blue-50 shadow-gray-200/50'
              }`}
          >
            <ArrowUp size={24} className="scale-75 md:scale-100" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-16 md:bottom-8 md:right-24 z-50">
        {/* ✅ Added aria-label for Accessibility */}
        <button
          aria-label="Toggle Chat Assistant"
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-blue-600 hover:bg-blue-500 text-white p-3 md:p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 text-xl md:text-2xl"
        >
          {isChatOpen ? '✕' : '💬'}
        </button>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        href="https://wa.me/94771304930"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-4 md:bottom-8 md:left-8 z-50 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
      >
        <span className="absolute inset-0 rounded-full border-2 border-green-500 animate-ping opacity-50"></span>
        <WhatsAppIcon size={28} />
      </motion.a>

      {/* Cookie Consent Banner */}
      <AnimatePresence>
        {showCookies && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-[200] w-[92%] max-w-md p-4 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl border shadow-2xl backdrop-blur-xl ${isDarkMode ? 'bg-gray-900/95 border-gray-700' : 'bg-white/95 border-gray-200'
              }`}
          >
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              We use cookies to ensure you get the best experience on our website. 🍪
            </p>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-full whitespace-nowrap transition-transform active:scale-95"
            >
              Got it!
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;