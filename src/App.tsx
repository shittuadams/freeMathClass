/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { 
  BookOpen, 
  MessageCircle, 
  PlayCircle, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Phone,
  ArrowRight,
  Calculator,
  Lightbulb,
  HelpCircle,
  GraduationCap
} from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';

const COLORS = {
  navy: '#001F3F',
  gold: '#FFD700',
  goldHover: '#E6C200',
  white: '#FFFFFF',
  slate400: '#94A3B8',
  slate950: '#020617',
};

const WHATSAPP_LINK = 'https://chat.whatsapp.com/DZwyL2ZxqO64iVmddEsEbU';
const SUPPORT_PHONE = '+2348077555789';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen font-sans selection:bg-yellow-200 selection:text-navy-900" style={{ backgroundColor: COLORS.navy, color: COLORS.white }}>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-50"
        style={{ scaleX, backgroundColor: COLORS.gold, originX: 0 }}
      />

      {/* Navigation / Header */}
      <nav className="sticky top-0 z-40 w-full bg-[#001F3F]/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: COLORS.gold }}>
              <span className="text-[#001F3F] font-black text-xl">Σ</span>
            </div>
            <span className="font-bold text-2xl tracking-tighter uppercase">
              Maths<span style={{ color: COLORS.gold }}>Help</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#schedule" className="hover:text-white transition-colors">Schedule</a>
            <div className="h-4 w-px bg-slate-700"></div>
            <div className="text-right">
              <p className="text-[10px] text-slate-500">Support Line</p>
              <p className="font-semibold text-white tracking-normal lowercase">{SUPPORT_PHONE}</p>
            </div>
          </div>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold transition-all bg-green-600 hover:bg-green-500 text-white"
          >
            <span>Help Desk</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden pt-20 pb-20 sm:pt-32 sm:pb-40 px-4 min-h-[80vh] flex items-center">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-8"
          >
            <span className="bg-amber-400/10 text-[#FFD700] border border-amber-400/30 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest italic animate-pulse">
              Saturday Classes • 9:00 AM – 10:00 PM
            </span>
            
            <h1 className="text-5xl sm:text-8xl font-black leading-[0.9] tracking-tighter uppercase max-w-4xl mx-auto">
              ACE YOUR <br />
              <span style={{ color: COLORS.gold }}>MATH EXAMS</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Free weekly live classes, solved past questions, and expert exam shortcuts for <span className="text-white font-bold">WAEC, NECO, and JAMB</span> students.
            </p>

            <div className="flex flex-col items-center gap-6 mt-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 px-12 py-5 rounded-xl text-2xl font-black shadow-[0_0_40px_rgba(255,215,0,0.2)] transition-all hover:scale-105 active:scale-98 uppercase tracking-tighter"
                style={{ backgroundColor: COLORS.gold, color: COLORS.navy }}
              >
                Join Free WhatsApp Class
              </a>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                No fees required. 100% Free for all students.
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Trust Signals / Logo Cloud */}
      <section className="py-10 bg-slate-950 border-y border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-8">
          <div className="flex items-center gap-12 opacity-40 grayscale group hover:grayscale-0 transition-all duration-500">
             <span className="font-black text-2xl italic tracking-tighter">WAEC</span>
             <span className="font-black text-2xl italic tracking-tighter">NECO</span>
             <span className="font-black text-2xl italic tracking-tighter">JAMB</span>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest leading-none mb-1">Official 2024 Prep Partner</p>
            <p className="text-xs font-bold text-white uppercase tracking-tighter">Mathematics Excellence Program</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-[#001F3F] border-b border-slate-700/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <PlayCircle className="w-8 h-8" />,
                title: "Free Live Classes",
                desc: "Interact with expert tutors every Saturday morning."
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Past Questions",
                desc: "Step-by-step solutions for the last 15 years."
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Exam Tricks",
                desc: "Master the shortcuts that save time during exams."
              },
              {
                icon: <HelpCircle className="w-8 h-8" />,
                title: "Clear Explanations",
                desc: "Complex topics broken down into simple steps."
              }
            ].map((f, i) => (
              <div
                key={i}
                className="p-10 border-slate-700/50 flex flex-col gap-4 bg-slate-900/20 hover:bg-slate-900/40 transition-colors"
                style={{ borderRightWidth: i === 3 ? 0 : '1px' }}
              >
                <div style={{ color: COLORS.gold }}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
      </section>

      {/* Schedule / How it Works */}
      <section id="schedule" className="py-32 px-4 bg-[#001429]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
             <div className="space-y-12">
                {[
                  { n: "1", t: "Join the WhatsApp Community", d: "Click the link and get instant access to our study materials and class links." },
                  { n: "2", t: "Attend Saturday Live Sessions", d: "Join our 9:00 AM class. Bring your notebook and your hardest math problems." },
                  { n: "3", t: "Master Past Questions", d: "Watch us solve real exam questions live and learn the logic behind each step." }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-8 group">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl border-2 flex items-center justify-center font-black text-2xl transition-all group-hover:scale-110" style={{ borderColor: COLORS.gold, color: COLORS.gold }}>
                        {step.n}
                    </div>
                    <div>
                        <h4 className="text-2xl font-black mb-2 uppercase tracking-tight">{step.t}</h4>
                        <p className="text-slate-400 text-lg leading-relaxed">{step.d}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="rounded-[2.5rem] p-8 sm:p-12 text-white relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] border border-slate-700/50" style={{ backgroundColor: COLORS.navy }}>
               <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                  <Calendar className="w-64 h-64" />
               </div>
               <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-amber-400/10 text-amber-400">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter">Class Schedule</h3>
               </div>
               <div className="space-y-8">
                  {[
                    { t: "Topic Introduction", s: "09:00 AM", d: "Conceptual foundation" },
                    { t: "Shortcut Techniques", s: "12:00 PM", d: "Speed improvement tricks" },
                    { t: "Past Question Lab", s: "04:00 PM", d: "JAMB/WAEC focused" },
                    { t: "Live Q&A Session", s: "08:00 PM", d: "Real-time answers" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-slate-700/50 pb-6 group">
                      <div>
                          <p className="font-bold text-xl group-hover:text-amber-400 transition-colors uppercase tracking-tight">{item.t}</p>
                          <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">{item.d}</p>
                      </div>
                      <span className="text-sm font-black bg-slate-800 px-4 py-2 rounded-lg border border-slate-700" style={{ color: COLORS.gold }}>{item.s}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-20 px-4 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
              <div className="col-span-1 md:col-span-2">
                 <div className="flex items-center gap-2 mb-8">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: COLORS.gold }}>
                      <span className="text-[#001F3F] font-black text-xl">Σ</span>
                    </div>
                    <span className="font-bold text-2xl text-white uppercase tracking-tighter">Maths<span style={{ color: COLORS.gold }}>Mastery</span></span>
                 </div>
                 <p className="max-w-sm mb-10 text-slate-400 text-lg leading-relaxed">
                   Dedicated to helping Nigerian students achieve academic excellence in Mathematics through free, world-class education.
                 </p>
                 <div className="flex gap-4">
                    <a href={WHATSAPP_LINK} className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-white hover:bg-green-600 hover:border-green-500 transition-all"><MessageCircle className="w-6 h-6" /></a>
                    <a href={`tel:${SUPPORT_PHONE}`} className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-500 transition-all"><Phone className="w-6 h-6" /></a>
                 </div>
              </div>
              <div>
                 <h5 className="text-white font-black mb-8 uppercase tracking-widest text-xs italic" style={{ color: COLORS.gold }}>Resources</h5>
                 <ul className="space-y-4 font-bold text-sm text-slate-400 uppercase tracking-tight">
                    <li><a href="#" className="hover:text-white transition-colors">WAEC Prep</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">JAMB Mastery</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">NECO Solutions</a></li>
                 </ul>
              </div>
              <div>
                 <h5 className="text-white font-black mb-8 uppercase tracking-widest text-xs italic" style={{ color: COLORS.gold }}>Join Us</h5>
                 <ul className="space-y-4 font-bold text-sm text-slate-400 uppercase tracking-tight">
                    <li><a href={WHATSAPP_LINK} className="hover:text-white transition-colors">WhatsApp Class</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Shortcuts Lab</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                 </ul>
              </div>
           </div>
           <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between gap-6 items-center text-xs font-bold uppercase tracking-widest text-slate-600">
              <p>© 2024 SUCCESS MATH ACADEMY. NIGERIA'S #1 FREE PREP.</p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-white">Privacy</a>
                <a href="#" className="hover:text-white">Terms</a>
              </div>
           </div>
        </div>
      </footer>

      {/* Fixed Sticky CTA Button for Mobile/All */}
      <div className="fixed bottom-0 left-0 right-0 p-4 z-50 md:hidden flex justify-center pointer-events-none">
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-sm flex items-center justify-center gap-3 px-8 py-5 rounded-2xl text-xl font-black shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-[#001F3F] transform transition active:scale-95 pointer-events-auto uppercase tracking-tighter"
          style={{ 
            backgroundColor: COLORS.gold,
          }}
        >
          Join Free Class Now
        </a>
      </div>
      
      {/* Scroll to Top / Floating Support on Desktop */}
      <div className="fixed bottom-10 right-10 z-50 hidden md:block">
        <a 
          href={WHATSAPP_LINK} 
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-4 bg-slate-900/80 backdrop-blur-md p-2 pr-8 rounded-2xl shadow-3xl border border-slate-700 hover:scale-105 active:scale-95 transition-all text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-green-600/0 group-hover:bg-green-600/10 transition-colors"></div>
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[#001F3F] shadow-lg relative z-10" style={{ backgroundColor: COLORS.gold }}>
             <MessageCircle className="w-7 h-7" />
          </div>
          <div className="text-left relative z-10">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">Live Help</p>
            <p className="text-md font-black uppercase tracking-tighter">Chat on WhatsApp</p>
          </div>
        </a>
      </div>
    </div>
  );
}
