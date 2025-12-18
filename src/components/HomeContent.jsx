"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

export default function HomeContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
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
              <a href="/home"className="text-gray-700 hover:text-black">About us</a>
              <a href="/service" className="text-gray-700 hover:text-black">Services</a>
              <a href="/case" className="text-gray-700 hover:text-black">Use Cases</a>
              <a href="/pricing" className="text-gray-700 hover:text-black">Pricing</a>
              <a href="/blog" className="text-gray-700 hover:text-black">Blog</a>
              <a
                href="/signup"
                className="border-2 text-black border-black px-6 py-2 rounded-lg hover:bg-black hover:text-white transition"
              >
                Request a quote
              </a>
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
              <a className="block">About us</a>
              <a className="block">Services</a>
              <a className="block">Use Cases</a>
              <a className="block">Pricing</a>
              <a className="block">Blog</a>
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-black md:text-6xl font-bold">
              Navigating the digital landscape for success
            </h1>
            <p className="text-gray-600 text-lg">
              Our digital marketing agency helps businesses grow through SEO,
              PPC, social media, and content creation.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-lg">
              Book a consultation
            </button>
          </div>

          <div className="relative h-[500px]">
            <div
              className="absolute w-96 h-96 bg-gradient-to-br from-lime-300 to-green-400 rounded-full opacity-30 blur-3xl"
              style={{
                left: mousePos.x / 100,
                top: mousePos.y / 100,
              }}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                <ArrowRight className="text-white" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOAT ANIMATION */}
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
