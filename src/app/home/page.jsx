'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Circle, Square, Triangle, Italic } from 'lucide-react';

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const brands = ['Amazon', 'Adobe', 'HubSpot', 'Bitrise', 'Netflix', 'Zoom'];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="font-bold text-black">Positivus</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-black font-medium text-lime-400">About us</a>
              <a href="/service" className="text-gray-700 hover:text-black transition">Services</a>
              <a href="/case" className="text-gray-700 hover:text-black transition">Use Cases</a>
              <a href="/pricing" className="text-gray-700 hover:text-black transition">Pricing</a>
              <a href="/blog" className="text-gray-700 hover:text-black transition">Blog</a>
              <button className="border-2 border-black text-black px-6 py-2 rounded-lg hover:bg-black hover:text-white transition">
                <a href="/signup">Request a quote</a>
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a href="#" className="block text-gray-700">About us</a>
              <a href="#" className="block text-gray-700">Home</a>
              <a href="#" className="block text-gray-700">Use Cases</a>
              <a href="#" className="block text-gray-700">Pricing</a>
              <a href="#" className="block text-gray-700">Blog</a>
            </div>
          )}
        </div>
      </nav>
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-black md:text-6xl font-bold leading-tight">
                Navigating the digital landscape for success
              </h1>
              <p className="text-gray-600 text-lg">
                Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition">
                Book a consultation
              </button>
            </div>

            <div className="relative h-96 md:h-[500px]">
              <div 
                className="absolute w-96 h-96 bg-gradient-to-br from-lime-300 to-green-400 rounded-full opacity-30 blur-3xl"
                style={{
                  left: `${mousePos.x / 100}px`,
                  top: `${mousePos.y / 100}px`,
                  transition: 'all 0.5s ease-out'
                }}
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80">
                  <div 
                    className="absolute top-4 left-0 w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg"
                    style={{ animation: 'float 3s ease-in-out infinite' }}
                  >
                    ✓
                  </div>

                  <div 
                    className="absolute top-1/3 -left-4 w-20 h-20 bg-black rounded-full flex items-center justify-center shadow-xl"
                    style={{ animation: 'float 3.5s ease-in-out infinite', animationDelay: '0.5s' }}
                  >
                    <ArrowRight className="text-white" size={32} />
                  </div>

                  <div 
                    className="absolute top-0 right-8 w-14 h-14 bg-lime-400 rounded-lg transform rotate-12 shadow-lg"
                    style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '1s' }}
                  />

                  <div 
                    className="absolute top-8 right-0 w-8 h-8 bg-gray-800 rounded-full shadow-lg"
                    style={{ animation: 'float 2.5s ease-in-out infinite', animationDelay: '0.3s' }}
                  />

                  <div 
                    className="absolute top-1/2 right-4 w-12 h-16 transform -translate-y-1/2"
                    style={{ animation: 'float 3.2s ease-in-out infinite', animationDelay: '0.8s' }}
                  >
                    <svg viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="1">
                      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
                    </svg>
                  </div>

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative w-48 h-48 bg-white rounded-2xl shadow-2xl p-6 border-2 border-gray-100">
                      <div className="flex items-center justify-center h-full">
                        <svg viewBox="0 0 100 100" className="w-32 h-32">
                          <path d="M20 30 L50 20 L50 60 L20 50 Z" fill="#84cc16" stroke="#000" strokeWidth="2"/>
                          <circle cx="15" cy="40" r="8" fill="#84cc16" stroke="#000" strokeWidth="2"/>
                          <path d="M50 35 Q60 30, 70 35 Q75 40, 70 45 Q60 50, 50 45" fill="none" stroke="#000" strokeWidth="2"/>
                          <path d="M50 40 Q65 35, 80 40 Q85 45, 80 50 Q65 55, 50 50" fill="none" stroke="#000" strokeWidth="2"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div 
                    className="absolute bottom-8 left-4 w-12 h-12 bg-red-400 rounded-full shadow-lg"
                    style={{ animation: 'float 3.8s ease-in-out infinite', animationDelay: '1.2s' }}
                  />

                  <div 
                    className="absolute bottom-4 right-12 w-10 h-10 bg-green-500 rounded-lg transform -rotate-12 shadow-lg"
                    style={{ animation: 'float 3.3s ease-in-out infinite', animationDelay: '0.6s' }}
                  />

                  <div 
                    className="absolute bottom-0 right-1/3 w-8 h-8"
                    style={{ animation: 'float 4.2s ease-in-out infinite', animationDelay: '1.5s' }}
                  >
                    <div className="w-full h-full bg-gray-900 transform rotate-45 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="flex items-center justify-between flex-wrap gap-8 md:gap-12">

            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
              alt="Amazon" 
              className="h-6 md:h-7 w-auto object-contain"
            />
            
            <i className='text-black md:text-2xl h-6 md:h-7 w-auto object-contain '>dribble</i>

            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" 
              alt="HubSpot" 
              className="h-6 md:h-7 w-auto object-contain"
            />
            
            <div className="flex items-center gap-1">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" 
                alt="Notion icon" 
                className="h-6 md:h-7 w-auto object-contain"
              />
              <span className="font-bold text-black md:text-xl">Notion</span>
            </div>

            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
              alt="Netflix" 
              className="h-6 md:h-7 w-auto object-contain"
            />

            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg" 
              alt="Zoom" 
              className="h-6 md:h-7 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8 mb-12">
            <h2 className="text-black md:text-5xl font-bold bg-lime-400 px-2 py-1 inline-block">Services</h2>
            <p className="text-black max-w-xl">
              At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-3xl p-12 border-2 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-black bg-lime-400 inline-block px-2 py-1">
                  Search engine
                </h3>
                <h3 className="text-3xl font-bold text-black bg-lime-400 inline-block px-2 py-1">
                  optimization
                </h3>
                
                <div className="flex items-end justify-between pt-8">
                  <button className="flex items-center gap-2 text-lg">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                      <ArrowRight className="text-lime-400" size={20} />
                    </div>
                    <span className='text-black'>Learn more</span>
                  </button>
                  
                  <div className="relative w-48 h-32">
                    <svg viewBox="0 0 120 80" className="w-full h-full">
                      <circle cx="60" cy="40" r="30" fill="none" stroke="#84cc16" strokeWidth="3"/>
                      <path d="M45 40 L55 50 L75 30" fill="none" stroke="#84cc16" strokeWidth="4" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-lime-400 rounded-3xl p-12 border-2 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-black bg-white inline-block px-2 py-1">
                  Pay-per-click
                </h3>
                <h3 className="text-3xl font-bold text-black bg-white inline-block px-2 py-1">
                  advertising
                </h3>
                
                <div className="flex items-end justify-between pt-8">
                  <button className="flex items-center gap-2 text-lg">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                      <ArrowRight className="text-lime-400" size={20} />
                    </div>
                    <span className='text-black'>Learn more</span>
                  </button>
                  
                  <div className="relative w-48 h-32">
                    <svg viewBox="0 0 120 80" className="w-full h-full">
                      <path d="M30 60 L40 30 L60 45 L80 20 L90 35" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                      <circle cx="40" cy="30" r="4" fill="black"/>
                      <circle cx="60" cy="45" r="4" fill="black"/>
                      <circle cx="80" cy="20" r="4" fill="black"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-3xl p-12 border-2 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold bg-white text-black inline-block px-2 py-1">
                  Social Media
                </h3>
                <h3 className="text-3xl font-bold bg-white text-black inline-block px-2 py-1">
                  Marketing
                </h3>
                
                <div className="flex items-end justify-between pt-8">
                  <button className="flex items-center gap-2 text-lg">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight className="text-black" size={20} />
                    </div>
                    <span>Learn more</span>
                  </button>
                  
                  <div className="relative w-48 h-32">
                    <svg viewBox="0 0 120 80" className="w-full h-full">
                      <rect x="30" y="35" width="20" height="40" rx="10" fill="white"/>
                      <rect x="55" y="25" width="20" height="50" rx="10" fill="white"/>
                      <rect x="80" y="30" width="20" height="45" rx="10" fill="white"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-3xl p-12 border-2 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-black bg-lime-400 inline-block px-2 py-1">
                  Email
                </h3>
                <h3 className="text-3xl font-bold text-black bg-lime-400 inline-block px-2 py-1">
                  Marketing
                </h3>
                
                <div className="flex items-end justify-between pt-8">
                  <button className="flex items-center gap-2 text-lg">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                      <ArrowRight className="text-lime-400" size={20} />
                    </div>
                    <span className='text-black'>Learn more</span>
                  </button>
                  
                  <div className="relative w-48 h-32">
                    <svg viewBox="0 0 120 80" className="w-full h-full">
                      <rect x="30" y="25" width="60" height="40" rx="3" fill="none" stroke="black" strokeWidth="3"/>
                      <path d="M30 25 L60 50 L90 25" fill="none" stroke="black" strokeWidth="3"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-lime-400 rounded-3xl p-12 border-2 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-black bg-white inline-block px-2 py-1">
                  Content
                </h3>
                <h3 className="text-3xl font-bold text-black bg-white inline-block px-2 py-1">
                  Creation
                </h3>
                
                <div className="flex items-end justify-between pt-8">
                  <button className="flex items-center gap-2 text-lg">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                      <ArrowRight className="text-lime-400" size={20} />
                    </div>
                    <span className='text-black'>Learn more</span>
                  </button>
                  
                  <div className="relative w-48 h-32">
                    <svg viewBox="0 0 120 80" className="w-full h-full">
                      <path d="M35 25 L35 65 L85 65 L85 35 L75 25 Z" fill="none" stroke="black" strokeWidth="3"/>
                      <path d="M75 25 L75 35 L85 35" fill="none" stroke="black" strokeWidth="3"/>
                      <line x1="45" y1="40" x2="70" y2="40" stroke="black" strokeWidth="2"/>
                      <line x1="45" y1="50" x2="70" y2="50" stroke="black" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-3xl p-12 border-2 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold bg-lime-400 text-black inline-block px-2 py-1">
                  Analytics and
                </h3>
                <h3 className="text-3xl font-bold bg-lime-400 text-black inline-block px-2 py-1">
                  Tracking
                </h3>
                
                <div className="flex items-end justify-between pt-8">
                  <button className="flex items-center gap-2 text-lg">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight className="text-black" size={20} />
                    </div>
                    <span>Learn more</span>
                  </button>
                  
                  <div className="relative w-48 h-32">
                    <svg viewBox="0 0 120 80" className="w-full h-full">
                      <circle cx="60" cy="40" r="25" fill="none" stroke="white" strokeWidth="3"/>
                      <path d="M60 40 L75 30" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                      <path d="M60 40 L60 20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}