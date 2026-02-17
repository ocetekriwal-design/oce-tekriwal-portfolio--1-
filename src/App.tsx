
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useNavigate, useParams, Link } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Section } from './components/Section';
import { PixelIcon } from './components/PixelIcon';
import { PROJECTS } from './constants';

const ProjectDetailView: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return <div className="p-24 text-center text-white text-4xl">PROJECT_NOT_FOUND</div>;

  return (
    <div className="fixed inset-0 z-[100] bg-black overflow-y-auto font-pixel">
      {/* Navigation Overlay */}
      <div className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-[110] mix-blend-difference">
        <span className="text-2xl text-[#FF007F]">{project.title} // V.25</span>
        <button 
          onClick={() => navigate('/')}
          className="bg-[#FF007F] text-black px-6 py-2 hover:bg-white transition-colors flex items-center gap-2 border-2 border-transparent hover:border-black"
        >
          <PixelIcon type="arrow" size={20} className="rotate-180 text-black" />
          <span>EXIT_CORE</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32">
        {/* Header Section */}
        <div className="flex flex-col mb-24">
          <div className="flex items-center gap-4 mb-8">
            <PixelIcon type="eye" className="animate-pulse" size={56} />
            <div className="flex flex-col">
              <span className="text-[#FF007F] text-xl tracking-[0.4em] uppercase">CLASSIFIED DATA</span>
              <span className="text-white opacity-50 text-sm font-grotesk tracking-widest uppercase">ST: SEM_II // SEC: F</span>
            </div>
          </div>

          <h1 className="text-[14vw] leading-[0.8] font-pixel uppercase text-white mb-6">
            {project.title}
          </h1>
          <p className="text-4xl md:text-6xl text-[#FF007F] font-grotesk font-black uppercase tracking-tighter max-w-4xl leading-none">
            {project.tagline}
          </p>
        </div>

        {/* Project Layout */}
        <div className="grid lg:grid-cols-12 gap-20">
          
          {/* Main Visuals Column */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* Hero Image Spread */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#FF007F]/20 -z-10" />
              <div className="border-4 border-[#FF007F] p-2 bg-neutral-900">
                <img src={project.image} alt={project.title} className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>
              <div className="mt-4 flex justify-between font-grotesk text-xs text-neutral-500 uppercase">
                <span>Ref_001: Quiet Luxury Persona</span>
                <span>Location: Bengaluru_HQ</span>
              </div>
            </div>

            {/* Logo Philosophy */}
            <div className="bg-neutral-900 border-l-8 border-[#FF007F] p-12">
               <h3 className="text-4xl text-[#FF007F] mb-8 uppercase">Logo Architecture</h3>
               <div className="grid md:grid-cols-2 gap-12">
                 <div className="space-y-6">
                   <p className="font-grotesk text-xl text-neutral-300 uppercase leading-tight">
                     {project.details?.designPhilosophy}
                   </p>
                   <div className="bg-white p-8 border-4 border-black inline-block">
                     <span className="font-serif text-8xl text-[#1A237E] leading-none">V</span>
                   </div>
                 </div>
                 <div className="space-y-6">
                   <h4 className="text-white text-2xl uppercase underline decoration-[#FF007F]">Typography Suite</h4>
                   <p className="text-4xl text-[#FF007F]">{project.details?.font}</p>
                   <p className="font-grotesk text-neutral-500 text-sm">A blend of tradition and modern fashion, using deep blue for trust and brown for timeless warmth.</p>
                 </div>
               </div>
            </div>

            {/* Packaging Concept */}
            <div className="space-y-8">
              <h3 className="text-5xl text-white uppercase border-b-4 border-[#FF007F] inline-block mb-4">The Packaging Suite</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-square bg-neutral-800 flex items-center justify-center p-12 border border-white/10 group">
                   <img src="https://images.unsplash.com/photo-1549463591-24c18d2bd12a?auto=format&fit=crop&q=80&w=800" className="w-full grayscale group-hover:grayscale-0 transition-all" alt="Packaging Mockup" />
                </div>
                <div className="flex flex-col justify-center gap-6">
                  <p className="font-pixel text-3xl text-neutral-400 leading-tight">
                    {project.details?.packaging}
                  </p>
                  <div className="flex gap-4">
                    {project.details?.colors?.map((c, i) => (
                      <div key={i} className="w-16 h-16 border-2 border-white/20" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Context Column */}
          <div className="lg:col-span-4 space-y-16">
            
            {/* The Strategy */}
            <div className="bg-[#FF007F] text-black p-8 relative">
              <PixelIcon type="bolt" size={40} className="text-black absolute -top-5 -right-5 bg-[#FF007F] p-2 border-4 border-black" />
              <h3 className="text-3xl mb-6 uppercase border-b-2 border-black/20 pb-2">Deployment Plan</h3>
              <ul className="space-y-6">
                {project.details?.marketing?.map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <span className="font-pixel text-xl mt-1">0{idx+1}_</span>
                    <span className="font-grotesk text-lg font-bold uppercase leading-[1.1]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Brief/Problem */}
            <div className="space-y-8">
               <div className="border-2 border-neutral-700 p-6">
                  <h4 className="text-[#FF007F] text-xl mb-4 uppercase">Problem Statement</h4>
                  <p className="font-grotesk text-white text-lg uppercase leading-tight opacity-80">
                    {project.details?.problemStatement}
                  </p>
               </div>
               <div className="border-2 border-neutral-700 p-6 bg-neutral-900">
                  <h4 className="text-[#FF007F] text-xl mb-4 uppercase">Brief_Transmission</h4>
                  <p className="font-grotesk text-white text-lg uppercase leading-tight">
                    {project.details?.briefStatement}
                  </p>
               </div>
            </div>

            {/* Target */}
            <div className="p-8 bg-white text-black border-4 border-[#FF007F]">
              <h3 className="text-xl mb-4 uppercase font-bold underline">Primary Demographic</h3>
              <p className="font-pixel text-4xl uppercase leading-none">{project.details?.targetMarket}</p>
            </div>

            {/* Iterations */}
            <div>
              <h3 className="text-[#FF007F] text-2xl mb-6 uppercase tracking-widest underline decoration-2 underline-offset-8">Identity Iterations</h3>
              <div className="grid grid-cols-2 gap-4">
                {project.details?.nameIdeas?.map(name => (
                  <div key={name} className="p-3 border border-neutral-800 text-neutral-500 font-pixel text-lg uppercase hover:text-white hover:border-[#FF007F] cursor-default transition-all">
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tagline Showcase */}
        <div className="mt-48 mb-24">
          <div className="flex items-center gap-6 mb-12 overflow-hidden">
            <h3 className="text-[#FF007F] text-4xl uppercase whitespace-nowrap">Voice & Tone // Ticker</h3>
            <div className="h-1 bg-[#FF007F]/20 w-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#FF007F]/20">
            {project.details?.taglines?.map((tag, i) => (
              <div key={i} className="bg-black p-12 hover:bg-[#FF007F]/10 transition-all border border-[#FF007F]/5 group">
                <PixelIcon type="star" size={24} className="mb-4 opacity-0 group-hover:opacity-100" />
                <p className="font-grotesk italic text-3xl text-white group-hover:text-[#FF007F] transition-colors leading-tight">"{tag}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-48 pt-12 border-t-4 border-[#FF007F] flex justify-between items-center">
           <button onClick={() => navigate('/')} className="font-pixel text-4xl text-neutral-500 hover:text-white transition-all uppercase">
             [ TERMINATE_SESSION ]
           </button>
           <div className="flex gap-4">
              <PixelIcon type="crosshair" size={32} />
              <PixelIcon type="heart" size={32} />
              <PixelIcon type="bolt" size={32} />
           </div>
        </div>
      </div>
    </div>
  );
};

const PortfolioMain: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-black min-h-screen selection:bg-[#FF007F] selection:text-white overflow-hidden font-pixel">
      <Navigation />
      
      {/* Hero Section */}
      <Section id="hero" className="flex flex-col justify-center relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full z-10">
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-10">
              <PixelIcon type="eye" className="animate-pulse" size={48} />
              <span className="text-[#FF007F] text-xl md:text-3xl tracking-[0.3em] font-pixel uppercase">
                SYSTEMS_INIT: ACTIVE
              </span>
            </div>
            
            <h1 className="text-[15vw] lg:text-[14vw] leading-[0.75] font-pixel uppercase text-white mb-8">
              Oce <br />
              <span className="text-[#FF007F]">Tekriwal</span>
            </h1>
            
            <div className="max-w-3xl border-l-4 border-[#FF007F] pl-6 py-2">
              <p className="text-2xl md:text-5xl font-grotesk font-black uppercase leading-[0.85] tracking-tighter text-neutral-200">
                Communication Designer working across <span className="text-[#FF007F]">Branding</span>, <span className="text-[#FF007F]">Typography</span>, 
                <span className="text-[#FF007F]">UI/UX</span> & <span className="text-white">AI-Integrated Design</span>.
              </p>
            </div>
          </div>

          <div className="hidden lg:col-span-4 lg:flex flex-col items-end gap-12 relative">
             <div className="border-4 border-[#FF007F] p-6 bg-black flex flex-col gap-4 max-w-[240px]">
                <div className="flex justify-between items-center text-xs text-[#FF007F]">
                  <span>V_CORE: 2.5</span>
                  <PixelIcon type="crosshair" size={16} />
                </div>
                <div className="h-px bg-[#FF007F]/30 w-full" />
                <p className="text-sm font-grotesk text-white uppercase leading-tight">
                  Experimental communication systems for digital futures.
                </p>
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-[#FF007F]" />
                  <div className="w-2 h-2 bg-[#FF007F]/40" />
                  <div className="w-2 h-2 bg-[#FF007F]/10" />
                </div>
             </div>
             
             <div className="relative">
                <PixelIcon type="globe" className="text-white/10 animate-spin [animation-duration:20s]" size={320} />
                <PixelIcon type="star" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FF007F] animate-pulse" size={120} />
             </div>
          </div>
        </div>

        <div className="absolute top-[20%] right-[5%] flex flex-col gap-4 opacity-20 hidden md:flex">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-12 h-px bg-[#FF007F]" />
          ))}
        </div>

        <div className="absolute bottom-12 left-0 w-full bg-[#FF007F] py-2 overflow-hidden whitespace-nowrap rotate-[-1deg] translate-y-12 lg:translate-y-0">
          <div className="flex animate-[marquee_20s_linear_infinite] font-pixel text-black text-2xl uppercase tracking-[0.5em]">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="mx-8">
                DESIGN SYSTEMS * BRAND IDENTITY * AI INTEGRATION * PIXEL EDITORIAL * TYPE DESIGN * 
              </span>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </Section>

      {/* Work Section */}
      <Section id="work" showTitle title="Selected Work">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#FF007F]/20">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              onClick={() => navigate(`/project/${project.id}`)}
              className="group relative bg-black overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-in-out"
              />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 bg-gradient-to-t from-black via-transparent to-transparent group-hover:from-[#FF007F]/60 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[12px] bg-black text-white font-pixel px-2 py-0.5 border border-[#FF007F]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="font-pixel text-xl text-[#FF007F] group-hover:text-white">{project.year}</span>
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-5xl md:text-6xl font-pixel text-white leading-none mb-2">
                    {project.title}
                  </h3>
                  <p className="font-grotesk text-sm md:text-base text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-sm">
                    {project.description}
                  </p>
                </div>
              </div>
              
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <PixelIcon type="arrow" className="text-white" size={32} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" showTitle title="The Designer">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <p className="text-5xl md:text-7xl font-pixel leading-none text-white uppercase">
              EXPERIMENTAL <br />
              <span className="text-[#FF007F]">DIGITAL NATIVE.</span>
            </p>
            <p className="font-grotesk text-xl md:text-2xl text-neutral-400 leading-tight tracking-tight uppercase">
              Oce Tekriwal is a multidisciplinary designer who thrives at the intersection of early-internet aesthetics and future-focused technology. 
              By blending high-contrast Y2K visual languages with modern AI-integrated workflows, Oce crafts digital experiences that feel both nostalgic and revolutionary.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#FF007F]/40">
              <div className="bg-black p-4 flex flex-col items-center justify-center gap-2 border border-[#FF007F]/20">
                <PixelIcon type="star" size={32} />
                <span className="text-[10px] text-center leading-none uppercase">ADOBE CREATIVE SUITE</span>
              </div>
              <div className="bg-black p-4 flex flex-col items-center justify-center gap-2 border border-[#FF007F]/20">
                <PixelIcon type="heart" size={32} />
                <span className="text-[10px] text-center leading-none uppercase">AI GENERATIVE DESIGN</span>
              </div>
              <div className="bg-black p-4 flex flex-col items-center justify-center gap-2 border border-[#FF007F]/20">
                <PixelIcon type="bolt" size={32} />
                <span className="text-[10px] text-center leading-none uppercase">VISUAL SYSTEMS</span>
              </div>
            </div>
          </div>
          
          <div className="relative p-1 bg-[#FF007F]">
             <div className="bg-black p-8 flex flex-col gap-8">
                <div className="aspect-[4/5] overflow-hidden bg-neutral-900 border border-[#FF007F]">
                  <img 
                    src="file:///C:/Users/ocete/Downloads/WhatsApp%20Image%202026-02-10%20at%208.15.39%20PM.jpeg" 
                    className="w-full h-full object-cover contrast-150 grayscale mix-blend-screen"
                    alt="Creative Portrait Placeholder"
                  />
                </div>
                <div className="font-pixel text-4xl leading-none text-[#FF007F]">
                  OT_SYS v2.0.25
                  <div className="text-sm mt-2 text-white font-grotesk opacity-60">LOC: GLOBAL_NET // STATUS: ACTIVE</div>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="justify-center items-center overflow-hidden">
        <div className="relative z-10 w-full max-w-4xl px-4 mx-auto">
          <div className="mb-8 flex justify-center">
            <PixelIcon type="heart" size={120} className="animate-pulse" />
          </div>
          
          <h2 className="text-[10vw] font-pixel leading-none uppercase text-white mb-4 text-center">
            Inquiry <span className="text-[#FF007F]">Portal</span>
          </h2>
          <p className="font-pixel text-xl text-[#FF007F] text-center mb-12 uppercase tracking-widest">Connect to oce20092003@gmail.com</p>
          
          <form 
            action="https://formsubmit.co/oce20092003@gmail.com" 
            method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left bg-[#FF007F]/5 p-8 md:p-12 border-4 border-[#FF007F]"
          >
            <input type="hidden" name="_subject" value="New Portfolio Inquiry" />
            <input type="hidden" name="_template" value="table" />
            
            <div className="flex flex-col gap-2">
              <label className="font-pixel text-xl text-[#FF007F] uppercase">_IDENTIFIER (Name)</label>
              <input 
                type="text" 
                name="name" 
                required 
                className="bg-black border-2 border-neutral-800 focus:border-[#FF007F] text-white p-4 font-grotesk outline-none transition-colors"
                placeholder="USER_NAME..."
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-pixel text-xl text-[#FF007F] uppercase">_ORIGIN (Email)</label>
              <input 
                type="email" 
                name="email" 
                required 
                className="bg-black border-2 border-neutral-800 focus:border-[#FF007F] text-white p-4 font-grotesk outline-none transition-colors"
                placeholder="CONTACT@NET.CORE"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-pixel text-xl text-[#FF007F] uppercase">_TRANSMISSION (Message)</label>
              <textarea 
                name="message" 
                required 
                rows={4}
                className="bg-black border-2 border-neutral-800 focus:border-[#FF007F] text-white p-4 font-grotesk outline-none transition-colors resize-none"
                placeholder="TRANSMIT YOUR INQUIRY DATA HERE..."
              />
            </div>

            <button 
              type="submit" 
              className="md:col-span-2 bg-[#FF007F] text-black font-pixel text-3xl p-6 hover:bg-white transition-all transform hover:scale-[1.02] uppercase"
            >
              Execute Transmission
            </button>
          </form>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-24 mt-16">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl font-pixel text-[#FF007F] hover:text-white transition-colors">INSTAGRAM</a>
            <a href="mailto:oce20092003@gmail.com" className="text-2xl font-pixel text-[#FF007F] hover:text-white transition-colors">DIRECT_MAIL</a>
          </div>

          <div className="mt-32 pt-12 border-t border-[#FF007F]/20 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-pixel text-neutral-600 uppercase tracking-widest">
              <span>DESIGNED BY OCE TEKRIWAL</span>
              <div className="flex items-center gap-8">
                <PixelIcon type="fire" size={24} className="text-neutral-800" />
                <PixelIcon type="heart" size={24} className="text-neutral-800" />
                <PixelIcon type="bolt" size={24} className="text-neutral-800" />
              </div>
              <span>&copy; 2025 ALL RIGHTS RESERVED</span>
            </div>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] rotate-[-15deg] opacity-[0.03] pointer-events-none select-none font-pixel text-[20vw] whitespace-nowrap overflow-hidden">
          OCE TEKRIWAL OCE TEKRIWAL OCE TEKRIWAL OCE TEKRIWAL
        </div>
      </Section>

      {/* Custom Cursor */}
      <div 
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] transition-transform duration-75 ease-out hidden md:flex items-center justify-center text-[#FF007F]"
        style={{ transform: `translate(${mousePos.x - 16}px, ${mousePos.y - 16}px)` }}
      >
        <PixelIcon type="crosshair" size={32} />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PortfolioMain />} />
        <Route path="/project/:id" element={<ProjectDetailView />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
